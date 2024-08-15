import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className="bg-zinc-50 text-center dark:bg-neutral-700 lg:text-left">
      <div className="bg-black/5 p-4 text-center text-surface dark:text-white">
        © 2023 Copyright:
        <a href="https://tw-elements.com/">TW Elements</a>
      </div>
    </footer>
  );
}
