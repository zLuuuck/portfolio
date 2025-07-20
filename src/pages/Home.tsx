import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Home = () => {
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (homeRef.current) {
      gsap.fromTo(
        homeRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div ref={homeRef} className="flex items-center justify-center h-screen bg-black text-white">
      <h1 className="text-5xl font-bold">Welcome to my Portfolio</h1>
      
    
    </div>

  );
};
