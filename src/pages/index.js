import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div class="flex flex-row">
          <div class="basis-1/2">
            <h1 className="text-4xl font-bold">Hello, I'm ZERO_31</h1>
            <p className="text-lg text-gray-600">
              I'm a web developer based in Sri Lanka
            </p>
          </div>
          <div class="basis-1/2 flex justify-end">
            <div className="">
              <Image
                src="/myphoto.png"
                alt="Profile Picture"
                width={400}
                height={700}
                quality={100}
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

{
  /* <div className="flex justify-between items-center">
          <div className="text-left w-1/2">
            <h1 className="text-4xl font-bold">Hello, I'm ZERO_31</h1>
            <p className="text-lg text-gray-600">
              I'm a web developer based in Sri Lanka
            </p>
          </div>
          <div className="w-48 h-48 relative">
            <Image
              src="/myphoto.png"
              alt="Profile Picture"
              width={400}
              height={700}
              quality={100}
              priority
              className="rounded-full shadow-lg object-cover"
            />
          </div>
        </div> */
}
