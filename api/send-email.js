// api/send-email.js
export default async function handler(req, res) {
  // Permite apenas POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  // Headers CORS (caso necessário)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");

  try {
    const formData = req.body;

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PRIVATE_KEY, // Private Key aqui, segura!
        template_params: formData,
      }),
    });

    // EmailJS retorna texto "OK" em caso de sucesso, ou um JSON de erro
    const responseText = await response.text();
    if (!response.ok) {
      console.error("EmailJS error:", responseText);
      return res.status(500).json({ error: "Erro ao enviar o email", detail: responseText });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erro no servidor:", error.message);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
}