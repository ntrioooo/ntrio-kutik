import Layout from "./layout/layout";
import Footer from "./components/footer/Footer";
import {
  SiPython,
  SiFlask,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import Experience from "./components/experience/Experience";

export default function Home() {
  return (
    <>
      <div
        className="min-h-screen flex flex-col justify-center items-center rounded-xl animate-gradient"
        style={{
          background:
            "linear-gradient(0deg,rgb(164, 201, 234) 0%,rgb(153, 208, 214) 40%,rgb(133, 162, 182) 70%,rgb(108, 128, 136) 100%)",
        }}
      >
        <p className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center">
          Hi! I&apos;m Trio
          <br />
          Software Developer
          <br /> from Bekasi, Indonesia
        </p>
      </div>
      <Layout>
        <Experience />
      </Layout>
      <Footer />
    </>
  );
}