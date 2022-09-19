import Image from "next/image";
import { useRouter } from "next/router";
import { FaLink, FaGithub } from "react-icons/fa";
import Header from "../src/components/header";
import PageTitle from "../src/components/pageTitle";

const projects = [
  {
    id: 1,
    name: "anonymess",
    description: "Real-time anonymouse message board web app",
    logo: "a",
    links: [
      {
        link: "https://www.anonymess.app/",
        Icon: FaLink,
      },
      {
        link: "https://github.com/nozma-knows/anonymess",
        Icon: FaGithub,
      },
    ],
  },
  {
    id: 2,
    name: "noah networks",
    description: "Personal website and blog",
    logo: "nn",
    links: [
      {
        link: "https://www.noahnetworks.com/",
        Icon: FaLink,
      },
      {
        link: "https://github.com/nozma-knows/noahnetworks",
        Icon: FaGithub,
      },
    ],
  },
  {
    id: 3,
    name: "renewed mood",
    description: "Mood and emotion tracking journal moblie app",
    logo: "rm",
    links: [
      {
        link: "https://github.com/Milbo-LLC/Renewed-Mood",
        Icon: FaGithub,
      },
    ],
  },
];

const DisplayProjects = () => {
  const router = useRouter();

  return (
    <div className="flex self-center flex-col gap-6 w-full max-w-xl text-white">
      {projects.map((project) => {
        const { id, name, description, logo, links } = project;
        return (
          <div
            key={id}
            className="relative flex w-full border-2 border-gray-400 hover:border-white rounded-xl cursor-pointer"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
          >
            <div
              className="flex items-center gap-4 p-8"
              onClick={() => router.push(`/projects/${name}`)}
            >
              <div
                className="flex justify-center w-[50px] h-[50px] rounded-full"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
              >
                <div className="flex w-full justify-center items-center pb-1 text-3xl">
                  {logo}
                </div>
              </div>
              <div>
                <div className="font-bold text-2xl color-">{name}</div>
                <div className="flex min-w-fit">{description}</div>
              </div>
            </div>
            <div className="absolute flex right-0 top-0 p-4 gap-2 text-2xl z-20">
              {links.map((item) => {
                const { link, Icon } = item;
                return (
                  <a key={link} href={link} target="_blank" rel="noreferrer">
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function Projects() {
  return (
    <div className="flex flex-col w-screen h-screen min-h-screen items-center bg-gradient-to-b from-[#000000] to-[#18251C] font-urbanist">
      <Header page="projects" />
      <div className="flex-1 flex flex-col p-8 gap-8 w-full w-11/12 max-w-2xl">
        <PageTitle title="Projects" />
        {/* <div className="w-full h-full bg-red-400"></div> */}
        <DisplayProjects />
      </div>
    </div>
  );
}
