import Image from "next/image";

const TechCard = ({ imageSrc, title }) => {
  return (
    <div className="bg-gray-800 w-48 h-48 flex flex-col items-center justify-center p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 rounded-lg shadow-lg">
      <div>
        <img
          src={imageSrc}
          alt={title}
          width={90}
          height={90}
          objectFit="contain"
          className="mb-4"
        />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-center text-white">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default TechCard;

// bg-gray-800 rounded-lg flex flex-col items-center justify-center transition-transform hover:scale-105
{
  /* <Image
        src={imageSrc}
        alt={title}
        width={100}
        height={100}
        objectFit="contain"
      /> */
  //      <h2 className="text-lg font-semibold mt-2 text-center">{title}</h2>
}
