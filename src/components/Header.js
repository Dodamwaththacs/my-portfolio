import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
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
      </div>
    </header>
  );
}
