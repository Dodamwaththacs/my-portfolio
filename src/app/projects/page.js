import Head from "next/head";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Portable Weather Station",
      description:
        "This is a portable weather station targeted for hikers and campers to ensure their safety and awareness.",
      image: "/project/weatherStation.jpg",
      technologies: ["C", "Arduino IDE", "Arduino Uno", "EasyEDA", "Blender"],
      link: "https://project1-link.com",
    },
    {
      title: "Health Hive ",
      description: "A brief description of Project 2",
      image: "/project/healthHive.png",
      technologies: [
        "Java",
        "javascript",
        "Tailwind CSS",
        "Spring Boot",
        "MySQL",
        "React",
        "Docker",
        "AWS",
        "Keycloak",
      ],
      link: "https://project2-link.com",
    },
  ];

  return (
    <div className=" text-white ">
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Check out my projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center min-h-[calc(100vh-8rem)]  relative">
        <div className="grid  grid-cols-2 gap-20 ">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
}
