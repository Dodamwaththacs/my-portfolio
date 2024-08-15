import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-[#023047] p-4 flex flex justify-between">
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
                  router.pathname === "/" ? styles.activeLink : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                href="/about"
                className={`${styles.link} ${
                  router.pathname === "/about" ? styles.activeLink : ""
                }`}
              >
                About
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                href="/projects"
                className={`${styles.link} ${
                  router.pathname === "/projects" ? styles.activeLink : ""
                }`}
              >
                Projects
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                href="/contact"
                className={`${styles.link} ${
                  router.pathname === "/contact" ? styles.activeLink : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
