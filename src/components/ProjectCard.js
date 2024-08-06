import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
}
