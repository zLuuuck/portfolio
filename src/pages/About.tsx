import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16">
      {/* Título da Seção */}
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-16 shine-text">
        Sobre mim
      </h2>

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-8">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center md:text-center">
            Lucas Toterol Rodrigues
          </h1>
          <h1 className="text-5xl text-white mb-6 text-center shine-text font-bold">
            ~ zLuuuck ~
          </h1>
          <p className="text-lg leading-relaxed text-gray-300 text-justify">
            Olá! Sou um entusiasta da tecnologia e apaixonado por cibersegurança, desenvolvimento e inovação.
            Desde cedo me interesso por sistemas, automações e como as coisas funcionam por trás da interface. 
            Minha motivação é evoluir constantemente, enfrentando desafios técnicos e criativos que me façam crescer 
            tanto profissionalmente quanto pessoalmente.
            <br /><br />
            Este portfólio é um reflexo da minha trajetória e dos objetivos que persigo com dedicação, sempre buscando
            impactar positivamente com o que crio.
          </p>
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="absolute w-64 h-64 md:w-[440px] md:h-[440px] rounded-2xl bg-gradient-to-r from-[#0284c7] via-[#3b82f6] to-[#0ea5e9] blur-3xl opacity-40 animate-spin-slow" />
          <img
            src="/foto3.gif"
            alt="Lucas Toterol"
            className="w-100 h-100 md:w-[440px] md:h-[440px] object-cover rounded-2xl border-[10px] border-[#022747] shadow-2xl relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};
