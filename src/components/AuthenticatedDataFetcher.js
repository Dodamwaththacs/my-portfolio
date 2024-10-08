import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const AuthenticatedDataFetcher = () => {
  const { data: session } = useSession();
  const [backendData, setBackendData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (session?.accessToken) {
        try {
          const response = await fetch("http://localhost:33000/signin", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          setBackendData(data);
        } catch (e) {
          setError(e.message);
        }
      }
    };

    fetchData();
  }, [session]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!session) {
    return <div>Please sign in to view this content.</div>;
  }

  if (!backendData) {
    j;
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Data from Backend:</h2>
      <pre>{JSON.stringify(backendData, null, 2)}</pre>
    </div>
  );
};

export default AuthenticatedDataFetcher;
