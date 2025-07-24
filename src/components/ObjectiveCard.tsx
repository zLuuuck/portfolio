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
            className="w-full h-52 sm:h-64 md:h-72 lg:h-80 perspective"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
            <div
                className={clsx(
                    "relative w-full h-full transition-transform duration-500 transform-style-preserve-3d",
                    flipped ? "rotate-y-180" : ""
                )}
                onClick={() => setFlipped(!flipped)}
            >
                {/* Frente */}
                <div className="absolute w-full h-full text-white rounded-xl sm:rounded-2xl border-2 sm:border-3 border-white hover:border-[#022747] p-4 sm:p-6 backface-hidden flex flex-col justify-center items-center cursor-pointer group overflow-hidden transition-all duration-300 drop-shadow-lg hover:drop-shadow-xl">
                    <span className="z-10 text-lg sm:text-xl font-semibold text-center mb-3 sm:mb-4 transition-all duration-300 group-hover:text-[#022747]">
                        {front}
                    </span>
                    <Info className="z-10 absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:text-[#022747] transition-all duration-300" />
                    <span className="absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-in-out" />
                </div>

                {/* Verso */}
                <div className="absolute w-full h-full text-white rounded-xl sm:rounded-2xl border-2 sm:border-3 border-white hover:border-[#022747] p-4 sm:p-6 backface-hidden rotate-y-180 flex justify-center items-center text-center cursor-pointer group overflow-hidden transition-all duration-300 drop-shadow-lg hover:drop-shadow-xl bg-transparent">
                    <span className="z-10 text-sm sm:text-base font-medium leading-relaxed transition-all duration-300 group-hover:text-[#022747]">
                        {back}
                    </span>
                    <span className="absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-in-out" />
                </div>
            </div>
        </motion.div>
    );
};