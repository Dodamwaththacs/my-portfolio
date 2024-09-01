import dynamic from "next/dynamic";

const ThreeScene = dynamic(() => import("../../components/theree"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <h1>My Three.js Scene</h1>
      <ThreeScene />
    </div>
  );
}
