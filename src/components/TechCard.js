import styles from "../styles/Skill.module.css";
const TechCard = ({ imageSrc, title, percentage }) => {
  return (
    <div
      className={`${styles["tech-card"]} bg-gray-800 w-48 h-48 flex flex-col items-center justify-center p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 rounded-lg shadow-lg relative`}
    >
      {" "}
      <div>
        <img
          src={imageSrc}
          alt={title}
          width={90}
          height={90}
          style={{ objectFit: "contain" }}
          className="mb-4"
        />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-center text-white">
          {title}
        </h2>
      </div>
      <div
        className={`${styles.percentage} absolute top-2 right-2 text-white text-sm opacity-0 transition-opacity duration-300`}
      >
        {" "}
        {percentage}%
      </div>
    </div>
  );
};

export default TechCard;
