import Layout from "./layout/layout";
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/Experience";
import Slider from "./components/slider/Slider";

export default function Home() {
  return (
    <>
      <div
        className="min-h-screen flex flex-col justify-center items-center animate-gradient"
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
      <section className="py-12 bg-zinc-50" id="recent">
        <div className="mx-auto max-w-7xl px-3 xl:p-0">
          <Slider />
        </div>
      </section>
      <Layout>
        <section className="py-12" id="about">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 mb-6 dark:text-white">
            About & Experience
          </h2>
          <Experience />
        </section>
      </Layout>
      <Footer />
    </>
  );
}
