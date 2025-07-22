// components/SkillCard.tsx
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

interface SkillCardProps {
    icon: LucideIcon | IconType;
    label: string;
    onClick: () => void;
}

export const SkillCard = ({ icon: Icon, label, onClick }: SkillCardProps) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative overflow-hidden cursor-pointer bg-transparent h-30 md:h-30 w-50 md:w-50 text-white border-3 border-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-md  transition-all duration-500 drop-shadow-2xl hover:scale-105 hover:border-[#0f3c63ff]"
        onClick={onClick}
    >
        <Icon className="z-10 w-10 h-10 mb-2"/>
        <span className="z-10 text-xs font-semibold color-black">{label}</span>
        <span className="absolute inset-0 bg-[#357ab7] scale-y-0  group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out"></span>

    </motion.div>
);

