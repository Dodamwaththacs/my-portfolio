import Head from "next/head";
import TechCard from "../../components/TechCard ";

export default function About() {
  return (
    <main className=" text-white">
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="text-4xl font-bold mb-8">Skills</h1>
      </div>
      <div className="flex align ">
        <div className="basis-1/8">
          <h1
            className="transform rotate-180 text-2xl font-bold pl-5"
            style={{ writingMode: "vertical-rl" }}
          >
            Programming Languages
          </h1>
        </div>
        <div className="basis-7/8 grid grid-cols-4 gap-6 place-content-center content-evenly">
          <TechCard imageSrc="/logo/java.png" title="Java" />
          <TechCard imageSrc="/logo/js.png" title="Java Script" />
          <TechCard imageSrc="/logo/c.png" title="C" />
          <TechCard imageSrc="/logo/c-sharp.png" title="C#" />
        </div>
      </div>
    </main>
  );
}
