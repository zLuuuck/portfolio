![portfolio](public/portfolio.png)

# Portfólio, Lucas Toterol

Portfólio pessoal de **Lucas Toterol Rodrigues** (zLuuuck), estagiário de Infraestrutura e Redes com foco em segurança de redes e segurança defensiva.

🔗 **Site:** [zluuuck.vercel.app](https://zluuuck.vercel.app)
📄 **Currículo:** [cv.pdf](public/cv.pdf)

## Sobre mim

Estagiário de Infraestrutura e Redes na Microtel IT Solutions (consultoria e serviços gerenciados de TI), atuando com FortiGate, FortiAnalyzer, FortiClient EMS, Active Directory e AWS. Curso Análise e Desenvolvimento de Sistemas na Universidade Tuiuti do Paraná, com conclusão prevista para julho de 2027.

Possuo Fortinet NSE 1 e NSE 2 e estou me preparando para a NSE 4 (FortiOS Administrator) e para a Cisco CCNA.

## Seções do site

| Seção | Conteúdo |
|---|---|
| Início | Apresentação e download do currículo |
| Sobre mim | Formação, experiência atual e foco de carreira |
| Objetivos | Segurança defensiva, certificações e formação |
| Habilidades | Hard e soft skills, cada uma com o contexto em que foi aplicada |
| Projetos | Write-ups de CTF, projetos acadêmicos e este portfólio |
| Contato | Links e formulário de mensagem |

## Tecnologias

- **React 19** com **TypeScript**, empacotado com **Vite**
- **Tailwind CSS 4** para estilização
- **Framer Motion** e **GSAP** para animações, **Lenis** para rolagem suave
- **React Icons** e **Lucide** para ícones
- **Vercel** para hospedagem, com uma função serverless (`api/send-email.js`) que envia o formulário de contato pelo **EmailJS**

## Estrutura

```
api/
  send-email.js      # função serverless do formulário de contato
public/              # imagens e cv.pdf
src/
  pages/             # uma seção do site por arquivo (Home, About, Skills...)
  components/        # cards, modais, header, footer
  hooks/useLenis.ts  # rolagem suave
  animations/        # animações com GSAP
```

## Rodando localmente

Pré-requisito: Node.js 20 ou mais recente.

```bash
git clone https://github.com/zLuuuck/portfolio.git
cd portfolio
npm install
npm run dev        # servidor de desenvolvimento em http://localhost:5173
npm run build      # build de produção em dist/
npm run preview    # serve o build localmente
```

O formulário de contato depende da função em `api/`, que só roda no ambiente da Vercel (ou com `vercel dev`). Ela precisa destas variáveis de ambiente:

| Variável | Descrição |
|---|---|
| `EMAILJS_SERVICE_ID` | ID do serviço no EmailJS |
| `EMAILJS_TEMPLATE_ID` | ID do template de e-mail |
| `EMAILJS_PUBLIC_KEY` | Chave pública do EmailJS |
| `EMAILJS_PRIVATE_KEY` | Chave privada do EmailJS (nunca versionar) |

## Contato

- E-mail: [toterol.contato@gmail.com](mailto:toterol.contato@gmail.com)
- LinkedIn: [linkedin.com/in/lucastoterol](https://linkedin.com/in/lucastoterol)
- GitHub: [github.com/zLuuuck](https://github.com/zLuuuck)
