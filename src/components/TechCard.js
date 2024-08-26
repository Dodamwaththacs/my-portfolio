import styles from "../styles/Skill.module.css";

const TechCard = ({ imageSrc, title, percentage }) => {
  return (
    <div
      className={`${styles["tech-card"]} bg-gray-800 w-70 h-60 flex flex-col items-center justify-between p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 rounded-xl shadow-lg relative`}
    >
      <div className="w-30 h-40 mb-4 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>

      <div>
        <h2 className="text-xl font-bold text-center text-white mb-2">
          {title}
        </h2>
      </div>

      <div className={`${styles["progress-container"]} w-full mt-2`}>
        <div className="bg-gray-600 rounded-full h-2.5">
          <div
            className={`${styles["progress-bar"]} bg-blue-600 h-2.5 rounded-full`}
            style={{ "--percentage": `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
