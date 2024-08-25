import Head from "next/head";
import ProjectCard from "../../components/ProjectCard";
import styles from "../../styles/Home.module.css";

export default function Projects() {
  const projects = [
    { title: "Project 1", description: "Description of Project 1" },
    { title: "Project 2", description: "Description of Project 2" },
    // Add more projects as needed
  ];

  return (
    <div className=" text-[#FFFFFF]">
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Check out my projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>My Projects</h1>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}
