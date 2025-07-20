import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // ScrollTrigger + Lenis
    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length && typeof value === "number") {
          lenis.scrollTo(value);
        }
        return window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => lenis.raf(performance.now()));
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.removeEventListener("refresh", () => lenis.raf(performance.now()));
    };
  }, []);

  return lenisRef;
};

export default useLenis;
