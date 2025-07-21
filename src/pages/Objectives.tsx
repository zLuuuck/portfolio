// pages/Objectives.tsx
import { ObjectiveCard } from "../components/ObjectiveCard";

export default function Objectives() {
    return (
        <div className="relative min-h-screen bg-transparent py-24 px-4 sm:px-8 flex flex-col items-center justify-center overflow-hidden">
            <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-16 shine-text">
                Meus Objetivos
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl w-full px-4">
                <ObjectiveCard
                    front="Especialista em Cibersegurança"
                    back="Me aprofundar em Red Team e Pentest Profissional, obtendo certificações como OSCP, e contribuindo para segurança de grandes empresas."
                />
                <ObjectiveCard
                    front="Concluir Meu Portfólio Profissional"
                    back="Criar um portfólio moderno, funcional e acessível que destaque meus projetos em desenvolvimento web e segurança da informação."
                />
                <ObjectiveCard
                    front="Desenvolvimento Pessoal e Saúde"
                    back="Manter uma rotina saudável com treinos diários, boa alimentação e equilíbrio mental, focando em qualidade de vida e produtividade."
                />
            </div>
        </div>
    );
}
