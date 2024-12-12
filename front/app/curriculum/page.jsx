"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs} from "react-icons/si"
import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion"

const about = {
    title: "Acerca de mí",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit non metus consectetur congue.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Javier Plata",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+57) 300 783 77 58",
        },
        {
            fieldName: "Experience",
            fieldValue: "3 Años",
        },
        
    ],
}

const experience = {
    icon: "ruta",
    title: "Experiencia",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit non metus consectetur congue.",
    items: [
        {
            company: "Company Name",
            title: "Frontend Developer",
            duration: "Febrero 2022 - Actualidad",
        },
        {
            company: "Company Name",
            title: "Freelance Web developer",
            duration: "Febrero 2022 - Actualidad",
        }

    ]
}

const education = {
    icon: "ruta",
    title: "Educación",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit non metus consectetur congue.",
    items: [
        {
            institution: "Universidad XYZ",
            degree: "Ingeniería en Informática",
            duration: "Febrero 2022 - Actualidad",
        },
    ]
}

const skills = {
    title: "Habilidades",
    description: "Habilidades",
    skillList: [
        {
            name: "HTML5",
            icon: <FaHtml5 />,
        },
        {
            name: "CSS3",
            icon: <FaCss3 />,
        },
        {
            name: "JavaScript",
            icon: <FaJs />,
        },
        {
            name: "ReactJS",
            icon: <FaReact />,
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
            name: "Node.js",
            icon: <FaNodeJs />,
        },
        {
            name: "Figma",
            icon: <FaFigma />,
        },
    ]
}
const Curriculum = () => {
    return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
    <div className="container mx-auto rounded">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px] rounded">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value="experience">Experencia</TabsTrigger>
                <TabsTrigger value="education">Educacion</TabsTrigger>
                <TabsTrigger value="skills">Habilidades</TabsTrigger>
                <TabsTrigger value="about">Acerca de mí</TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">
                <TabsContent value="experience" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold ">{experience.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                        <ScrollArea>
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {experience.items.map((item, index)=> {
                                    return( 
                                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                        <span className="text-accent">{item.duration}</span>
                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.title}</h3>
                                        <div className="flex items-center gap-3">
                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                            <p className="text-white/60">{item.company}</p>
                                        </div>
                                    </li>
                                    )
                                })}
                            </ul>
                        </ScrollArea>
                    </div>
                </TabsContent>
                <TabsContent value="education" className="w-full">
                    educacion
                </TabsContent>
                <TabsContent value="skills" className="w-full">
                    habilidades
                </TabsContent>
                <TabsContent value="about" className="w-full">
                    Acerca de mi 
                </TabsContent>
            </div>
        </Tabs>
    </div>
    </motion.div>)
}

export default Curriculum