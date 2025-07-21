import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import useLenis from "./hooks/useLenis";
import Objectives from "./pages/Objectives";

function App() {
  const lenisRef = useLenis(); // <- Agora retorna o ref

  return (
    <>
      <Header lenisRef={lenisRef} />
    <main className="bg-gradient-to-b from-black via-[#0d1d22] to-[#0a2a45] text-white">
        <section id="home">
          <Home />
        </section>
        <section id="objectives">
          <Objectives />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
