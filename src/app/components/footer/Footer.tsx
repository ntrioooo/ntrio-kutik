import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        {/* <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                ntriodev.
              </span>
            </a>
            <p>Let&apos;s connect with me</p>
            <div className="mx-auto w-full max-w-screen-xl flex mt-4 space-x-4">
              {connectFooter.map((connect) => (
                <a
                  key={connect.name}
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <connect.icon className="w-6 h-6" />
                  <span className="sr-only">{connect.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                General
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:underline">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center justify-between">
          <div className="flex mt-4 space-x-4">
            {connectFooter.map((connect) => (
              <a
                key={connect.name}
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <connect.icon className="w-6 h-6" />
                <span className="sr-only">{connect.name}</span>
              </a>
            ))}
          </div>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © 2025 ntriodev. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
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

export default Footer;
