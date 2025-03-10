"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"

//components
import Social from "@/components/ui/Socials";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";

const Home = () => {

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/CV/CV.pdf"
    link.download = "Javier-Plata-CV.pdf"
    link.click();
  }

  return <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Desarrollador FullStack</span>
          <h1 className="h1 mb-6">
            Hola Soy<br/> <span className="text-accent">Javier Plata</span>
          </h1>
          <p className="max-w-[500xp] mb-9 text-white/80">
          Soy un desarrollador full stack con experiencia en frontend y backend, enfocado en entregar soluciones eficientes y escalables.
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button 
            variant="outline" 
            size="lg" 
            className="uppercase flex items-center gap-2"
            onClick={handleDownloadCV}
            >
              <span>Descargar CV</span>
              <FiDownload className="text-xl"/>
            </Button>
            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
            </div>
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo  />
        </div>
      </div>
    </div>
    <Stats />
  </section>
}

export default Home;