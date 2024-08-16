import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlitchEffect from "../components/GlitchEffect";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen bg-transparent ">
      <div className="live-background"></div>

      <Header />
      <main className="flex-grow z-10">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
