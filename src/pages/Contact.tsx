import { Github, Linkedin, Mail, Phone } from "lucide-react";

import React from "react";

export const Contact: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white px-4 py-10">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 shine-text text-center p-6">Contato</h1>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl border-3 border-white p-6 rounded-3xl backdrop-blur-md">
        {/* ESQUERDA */}
        <div className="space-y-8 max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold">Obrigado!</h2>
          <p className="text-white/80 text-justify leading-relaxed">
  Fico extremamente feliz por você ter visitado meu portfólio! Cada parte deste site foi construída com dedicação para
  refletir não só minhas habilidades técnicas, mas também minha paixão por aprender, evoluir e entregar resultados de
  qualidade. Se algo chamou sua atenção, despertou curiosidade ou se você acredita que podemos colaborar de alguma forma,
  não hesite em entrar em contato. <br/><br/>Meus contatos estão logo abaixo —sinta-se à vontade!
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://github.com/zLuuuck"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-12 w-64 border-2 border-white rounded-xl overflow-hidden cursor-pointer flex items-center justify-center transition-all duration-500 drop-shadow-xl hover:scale-105 hover:border-[#0f3c63ff]"
            >
              <span className="z-10 flex items-center gap-2 text-white group-hover:text-[#022747ff] transition-all duration-300">
                <Github className="w-5 h-5" /> GitHub
              </span>
              <span className="absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out"></span>
            </a>

            <a
              href="https://linkedin.com/in/lucastoterol"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-12 w-64 border-2 border-white rounded-xl overflow-hidden cursor-pointer flex items-center justify-center transition-all duration-500 drop-shadow-xl hover:scale-105 hover:border-[#0f3c63ff]"
            >
              <span className="z-10 flex items-center gap-2 text-white group-hover:text-[#022747ff] transition-all duration-300">
                <Linkedin className="w-5 h-5" /> LinkedIn
              </span>
              <span className="absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out"></span>
            </a>

            <a
              href="mailto:toterol.contato@gmail.com"
              className="group relative h-12 w-64 border-2 border-white rounded-xl overflow-hidden cursor-pointer flex items-center justify-center transition-all duration-500 drop-shadow-xl hover:scale-105 hover:border-[#0f3c63ff]"
            >
              <span className="z-10 flex items-center gap-2 text-white group-hover:text-[#022747ff] transition-all duration-300">
                <Mail className="w-5 h-5" /> toterol.contato@gmail.com
              </span>
              <span className="absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out"></span>
            </a>

            <a
              href="https://wa.me/+5541999016605"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-12 w-64 border-2 border-white rounded-xl overflow-hidden cursor-pointer flex items-center justify-center transition-all duration-500 drop-shadow-xl hover:scale-105 hover:border-[#0f3c63ff]"
            >
              <span className="z-10 flex items-center gap-2 text-white group-hover:text-[#022747ff] transition-all duration-300">
                <Phone className="w-5 h-5" /> WhatsApp
              </span>
              <span className="absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out"></span>
            </a>
          </div>

        </div>

        {/* DIREITA */}

        <form className="space-y-6 max-w-md mx-auto w-full">
          <h2 className="text-xl font-semibold text-center mb-4">Entre em contato!</h2>

          {[
            { label: "Nome", id: "name", type: "text" },
            { label: "Email", id: "email", type: "email" },
            { label: "Telefone", id: "phone", type: "tel" },
            { label: "Assunto", id: "subject", type: "text" },
          ].map(({ label, id, type }) => (
            <div className="relative" key={id}>
              <input
                id={id}
                name={id}
                type={type}
                placeholder=" "
                required
                className="peer w-full px-3 py-3.5 border-2 border-white bg-transparent text-white rounded-xl appearance-none focus:outline-none focus:border-[#0f3c63ff] transition-colors"
              />
              <label
                htmlFor={id}
                className="absolute text-base text-white/40 duration-300 transform -translate-y-7 scale-75 top-4 z-10 origin-[0] bg-[#0b293e] border-transparent rounded-xl px-2 left-1
                   peer-focus:text-[#0f3c63ff]
                   peer-placeholder-shown:scale-100
                   peer-placeholder-shown:translate-y-0
                   peer-focus:scale-75
                   peer-focus:-translate-y-7"
              >
                {label}
              </label>
            </div>
          ))}

          <div className="relative">
            <textarea
              id="message"
              name="message"
              placeholder=" "
              required
              rows={4}
              className="peer w-full px-3 py-3.5 border-2 border-white bg-transparent text-white rounded-xl appearance-none focus:outline-none focus:border-[#0f3c63ff] transition-colors resize-none"
            />
            <label
              htmlFor="message"
              className="absolute text-base text-white/40 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] border-transparent rounded-xl bg-[#0b293e] px-2 left-1
                 peer-focus:text-[#0f3c63ff]
                 peer-placeholder-shown:scale-100
                 peer-placeholder-shown:translate-y-0
                 peer-focus:scale-75
                 peer-focus:-translate-y-6"
            >
              Mensagem
            </label>
          </div>

          <button
            type="submit"
            className="group relative h-12 w-full border-2 border-white rounded-xl overflow-hidden cursor-pointer flex items-center justify-center transition-all duration-500 drop-shadow-xl hover:scale-105 hover:border-[#0f3c63ff]"
          >
            <span className="absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out"></span>
            <span className="z-10 flex items-center gap-2 text-white group-hover:text-[#022747ff] transition-all duration-300">Enviar</span>
          </button>
        </form>
      </div>
    </section>
  );
}
