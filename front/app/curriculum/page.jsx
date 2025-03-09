"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaDocker,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiSolidity,
  SiNpm,
  SiPostgresql,
  SiNestjs,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "Acerca de mí",
  description: "",
  info: [
    {
      fieldName: "Nombre",
      fieldValue: "Javier Plata",
    },
    {
      fieldName: "Telefono",
      fieldValue: "(+57) 300 783 7758",
    },
    {
      fieldName: "Experiencia",
      fieldValue: "3 Años",
    },
    {
      fieldName: "Discord",
      fieldValue: "jatapsilver",
    },
    {
      fieldName: "Nacionalidad",
      fieldValue: "Colombiano",
    },
    {
      fieldName: "Email",
      fieldValue: "jatapsilver92@hotmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponible",
    },
  ],
};

const experience = {
  icon: "ruta",
  title: "Experiencia",
  description:
    "Apasionado por Web3 y blockchain, soy un Desarrollador Full Stack con un enfoque en crear aplicaciones que conecten el mundo digital y descentralizado. Trabajo con NestJs, NextJs y Solidity para construir soluciones flexibles y de alto impacto.",
  items: [
    {
      company: "Freelancer",
      title: "Creación de Token y Gestión de Liquidez",
      duration: "Agosto 2024 - Octubre 2024",
    },
    {
      company: "Henry",
      title: "Asistente de Profesor",
      duration: "Septiembre 2024 - Noviembre 2024",
    },
    {
      company: "Freelancer",
      title: "Desarrollo comunidad dApp ",
      duration: "Abril 2024 - Junio 2024",
    },
    {
      company: "Freelancer",
      title: "Desarrollo Web e-commerce",
      duration: "Marzo 2024 - Mayo 2024",
    },
    {
      company: "Apricot blockchain and dev solution",
      title: "Dev Frot-end y Mentor Blockchain",
      duration: "Enero 2022 - Marzo 2024",
    },
  ],
};

const education = {
  icon: "ruta",
  title: "Educación",
  description:
    "Estoy en continuo estudio para mejorar mis habilidades en blockchain y contratos inteligentes, con un enfoque en la innovación y el dominio de tecnologías disruptivas que impulsan el futuro digital.",
  items: [
    {
      institution: "Henry",
      degree: "Desarrollador Web FullStack",
      duration: "Noviembre 2024",
    },
    {
      institution: "Henry",
      degree: "Teaching Assitant",
      duration: "Noviembre 2024",
    },
    {
      institution: "Avalanche",
      degree: "GameAvax",
      duration: "Septiembre 2024",
    },
    {
      institution: "Henry",
      degree: "Introduccion a ciberseguridad",
      duration: "Agosto 2024",
    },
    {
      institution: "freeCodeCamp",
      degree: "Legacy javascript algorithms",
      duration: "Julio 2024",
    },
    {
      institution: "freeCodeCamp",
      degree: "Responsive web desing",
      duration: "Junio 2024",
    },
    {
      institution: "Udemy",
      degree: "Php desde cero",
      duration: "marzo 2023",
    },
  ],
};

const skills = {
  title: "Habilidades",
  description: "",
  skillList: [
    {
      name: "html5",
      icon: <FaHtml5 />,
    },
    {
      name: "css3",
      icon: <FaCss3 />,
    },
    {
      name: "javascript",
      icon: <FaJs />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "npm",
      icon: <SiNpm />,
    },
    {
      name: "ReactJS",
      icon: <FaReact />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Nest.js",
      icon: <SiNestjs />,
    },
    {
      name: "solidity",
      icon: <SiSolidity />,
    },
    {
      name: "git",
      icon: <FaGitAlt />,
    },
    {
      name: "github",
      icon: <FaGithub />,
    },
    {
      name: "docker",
      icon: <FaDocker />,
    },
    {
      name: "postgresql",
      icon: <SiPostgresql />,
    },
    {
      name: "mongodb",
      icon: <SiMongodb />,
    },
  ],
};
const Curriculum = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto rounded">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] rounded"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experencia</TabsTrigger>
            <TabsTrigger value="education">Educacion</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Acerca de mí</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Curriculum;
