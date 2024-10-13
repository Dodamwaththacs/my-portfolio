"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/Header.module.css";
import { signIn, signOut, getSession, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

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
      await signOut({
        callbackUrl: "/",
      });
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
            className={`${styles.button} relative flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-transform duration-300 ease-in-out hover:scale-105`}
          >
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
          </button>
        )}
        {status === "authenticated" && (
          <button
            onClick={handleSignOut}
            className={`${styles.button} relative flex items-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-transform duration-300 ease-in-out hover:scale-105`}
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
          </button>
        )}
      </div>
    </header>
  );
}
