import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface SkillCardProps {
    icon: IconType;
    label: string;
    onClick: () => void;
}

export const SkillCard = ({ icon: Icon, label, onClick }: SkillCardProps) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative overflow-hidden cursor-pointer bg-transparent 
              h-28 w-full sm:h-32 text-white border-2 sm:border-3 border-white 
              rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col items-center 
              justify-center shadow-md transition-all duration-300 hover:border-[#0f3c63]"
        onClick={onClick}
    >
        <Icon className="z-10 w-8 h-8 sm:w-10 sm:h-10 mb-2 text-[#357ab7] group-hover:text-[#0f3c63]" />
        <span className="z-10 text-xs sm:text-sm font-medium text-center line-clamp-2 group-hover:text-[#0f3c63]">
            {label}
        </span>
        <span className="absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 
                   origin-bottom transition-transform duration-300 ease-in-out" />
    </motion.div>
);