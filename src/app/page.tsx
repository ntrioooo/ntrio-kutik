import Image from 'next/image';
import Navbar from './components/navbar/Navbar';
import Layout from './layout/layout';
import peaceImage from '../../public/images/memoji/peace-bg.png';
import Techstack from './components/techstack/Techstack';
import Footer from './components/footer/Footer';
import Projects from './components/projects/Projects';
import {
  SiPython,
  SiFlask,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';

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
            <Projects projects={projects} />
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

const projects = [
  {
    id: 1,
    title: 'Generate Menu Using K-Means',
    description:
      'Using K-Means algorithm to cluster and generate personalized menu options based on calories',
    linkDemo: '/not-found',
    linkRepo: 'https://github.com/ntrioooo/flask-deploy',
    tools: [
      {
        icon: SiPython,
        name: 'Python',
      },
      {
        icon: SiFlask,
        name: 'Flask',
      },
    ],
  },
  {
    id: 2,
    title: 'Airplane Project',
    description: 'Final project build to handle airplane schedule',
    linkDemo: 'https://final-project-kappa-two.vercel.app/',
    linkRepo: 'https://github.com/ntrioooo/final-project',
    tools: [
      {
        icon: SiReact,
        name: 'React',
      },
      {
        icon: SiNodedotjs,
        name: 'NodeJS',
      },
      {
        icon: SiPostgresql,
        name: 'PostgreSQL',
      },
    ],
  },
  {
    id: 3,
    title: 'Sepatuku',
    description: 'Under construction',
    linkDemo: '/not-found',
    linkRepo: 'https://github.com/ntrioooo/sepatuku',
    tools: [
      {
        icon: SiReact,
        name: 'React',
      },
      {
        icon: SiNodedotjs,
        name: 'NodeJS',
      },
      {
        icon: SiMongodb,
        name: 'MongoDB',
      },
    ],
  },
];
