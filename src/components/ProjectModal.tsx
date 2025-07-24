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
    image: string;
    onClose: () => void;
}

export default function ProjectModal({
    title,
    description,
    techs,
    icons,
    github,
    image,
    onClose
}: Props) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    return (
        <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="relative max-w-2xl w-full bg-gradient-to-br from-[#0d1d22] to-[#0a2a45] border-3 border-[#357ab7]/50 rounded-xl overflow-hidden shadow-2xl"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botão de fechar */}
                <button
                    className="absolute top-4 right-4 z-10 text-white/80 hover:text-white transition-colors"
                    onClick={onClose}
                    aria-label="Fechar modal"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Conteúdo rolável */}
                <div className="max-h-[90vh] overflow-y-auto">
                    {/* Imagem do projeto */}
                    <div className="h-48 sm:h-56 w-full overflow-hidden relative">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a2a45]/80 to-transparent" />
                    </div>

                    {/* Conteúdo textual */}
                    <div className="p-6 sm:p-8">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>

                        {/* Techs com ícones */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            {icons.map((IconComponent, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg text-sm"
                                >
                                    <IconComponent className="w-4 h-4 text-[#357ab7]" />
                                    <span>{techs[index]}</span>
                                </div>
                            ))}
                        </div>

                        {/* Descrição */}
                        <div className="prose prose-invert max-w-none text-justify">
                            {description.split('\n').map((paragraph, i) => (
                                <p key={i} className="mb-4 last:mb-0">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Botão GitHub */}
                        <div className="mt-8 flex justify-center">
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative h-14 w-48 md:h-16 md:w-52 border-2 border-white rounded-xl overflow-hidden 
              cursor-pointer flex items-center justify-center gap-2 transition-all duration-500 hover:scale-105 
              hover:border-[#022747]"
                            >
                                {/* Ícone e texto */}
                                <span className="z-10 flex items-center gap-2 text-white font-medium group-hover:text-[#022747ff] 
                     transition-colors duration-300">
                                    <Github className="w-5 h-5" />
                                    Ver no GitHub
                                </span>

                                {/* Efeito de background animado */}
                                <span className="absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 origin-bottom 
                     transition-transform duration-300 ease-in-out" />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}