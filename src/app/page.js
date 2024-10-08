"use client";

import Head from "next/head";
import Image from "next/image";
import IconButton from "../components/IconButton";
import TypingEffect from "../components/TypingEffect";
import { FaGithub, FaLinkedin, FaMedium, FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import axios from "axios";
import { useSession, signIn } from "next-auth/react";

import Hero from "@/components/threeJS/main/Hero";

export default function Home() {
  const { data: session } = useSession();

  const roles = [
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
    "DevOps Engineer",
  ];
  const handleDownloadCV = async () => {
    if (!session) {
      // If no session exists, redirect to sign-in
      await signIn("keycloak", {
        callbackUrl: "/",
      });
    }

    try {
      const token = session.accessToken;
      const response = await axios.get(
        "http://localhost:33000/api/files/download/1",
        {
          responseType: "blob",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "CV.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };
  return (
    <main className="flex flex-col lg:flex-row h-full relative">
      <Head>
        <title>Home</title>
        <meta name="description" content="Learn more about me" />
        <link rel="icon" href="/myphoto/myphoto.png" />
      </Head>

      {/* Left Section */}
      <div className="basis-full lg:basis-3/5 flex flex-col justify-center h-full px-6 lg:px-[8rem] py-12 lg:py-0">
        <h3 className="text-[30px] lg:text-[40px] text-[#FFFFFF] font-serif leading-relaxed">
          Hello, It's me
        </h3>
        <h1 className="text-[40px] lg:text-[50px] text-[#FFFFFF] font-serif leading-relaxed">
          Chamika Dodamwaththa
        </h1>
        <TypingEffect words={roles} />

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-5">
          <a
            href="https://github.com/Dodamwaththacs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              text="Github"
              color="bg-gray-800 hover:bg-gray-700 glow-effect"
            >
              <FaGithub size={30} />
            </IconButton>
          </a>

          <a
            href="https://www.linkedin.com/in/dodamwaththacs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              text="LinkedIn"
              color="bg-blue-600 hover:bg-blue-700 glow-effect"
            >
              <FaLinkedin size={30} />
            </IconButton>
          </a>

          <a
            href="https://medium.com/@chamika31"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              text="Medium"
              color="bg-gray-800 hover:bg-gray-900 glow-effect"
            >
              <FaMedium size={30} />
            </IconButton>
          </a>

          <a
            href="https://www.instagram.com/chami_ka_31/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              text="Instagram"
              color="bg-gradient-to-tr from-yellow-500 to-purple-600 via-pink-500 hover:from-yellow-600 hover:to-purple-700 hover:via-pink-600 glow-effect"
            >
              <GrInstagram size={30} />
            </IconButton>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100010401245939"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              text="Facebook"
              color="bg-blue-600 hover:bg-blue-700 glow-effect"
            >
              <FaFacebook size={30} />
            </IconButton>
          </a>
        </div>

        <div className="mt-7">
          <button
            onClick={handleDownloadCV}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Download my CV
          </button>
        </div>
      </div>

      <div className="basis-full lg:basis-2/5 flex items-center justify-center lg:justify-start relative mt-8 lg:mt-0">
        <Image
          src="/myphoto/myphoto.png"
          alt="Chamika"
          width={500}
          height={500}
          quality={100}
          className="object-cover rounded-full lg:rounded-none"
        />
      </div>
    </main>
  );
}
