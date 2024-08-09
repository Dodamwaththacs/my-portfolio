import Head from "next/head";
import Image from "next/image";
import IconButton from "../components/IconButton";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div class="flex flex-row">
          <div class="basis-1/2">
            <h3>Hello, It's me</h3>
            <h1>Chamika Sandun </h1>
            <h3>and i'm a Fullstack Developer</h3>

            <p class="indent-8">
              As a passionate fullstack developer, I craft elegant, efficient
              solutions that bridge the gap between front-end aesthetics and
              back-end functionality. With expertise in modern web technologies
              and frameworks, I build responsive, user-centric applications that
              deliver seamless experiences across devices. My portfolio
              showcases a diverse range of projects, from sleek single-page
              applications to robust, scalable web platforms. Each project
              demonstrates my commitment to clean code, intuitive design, and
              optimal performance. Whether you're looking for a developer to
              bring your vision to life or a collaborator to tackle complex
              technical challenges, I'm ready to leverage my fullstack skills to
              create innovative digital solutions that make an impact.
            </p>

            <div className="flex flex-row gap-8 p-8">
              <IconButton text="Github">
                <FaGithub size={30} />
              </IconButton>

              <IconButton text="LinkedIn" color="bg-blue-500">
                <FaLinkedin size={30} />
              </IconButton>

              <IconButton text="Medium" color="bg-black">
                <FaMedium size={30} />
              </IconButton>

              <IconButton
                text="Instagrame"
                color="bg-gradient-to-tr from-yellow-500 to-purple-500 via-pink-500"
              >
                <GrInstagram size={30} />
              </IconButton>

              <IconButton text="Facebook" color="bg-blue-600">
                <FaFacebook size={30} />
              </IconButton>
            </div>
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
