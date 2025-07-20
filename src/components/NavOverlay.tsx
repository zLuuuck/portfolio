import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { X, Github, Linkedin, Mail } from "lucide-react";

interface NavOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    scrollToSection: (id: string) => void;
}

export const NavOverlay = ({ isOpen, onClose, scrollToSection }: NavOverlayProps) => {
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (overlayRef.current) {
            if (isOpen) {
                gsap.to(overlayRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                    pointerEvents: "auto",
                });
            } else {
                gsap.to(overlayRef.current, {
                    y: "-100%",
                    opacity: 0,
                    duration: 0.5,
                    ease: "power3.in",
                    pointerEvents: "none",
                });
            }
        }
    }, [isOpen]);

    const handleClick = (id: string) => {
        scrollToSection(id);
        onClose();
    };

    return (
        <div
            ref={overlayRef}
className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm text-white z-50 translate-y-[-100%] opacity-0 pointer-events-none transition-all flex flex-col items-center justify-between overflow-y-auto"
        >
            {/* Botão X */}
            <button
                className="absolute top-6 right-6 text-white hover:text-purple-400 transition"
                onClick={onClose}
                aria-label="Fechar menu"
            >
                <X size={32} />
            </button>

            {/* Capítulos */}
            <ul
                className="
                    flex flex-col md:flex-row 
                    gap-6 md:gap-30 
                    mt-24 md:mt-auto mb-auto 
                    text-2xl md:text-3xl font-medium text-center
                "
            >
                {[
                    { label: "Home", id: "#home" },
                    { label: "Sobre", id: "#about" },
                    { label: "Skills", id: "#skills" },
                    { label: "Projetos", id: "#projects" },
                    { label: "Contato", id: "#contact" },
                ].map((item, index) => (
                    <li
                        key={index}
                        onClick={() => handleClick(item.id)}
                        className="group relative h-28 md:h-150 w-50 md:w-50 border border-white rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center transition-all duration-500 drop-shadow-2xl hover:scale-105"
                    >
                        <span className="z-10 text-white group-hover:text-black transition-all duration-300">
                            {item.label}
                        </span>
                        <span className="absolute inset-0 bg-white scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out"></span>
                    </li>
                ))}
            </ul>

            {/* Social Icons */}
            <div className="flex gap-6 mb-10">
                <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                    <Github size={28} />
                </a>
                <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                    <Linkedin size={28} />
                </a>
                <a href="mailto:seu@email.com" className="hover:text-purple-400 transition">
                    <Mail size={28} />
                </a>
            </div>
        </div>
    );
};
