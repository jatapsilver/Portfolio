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
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "web3",
    title: "Casa wld colombia",
    description:
      "Casa Wld Colombia es una innovadora plataforma diseñada para facilitar el intercambio de la criptomoneda Worldcoin de manera segura, eficiente y rápida. Este proyecto integra lo mejor de las tecnologías modernas para ofrecer a los usuarios una experiencia optimizada y confiable.",
    stack: [{ name: "NestJs" }, { name: "NextJs" }, { name: "Web3" }],
    image: "/assets/proyectos/casaWldColombia.jpg",
    live: "https://casawldcolombia.com/",
    github: "https://github.com/jatapsilver",
  },
  {
    num: "02",
    category: "frontend",
    title: "It Global Solutions",
    description:
      "IT Global Solutions es una landing page diseñada para destacar los servicios de una empresa de tecnología global, desarrollada con un enfoque minimalista utilizando únicamente HTML, CSS y JavaScript puro. Este proyecto celebra la esencia de la web, mostrando cómo estas tecnologías fundamentales pueden usarse para crear experiencias visuales impactantes y funcionales sin depender de frameworks o bibliotecas externas.",
    stack: [{ name: "html 5" }, { name: "Css 3" }, { name: "javascript" }],
    image: "/assets/proyectos/itGlobalSolutions.png",
    live: "https://itglobals.com/",
    github: "https://github.com/jatapsilver",
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
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
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
                    <li key={item.name} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && " , "}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
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
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Repositorio GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project) => {
                return (
                  <SwiperSlide key={project.num} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/*overlay*/}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/*image*/}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/*slider Buttons*/}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Proyectos;
