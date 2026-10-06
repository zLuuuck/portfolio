// pages/Skills.tsx
import { useState } from "react";
import { SkillCard } from "../components/SkillCard";
import { SkillModal } from "../components/SkillModal";
import { MdWeb, MdOutlineLanguage, MdOutlineReportProblem } from "react-icons/md";
import { VscTerminalPowershell } from "react-icons/vsc";
import { SiKalilinux, SiBookstack, SiFortinet } from "react-icons/si";
import { TfiThought } from "react-icons/tfi";
import { FaSortAlphaUp } from "react-icons/fa";
import { RiPresentationFill } from "react-icons/ri";

import {
  FaPython,
  FaFedora,
  FaGitAlt,
  FaNetworkWired,
  FaDocker,
  FaUserShield,
  FaComments,
  FaPeopleCarryBox,
  FaAws,
  FaMicrosoft,
  FaRoute,
  FaMagnifyingGlassChart,
  FaFileLines,
  FaServer,
} from "react-icons/fa6";

// Níveis descritivos no lugar de porcentagem: dizem onde a habilidade foi usada,
// o que é verificável numa entrevista.
const PROFISSIONAL = "Uso profissional";
const PROJETOS = "Projetos e estudo";
const LAB = "Laboratório e estudo";

// HARD SKILLS
const hardSkills = [
  {
    id: "fortigate",
    label: "FortiGate",
    icon: SiFortinet,
    description: "Firewall de próxima geração da Fortinet: políticas, NAT, perfis de segurança, inspeção SSL, filtragem web e DNS.",
    level: PROFISSIONAL,
    context: "Administração diária de firewalls de clientes no estágio, além de laboratório próprio em FortiGate VM para a NSE 4.",
  },
  {
    id: "faz-ems",
    label: "FortiAnalyzer e EMS",
    icon: FaMagnifyingGlassChart,
    description: "Análise de logs e eventos no FortiAnalyzer e gestão de endpoints com FortiClient EMS.",
    level: PROFISSIONAL,
    context: "Investigação de bloqueios e incidentes a partir de logs, e processamento automatizado de relatórios de segurança dos endpoints.",
  },
  {
    id: "vpn",
    label: "VPN IPsec e SSL",
    icon: FaRoute,
    description: "Túneis IPsec site a site (IKEv2, seletores de Phase 2) e acesso remoto via SSL VPN.",
    level: PROFISSIONAL,
    context: "Configuração e troubleshooting de VPNs entre clientes, parceiros e nuvem, incluindo falhas após oscilação de link.",
  },
  {
    id: "redes",
    label: "Redes e Switching",
    icon: FaNetworkWired,
    description: "Endereçamento IP, roteamento, VLANs e topologia em camadas (núcleo, distribuição e acesso).",
    level: PROFISSIONAL,
    context: "Projetos de rede com FortiSwitch no estágio e home lab com roteador Cisco 1905 e GNS3 como preparação para a CCNA.",
  },
  {
    id: "ad",
    label: "Active Directory e GPO",
    icon: FaMicrosoft,
    description: "Administração de usuários, OUs e políticas de grupo em domínios Windows, incluindo AWS Managed AD.",
    level: PROFISSIONAL,
    context: "Diagnóstico de GPOs que não aplicavam, implantação de agente de inventário via GPO e automação do ciclo de vida de usuários.",
  },
  {
    id: "aws",
    label: "AWS",
    icon: FaAws,
    description: "Serviços de infraestrutura da AWS: EC2, VPC, Managed AD e conectividade com redes locais.",
    level: PROFISSIONAL,
    context: "Suporte a ambientes de clientes hospedados na AWS e integrações via VPN site a site.",
  },
  {
    id: "incidentes",
    label: "Resposta a Incidentes",
    icon: FaUserShield,
    description: "Investigação de causa raiz a partir de logs e sintomas, contenção e documentação do incidente.",
    level: PROFISSIONAL,
    context: "Casos reais de VPN, DNS/FQDN e inspeção SSL; acompanhamento de alertas PSIRT e campanhas de exposição de credenciais.",
  },
  {
    id: "virtualizacao",
    label: "Virtualização e Backup",
    icon: FaServer,
    description: "VMware, KVM/QEMU e Veeam Backup & Replication, com foco em dimensionamento e arquitetura 3-2-1.",
    level: PROFISSIONAL,
    context: "Sizing de ambientes VMware, servidores e storage Dell e backup Veeam em atividades de pré-venda técnica.",
  },
  {
    id: "powershell",
    label: "PowerShell",
    icon: VscTerminalPowershell,
    description: "Automação de tarefas administrativas em Windows e Active Directory.",
    level: PROFISSIONAL,
    context: "Scripts de inativação de usuários com trilha de auditoria, consultas ao AD e processamento de relatórios em CSV.",
  },
  {
    id: "python",
    label: "Python",
    icon: FaPython,
    description: "Linguagem para automação, ferramentas internas e back-end.",
    level: PROFISSIONAL,
    context: "Back-end em Flask de um portal sobre a API do FortiGate, agentes de monitoramento e ferramentas de apoio ao dia a dia.",
  },
  {
    id: "linux",
    label: "Linux",
    icon: FaFedora,
    description: "Administração de sistemas Linux (Fedora, Debian, Kali) via terminal.",
    level: PROFISSIONAL,
    context: "Sistema operacional do dia a dia (Fedora), com virtualização KVM e Docker; servidores Linux em projetos acadêmicos.",
  },
  {
    id: "docker",
    label: "Docker",
    icon: FaDocker,
    description: "Containers para empacotar e executar aplicações de forma isolada e reproduzível.",
    level: PROJETOS,
    context: "Ambiente de execução do portal de autoatendimento e de projetos acadêmicos com múltiplos serviços.",
  },
  {
    id: "web",
    label: "Desenvolvimento Web",
    icon: MdWeb,
    description: "Aplicações web com React, TypeScript, Tailwind e back-end em Flask, com banco PostgreSQL.",
    level: PROJETOS,
    context: "Portal de autoatendimento para FortiGate, este portfólio e projetos integradores da faculdade.",
  },
  {
    id: "ofensiva",
    label: "Segurança Ofensiva",
    icon: SiKalilinux,
    description: "Enumeração, exploração e escalonamento de privilégios em ambientes controlados.",
    level: LAB,
    context: "Máquinas do TryHackMe e Hack The Box com write-ups publicados, e curso Cisco Ethical Hacker. Uso o lado ofensivo para entender o que preciso defender.",
  },
  {
    id: "git",
    label: "Git e GitHub",
    icon: FaGitAlt,
    description: "Controle de versão, branches e colaboração em repositórios.",
    level: PROFISSIONAL,
    context: "Versionamento de código e da base de conhecimento do time, mantida em Obsidian com Git.",
  },
  {
    id: "ingles",
    label: "Inglês Técnico",
    icon: MdOutlineLanguage,
    description: "Nível intermediário (B1), com leitura técnica fluente.",
    level: PROFISSIONAL,
    context: "Leitura diária de documentação de fabricantes, boletins de segurança e materiais de certificação.",
  },
];

// SOFT SKILLS
const softSkills = [
  {
    id: "resolucao",
    label: "Análise de Causa Raiz",
    icon: MdOutlineReportProblem,
    description: "Investigar até explicar o sintoma atual e por que funcionava antes, em vez de parar na primeira hipótese.",
    level: PROFISSIONAL,
    context: "Aplicada nos incidentes do estágio, como a GPO que falhava por um bloqueio no firewall e não por erro na própria política.",
  },
  {
    id: "documentacao",
    label: "Documentação Técnica",
    icon: FaFileLines,
    description: "Transformar conhecimento tácito em procedimentos e registros que outras pessoas conseguem seguir.",
    level: PROFISSIONAL,
    context: "Estruturei a base de conhecimento do time em Obsidian, com taxonomia, modelos e versionamento em Git.",
  },
  {
    id: "comunicacao",
    label: "Comunicação",
    icon: FaComments,
    description: "Explicar temas técnicos de forma objetiva, ajustando o nível ao público.",
    level: PROFISSIONAL,
    context: "Interação com clientes em chamados, apresentações na faculdade e aulas para iniciantes.",
  },
  {
    id: "ensino",
    label: "Ensino",
    icon: RiPresentationFill,
    description: "Planejar e conduzir aulas para quem está começando do zero.",
    level: "Voluntariado",
    context: "Instrutor voluntário de informática básica na EIC São Braz, com curso de 8 aulas criado do zero, e auxiliar de instrutor de judô para crianças.",
  },
  {
    id: "autodidata",
    label: "Aprendizado Autodidata",
    icon: SiBookstack,
    description: "Aprender de forma independente com documentação oficial, laboratórios e prática.",
    level: PROFISSIONAL,
    context: "Preparação para NSE 4 e CCNA com laboratórios próprios, paralela ao estágio e à faculdade.",
  },
  {
    id: "pensamento-critico",
    label: "Pensamento Crítico",
    icon: TfiThought,
    description: "Questionar premissas e validar hipóteses com evidência antes de agir.",
    level: PROFISSIONAL,
    context: "Interpretação de logs, revisão de propostas técnicas e escolha de soluções para cada cenário.",
  },
  {
    id: "trabalho",
    label: "Trabalho em Equipe",
    icon: FaPeopleCarryBox,
    description: "Colaborar e dividir responsabilidades em times técnicos e acadêmicos.",
    level: PROFISSIONAL,
    context: "Atendimento compartilhado de clientes no estágio e liderança de grupos em trabalhos da faculdade.",
  },
  {
    id: "organizacao",
    label: "Organização",
    icon: FaSortAlphaUp,
    description: "Gestão de tempo e prioridades entre trabalho, faculdade, certificações e voluntariado.",
    level: PROFISSIONAL,
    context: "Planejamento do semestre e dos estudos em Obsidian, com prazos e entregas acompanhados por projeto.",
  },
];

export const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<
    typeof hardSkills[0] | typeof softSkills[0] | null
  >(null);

  return (
    <div className="min-h-screen text-white px-6 py-20 ">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 shine-text">Minhas Habilidades</h1>

        {/* Hard Skills */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-2">Hard Skills</h2>
        <p className="text-gray text-lg mb-12">
          Tecnologias que uso no trabalho e nos meus laboratórios.
          Clique em uma para ver onde ela foi aplicada.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {hardSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              icon={skill.icon}
              label={skill.label}
              onClick={() => setSelectedSkill(skill)}
            />
          ))}
        </div>

        {/* Soft Skills */}
        <h2 className="text-3xl sm:text-4xl font-semibold mt-12 mb-2">Soft Skills</h2>
        <p className="text-gray text-lg mb-12">
          Habilidades de trabalho que aparecem no dia a dia, cada uma com um exemplo concreto.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {softSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              icon={skill.icon}
              label={skill.label}
              onClick={() => setSelectedSkill(skill)}
            />
          ))}
        </div>
      </div>

      {selectedSkill && (
        <SkillModal
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </div>
  );
};
