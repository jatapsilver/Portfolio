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
    num: "07",
    category: "fullstack",
    title: "App de Registros",
    description:
      "La app de registros es una aplicación que utiliza NestJS para el backend y NextJS para el frontend. Aunque la interfaz es sencilla, el backend está altamente estructurado y cuenta con una amplia gama de endpoints que gestionan múltiples entidades con relaciones complejas.",
    stack: [
      { name: "NestJs" },
      { name: "NextJs" },
      { name: "Postgres" },
      { name: "Swagger" },
    ],
    image: "/assets/proyectos/appDeRegistros.png",
    live: "https://github.com/jatapsilver",
    github: "https://github.com/jatapsilver",
  },
  {
    num: "06",
    category: "web3",
    title: "Lucky9",
    description:
      "Lucky9 es una aplicación diseñada para gestionar de manera automática el acceso a un canal de Telegram mediante el uso de un contrato inteligente. Su objetivo principal es controlar el pago de suscripciones, el registro de ingreso y la permanencia de los usuarios dentro del canal, todo de forma descentralizada y segura.",
    stack: [
      { name: "NestJs" },
      { name: "NextJs" },
      { name: "Web3" },
      { name: "Solidity" },
    ],
    image: "/assets/proyectos/lucky9.png",
    live: "https://lucky9.com.co/",
    github: "https://github.com/jatapsilver",
  },
  {
    num: "05",
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
    num: "04",
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
    category: "fullstack",
    title: "Agro D Export",
    description:
      "La plataforma AgroDExports tiene como objetivo maximizar las exportaciones desde América Latina hacia Europa y Estados Unidos, mejorando la calidad del consumo a través de grandes empresas como Albert Heijn, Jumbo, Walmart, Costco, Kroger, Aldi, Lidl, Tesco, Carrefour, Auchan, E.Leclerc y Sainsbury’s",
    stack: [{ name: "NestJs" }, { name: "NextJs" }, { name: "Prisma" }],
    image: "/assets/proyectos/agroDExport.jpeg",
    live: "",
    github: "https://github.com/jatapsilver",
  },
  {
    num: "02",
    category: "Gaming",
    title: "PharmaQuest",
    description:
      "PharmaQuest es un juego educativo diseñado principalmente para estudiantes de medicina, que les permite profundizar en el uso de diferentes medicamentos para el tratamiento de diversos síntomas y condiciones médicas.",
    stack: [
      { name: "Blockchain" },
      { name: "Solidity" },
      { name: "javascript" },
    ],
    image: "/assets/proyectos/pharmaquest.jpeg",
    live: "",
    github: "https://github.com/jatapsilver",
  },
  {
    num: "01",
    category: "Backend",
    title: "E-commerce",
    description:
      "E-commerce es una aplicación de comercio electrónico que permite a los usuarios comprar y vender productos en línea. Este proyecto se desarrolló con un enfoque en funcionalidades del backend asegurando la seguridad de la aplicacion y la integridad de los datos.",
    stack: [{ name: "NestJs" }, { name: "Postgres" }, { name: "Swagger" }],
    image: "/assets/proyectos/e-commerce.jpg",
    live: "",
    github: "https://github.com/jatapsilver",
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
                    <div
                      className="
      h-[460px] relative group flex justify-center items-center 
      bg-gradient-to-br from-purple-300 via-pink-200 to-yellow-200 
      overflow-hidden rounded-[32px]
    "
                    >
                      {/* esquinas decorativas */}
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white opacity-30 rotate-45 rounded-sm"></div>
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white opacity-30 -rotate-45 rounded-sm"></div>
                      <div className="absolute bottom-4 left-4 w-12 h-12 bg-white opacity-30 -rotate-45 rounded-sm"></div>
                      <div className="absolute bottom-4 right-4 w-12 h-12 bg-white opacity-30 rotate-45 rounded-sm"></div>

                      {/* overlay sutil al hover */}
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-20 transition-opacity"></div>

                      {/* imagen con máscara y zoom */}
                      <div
                        className="
        relative w-full h-full 
        mask-[polygon(0_10%,100%0,100%90%,0_100%)] 
        overflow-hidden shadow-2xl
      "
                      >
                        <Image
                          src={project.image}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
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
