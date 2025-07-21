import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const Home = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLSpanElement>(null);
  const [gradientPos, setGradientPos] = useState({ x: "50%", y: "50%" });

  useEffect(() => {
    if (homeRef.current) {
      gsap.fromTo(
        homeRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
      );
    }
  }, []);

  const updateGradientPos = (x: number, y: number, target: HTMLSpanElement) => {
    const rect = target.getBoundingClientRect();
    const xPercent = ((x - rect.left) / rect.width) * 100;
    const yPercent = ((y - rect.top) / rect.height) * 100;
    setGradientPos({ x: `${xPercent}%`, y: `${yPercent}%` });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (gradientRef.current) {
      updateGradientPos(e.clientX, e.clientY, gradientRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLSpanElement>) => {
    if (gradientRef.current && e.touches.length > 0) {
      updateGradientPos(e.touches[0].clientX, e.touches[0].clientY, gradientRef.current);
    }
  };

  return (
    <section
      ref={homeRef}
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-center h-screen w-full px-6 md:px-20 bg-gradient-to-br from-black via-[#0d1d22] to-[#1f3a41] text-white"
    >
      {/* Imagem */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src="/foto.jpeg"
          alt="Lucas Toterol"
          className="w-64 h-64 md:w-[440px] md:h-[440px] object-cover rounded-2xl border-4 border-[#022747ff] shadow-2xl"
        />
      </div>

{/* Texto à direita */}
<div className="flex flex-col max-w-xl w-full md:w-1/2 mx-auto items-center md:items-start text-center md:text-left">
  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
    <span className="relative inline-block group">
      <span
        ref={gradientRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="bg-clip-text text-transparent transition-all duration-700 ease-in-out inline-block"
        style={{
          backgroundImage: `radial-gradient(circle at ${gradientPos.x} ${gradientPos.y}, #4fc3f7, #022747ff)`,
        }}
      >
        <span className="text-3xl md:text-4xl block">Olá, eu sou o</span>
        <span className="text-6xl md:text-6xl block">Lucas Toterol</span>
      </span>
    </span>
  </h1>

  <h2 className="text-lg md:text-2xl text-gray-300 mb-4">
    Analista de Cibersegurança
  </h2>

  <p className="text-gray-400 mb-8 text-sm md:text-base max-w-sm md:max-w-full">
    Especializado em análise de vulnerabilidades, hardening e defesa
    cibernética. Apaixonado por proteger sistemas, dados e usuários.
  </p>

  {/* Botões */}
  <ul className="flex flex-wrap justify-center md:justify-start gap-4">
    <li
      onClick={() =>
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      className="group relative h-20 md:h-24 w-40 md:w-48 border border-white rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center transition-all duration-500 drop-shadow-2xl hover:scale-105 hover:border-[#0f3c63ff]"
    >
      <span className="z-10 text-white group-hover:text-[#022747ff] transition-all duration-300">
        Ver Projetos
      </span>
      <span className="absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out"></span>
    </li>

    <li
      onClick={() => window.open("/cv.pdf", "_blank")}
      className="group relative h-20 md:h-24 w-40 md:w-48 border border-white rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center transition-all duration-500 drop-shadow-2xl hover:scale-105 hover:border-[#0f3c63ff]"
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
