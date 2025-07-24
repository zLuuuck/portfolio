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
        newErrors[id] = "Campo obrigatório";
      } else if (id === "email" && !emailRegex.test(value)) {
        newErrors[id] = "E-mail inválido";
      } else if (id === "phone" && !phoneRegex.test(value)) {
        newErrors[id] = "Telefone inválido (ex: (41) 99999-9999)";
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
            <div className="bg-gradient-to-br from-[#0d1d22]/70 to-[#0a2a45]/70 p-6 sm:p-8 rounded-xl border border-white/20 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 text-center">Vamos conversar!</h2>
              
              <p className="text-white/80 mb-8 leading-relaxed">
                Obrigado pelo interesse em entrar em contato! Estou sempre aberto a novas oportunidades, 
                colaborações ou simplesmente para bater um papo sobre tecnologia e inovação.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <Mail className="w-5 h-5 text-[#357ab7]" />,
                    label: "E-mail",
                    value: "toterol.contato@gmail.com",
                    href: "mailto:toterol.contato@gmail.com"
                  },
                  {
                    icon: <Phone className="w-5 h-5 text-[#357ab7]" />,
                    label: "Telefone/WhatsApp",
                    value: "(41) 99901-6605",
                    href: "https://wa.me/+5541999016605"
                  },
                  {
                    icon: <Github className="w-5 h-5 text-[#357ab7]" />,
                    label: "GitHub",
                    value: "github.com/zLuuuck",
                    href: "https://github.com/zLuuuck"
                  },
                  {
                    icon: <Linkedin className="w-5 h-5 text-[#357ab7]" />,
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
                    className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <div className="bg-white/10 p-2 rounded-lg">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white/60">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Formulário */}
            <div className="bg-gradient-to-br from-[#0d1d22]/70 to-[#0a2a45]/70 p-6 sm:p-8 rounded-xl border border-white/20 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 text-center">Envie uma mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: "name", label: "Nome", type: "text" },
                  { id: "email", label: "E-mail", type: "email" },
                  { id: "phone", label: "Telefone", type: "tel" },
                  { id: "subject", label: "Assunto", type: "text" },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium mb-1">
                      {field.label} {errors[field.id] && (
                        <span className="text-red-400 text-xs ml-1">• {errors[field.id]}</span>
                      )}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      className={`w-full px-4 py-3 bg-white/5 border ${
                        errors[field.id] ? "border-red-500" : "border-white/20"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#357ab7] focus:border-transparent transition-colors`}
                      onChange={(e) => {
                        if (field.id === "phone") {
                          e.target.value = formatPhone(e.target.value);
                        }
                        if (errors[field.id]) {
                          setErrors(prev => ({ ...prev, [field.id]: "" }));
                        }
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Mensagem {errors.message && (
                      <span className="text-red-400 text-xs ml-1">• {errors.message}</span>
                    )}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={`w-full px-4 py-3 bg-white/5 border ${
                      errors.message ? "border-red-500" : "border-white/20"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#357ab7] focus:border-transparent transition-colors`}
                    onChange={() => {
                      if (errors.message) {
                        setErrors(prev => ({ ...prev, message: "" }));
                      }
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#357ab7] hover:bg-[#2a6191] rounded-lg font-medium transition-colors ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span className="inline-block h-5 w-5 border-2 border-white/80 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar mensagem
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};