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
                    front="Aprimorar Habilidades em Cibersegurança"
                    back="Atuar com Red Team e testes de intrusão em ambientes reais, identificando vulnerabilidades críticas e fortalecendo a segurança de grandes organizações."
                />

                <ObjectiveCard
                    front="Certificações e Aprendizado Contínuo"
                    back="Comprometido com o desenvolvimento profissional contínuo, estudo para obter certificações relevantes em cibersegurança, como CompTIA Security+, Pentest+, CEH, OSCP e AWS Certified Security – Specialty."
                />
                
                <ObjectiveCard
                    front="Desenvolvimento Pessoal e Saúde"
                    back="Manter uma rotina saudável com treinos diários, boa alimentação e equilíbrio mental, focando em qualidade de vida e produtividade."
                />
            </div>
        </div>
    );
}
