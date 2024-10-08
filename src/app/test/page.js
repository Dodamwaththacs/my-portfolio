// components/CallApiButton.js
"use client";
import { useState } from "react";
import { getSession } from "next-auth/react";

export default function CallApiButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const getAccessToken = async () => {
    try {
      const session = await getSession();
      return session?.accessToken || null;
    } catch (err) {
      console.error("Error fetching session:", err);
      return null;
    }
  };

  const callSecuredApi = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);
    console.log("Calling secured API...");
    const session = await getSession();
    if (!session) {
      console.log("User is not authenticated");
    } else {
      console.log("User is authenticated");
    }

    console.log("Session:", session);

    const accessToken = await getAccessToken();
    console.log("Access Token:", accessToken);

    if (!accessToken) {
      setLoading(false);
      setError("Failed to get access token.");
      return;
    }

    try {
      const res = await fetch("http://localhost:33000/data", {
        method: "GET", // You can change to POST if needed
        headers: {
          Authorization: `Bearer ${accessToken}`, // Send the token
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        console.error("API call failed:", res);
        throw new Error(`API responded with status ${res.status}`);
      }

      const data = await res.json();
      setResponse(data); // Store the response to display it
      console.log("API response:", data);
    } catch (err) {
      setError(`API call failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={callSecuredApi}
        disabled={loading}
      >
        {loading ? "Loading..." : "Call Secured API"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {response && (
        <div className="mt-4">
          <h3 className="font-bold">API Response:</h3>
          <pre className="bg-gray-100 p-2 rounded">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
