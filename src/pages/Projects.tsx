// pages/Projects.tsx
import ProjectCard from "../components/ProjectCard";
import {
  FaPython,
  FaReact,
  FaGitAlt,
  FaGear
} from "react-icons/fa6";
import { MdWeb } from "react-icons/md";

import { SiKalilinux, SiOpenvpn, SiLibreoffice, SiTypescript, SiTailwindcss } from "react-icons/si";

const projetos = [
  {
    title: "Rooms Write-Ups",
    description:
      "Coleta de anotações, estratégias e resoluções de máquinas e laboratórios disponíveis em plataformas como TryHackMe e Hack The Box.",
    image: "/thmxhtb.png",
    github: "https://github.com/zLuuuck/Room-WriteUps",
    techs: ["Python", "Kali Linux", "OpenVPN", "Raciocínio Lógico"],
    icons: [FaPython, SiKalilinux, SiOpenvpn, FaGear],
    details:
      "Este repositório reúne write-ups detalhados de desafios de cibersegurança encontrados em plataformas como TryHackMe e Hack The Box. Cada write-up contém descrições passo a passo das técnicas utilizadas, ferramentas aplicadas, métodos de exploração, escalonamento de privilégios e resolução completa das máquinas. O objetivo é consolidar o aprendizado prático, documentar o raciocínio por trás de cada solução e servir como referência pessoal e comunitária no estudo de segurança ofensiva."
  },
  {
    title: "Projetos Acadêmicos",
    description:
      "Repositório com diversos projetos desenvolvidos durante o curso de Análise e Desenvolvimento de Sistemas.",
    image: "/tuiuti.png",
    github: "https://github.com/stars/zLuuuck/lists/university-projects",
    techs: ["Ferramentas Web", "Libre Office"],
    icons: [MdWeb, SiLibreoffice],
    details:
      "Este repositório agrupa trabalhos e projetos desenvolvidos ao longo da graduação em Análise e Desenvolvimento de Sistemas. Inclui aplicações web, scripts em Python, banco de dados, algoritmos e outras implementações relacionadas às disciplinas de programação, engenharia de software, estrutura de dados, segurança e afins. A finalidade do projeto é documentar a evolução acadêmica, facilitar futuras consultas e demonstrar domínio dos conteúdos trabalhados em sala de aula."
  },
  {
    title: "Portfólio Pessoal",
    description:
      "Este é o meu portfólio pessoal, desenvolvido para apresentar meus projetos, habilidades e trajetória na área de tecnologia.",
    image: "/tuiuti.png",
    github: "https://github.com/zLuuuck/portfolio",
    techs: ["React", "TypeScript", "TailwindCSS", "Git"],
    icons: [FaReact, SiTypescript, SiTailwindcss, FaGitAlt],
    details:
      "Este site foi criado com o objetivo de centralizar e expor de forma clara e visualmente agradável minhas principais experiências, competências técnicas e projetos desenvolvidos. A estrutura foi construída utilizando React com TypeScript e estilização em TailwindCSS, com atenção especial à responsividade, fluidez da navegação e identidade visual. O projeto também explora conceitos de animações com GSAP, transições suaves com Lenis e boas práticas de organização de componentes. O portfólio é constantemente atualizado conforme novos projetos são finalizados."
  },
  {
    title: "Matemática com Python",
    description:
      "Comecei a estudar Python e desenvolvi este projeto como uma forma prática de aplicar conceitos matemáticos aprendidos no ensino médio.",
    image: "/math-python.png",
    github: "https://github.com/zLuuuck/Matematica",
    techs: ["Python", "Raciocínio Lógico"],
    icons: [FaPython, FaGear],
    details:
      "Este projeto foi desenvolvido com o propósito de praticar programação em Python por meio da resolução de problemas matemáticos do ensino médio. Contém scripts que implementam funções para cálculo de equações do 1º e 2º grau, progressões, fatorações, regras de três, trigonometria, entre outros temas. O código é estruturado com foco na clareza e didática, podendo ser utilizado tanto para estudos quanto como ferramenta auxiliar no aprendizado de matemática e lógica computacional."
  }
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
