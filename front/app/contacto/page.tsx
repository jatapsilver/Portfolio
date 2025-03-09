"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Teléfono",
    description: "(+57) 300 783 7758",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "jatapsilver92@hotmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Ubicacion",
    description: "Bogota, Colombia",
  },
];

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  interface FormData {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    servicio: string;
    mensaje: string;
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev: FormData) => ({
      ...prev,
      servicio: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .send(
        "service_3y02pq2",
        "template_su8svje",
        {
          nombre: formData.nombre,
          apellido: formData.apellido,
          email: formData.email,
          telefono: formData.telefono,
          servicio: formData.servicio,
          mensaje: formData.mensaje,
        },
        "7IvaJOkKNSG_8J0zk"
      )
      .then(
        (response) => {
          console.log(
            "Correo enviado exitosamente:",
            response.status,
            response.text
          );
          alert("Correo enviado exitosamente.");
          setFormData({
            nombre: "",
            apellido: "",
            email: "",
            telefono: "",
            servicio: "",
            mensaje: "",
          });
        },
        (error) => {
          console.error("Error al enviar el correo:", error);
          alert("Hubo un error al enviar el correo.");
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Formulario */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Trabajemos Juntos</h3>
              <p className="text-white/60">
                ¿Tienes alguna idea genial en mente? Soy desarrollador solidity
                fullstack y me encanta enfrentar nuevos retos. ¡Házmelo saber y
                construyamos juntos tu idea!
              </p>
              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="nombre"
                  className="rounded-xl"
                  type="text"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                />
                <Input
                  name="apellido"
                  className="rounded-xl"
                  type="text"
                  placeholder="Apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  className="rounded-xl"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  name="telefono"
                  className="rounded-xl"
                  type="text"
                  placeholder="Teléfono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </div>
              {/* Select */}
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full rounded-xl">
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectGroup>
                    <SelectLabel>Selecciona un Servicio</SelectLabel>
                    <SelectItem value="desarrollo-web3">
                      Desarrollo Web3
                    </SelectItem>
                    <SelectItem value="desarrollo-fullstack">
                      Desarrollo Fullstack
                    </SelectItem>
                    <SelectItem value="desarrollo-solidity">
                      Desarrollo Solidity
                    </SelectItem>
                    <SelectItem value="educacion-blockchain">
                      Educación BlockChain
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Textarea */}
              <Textarea
                name="mensaje"
                className="h-[200px] rounded-xl"
                placeholder="Escribe tu mensaje aquí..."
                value={formData.mensaje}
                onChange={handleChange}
              />
              {/* Botón */}
              <button
                type="submit"
                className="max-w-40 h-[44px] px-6 inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors bg-accent text-primary hover:bg-accent-hover hover:text-white"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
          {/* Información de contacto */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contacto;
