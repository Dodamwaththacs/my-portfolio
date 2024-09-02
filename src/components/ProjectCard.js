import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  link,
}) {
  return (
    <div className="bg-transparent rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 w-[400px] h-[600px] border-2 border-gray-300 p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-2 pt-[5px] text-center">{title}</h2>
      <div className="flex items-center justify-center pt-[20px]">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          objectFit="cover"
          className="h-48 rounded-lg"
        />
      </div>

      <p className="text-gray-300 mb-4 pt-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-[#FFB703] text-black text-sm px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <h1 className="bg-[#FFB703] text-black p-2 text-center rounded-lg hover:shadow-lg hover:shadow-white transition duration-300">
            View Project
          </h1>
        </a>
      </div>
    </div>
  );
}
