"use client";

import { signIn } from "next-auth/react";

export default function SignInButton() {
  const handleSignIn = async () => {
    try {
      console.log("Signing in with Keycloak... my name is chamia");
      const result = await signIn("keycloak", { callbackUrl: "/" });
      console.log("SignIn result:", result);
    } catch (error) {
      console.error("SignIn error:", error);
    }
  };

  return <button onClick={handleSignIn}>Sign in with Keycloak</button>;
}
