import Image from "next/image";

const TechCard = ({ imageSrc, title }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center transition-transform hover:scale-105">
      <div className="w-20 h-20 mb-4 relative">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="contain" />
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  );
};

export default TechCard;
