// pages/about.js

import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About Me | Portfolio</title>
        <meta
          name="description"
          content="Learn more about me and my journey."
        />
      </Head>

      <div className="min-h-screen bg-black py-10 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">About Me</h1>
            <p className="mt-4 text-lg text-gray-400">
              My expertise lies in blockchain and microservices, where I apply
              my skills to create robust and scalable solutions. As a full stack
              developer, I thrive on tackling complex challenges across the
              entire development spectrum. I'm constantly exploring new ways to
              leverage blockchain technology and microservices architecture to
              build cutting-edge applications. When I'm not coding, you can find
              me on the basketball court, where I enjoy playing to unwind and
              stay active. This balance between technology and sports helps me
              maintain creativity and focus in my professional life. I'm always
              eager to take on new projects and collaborate with like-minded
              professionals in the tech industry. Let's connect and explore how
              we can create something amazing together!
            </p>
          </div>

          <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-black border-b pb-4">
              Education
            </h2>
            <div className="mt-6">
              <div className="space-y-4">
                <div className="border-l-4 border-[#FFB703] pl-4 flex items-start space-x-4">
                  <div>
                    <Image
                      src="/about/UOMlogo.png"
                      alt="University of Moratuwa"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-700">
                      B.Sc. in Information Technology and Management
                    </h3>
                    <p className="text-gray-600">
                      University Of Moratuwa, 2022
                    </p>
                    <p className="text-gray-500">
                      Focused on full-stack web development and blockchain
                      Development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-[#FFB703] rounded-lg p-6 text-center">
            <h2 className="text-3xl font-bold text-black">
              Let's Work Together!
            </h2>
            <p className="mt-4 text-lg text-black">
              I'm always open to new opportunities and collaborations. Whether
              you have a project in mind or just want to say hello, feel free to
              reach out!
            </p>
            <div className="mt-6 flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center">
              <a
                href="mailto:chamikasandun3131@gmail.com"
                className="inline-block bg-black  text-white font-semibold py-3 px-6 rounded-lg  hover:scale-105 transform transition duration-300 hover:shadow-lg hover:shadow-white/80"
              >
                Contact Me
              </a>
              <a
                href="/projects"
                className="inline-block bg-black  text-white font-semibold py-3 px-6 rounded-lg  hover:scale-105 transform transition duration-300 hover:shadow-lg hover:shadow-white/80"
              >
                See My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
