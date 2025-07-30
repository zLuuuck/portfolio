import React, { useState } from "react";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Notification } from "../components/Notification";

export const Contact = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error"
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const newErrors: Record<string, string> = {};

    // Validação dos campos
    const fields = ["name", "email", "phone", "subject", "message"];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{5}-?\d{4}$/;

    fields.forEach((id) => {
      const el = form.elements.namedItem(id) as HTMLInputElement | HTMLTextAreaElement;
      const value = el.value.trim();

      if (!value) {
        newErrors[id] = "* Campo obrigatório";
      } else if (id === "email" && !emailRegex.test(value)) {
        newErrors[id] = "* E-mail inválido";
      } else if (id === "phone" && !phoneRegex.test(value)) {
        newErrors[id] = "* Telefone inválido (ex: (41) 99999-9999)";
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        await emailjs.sendForm(
          "service_9f9bxwm",
          "template_19c8zao",
          form,
          "awzOfUB0HNJqOCOLh"
        );
        setNotification({
          message: "Mensagem enviada com sucesso!",
          type: "success"
        });
        form.reset();
      } catch (error) {
        setNotification({
          message: "Erro ao enviar mensagem. Tente novamente mais tarde.",
          type: "error"
        });
      }
    }
    setIsSubmitting(false);
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    let formatted = numbers;

    if (numbers.length > 0) {
      formatted = `(${numbers.substring(0, 2)}`;
      if (numbers.length > 2) {
        formatted += `) ${numbers.substring(2, 7)}`;
        if (numbers.length > 7) {
          formatted += `-${numbers.substring(7, 11)}`;
        }
      }
    }

    return formatted;
  };

  return (
    <>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

      <section className="min-h-screen flex flex-col items-center justify-center text-white px-4 py-12 sm:py-16">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center shine-text">
            Contato
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
            {/* Seção de Informações */}
            <div className="p-6 sm:p-8 rounded-xl border-2 border-white backdrop-blur-xl bg-black/20">
              <h2 className="text-2xl font-bold mb-6 text-center">Vamos conversar!</h2>

              <p className="text-white/80 mb-8 leading-relaxed text-justify">
                Fico extremamente feliz por você ter visitado meu portfólio! Cada parte deste site foi construída com dedicação
                para refletir não só minhas habilidades técnicas, mas também minha paixão por aprender, evoluir e entregar
                resultados de qualidade. Se algo chamou sua atenção, despertou curiosidade ou se você acredita que podemos
                colaborar de alguma forma, não hesite em entrar em contato.
                <br />
          Meus contatos estão logo abaixo — sinta-se à vontade! — Clique para ser redirecionado
              </p>
              <div className="space-y-8">
                {[
                  {
                    icon: <Mail className="w-5 h-5 group-hover:text-[#022747ff] transition-colors" />,
                    label: "E-mail",
                    value: "toterol.contato@gmail.com",
                    href: "mailto:toterol.contato@gmail.com"
                  },
                  {
                    icon: <Phone className="w-5 h-5 group-hover:text-[#022747ff] transition-colors" />,
                    label: "Telefone/WhatsApp",
                    value: "(41) 99998-7886",
                    href: "https://wa.me/+5541999987886"
                  },
                  {
                    icon: <Github className="w-5 h-5 group-hover:text-[#022747ff] transition-colors" />,
                    label: "GitHub",
                    value: "github.com/zLuuuck",
                    href: "https://github.com/zLuuuck"
                  },
                  {
                    icon: <Linkedin className="w-5 h-5 group-hover:text-[#022747ff] transition-colors" />,
                    label: "LinkedIn",
                    value: "linkedin.com/in/lucastoterol",
                    href: "https://linkedin.com/in/lucastoterol"
                  }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative h-14 w-full border-2 border-white rounded-xl overflow-hidden 
                cursor-pointer flex items-center px-4 p-10 transition-all duration-500 hover:scale-[1.02] 
                hover:border-[#022747]"
                  >
                    {/* Ícone com background */}
                    <div className="z-10 bg-white/10 p-2 rounded-lg mr-3">
                      {item.icon}
                    </div>

                    {/* Textos */}
                    <div className="z-10 flex-1 text-left">
                      <p className="text-xs sm:text-sm text-white/60 group-hover:text-[#022747ff] transition-colors">
                        {item.label}
                      </p>
                      <p className="text-xs sm:text-base font-medium text-white group-hover:text-[#022747ff] transition-colors">
                        {item.value}
                      </p>
                    </div>

                    {/* Efeito de background animado (igual aos botões) */}
                    <span className="absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 origin-bottom 
                     transition-transform duration-300 ease-in-out" />
                  </a>
                ))}
              </div>
            </div>

            {/* Formulário com inputs customizados */}
            <div className=" p-6 sm:p-8 rounded-xl border-2 border-white backdrop-blur-xl bg-black/20">
              <h2 className="text-2xl font-bold mb-6 text-center">Envie uma mensagem</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: "name", label: "Nome", type: "text" },
                  { id: "email", label: "Seuemail@email.com", type: "email" },
                  { id: "phone", label: "Telefone", type: "tel" },
                  { id: "subject", label: "Assunto", type: "text" },
                ].map((field) => (
                  <div key={field.id} className="relative">
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      placeholder=" "
                      className={`peer w-full px-4 py-3.5 border-2 ${errors[field.id] ? "border-red-500" : "border-white/40"
                        } bg-transparent rounded-lg focus:outline-none focus:border-[#357ab7] transition-colors`}
                      onChange={(e) => {
                        if (field.id === "phone") {
                          e.target.value = formatPhone(e.target.value);
                        }
                        if (errors[field.id]) {
                          setErrors(prev => ({ ...prev, [field.id]: "" }));
                        }
                      }}
                    />
                    <label
                      htmlFor={field.id}
                      className={`absolute text-sm duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] px-2 left-2 ${errors[field.id] ? "text-red-400" : "text-white/60"
                        } peer-focus:text-[#357ab7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 bg-[#091f32] rounded-lg`}
                    >
                      {field.label}
                    </label>
                    <div className={`h-5 mt-1 overflow-hidden transition-all duration-200 ${errors[field.id] ? "opacity-100" : "opacity-0"
                      }`}>
                      <p className="text-xs text-red-400">
                        {errors[field.id] === " " ? "Campo obrigatório" : errors[field.id]}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Textarea com floating label */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    placeholder=" "
                    rows={5}
                    className={`peer w-full px-4 py-3.5 border-2 ${errors.message ? "border-red-500" : "border-white/40"
                      } bg-transparent rounded-lg focus:outline-none focus:border-[#357ab7] transition-colors resize-none`}
                    onChange={() => {
                      if (errors.message) {
                        setErrors(prev => ({ ...prev, message: "" }));
                      }
                    }}
                  />
                  <label
                    htmlFor="message"
                    className={`absolute text-sm duration-300 transform -translate-y-5 scale-75 top-3 z-10 origin-[0] px-2 left-2 ${errors.message ? "text-red-400" : "text-white/60"
                      } peer-focus:text-[#357ab7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-5 bg-[#092135] rounded-lg`}
                  >
                    Mensagem
                  </label>
                  <div className={`h-5 mt-1 overflow-hidden transition-all duration-200 ${errors.message ? "opacity-100" : "opacity-0"
                    }`}>
                    <p className="text-xs text-red-400">
                      {errors.message === " " ? "Campo obrigatório" : errors.message}
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative h-14 w-full md:h-16 border-2 border-white rounded-xl overflow-hidden 
            cursor-pointer flex items-center justify-center transition-all duration-500 hover:scale-105 
            hover:border-[#022747] disabled:hover:scale-100 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {/* Texto ou ícone de loading */}
                  <span className="z-10 flex items-center gap-2 text-white font-medium group-hover:text-[#022747] 
                   transition-colors duration-300">
                    {isSubmitting ? (
                      <span className="inline-block h-5 w-5 border-2 border-white/80 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar mensagem
                      </>
                    )}
                  </span>

                  {/* Efeito de background animado */}
                  <span className={`absolute inset-0 bg-[#357ab7] scale-y-0 group-hover:scale-y-100 origin-bottom 
                   transition-transform duration-300 ease-in-out ${isSubmitting ? "opacity-50" : ""
                    }`} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};