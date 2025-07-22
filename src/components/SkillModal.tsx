import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { IconType } from "react-icons";

interface SkillModalProps {
  skill: {
    label: string;
    description: string;
    level: number; // 0 a 100
    context: string;
    icon: IconType;
  };
  onClose: () => void;
}

export const SkillModal = ({ skill, onClose }: SkillModalProps) => {
  const Icon = skill.icon;

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} // Fecha ao clicar fora do modal
    >
      <motion.div
        className="relative bg-transparent text-white p-8 rounded-3xl border-4 border-[#0f3c63ff] shadow-xl w-[90%] max-w-md"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={(e) => e.stopPropagation()} // Impede o clique interno de fechar
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-[#357ab7]">
          <X />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <Icon className="w-7 h-7 text-[#357ab7]" />
          <h2 className="text-2xl font-bold text-[#357ab7]">{skill.label}</h2>
        </div>

        <p className="mb-2">{skill.description}</p>
        <p className="text-sm text-gray-300 mb-4">Utilizada em: {skill.context}</p>

        <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
          <div
            className="shine-bar h-full transition-all duration-500"
            style={{ width: `${skill.level}%` }}
          />
        </div>
        <p className="text-right text-xs text-gray-200 mt-1">{skill.level}%</p>
      </motion.div>
    </motion.div>
  );
};
