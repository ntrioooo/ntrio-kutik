import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Layout from "./layout/layout";
import peaceImage from "../../public/images/memoji/peace-bg.png";
import Techstack from "./components/techstack/Techstack";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <div className="min-h-screen flex flex-col justify-center items-center">
          <div className="justify-center flex">
            <Image
              src={peaceImage}
              alt="Peace Memoji"
              width={200}
              height={200}
            />
          </div>
          <div className="mt-3 text-center">
            <div className="bg-black rounded-xl inline-block px-4 py-1 cursor-pointer">
              <h1 className="text-3xl font-bold text-white">ntriodev.</h1>
            </div>
            <p className="mt-2 text-xl font-semibold text-center">
              a developer focused on building high-performance websites using
              cutting-edge technologies.
            </p>
            <Techstack />
          </div>
        </div>
        <main className="text-center">
          <h2 className="text-2xl font-semibold" id="projects">
            Projects
          </h2>
          <div className="flex justify-between lg:gap-x-5">
            <Projects />
          </div>
        </main>
        {/* <div className="mt-24">
          <div className="shrink-0 bg-neutral-400 h-[1px] w-full"></div>
        </div> */}
      </Layout>
      <Footer />
    </>
  );
}
