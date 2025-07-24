import { MdWeb, MdOutlineLanguage, MdOutlineReportProblem } from "react-icons/md";
import { VscVscode, VscLaw } from "react-icons/vsc";
import { SiKalilinux, SiBookstack } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { TfiThought } from "react-icons/tfi";
import { FaSortAlphaUp } from "react-icons/fa";
import { RiPresentationFill } from "react-icons/ri";


import {
    FaPython,
    FaWindows,
    FaFedora,
    FaGitAlt,
    FaNetworkWired,
    FaDocker,
    FaUserSecret,
    FaComments,
    FaPeopleCarryBox,
    FaRegClock,
    FaHeadSideVirus,
    FaAddressBook,
    FaBrain,

} from "react-icons/fa6";

// HARD SKILLS
export default hardSkills = [
    {
        id: "web",
        label: "Programação Web",
        icon: MdWeb,
        description: "Desenvolvimento de aplicações web usando tecnologias como HTML5, CSS3, JS, PHP, MySQL e entre muitas outras.",
        level: 60,
        context: "Usado em projetos pessoais, portfólios, e sistemas em produção.",
    },
    {
        id: "vscode",
        label: "VS Code",
        icon: VscVscode,
        description: "Editor de código leve, poderoso e extensível, com suporte a várias linguagens e ferramentas de desenvolvimento.",
        level: 80,
        context: "Utilizado como principal ambiente de desenvolvimento, com extensões para front-end, back-end e DevOps.",
    },
    {
        id: "python",
        label: "Python",
        icon: FaPython,
        description: "Linguagem de programação versátil, ideal para automação, scripts, análise de dados e back-end.",
        level: 85,
        context: "Usado em scripts de automação, ferramentas de cibersegurança, análise de dados e desenvolvimento de APIs.",
    },
    {
        id: "windows",
        label: "Windows",
        icon: FaWindows,
        description: "Sistema operacional utilizado no desktop para tarefas cotidianas, produtividade e lazer.",
        level: 80,
        context: "Uso diário para tarefas administrativas (como Pacote Office, Teams, etc.) e jogos (descontrair hehe).",
    },
    {
        id: "linux",
        label: "Linux",
        icon: FaFedora,
        description: "Sistema operacional de código aberto, estável e altamente configurável, ideal para desenvolvimento e servidores.",
        level: 80,
        context: "Tarefas diárias, desenvolvimento e estudo de segurança e novas tecnologias. Atualmente, utilizo o Fedora.",
    },
    {
        id: "kali",
        label: "Kali Linux",
        icon: SiKalilinux,
        description: "Distribuição baseada em Debian voltada para testes de penetração e auditoria de segurança.",
        level: 75,
        context: "Utilizado para aprender e praticar técnicas de segurança, como análise de vulnerabilidades e hardening.",
    },
    {
        id: "git",
        label: "Git & Github",
        icon: FaGitAlt,
        description: "Ferramentas essenciais para controle de versão, colaboração e hospedagem de projetos de software.",
        level: 90,
        context: "Utilizado em todos os projetos para versionamento, colaboração e documentação de código.",
    },
    {
        id: "redes",
        label: "Redes",
        icon: FaNetworkWired,
        description: "Conhecimento sobre protocolos, camadas OSI, endereçamento IP, roteamento e segurança de redes.",
        level: 55,
        context: "Aplicado em estudos de cibersegurança, configuração de redes locais e diagnósticos.",
    },
    {
        id: "computador",
        label: "Suporte Técnico",
        icon: BiSupport,
        description: "Identificação e solução de problemas de hardware, software, redes e sistemas operacionais. Utilizando ferramentas como Anydesk, TeamViewer, etc.",
        level: 70,
        context: "Experiência prática com montagem, manutenção e suporte a usuários.",
    },
    {
        id: "docker",
        label: "Docker",
        icon: FaDocker,
        description: "Plataforma para criação, deploy e execução de aplicações em containers de forma isolada e reproduzível.",
        level: 60,
        context: "Utilizado em projetos com ambientes isolados e testes locais com microserviços.",
    },
    {
        id: "cybersecurity",
        label: "Cibersegurança",
        icon: FaUserSecret,
        description: "Conhecimentos em fundamentos de segurança, testes de intrusão, análise de vulnerabilidades e hardening.",
        level: 60,
        context: "Aplicado em estudos com Kali Linux, CTFs, laboratórios práticos e leitura de CVEs.",
    },
    {
        id: "ingles",
        label: "Inglês Técnico",
        icon: MdOutlineLanguage,
        description: "Leitura, compreensão e escrita de conteúdos técnicos em inglês, como documentação, artigos e fóruns.",
        level: 75,
        context: "Usado diariamente em estudos, documentação oficial, cursos internacionais e materiais de segurança.",
    },
];

// SOFT SKILLS
const softSkills = [
    {
        id: "comunicacao",
        label: "Comunicação Clara",
        icon: FaComments,
        description: "Facilidade em transmitir ideias de forma objetiva e adaptada ao público.",
        level: 80,
        context: "Aplicada em reuniões, apresentações, suporte técnico e escrita de documentação.",
    },
    {
        id: "autodidata",
        label: "Aprendizado Autodidata",
        icon: SiBookstack,
        description: "Habilidade de aprender de forma independente através de cursos, vídeos, documentação e prática.",
        level: 90,
        context: "Usado diariamente para dominar novas tecnologias, linguagens e ferramentas.",
    },
    {
        id: "resolucao",
        label: "Resolução de Problemas",
        icon: MdOutlineReportProblem,
        description: "Capacidade de identificar, analisar e resolver desafios técnicos ou operacionais.",
        level: 85,
        context: "Aplicada no desenvolvimento, testes e atendimento ao usuário.",
    },
    {
        id: "organização",
        label: "Organização Pessoal",
        icon: FaSortAlphaUp,
        description: "Boa gestão de tempo, tarefas e prioridades com uso de ferramentas como Notion e Planify.",
        level: 80,
        context: "Utilizado para balancear estudos, projetos pessoais e trabalho.",
    },
    {
        id: "trabalho",
        label: "Trabalho em Equipe",
        icon: FaPeopleCarryBox,
        description: "Capacidade de colaborar, ouvir e contribuir ativamente em grupos multidisciplinares.",
        level: 80,
        context: "Vivenciada em projetos em grupo, pareamento de código, revisões de pull requests e dinâmicas colaborativas.",
    },
    {
        id: "adaptabilidade",
        label: "Adaptabilidade",
        icon: FaHeadSideVirus,
        description: "Facilidade para lidar com mudanças e se ajustar rapidamente a novos desafios e tecnologias.",
        level: 85,
        context: "Demonstrada ao me adaptar a diferentes stacks, ambientes de trabalho e mudanças inesperadas em projetos.",
    },
    {
        id: "pensamento-critico",
        label: "Pensamento Crítico",
        icon: TfiThought,
        description: "Capacidade de avaliar informações de forma lógica, questionar premissas e tomar decisões assertivas.",
        level: 80,
        context: "Utilizado na análise de falhas, interpretação de logs e escolha de soluções mais eficazes para cada cenário.",
    },
    {
        id: "lideranca",
        label: "Liderança",
        icon: RiPresentationFill,
        description: "Habilidade de motivar, guiar e tomar decisões visando o progresso coletivo.",
        level: 80,
        context: "Exercida ao coordenar projetos pessoais, orientar colegas e assumir responsabilidades estratégicas.",
    },
    {
        id: "etica",
        label: "Ética Profissional",
        icon: VscLaw,
        description: "Comprometimento com a integridade, honestidade e respeito no ambiente de trabalho.",
        level: 80,
        context: "Aplicada ao lidar com dados sensíveis, respeitar prazos e manter conduta responsável com colegas e clientes.",
    },
    {
        id: "pontualidade",
        label: "Pontualidade",
        icon: FaRegClock,
        description: "Compromisso em cumprir horários e prazos estabelecidos com consistência.",
        level: 80,
        context: "Demonstrada ao entregar tarefas dentro do cronograma e participar pontualmente de reuniões e compromissos.",
    },
    {
        id: "responsabilidade",
        label: "Responsabilidade",
        icon: FaAddressBook,
        description: "Consciência e comprometimento com as consequências das próprias ações.",
        level: 80,
        context: "Praticada ao assumir tarefas de forma proativa, cumprir metas e buscar soluções quando surgem imprevistos.",
    },
    {
        id: "resiliencia",
        label: "Resiliência",
        icon: FaBrain,
        description: "Capacidade de lidar com pressões, falhas e mudanças mantendo o equilíbrio emocional.",
        level: 80,
        context: "Vivenciada ao superar dificuldades técnicas, lidar com feedbacks e manter o foco em ambientes desafiadores.",
    }
];