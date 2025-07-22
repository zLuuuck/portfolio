// pages/Projects.tsx
import ProjectCard from "../components/ProjectCard";
import {
  FaPython,
  FaWindows,
  FaFedora,

} from "react-icons/fa6";

const projetos = [
  {
    title: "Rooms Write-Ups",
    description: "Breve descrição do projeto. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud fjidsiofsdfsdifnoisdnfonsd.",
    image: "/thmxhtb.png",
    github: "https://github.com/zLuuuck/Room-WriteUps",
    techs: ["React", "TypeScript", "TailwindCSS"],
    icons: [FaPython, FaWindows, FaFedora],
    details: "Descrição detalhada do projeto, seus objetivos e funcionalidades."
  },
  // Adicione mais projetos conforme necessário
  {
    title: "Projetos Academicos",
    description: "Repositórios do github com projetos acadêmicos da faculdade de análise e desenvolvimento de sistemas.",
    image: "/tuiuti.png",
    github: "https://github.com/stars/zLuuuck/lists/university-projects",
    techs: ["React", "TypeScript", "TailwindCSS"],
    icons: [FaPython, FaWindows, FaFedora],
    details: "Descrição detalhada do projeto, seus objetivos e funcionalidades."
  },
    {
    title: "Portfólio Pessoal",
    description: "Este é o meu portfólio pessoal, onde apresento meus projetos e habilidades. (literalmente este kk)",
    image: "/tuiuti.png",
    github: "https://github.com/stars/zLuuuck/lists/university-projects",
    techs: ["React", "TypeScript", "TailwindCSS"],
    icons: [FaPython, FaWindows, FaFedora],
    details: "Descrição detalhada do projeto, seus objetivos e funcionalidades."
  },
    {
    title: "Matemática com Python",
    description: "Comecei a estudar Python, e fiz este projeto para praticar matemática quando estava no ensino médio.",
    image: "/tuiuti.png",
    github: "https://github.com/stars/zLuuuck/lists/university-projects",
    techs: ["React", "TypeScript", "TailwindCSS"],
    icons: [FaPython, FaWindows, FaFedora],
    details: "Descrição detalhada do projeto, seus objetivos e funcionalidades."
  },
];

export const Projects = () => {
  return (
    <div className="min-h-screen px-10 py-20 text-white">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 shine-text text-center p-6">Projetos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-7xl mx-auto">
        {projetos.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
