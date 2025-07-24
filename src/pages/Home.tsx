import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Home = () => {
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (homeRef.current) {
      gsap.fromTo(
        homeRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <section
      ref={homeRef}
      className="flex items-center justify-center min-h-[calc(100vh-80px)] py-12 px-6 
                md:px-20 bg-transparent text-white relative overflow-hidden"
    >
      {/* Container principal com ordem invertida no mobile */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8 md:gap-12">

        {/* Imagem primeiro no mobile, à esquerda no desktop */}
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-none">
          <div className="relative">
            <div className="absolute w-64 h-64 md:w-[440px] md:h-[440px] rounded-2xl bg-gradient-to-r 
                         from-[#0284c7] via-[#3b82f6] to-[#0ea5e9] blur-3xl opacity-40 animate-spin-slow" />
            <img
              src="/eu.jpeg"
              alt="Lucas Toterol"
              className="w-64 h-64 md:w-[440px] md:h-[440px] object-cover rounded-2xl 
                        border-[10px] border-[#022747] shadow-2xl relative z-10"
            />
          </div>
        </div>

        {/* Texto (vem depois no mobile, à direita no desktop) */}
        <div className="flex flex-col w-full md:w-1/2 items-center text-center order-2 md:order-none mt-8 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            <span className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl">Olá, eu sou o</span>
              <span className="text-5xl md:text-7xl shine-text mt-2">Lucas Toterol</span>
            </span>
          </h1>

          <h2 className="text-lg md:text-2xl text-center justify-center text-gray-300 mb-6">
            Estudante de ADS focado em Cibersegurança e Pentest.
          </h2>

          <p className="text-gray-400 mb-8 text-base md:text-lg max-w-md leading-relaxed">
            Estudo cibersegurança por conta própria, praticando em labs, escrevendo write-ups e desenvolvendo projetos.
            Busco evoluir tecnicamente e contribuir para um mundo digital mais seguro.
          </p>

          {/* Botões */}
          <div className="flex flex-wrap justify-center gap-4 w-full">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative h-14 w-60 md:h-16 md:w-60 border-2 border-white rounded-xl overflow-hidden 
                        cursor-pointer flex items-center justify-center transition-all duration-600 hover:scale-105 hover:border-[#022747]"
            >
              <span className="z-10 text-white font-medium group-hover:text-[#022747]">Ver Projetos</span>
              <span className="absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 origin-bottom 
                           transition-transform duration-300 ease-in-out"></span>
            </button>

            <button
              onClick={() => window.open("/cv.pdf", "_blank")}
              className="group relative h-14 w-60 md:h-16 md:w-60 border-2 border-white rounded-xl overflow-hidden 
                        cursor-pointer flex items-center justify-center transition-all duration-600 hover:scale-105 hover:border-[#022747]"
            >
              <span className="z-10 text-white font-medium group-hover:text-[#022747]">Baixar Currículo</span>
              <span className="absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 origin-bottom 
                           transition-transform duration-300 ease-in-out"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};  