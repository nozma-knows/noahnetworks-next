import Image from "next/image";
import Header from "../src/components/header";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaReact,
  FaPython,
} from "react-icons/fa";
import { SiAbletonlive } from "react-icons/si";
import PageTitle from "../src/components/pageTitle";

const links = [
  {
    Logo: FaGithub,
    link: "https://github.com/nozma-knows",
  },
  {
    Logo: FaLinkedin,
    link: "https://www.linkedin.com/in/noahmilberger/?trk=people-guest_people_search-card",
  },
  {
    Logo: FaTwitter,
    link: "https://twitter.com/noahmilberger",
  },
];

const skills = [
  {
    category: "Web/Mobile Development",
    Icon: FaReact,
    list: ["React", "AWS", "GraphQL", "React-Native", "Swift"],
  },
  {
    category: "Embedded Design",
    Icon: FaPython,
    list: ["C/C++", "Python", "Altium", "Eagle", "Arduino"],
  },
  {
    category: "Music",
    Icon: SiAbletonlive,
    list: ["Ableton"],
  },
];

const education = [
  {
    school: "Michigan State University",
    years: "2014 -2019",
    logo: "/msu.png",
    degrees: ["BS in Electrical Engineering", "BS in Computer Engineering"],
  },
];

const workExperience = [
  {
    company: "tbh",
    years: "2022 - Present",
    logo: "/tbh.png",
    roles: ["Full-Stack Engineer"],
  },
  {
    company: "Texas Instruments",
    years: "2018 -2021",
    logo: "/ti.png",
    roles: ["Field Applications Engineer", "Field Applications Intern"],
  },
  {
    company: "Textron",
    years: "2017",
    logo: "/textron.png",
    roles: ["Electrical Engineering Intern"],
  },
];

const DisplaySkills = () => {
  return (
    <div
      className="flex flex-col items-center gap-4 text-white w-11/12 max-w-xl border-2 rounded-xl p-8"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
    >
      <div className="self-center text-4xl font-semibold">Skills</div>
      <div className="flex flex-col gap-4">
        {skills.map((skill) => {
          const { Icon } = skill;
          return (
            <>
              <div className="flex items-center gap-4">
                <Icon className="text-4xl" />
                <div className="text-2xl font-semibold">{skill.category}</div>
              </div>
              <ul className="list-disc pl-20">
                {skill.list.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </ul>
            </>
          );
        })}
      </div>
    </div>
  );
};

const DisplayEducation = () => {
  return (
    <div
      className="flex flex-col items-center gap-4 text-white w-11/12 max-w-xl border-2 rounded-xl p-8"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
    >
      <div className="self-center text-4xl font-semibold">Education</div>
      <div className="flex flex-col gap-4">
        {education.map((item) => {
          return (
            <>
              <div className="flex items-center gap-4">
                <div className="flex w-[50px] bg-white rounded-full p-1">
                  <Image
                    src={item.logo}
                    width="100%"
                    height="100%"
                    objectFit="contain"
                    alt="Brand logo"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-2xl font-semibold">{item.school}</div>
                  <div className="text-lg font-semibold">{item.years}</div>
                </div>
              </div>
              <ul className="list-disc pl-20">
                {item.degrees.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </ul>
            </>
          );
        })}
      </div>
    </div>
  );
};

const DisplayWorkExperience = () => {
  return (
    <div
      className="flex flex-col items-center gap-4 text-white w-11/12 max-w-xl border-2 rounded-xl p-8"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
    >
      <div className="self-center text-4xl font-semibold">Work Experience</div>
      <div className="flex flex-col gap-4">
        {workExperience.map((item) => {
          return (
            <>
              <div className="flex items-center gap-4">
                <div className="flex w-[50px] bg-white rounded-full p-1">
                  <Image
                    src={item.logo}
                    width="100%"
                    height="100%"
                    objectFit="contain"
                    alt="Brand logo"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-2xl font-semibold">{item.company}</div>
                  <div className="text-lg font-semibold">{item.years}</div>
                </div>
              </div>
              <ul className="list-disc pl-20">
                {item.roles.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </ul>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default function About() {
  return (
    <div className="flex flex-col w-screen h-fit min-h-screen bg-gradient-to-b from-[#000000] to-[#18251C] font-urbanist">
      <Header page="about" />
      <div className="flex-1 flex flex-col items-center p-8 gap-8">
        <PageTitle title="Noah Milberger" links={links} />
        <DisplaySkills />
        <DisplayEducation />
        <DisplayWorkExperience />
      </div>
    </div>
  );
}
