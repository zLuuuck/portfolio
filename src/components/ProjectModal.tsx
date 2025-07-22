// components/ProjectModal.tsx
import { Github, X } from "lucide-react";
import { useEffect } from "react";
import type { IconType } from "react-icons";
import { motion } from "framer-motion";

interface Props {
    title: string;
    description: string;
    techs: string[];
    icons: IconType[];
    github: string;
    image: string; // Adicionado
    onClose: () => void;
}

export default function ProjectModal({ title, description, techs, icons, github, image, onClose }: Props) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    return (
        <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="relative max-w-lg w-full bg-transparent border-4 border-[#0f3c63ff] rounded-3xl p-6 text-white  shadow-xl w-[90%]"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
            >

                {/* Botão de fechar */}
                <button className="absolute top-5 right-5" onClick={onClose}>
                    <X className="w-6 h-6 hover:text-[#0f3c63ff]" />
                </button>

                {/* Título centralizado */}
                <h2 className="text-2xl font-bold text-center mb-2 shine-text">{title}</h2>

                {/* Imagem do projeto */}
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                />

                {/* Descrição */}
                <p className="mb-4 text-white/80 text-center text-justify">{description}</p>

                {/* Techs com ícones */}
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                    {icons.map((IconComponent, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-1 border border-white text-white px-3 py-1 rounded-md text-sm"
                        >
                            <IconComponent className="w-4 h-4 text-white" />
                            <span>{techs[index]}</span>
                        </div>
                    ))}
                </div>

                {/* Botão GitHub centralizado */}
                <div className="flex justify-center">
                    <li
                        onClick={() => window.open(github, "_blank")}
                        className="group relative h-14 w-48 border-3 border-white rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center transition-all duration-500 drop-shadow-2xl hover:scale-105 hover:border-[#0f3c63ff]"
                    >
                        <span className="z-10 text-white group-hover:text-[#022747ff] transition-all duration-300 flex items-center gap-2">
                            <Github className="w-5 h-5" />
                            Ver no GitHub
                        </span>
                        <span className="absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out"></span>
                    </li>
                </div>

            </motion.div>
        </motion.div>
    );
}
