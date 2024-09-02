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
      description:
        "This is a Highly secured health management system. We used bloackchain for insure data intragity. ",
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
        "Prometheus",
        "Grafana",
        "NGINX",
        "Truffle",
        "Solidity",
        "Ganache",
      ],
      link: "https://project2-link.com",
    },
    {
      title: "Portfolio Website",
      description:
        "This is my portfolio website that showcases my projects and skills. I also use .NET backend for secured data.",
      image: "/project/portfolio.png",
      technologies: [
        "Javascript",
        "Three.js",
        "React",
        "NEXT.JS",
        "Tailwind",
        ".NET",
        "C#",
        "ProsgreSQL",
      ],
      link: "https://project1-link.com",
    },
  ];

  return (
    <div className=" text-white ">
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Check out my projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center min-h-screen relative p-5">
        <div className="grid  grid-cols-3 gap-10 ">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
}
