import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { X, Github, Linkedin, Mail, Phone } from "lucide-react";

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
                    duration: 0.5,
                    ease: "power3.out",
                    pointerEvents: "auto",
                });
                document.body.style.overflow = "hidden";
            } else {
                gsap.to(overlayRef.current, {
                    y: "-100%",
                    opacity: 0,
                    duration: 0.5,
                    ease: "power3.in",
                    pointerEvents: "none",
                });
                document.body.style.overflow = "auto";
            }
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    const handleClick = (id: string) => {
        scrollToSection(id);
        onClose();
    };

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 bg-black/50 backdrop-blur-md text-white z-50 opacity-0 pointer-events-none flex flex-col items-center justify-center p-4"
        >
            {/* Botão Fechar */}
            <button
                className="absolute top-6 right-6 text-white hover:text-[#4fc3f7] transition p-2"
                onClick={onClose}
                aria-label="Fechar menu"
            >
                <X size={32} />
            </button>

            {/* Links de Navegação - Vertical em Desktop */}
            <ul className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-6 gap-4 my-auto">
                {[
                    { label: "Home", id: "#home" },
                    { label: "Sobre", id: "#about" },
                    { label: "Objetivos", id: "#objectives" },
                    { label: "Skills", id: "#skills" },
                    { label: "Projetos", id: "#projects" },
                    { label: "Contato", id: "#contact" },
                ].map((item, index) => (
                    <li key={index} className="w-full">
                        <button
                            onClick={() => handleClick(item.id)}
                            className="group relative w-full h-16 lg:h-150 border-2 border-white rounded-xl overflow-hidden flex items-center justify-center transition-all duration-300 hover:border-[#022747]"
                        >
                            <span className="z-10 text-xl font-medium text-white group-hover:text-[#022747] transition-colors">
                                {item.label}
                            </span>
                            <span className="absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-in-out" />
                        </button>
                    </li>
                ))}
            </ul>

            {/* Ícones Sociais */}
            <div className="flex gap-6 mt-8 mb-4">
                <a 
                    href="https://github.com/zLuuuck" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 hover:text-[#4fc3f7] transition-colors"
                    aria-label="GitHub"
                >
                    <Github size={28} />
                </a>
                <a 
                    href="https://linkedin.com/in/lucastoterol" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 hover:text-[#4fc3f7] transition-colors"
                    aria-label="LinkedIn"
                >
                    <Linkedin size={28} />
                </a>
                <a 
                    href="mailto:toterol.contato@gmail.com" 
                    className="p-2 hover:text-[#4fc3f7] transition-colors"
                    aria-label="E-mail"
                >
                    <Mail size={28} />
                </a>
                <a 
                    href="https://wa.me/+5541999987886" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 hover:text-[#4fc3f7] transition-colors"
                    aria-label="WhatsApp"
                >
                    <Phone size={28} />
                </a>
            </div>
        </div>
    );
};