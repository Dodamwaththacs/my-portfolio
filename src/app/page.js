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
    <main className="flex h-full">
      <Head>
        <title>Home</title>
        <meta name="description" content="Learn more about me" />
        <link rel="icon" href="/myphoto/myphoto.png" />
      </Head>
      <div className="basis-3/5 flex flex-col  justify-center h-full px-14">
        <h3 className="text-[30px] text-[#FFFFFF] font-serif">Hello, </h3>
        <h1 className="text-[40px] text-[#FFFFFF] font-serif">
          It's me Chamika
        </h1>
        <TypingEffect words={roles} />

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
              <FaGithub size={20} />
            </IconButton>
          </a>
          <IconButton
            text="LinkedIn"
            color="bg-blue-600 hover:bg-blue-700 glow-effect"
          >
            <FaLinkedin size={20} />
          </IconButton>
          <IconButton
            text="Medium"
            color="bg-gray-800 hover:bg-gray-900 glow-effect"
          >
            <FaMedium size={20} />
          </IconButton>
          <IconButton
            text="Instagram"
            color="bg-gradient-to-tr from-yellow-500 to-purple-600 via-pink-500 hover:from-yellow-600 hover:to-purple-700 hover:via-pink-600 glow-effect"
          >
            <GrInstagram size={20} />
          </IconButton>
          <IconButton
            text="Facebook"
            color="bg-blue-600 hover:bg-blue-700 glow-effect"
          >
            <FaFacebook size={20} />
          </IconButton>
        </div>
      </div>
      <div className="basis-2/5  flex items-center justify-center">
        <Image
          src="/myphoto/myphoto.png"
          alt="Chamika"
          width={400}
          height={400}
          quality={100}
          className="object-cover"
        />
      </div>
    </main>
  );
}
