// components/SkillModal.tsx
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface SkillModalProps {
  skill: {
    label: string;
    description: string;
    level: number; // 0 a 100
    context: string;
  };
  onClose: () => void;
}

export const SkillModal = ({ skill, onClose }: SkillModalProps) => (
  <motion.div
    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="bg-[#121212] text-white p-8 rounded-2xl shadow-lg w-[90%] max-w-md relative"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-white">
        <X />
      </button>
      <h2 className="text-2xl font-bold mb-4">{skill.label}</h2>
      <p className="mb-2">{skill.description}</p>
      <p className="text-sm text-gray-400 mb-4">Utilizada em: {skill.context}</p>
      <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
        <div
          className="bg-green-500 h-full transition-all duration-500"
          style={{ width: `${skill.level}%` }}
        />
      </div>
      <p className="text-right text-xs text-gray-300 mt-1">{skill.level}%</p>
    </motion.div>
  </motion.div>
);
