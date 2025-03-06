"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/Link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Casa wld colombia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed delectus hic magnam, autem doloremque necessitatibus? Deserunt nostrum totam, consectetur eveniet, harum dolor molestiae, accusamus quibusdam eos quisquam beatae autem.",
    stack: [{ name: "html 5" }, { name: "Css 3" }, { name: "javascript" }],
    image: "/assets/proyectos/casawldcolombia.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "App de comidas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed delectus hic magnam, autem doloremque necessitatibus? Deserunt nostrum totam, consectetur eveniet, harum dolor molestiae, accusamus quibusdam eos quisquam beatae autem.",
    stack: [{ name: "html 5" }, { name: "Css 3" }, { name: "javascript" }],
    image: "/assets/proyectos/casawldcolombia.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "backend",
    title: "API de comidas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed delectus hic magnam, autem doloremque necessitatibus? Deserunt nostrum totam, consectetur eveniet, harum dolor molestiae, accusamus quibusdam eos quisquam beatae autem.",
    stack: [{ name: "javascript" }, { name: "nodejs" }, { name: "express" }],
    image: "/assets/proyectos/casawldcolombia.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "App de tareas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed delectus hic magnam, autem doloremque necessitatibus? Deserunt nostrum totam, consectetur eveniet, harum dolor molestiae, accusamus quibusdam eos quisquam beatae autem.",
    stack: [{ name: "html 5" }, { name: "Css 3" }, { name: "javascript" }],
    image: "/assets/proyectos/casawldcolombia.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "backend",
    title: "API de tareas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sed delectus hic magnam, autem doloremque necessitatibus? Deserunt nostrum totam, consectetur eveniet, harum dolor molestiae, accusamus quibusdam eos quisquam beatae autem.",
    stack: [{ name: "javascript" }, { name: "nodejs" }, { name: "express" }],
    image: "/assets/proyectos/casawldcolombia.png",
    live: "",
    github: "",
  },
];

const Proyectos = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                Proyecto {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && " , "}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div>
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Ver Proyecto</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Repositorio </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%">slider</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Proyectos;
