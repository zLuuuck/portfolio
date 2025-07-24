import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 py-12 md:py-20">
      {/* Título da Seção */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 md:mb-16 shine-text"
      >
        Sobre mim
      </motion.h2>

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        {/* Texto - vem primeiro no mobile, esquerda no desktop */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 text-white"
        >
          <div className="text-center ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              Lucas Toterol Rodrigues
            </h1>
            <h2 className="text-3xl sm:text-4xl text-white mb-6 shine-text font-bold">
              ~ zLuuuck ~
            </h2>
          </div>
          
          <div className="text-base sm:text-lg leading-relaxed text-gray-300 text-center md:text-center space-y-4">
            <p>
              Sou estudante na área tech<span className="font-semibold text-[#357ab7]"> há mais de 3 anos</span>, atualmente curso <span className="font-semibold text-[#357ab7]">Análise e Desenvolvimento de Sistemas</span> na Universidade Tuiuti do Paraná, com foco em <span className="font-semibold text-[#357ab7]">cibersegurança</span> e testes de penetração.
            </p>
            
            <p>
              Tenho <span className="font-semibold text-[#357ab7]">experiência prática</span> com labs como <span className="font-semibold text-[#357ab7]">TryHackMe</span> e <span className="font-semibold text-[#357ab7]">Hack The Box</span>, além de desenvolver projetos em <span className="font-semibold text-[#357ab7]">Python</span> e <span className="font-semibold text-[#357ab7]">aplicações web</span>.
            </p>
            
            <p>
              Atuo também com sistemas <span className="font-semibold text-[#357ab7]">Linux e Windows</span>, possuo conhecimento em <span className="font-semibold text-[#357ab7]">montagem e manutenção de computadores</span>, e experiência com <span className="font-semibold text-[#357ab7]">suporte técnico</span> (help desk).
            </p>
            
            <p>
              Busco constantemente aprender e aplicar meus conhecimentos em projetos práticos e <span className="font-semibold text-[#357ab7]">desafios reais</span>.
            </p>
            
            <p>
              Este portfólio é um reflexo da minha trajetória e dos objetivos que persigo com dedicação, sempre buscando impactar positivamente com o que crio.
            </p>
          </div>
        </motion.div>

        {/* Imagem - vem depois no mobile, direita no desktop */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-[440px] md:h-[440px] rounded-2xl bg-gradient-to-r from-[#0284c7] via-[#3b82f6] to-[#0ea5e9] blur-3xl opacity-40 animate-spin-slow" />
          <img
            src="/eu2.jpeg"
            alt="Lucas Toterol"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-[440px] md:h-[440px] object-cover rounded-2xl border-[8px] sm:border-[10px] border-[#022747] shadow-2xl relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};