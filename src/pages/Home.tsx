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
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-center h-screen w-full px-6 md:px-20 bg-transparent text-white"
    >
      {/* Imagem */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
        <div className="absolute w-64 h-64 md:w-[440px] md:h-[440px] rounded-2xl bg-gradient-to-r from-[#0284c7] via-[#3b82f6] to-[#0ea5e9] blur-3xl opacity-40 animate-spin-slow" />
        <img
          src="/foto.jpeg"
          alt="Lucas Toterol"
          className="w-64 h-64 md:w-[440px] md:h-[440px] object-cover rounded-2xl border-[10px] border-[#022747] shadow-2xl relative z-10"
        />
      </div>

      {/* Texto à direita */}
      <div className="flex flex-col max-w-xl w-full md:w-1/2 mx-auto items-center text-center ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          <span className="relative inline-block group">
            <span className="block text-3xl md:text-4xl">Olá, eu sou o</span>
            <span className="block text-6xl md:text-6xl shine-text">Lucas Toterol</span>
          </span>
        </h1>


        <h2 className="text-lg md:text-2xl text-gray-300 mb-4">
          Estudante de ADS focado em Cibersegurança e Pentest.
        </h2>

        <p className="text-gray-400 mb-8 text-sm md:text-base max-w-sm md:max-w-full">
          Estudo cibersegurança por conta própria, praticando em labs, escrevendo write-ups e desenvolvendo projetos.
          Busco evoluir tecnicamente e contribuir para um mundo digital mais seguro.
        </p>

        {/* Botões */}
        <ul className="flex flex-wrap justify-center md:justify-start gap-4">
          <li
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative h-20 md:h-24 w-48 md:w-70 border-3 border-white rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center transition-all duration-500 drop-shadow-2xl hover:scale-105 hover:border-[#0f3c63ff]"
          >
            <span className="z-10 text-white group-hover:text-[#022747ff] transition-all duration-300">
              Ver Projetos
            </span>
            <span className="absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out"></span>
          </li>

          <li
            onClick={() => window.open("/cv.pdf", "_blank")}
            className="group relative h-20 md:h-24 w-48 md:w-70 border-3 border-white rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center transition-all duration-500 drop-shadow-2xl hover:scale-105 hover:border-[#0f3c63ff]"
          >
            <span className="z-10 text-white group-hover:text-[#022747ff] transition-all duration-300">
              Baixar Currículo
            </span>
            <span className="absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out"></span>
          </li>
        </ul>
      </div>
    </section>
  );
};
