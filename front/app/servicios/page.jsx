"use client"

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";

const services = [
    {
        num: "01",
        title: "Desarrollador Fullstack",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit non metus consectetur congue.",
        href: ""
    },
    {
        num: "02",
        title: "Desarrollador web3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit non metus consectetur congue.",
        href: ""
    },
    {
        num: "03",
        title: "Educador Blockchain",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit non metus consectetur congue.",
        href: ""
    },
    {
        num: "04",
        title: "Desarrollador Solidity",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit non metus consectetur congue.",
        href: ""
    }
]

import { motion } from "framer-motion"

const Servicios = () => {

    return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            <motion.div 
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            >
                {services.map((services, index) => {
                    return (
                    <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                        <div className="w-full flex justify-between items-center">
                            <div className="text-5xl font-extrabold">{services.num}</div>
                            <Link href={services.href}>
                                <BsArrowDownRight />
                            </Link>
                        </div>
                        <h2>{services.title}</h2>
                        <p>{services.description}</p>
                        <div className="border-b border-white/20 w-full"></div>
                    </div>
                    );
                })}
            </motion.div>
        </div>
    </section>
    );
};

export default Servicios