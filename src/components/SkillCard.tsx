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
        className="m-auto group relative overflow-hidden cursor-pointer bg-transparent 
                  h-30 w-38  //Tamanho fixo quadrado para mobile (6rem = 24 * 0.25rem)
                  sm:h-28 sm:w-30 // Tamanho um pouco maior em telas maiores
                  md:h-30 md:w-45  // Tamanho original em desktop
                  lg:h-40 lg:w-55  // Tamanho maior em telas grandes
                  text-white border-3 border-white rounded-2xl 
                  p-4 sm:p-6  // Padding menor em mobile
                  flex flex-col items-center justify-center 
                  shadow-md transition-all duration-500 
                  drop-shadow-2xl hover:scale-105 hover:border-[#0f3c63ff]"
        onClick={onClick}
    >
        <Icon className="z-10 w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-1 sm:mb-2" />
        <span className="z-10 text-xs sm:text-sm font-semibold color-black text-center">
            {label}
        </span>
        <span className="absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out"></span>
    </motion.div>

);

