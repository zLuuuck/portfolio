import { motion } from "framer-motion";
import { X } from "lucide-react";
import type { IconType } from "react-icons";

interface SkillModalProps {
  skill: {
    label: string;
    description: string;
    level: number;
    context: string;
    icon: IconType;
  };
  onClose: () => void;
}

export const SkillModal = ({ skill, onClose }: SkillModalProps) => {
  const Icon = skill.icon;

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative bg-gradient-to-br from-[#0d1d22] to-[#0a2a45] text-white 
                  p-6 sm:p-8 rounded-2xl border-2 border-[#357ab7] shadow-xl w-full max-w-md"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-[#357ab7] hover:text-white transition-colors"
          aria-label="Fechar modal"
        >
          <X size={24} />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <Icon className="w-8 h-8 text-[#357ab7]" />
          <h2 className="text-xl sm:text-2xl font-bold">{skill.label}</h2>
        </div>

        <div className="space-y-4">
          <p className="text-sm sm:text-base text-gray-300">{skill.description}</p>
          
          <div>
            <h3 className="font-medium text-[#357ab7] mb-1">Contexto de uso:</h3>
            <p className="text-sm text-gray-400">{skill.context}</p>
          </div>

          <div className="pt-2">
            <div className="flex justify-between text-sm mb-1">
              <span>Proficiência:</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
              <div 
                className="shine-bar h-full rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};