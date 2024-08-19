import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen bg-[#000000]">
      <Header />
      <main className="flex-grow z-10">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
