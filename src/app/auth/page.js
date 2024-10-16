"use client";

import { signIn, signOut, getSession } from "next-auth/react";
import axios from "axios";

export default function AuthButton() {
  const handleSignIn = async () => {
    try {
      await signIn("keycloak", {
        callbackUrl: "/auth",
      });
    } catch (error) {
      console.error("SignIn error:", error);
    }
  };

  const getIdToken = async () => {
    try {
      const session = await getSession();
      if (session) {
        console.log("accessToken:", session.accessToken);
      }
    } catch (error) {
      console.error("Get idToken error:", error);
    }
  };

  const handleSignOutDefault = async () => {
    console.log("signing out from Keycloak...");
    try {
      await signOut({
        callbackUrl: "/auth",
      });
    } catch (error) {
      console.error("SignOut error:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      const session = await getSession();
      if (session) {
        const idToken = session.idToken;

        const logoutUrl = `https://myportfolio.ddnsking.com:8443/realms/Chamika's Portfolio/protocol/openid-connect/logout?id_token_hint=${idToken}&post_logout_redirect_uri=http://localhost:3000/test`;

        window.location.href = logoutUrl; // Perform a browser redirect
      } else {
        console.log("No active session found");
      }
    } catch (error) {
      console.error("SignOut error:", error);
    }
  };

  return (
    <div className="flex space-x-4 relative">
      <button
        onClick={handleSignIn}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign in with Keycloak
      </button>
      <button
        onClick={handleSignOut}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign out
      </button>
      <button
        onClick={handleSignOutDefault}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign out Default
      </button>
      <button
        onClick={getIdToken}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Get idToken
      </button>
    </div>
  );
}
