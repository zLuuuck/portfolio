// components/ObjectiveCard.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import clsx from "clsx";

interface ObjectiveCardProps {
    front: string;
    back: string;
}

export const ObjectiveCard = ({ front, back }: ObjectiveCardProps) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <motion.div
            className="w-full h-60 sm:h-72 md:h-80 perspective"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div
                className={clsx(
                    "relative w-full h-full transition-transform duration-700 transform-style-preserve-3d",
                    flipped ? "rotate-y-180" : ""
                )}
                onClick={() => setFlipped(!flipped)}
            >
                {/* Frente */}
                <div className="absolute w-full h-full text-white rounded-2xl border-3 border-white hover:border-[#022747ff] p-6 backface-hidden flex flex-col justify-center items-center cursor-pointer group overflow-hidden transition-all duration-500 drop-shadow-2xl hover:scale-105">
                    <span className="z-10 text-xl font-semibold text-center mb-4 transition-all duration-300 group-hover:text-[#022747ff] ">
                        {front}
                    </span>
                    <Info className="z-10 absolute bottom-4 right-4 w-5 h-5 opacity-70 group-hover:text-[#022747ff] transition-all duration-300" />
                    <span className="absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out" />
                </div>

                {/* Verso */}
                <div className="absolute w-full h-full text-white rounded-2xl border-3 border-white hover:border-[#022747ff] p-6 backface-hidden rotate-y-180 flex justify-center items-center text-center cursor-pointer group overflow-hidden transition-all duration-500 drop-shadow-2xl hover:scale-105 bg-transparent">
                    <span className="z-10 font-medium leading-relaxed transition-all duration-300 group-hover:text-[#022747ff]">{back}</span>
                    <span className="absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out" />

                </div>
            </div>
        </motion.div>
    );
};
