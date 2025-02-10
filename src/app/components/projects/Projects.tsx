import {
  SiLinkedin,
  SiPython,
  SiGithub,
  SiFlask,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import CardComponent from "../card/Card";

const projects = [
  {
    title: "Generate Menu Using K-Means",
    description:
      "Using K-Means algorithm to cluster and generate personalized menu options based on calories",
    image: "image",
    imageDescription: "image description",
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
    title: "Airplane Project",
    description: "Final project build to handle airplane schedule",
    image: "image",
    imageDescription: "image description",
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
    title: "Sepatuku",
    description: "Under construction",
    image: "image",
    imageDescription: "image description",
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

// type CardProps = React.ComponentProps<typeof Projects>;

const Projects = ({ className, ...props }: any) => {
  return (
    <>
      {projects.map((project: any, index: any) => (
        <CardComponent
          key={index}
          className={`${className} space-y-2`}
          title={project.title}
          description={project.description}
          image={project.image}
          imageDescription={project.imageDescription}
          linkDemo={project.linkDemo}
          linkRepo={project.linkRepo}
          tools={project.tools}
          {...props}
        />
      ))}
    </>
  );
};

export const connectFooter = [
  {
    name: "React",
    icon: SiLinkedin,
  },
  {
    name: "Next.js",
    icon: SiGithub,
  },
];

export default Projects;
