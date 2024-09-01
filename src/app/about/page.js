// pages/about.js

import Head from "next/head";

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

      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
            <p className="mt-4 text-lg text-gray-600">
              I am a passionate [Your Profession], driven by [Your Values or
              Motivations]. Here's a glimpse of my journey and how we can work
              together.
            </p>
          </div>

          <div className="mt-10 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 border-b pb-4">
              Education
            </h2>
            <div className="mt-6">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-bold text-gray-700">
                    B.Sc. in Information Technology and Management
                  </h3>
                  <p className="text-gray-600">University Of Moratuwa, 2022</p>
                  <p className="text-gray-500">
                    Focused on full-stack web development and blockchain
                    Development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-blue-50 rounded-lg p-6 text-center">
            <h2 className="text-3xl font-bold text-blue-700">
              Let's Work Together!
            </h2>
            <p className="mt-4 text-lg text-blue-600">
              I'm always open to new opportunities and collaborations. Whether
              you have a project in mind or just want to say hello, feel free to
              reach out!
            </p>
            <div className="mt-6 flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center">
              <a
                href="mailto:youremail@example.com"
                className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
              >
                Contact Me
              </a>
              <a
                href="/projects"
                className="inline-block bg-transparent border border-blue-600 text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-100 transition duration-200"
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
