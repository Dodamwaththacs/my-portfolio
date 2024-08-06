import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/about" className={styles.link}>
              About
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/projects" className={styles.link}>
              Projects
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
