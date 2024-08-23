import TechCard from "../../components/TechCard ";

export default function About() {
  return (
    <main className=" text-white ">
      <div>
        <h1 className="text-4xl font-bold mb-8">Skills</h1>
      </div>
      <div className="flex">
        <div className="basis-1/6 flex justify-center items-center">
          <h1
            className="transform rotate-180 text-2xl font-bold pl-5 underline-line"
            style={{ writingMode: "vertical-rl" }}
          >
            Programming Languages
          </h1>
        </div>
        <div className="basis-5/6  flex items-center justify-start pl-7">
          <div className="w-4/5">
            <div className="grid grid-cols-4 gap-10 flex items-center justify-center">
              <TechCard imageSrc="/logo/java.png" title="Java" />
              <TechCard imageSrc="/logo/js.png" title="Java Script" />
              <TechCard imageSrc="/logo/c.png" title="C" />
              <TechCard imageSrc="/logo/c-sharp.png" title="C#" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
