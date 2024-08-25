"use client";
import { useState, useEffect } from "react";
import TechCard from "../../components/TechCard";
import "../../styles/Skill.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function About() {
  const [currentSection, setCurrentSection] = useState(0);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setCurrentSection((prev) => (prev === 2 ? 0 : prev + 1));
      } else if (e.key === "ArrowLeft") {
        setCurrentSection((prev) => (prev === 0 ? 2 : prev - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleNext = () => {
    setCurrentSection((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSection((prev) => (prev === 0 ? 2 : prev - 1));
  };

  return (
    <main className="flex text-white justify-center items-center h-full relative">
      {/* Sidebar with the vertical section title */}
      <div className="basis-1/6 flex justify-center items-center">
        <h1
          className="transform rotate-180 text-2xl font-bold vertical-line"
          style={{ writingMode: "vertical-rl" }}
        >
          <span className="absolute top-0 -left-4 w-1 h-full bg-[#FFB703]"></span>
          {currentSection === 0
            ? "Programming Languages"
            : currentSection === 1
            ? "Frameworks"
            : "Technologies"}
        </h1>
      </div>

      {/* Main content area */}
      <div className="basis-5/6 flex items-center justify-start pl-7">
        <div className="w-4/5">
          {currentSection === 0 ? (
            <div className="grid grid-cols-4 gap-10 flex items-center justify-center">
              <TechCard
                imageSrc="/logo/java.png"
                title="Java"
                percentage={10}
              />
              <TechCard imageSrc="/logo/js.png" title="JavaScript" />
              <TechCard imageSrc="/logo/c.png" title="C" />
              <TechCard imageSrc="/logo/c-sharp.png" title="C#" />
            </div>
          ) : currentSection === 1 ? (
            <div className="grid grid-cols-4 gap-10 flex items-center justify-center">
              <TechCard imageSrc="/logo/next.png" title="Next" />
              <TechCard imageSrc="/logo/spring.png" title="Spring Boot" />
              <TechCard imageSrc="/logo/net.png" title=".NET" />
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-10 flex items-center justify-center">
              <TechCard imageSrc="/logo/docker.png" title="Docker" />
              <TechCard imageSrc="/logo/keycloak.png" title="Keycloak" />
              <TechCard imageSrc="/logo/nginx.png" title="NGINX" />
              <TechCard imageSrc="/logo/prometheus.png" title="Prometheus" />
              <TechCard imageSrc="/logo/Graphana.png" title="Graphana" />
              <TechCard imageSrc="/logo/aws.png" title="AWS" />
              <TechCard imageSrc="/logo/azure.png" title="Azure" />
            </div>
          )}
        </div>
      </div>

      {/* Navigation arrows */}

      {/* Navigation arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-[#FFB703] hover:text-white transition-colors"
        aria-label="Previous section"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-[#FFB703] hover:text-white transition-colors"
        aria-label="Next section"
      >
        <FaArrowRight />
      </button>
    </main>
  );
}
