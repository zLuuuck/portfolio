import { Github, Linkedin, Mail, ArrowUp, Phone } from "lucide-react";
import { type RefObject } from "react";
import Lenis from "@studio-freight/lenis";

interface FooterProps {
  lenisRef?: RefObject<Lenis | null>;
}

export const Footer = ({ lenisRef }: FooterProps) => {
  const scrollToTop = () => {
    if (lenisRef?.current) {
      lenisRef.current.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-black text-white py-8 px-4">
      <hr className="border-t border-gray-700 mb-6" />

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Texto de direitos autorais */}
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()}, Lucas Toterol. Todos os direitos reservados.
        </p>

        {/* Botão voltar ao topo */}
        <div className="w-full flex justify-center">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-white hover:text-[#4fc3f7] transition text-sm"
          >
            Voltar ao topo <ArrowUp size={18} />
          </button>
        </div>

        {/* Ícones sociais */}
        <div className="flex gap-6 mt-2">
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4fc3f7] transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4fc3f7] transition"
          >
            <Linkedin size={24} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:seu@email.com"
            className="hover:text-[#4fc3f7] transition"
          >
            <Mail size={24} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/+5541999016605"
            className="hover:text-[#4fc3f7] transition"
          >
            <Phone size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
