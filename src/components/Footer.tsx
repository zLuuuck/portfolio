import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { type RefObject } from "react";
import Lenis from "@studio-freight/lenis";

interface FooterProps {
  lenisRef?: RefObject<Lenis | null>;
}

export const Footer = ({ lenisRef }: FooterProps) => {
  const scrollToTop = () => {
    if (lenisRef?.current) {
      lenisRef.current.scrollTo(0, { duration: 5,  easing: (t) => t }); // linear easing
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-black text-white py-8 px-4">
      {/* Linha separadora */}
      <hr className="border-t border-gray-700 mb-6" />

      {/* Copyright e botão */}
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <div className="flex flex-col md:flex-row md:justify-between w-full text-sm text-gray-400 items-center gap-2">
          <p>&copy; {new Date().getFullYear()}, Lucas Toterol. Todos os direitos reservados.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-white hover:text-purple-400 transition"
          >
            Voltar ao topo <ArrowUp size={18} />
          </button>
        </div>

        {/* Ícones sociais centralizados */}
        <div className="flex gap-6 mt-4">
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:seu@email.com"
            className="hover:text-purple-400 transition"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
