"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/Header.module.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-[#023047] p-4 flex justify-between">
      <div className="left-div">
        <h1 className="text-xl text-gray-100 font-mono font-bold">
          Portfolio.
        </h1>
      </div>
      <div>
        <nav className="right-div">
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
      </div>
    </header>
  );
}
