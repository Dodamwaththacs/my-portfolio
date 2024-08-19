import Head from "next/head";
import Image from "next/image";
import TechCard from "../components/TechCard ";

export default function About() {
  return (
    <div className="flex h-full bg-gray-900 text-white">
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Skills</h1>
        <div className="flex flex-row">
          <div className="basis-1/8">
            <h1
              className="transform rotate-180 text-2xl font-bold pl-5"
              style={{ writingMode: "vertical-rl" }}
            >
              Programming Languages
            </h1>
          </div>
          <div className="basis-7/8 flex justify-center items-center">
            <div className="grid grid-cols-4  gap-6 place-content-center  w-full">
              <TechCard imageSrc="/logo/java.png" title="Java" />
              <TechCard imageSrc="/logo/js.png" title="Java Script" />
              <TechCard imageSrc="/logo/c.png" title="C" />
              <TechCard imageSrc="/logo/c-sharp.png" title="C#" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
