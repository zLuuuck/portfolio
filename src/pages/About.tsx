import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 py-12 md:py-20">
      {/* Título da Seção */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 md:mb-16 shine-text"
      >
        Sobre mim
      </motion.h2>

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        {/* Texto - vem primeiro no mobile, esquerda no desktop */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 text-white"
        >
          <div className="text-center ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              Lucas Toterol Rodrigues
            </h1>
            <h2 className="text-3xl sm:text-4xl text-white mb-6 shine-text font-bold">
              ~ zLuuuck ~
            </h2>
          </div>
          
          <div className="text-base sm:text-lg leading-relaxed text-gray-300 text-center md:text-center space-y-4">
            <p>
              Sou <span className="font-semibold text-[#357ab7]">estagiário de Infraestrutura e Redes</span> na Microtel IT Solutions, consultoria de TI de Curitiba, e curso o 4º semestre de <span className="font-semibold text-[#357ab7]">Análise e Desenvolvimento de Sistemas</span> na Universidade Tuiuti do Paraná, com conclusão prevista para julho de 2027.
            </p>

            <p>
              No dia a dia administro firewalls <span className="font-semibold text-[#357ab7]">FortiGate</span>, analiso logs no <span className="font-semibold text-[#357ab7]">FortiAnalyzer</span>, faço troubleshooting de <span className="font-semibold text-[#357ab7]">VPNs IPsec e SSL</span> e trabalho com <span className="font-semibold text-[#357ab7]">Active Directory</span>, GPO e <span className="font-semibold text-[#357ab7]">AWS</span> em ambientes de clientes. Também participo de atividades de pré-venda técnica.
            </p>

            <p>
              Meu objetivo é <span className="font-semibold text-[#357ab7]">segurança defensiva</span>: SOC, monitoramento e resposta a incidentes. Para isso estudo para a Fortinet NSE 4 e a Cisco CCNA, mantenho um home lab de redes e pratico no <span className="font-semibold text-[#357ab7]">TryHackMe</span> e no <span className="font-semibold text-[#357ab7]">Hack The Box</span>, porque entender o ataque ajuda a construir a defesa.
            </p>

            <p>
              Fora do trabalho, dou aulas voluntárias de <span className="font-semibold text-[#357ab7]">informática básica</span> aos sábados na EIC São Braz.
            </p>
          </div>
        </motion.div>

        {/* Imagem - vem depois no mobile, direita no desktop */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-[440px] md:h-[440px] rounded-2xl bg-gradient-to-r from-[#0284c7] via-[#3b82f6] to-[#0ea5e9] blur-3xl opacity-40 animate-spin-slow" />
          <img
            src="/eu2.jpeg"
            alt="Lucas Toterol"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-[440px] md:h-[440px] object-cover rounded-2xl border-[8px] sm:border-[10px] border-[#022747] shadow-2xl relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};