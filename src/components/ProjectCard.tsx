// components/ProjectCard.tsx
import { Github } from "lucide-react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import type { IconType } from "react-icons";
import { motion } from "framer-motion";

interface Props {
    title: string;
    description: string;
    image: string;
    github: string;
    techs: string[];
    icons: IconType[];
    details: string;
}


export default function ProjectCard({ title, description, image, github, techs, icons, details }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group relative w-full max-w-[500px] border-4 border-white hover:border-[#0f3c63ff] rounded-2xl overflow-hidden cursor-pointer bg-transparent shadow-2xl transition-all duration-500"
                onClick={() => setOpen(true)}
            >
                {/* Overlay ao passar o mouse */}
                <span className="absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out z-0" />

                {/* Conteúdo principal */}
                <div className="relative z-10 flex flex-col h-full">
                    <div className="h-60">
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex flex-col justify-between h-40">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-semibold ">{title}</h2>
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Github className="w-7 h-7 hover:text-[#0f3c63ff] transition" />
                            </a>
                        </div>
                        <p className="text-sm mt-2 text-white/80 text-justify">{description}</p>
                    </div>
                </div>
            </motion.div>

            {open && (
                <ProjectModal
                    title={title}
                    description={details}
                    techs={techs}
                    icons={icons}
                    github={github}
                    image={image}
                    onClose={() => setOpen(false)}
                />
            )}
        </>
    );
}
