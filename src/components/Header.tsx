import { type RefObject, useState } from "react";
import { NavOverlay } from "./NavOverlay";
import Lenis from "@studio-freight/lenis";

export const Header = ({ lenisRef }: { lenisRef: RefObject<Lenis | null> }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => { 
    const target = document.querySelector(id);
    if (target && lenisRef.current) {
      lenisRef.current.scrollTo(target as HTMLElement, { duration: 1.2 });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-15 z-40 px-6 py-4 flex justify-between items-center bg-black/30 backdrop-blur-md text-white">
        <div className="flex items-center gap-4">
          <button
            className="flex flex-col gap-[6px] cursor-pointer group"
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menu"
          >
            <span className="block w-6 h-0.5 bg-white group-hover:bg-[#4fc3f7] transition"></span>
            <span className="block w-6 h-0.5 bg-white group-hover:bg-[#4fc3f7] transition"></span>
            <span className="block w-6 h-0.5 bg-white group-hover:bg-[#4fc3f7] transition"></span>
          </button>

          <h1
            className="text-xl font-bold tracking-wide cursor-pointer hover:text-[#4fc3f7] transition shine-text"
            onClick={() => scrollToSection("#about")}
          >
            Lucas Toterol
          </h1>
        </div>
      </header>

      <NavOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} scrollToSection={scrollToSection} />
    </>
  );
};
