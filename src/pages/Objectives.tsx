import { ObjectiveCard } from "../components/ObjectiveCard";

export default function Objectives() {
    return (
        <section className="relative min-h-screen bg-transparent py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 md:mb-16 shine-text">
                Meus Objetivos
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-7xl px-4">
                <ObjectiveCard
                    front="Segurança Defensiva"
                    back="Atuar em SOC e segurança de infraestrutura: monitoramento de ambientes complexos, detecção e resposta a incidentes e proteção de redes corporativas."
                />

                <ObjectiveCard
                    front="Certificações"
                    back="Já possuo Fortinet NSE 1 e NSE 2. Próximos passos: NSE 3 e NSE 4 (FortiGate Administrator), seguidas da Cisco CCNA em 2027."
                />

                <ObjectiveCard
                    front="Formação"
                    back="Concluir Análise e Desenvolvimento de Sistemas em julho de 2027, com TCC sobre uma plataforma de honeypots para detectar movimento lateral dentro de VLANs."
                />
            </div>
        </section>
    );
}