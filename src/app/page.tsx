import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Layout from "./layout/layout";
import peaceImage from "../../public/images/memoji/peace-bg.png";
import Techstack from "./components/techstack/Techstack";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
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
          Hi! I'm Trio
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

const projects = [
  {
    id: 1,
    title: "Generate Menu Using K-Means",
    description:
      "Using K-Means algorithm to cluster and generate personalized menu options based on calories",
    linkDemo: "/not-found",
    linkRepo: "https://github.com/ntrioooo/flask-deploy",
    tools: [
      {
        icon: SiPython,
        name: "Python",
      },
      {
        icon: SiFlask,
        name: "Flask",
      },
    ],
  },
  {
    id: 2,
    title: "Airplane Project",
    description: "Final project build to handle airplane schedule",
    linkDemo: "https://final-project-kappa-two.vercel.app/",
    linkRepo: "https://github.com/ntrioooo/final-project",
    tools: [
      {
        icon: SiReact,
        name: "React",
      },
      {
        icon: SiNodedotjs,
        name: "NodeJS",
      },
      {
        icon: SiPostgresql,
        name: "PostgreSQL",
      },
    ],
  },
  {
    id: 3,
    title: "Sepatuku",
    description: "Under construction",
    linkDemo: "/not-found",
    linkRepo: "https://github.com/ntrioooo/sepatuku",
    tools: [
      {
        icon: SiReact,
        name: "React",
      },
      {
        icon: SiNodedotjs,
        name: "NodeJS",
      },
      {
        icon: SiMongodb,
        name: "MongoDB",
      },
    ],
  },
];
