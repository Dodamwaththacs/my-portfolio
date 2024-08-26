import Head from "next/head";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Portable Weather Station",
      description: "A brief description of Project 1",
      image: "/path/to/project1-image.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://project1-link.com",
    },
    {
      title: "Health Hive ",
      description: "A brief description of Project 2",
      image: "/path/to/project2-image.jpg",
      technologies: ["Java", "javascript", "Tailwind CSS"],
      link: "https://project2-link.com",
    },
    // Add more projects as needed
  ];

  return (
    <div className=" text-white ">
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Check out my projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`   felx h-full`}>
        <h1 className="text-4xl font-bold text-center">My Projects</h1>
        <div className=""></div>
        <div className="grid  grid-cols-2 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
}
