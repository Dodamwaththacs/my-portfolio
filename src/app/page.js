import Head from "next/head";
import Image from "next/image";
import IconButton from "../components/IconButton";
import TypingEffect from "../components/TypingEffect";
import { FaGithub, FaLinkedin, FaMedium, FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

export default function Home() {
  const roles = [
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
    "DevOps Engineer",
  ];
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <Head>
        <title>Home</title>
        <meta name="description" content="Learn more about me" />
        <link rel="icon" href="/myphoto/myphoto.png" />
      </Head>
      <div className="w-full md:w-3/5 flex flex-col justify-center p-8 md:p-16">
        <h3 className="text-3xl md:text-5xl text-white font-serif mb-2">
          Hello,{" "}
        </h3>
        <h1 className="text-4xl md:text-6xl text-white font-serif mb-4">
          It's me Chamika
        </h1>
        <div className="mb-6">
          <TypingEffect words={roles} />
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          <a
            href="https://github.com/Dodamwaththacs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              text="Github"
              color="bg-gray-800 hover:bg-gray-700 glow-effect"
            >
              <FaGithub size={24} className="md:text-3xl" />
            </IconButton>
          </a>
          <IconButton
            text="LinkedIn"
            color="bg-blue-600 hover:bg-blue-700 glow-effect"
          >
            <FaLinkedin size={24} className="md:text-3xl" />
          </IconButton>
          <IconButton
            text="Medium"
            color="bg-gray-800 hover:bg-gray-900 glow-effect"
          >
            <FaMedium size={24} className="md:text-3xl" />
          </IconButton>
          <IconButton
            text="Instagram"
            color="bg-gradient-to-tr from-yellow-500 to-purple-600 via-pink-500 hover:from-yellow-600 hover:to-purple-700 hover:via-pink-600 glow-effect"
          >
            <GrInstagram size={24} className="md:text-3xl" />
          </IconButton>
          <IconButton
            text="Facebook"
            color="bg-blue-600 hover:bg-blue-700 glow-effect"
          >
            <FaFacebook size={24} className="md:text-3xl" />
          </IconButton>
        </div>
      </div>
      <div className="w-full md:w-2/5 flex items-center justify-center md:justify-start p-8">
        <Image
          src="/myphoto/myphoto.png"
          alt="Chamika"
          width={500}
          height={500}
          quality={100}
          className="object-cover max-w-full h-auto"
        />
      </div>
    </main>
  );
}
