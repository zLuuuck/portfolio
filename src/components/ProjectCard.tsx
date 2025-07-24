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
    delay?: number;
}

export default function ProjectCard({
    title,
    description,
    image,
    github,
    techs,
    icons,
    details,
    delay = 0
}: Props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: delay
                }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                className="group relative w-full max-w-[500px] border-2 md:border-3 border-white hover:border-[#357ab7] rounded-xl overflow-hidden cursor-pointer bg-gradient-to-b from-[#0d1d22] to-[#0a2a45] shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setOpen(true)}
            >
                {/* Overlay ao passar o mouse */}
                <div className="absolute inset-0 bg-[#357ab7] opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0" />

                {/* Conteúdo principal */}
                <div className="relative z-10 flex flex-col h-full">
                    <div className="h-48 sm:h-56 w-full overflow-hidden">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    <div className="p-4 sm:p-5 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl sm:text-2xl font-semibold line-clamp-1">{title}</h2>
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-white/70 hover:text-[#357ab7] transition-colors"
                            >
                                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                        </div>

                        <p className="text-sm text-white/80 line-clamp-3">{description}</p>

                        <div className="flex flex-wrap gap-2 mt-2">
                            {techs.slice(0, 3).map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-xs px-2 py-1 bg-white/10 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
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