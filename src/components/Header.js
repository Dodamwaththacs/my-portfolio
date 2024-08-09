import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <header class="bg-[#03045e] p-4 flex flex justify-between">
      <div class="left-div">
        <h1 class="text-xl text-gray-100 font-mono font-bold">Portfolio.</h1>
      </div>
      <div>
        <nav class="right-div">
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
      </div>
    </header>
  );
}
