import { ObjectiveCard } from "../components/ObjectiveCard";

export default function Objectives() {
    return (
        <section className="relative min-h-screen bg-transparent py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 md:mb-16 shine-text">
                Meus Objetivos
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-7xl px-4">
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
        </section>
    );
}