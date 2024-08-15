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
    <div className="container mx-auto px-4">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-xl mb-2">Hello, It's me</h3>
            <h1 className="text-4xl font-bold mb-2">Chamika</h1>
            <TypingEffect words={roles} />

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <a
                href="https://github.com/Dodamwaththacs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton text="Github" color="bg-gray-800 hover:bg-gray-700">
                  <FaGithub size={20} />
                </IconButton>
              </a>
              <IconButton text="LinkedIn" color="bg-blue-600 hover:bg-blue-700">
                <FaLinkedin size={20} />
              </IconButton>
              <IconButton text="Medium" color="bg-black hover:bg-gray-900">
                <FaMedium size={20} />
              </IconButton>
              <IconButton
                text="Instagram"
                color="bg-gradient-to-tr from-yellow-500 to-purple-600 via-pink-500 hover:from-yellow-600 hover:to-purple-700 hover:via-pink-600"
              >
                <GrInstagram size={20} />
              </IconButton>
              <IconButton text="Facebook" color="bg-blue-600 hover:bg-blue-700">
                <FaFacebook size={20} />
              </IconButton>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/myphoto.png"
              alt="Chamika"
              width={400}
              height={400}
              quality={100}
              className="rounded-full"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
