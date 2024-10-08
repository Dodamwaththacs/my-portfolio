"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/Header.module.css";
import { signIn, signOut, getSession, useSession } from "next-auth/react";

export default function Header() {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const handleSignIn = async () => {
    try {
      await signIn("keycloak", {
        callbackUrl: "/",
      });
    } catch (error) {
      console.error("SignIn error:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      const idToken = session.idToken;
      const logoutUrl = `http://localhost:8080/realms/my-portfolio/protocol/openid-connect/logout?id_token_hint=${idToken}&post_logout_redirect_uri=http://localhost:3000`;

      await signOut({ redirect: false });

      window.location.href = logoutUrl;
    } catch (error) {
      console.error("SignOut error:", error);
    }
  };

  return (
    <header className="bg-[#023047] p-4 flex justify-between items-center">
      <div className="left-div">
        <h1 className="text-xl text-gray-100 font-mono font-bold">
          Portfolio.
        </h1>
      </div>
      <div className="flex items-center">
        <nav className="right-div mr-4">
          <ul className="flex gap-5 p-0 m-0 list-none">
            <li className={styles.li}>
              <Link
                href="/"
                className={`${styles.link} ${
                  pathname === "/" ? styles.activeLink : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                href="/skills"
                className={`${styles.link} ${
                  pathname === "/skills" ? styles.activeLink : ""
                }`}
              >
                Skills
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                href="/projects"
                className={`${styles.link} ${
                  pathname === "/projects" ? styles.activeLink : ""
                }`}
              >
                Projects
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                href="/about"
                className={`${styles.link} ${
                  pathname === "/about" ? styles.activeLink : ""
                }`}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        {status !== "authenticated" && (
          <button
            onClick={handleSignIn}
            className="relative bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </button>
        )}
        {status === "authenticated" && (
          <button
            onClick={handleSignOut}
            className="relative bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Sign Out
          </button>
        )}
      </div>
    </header>
  );
}
