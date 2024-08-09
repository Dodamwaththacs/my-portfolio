import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
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
    </header>
  );
}
