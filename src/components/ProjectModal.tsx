// components/ProjectModal.tsx
import { Github, X } from "lucide-react";
import { useEffect } from "react";
import type { IconType } from "react-icons";

interface Props {
    title: string;
    description: string;
    techs: string[];
    icons: IconType[];
    github: string;
    onClose: () => void;
}

export default function ProjectModal({ title, description, techs, icons, github, onClose }: Props) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className="relative max-w-lg w-full bg-white/5 border-4 border-white/30 rounded-2xl p-6 text-white backdrop-blur-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="absolute top-4 right-4" onClick={onClose}>
                    <X className="w-6 h-6 hover:text-red-400" />
                </button>
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="mb-4 text-white/80">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {icons.map((IconComponent, index) => (
                        <IconComponent key={index} className="w-6 h-6 text-[#357ab7]" />
                    ))} 
                    {techs.map((tech, i) => (
                        <span
                            key={i}
                            className="px-2 py-1 border border-white/30 rounded-full text-sm bg-white/10"
                        >

                            {tech}
                        </span>
                    ))}
                </div>
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-400 hover:underline"
                >
                    <Github className="w-4 h-4" /> Ver no GitHub
                </a>
            </div>
        </div>
    );
}
