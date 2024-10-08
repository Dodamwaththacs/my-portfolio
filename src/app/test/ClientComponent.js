"use client";

import { useState } from "react";

const ClientComponent = ({ accessToken }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleButtonClick = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:33000/data", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>API Data Fetcher</h1>
      <button onClick={handleButtonClick} disabled={isLoading || !accessToken}>
        {isLoading ? "Loading..." : "Fetch Data"}
      </button>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {data && (
        <div>
          <h2>Fetched Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}

      {!accessToken && <p>No access token available. Please log in.</p>}
    </div>
  );
};

export default ClientComponent;
