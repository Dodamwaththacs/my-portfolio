import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  link,
}) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 w-[600px] h-[500px]">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 h-[300px] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-500 text-white text-sm px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
