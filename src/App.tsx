import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import useLenis from "./hooks/useLenis";

function App() {
  const lenisRef = useLenis(); // <- Agora retorna o ref

  return (
    <>
      <Header lenisRef={lenisRef} />
      <main>
        <section id="home">
          <Home />
        </section>
          <About />
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
