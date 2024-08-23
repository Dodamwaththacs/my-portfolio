import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Get in touch with me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-full  text-[#FFFFFF]">
        <div>
          <h1>Contact Me</h1>
          <p>Feel free to reach out to me via email or social media.</p>
        </div>
      </main>
    </div>
  );
}
