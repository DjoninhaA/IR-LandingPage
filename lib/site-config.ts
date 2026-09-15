// Dados institucionais centralizados — atualize aqui quando tiver as
// informações reais (telefone, e-mail, endereço e redes sociais).
export const siteConfig = {
  name: "IR Desenvolvimento Humano e Organizacional",
  shortName: "IR",
  responsavel: {
    nome: "Rafael Ita",
    nomeCompleto: "Rafael Henrique de Santana Ita",
    crp: "CRP 08/47050",
    especialidade: "Psicologia Clínica & Inteligência Organizacional",
    formacao: [
      "Graduação em Psicologia pela PUCPR — campus Toledo",
      "Pós-graduando em Psicologia Organizacional, Neurociência e Gestão de Riscos Psicossociais",
      "Atuação Clínica e Organizacional",
    ],
  },
  contact: {
    whatsapp: "554520318026",
    whatsappDisplay: "(45) 2031-8026",
    email: "contato@irdesenvolvimento.com.br",
    address:
      "Edifício ACIT — Largo São Vicente de Paulo, nº 1333, Sala 106, Centro — Toledo/PR",
    addressShort: "Toledo/PR — atendimento presencial e online",
  },
  social: {
    instagram: "https://www.instagram.com/irpsicologiadho",
    linkedin: "https://www.linkedin.com/in/itarafaeu/",
  },
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "A IR DHO", href: "#sobre" },
    { label: "Vertentes", href: "#servicos" },
    { label: "Metodologia", href: "#metodologia" },
    { label: "O Psicólogo", href: "#rafael" },
    { label: "Nosso Espaço", href: "#espaco" },
    { label: "Sublocação", href: "#sublocacao" },
    { label: "Contato", href: "#contato" },
  ],
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
