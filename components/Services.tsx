import {
  HeartPulse,
  TrendingUp,
  Mountain,
  ShieldCheck,
  Sprout,
  Compass,
  ScrollText,
  Users,
  BrainCircuit,
  User,
  Building2,
} from "lucide-react";

const vertentes = [
  {
    icon: User,
    tag: "Atendimento a Pessoas (CPF)",
    title: "Psicologia Clínica e Desenvolvimento Humano",
    description:
      "Atendimento personalizado para quem busca assumir o controle da própria vida. A IR DHO leva você exatamente onde você desejar IR.",
    items: [
      {
        icon: HeartPulse,
        title: "Psicologia Clínica e Saúde Mental",
        description:
          "Acolhimento técnico para o equilíbrio emocional e bem-estar individual.",
      },
      {
        icon: TrendingUp,
        title: "Desempenho e Performance",
        description:
          "Ferramentas para alcançar novos resultados positivos e potencializar capacidades.",
      },
      {
        icon: Mountain,
        title: "Superação de Limitações",
        description:
          "Suporte para enfrentar traumas, dificuldades e barreiras pessoais.",
      },
      {
        icon: ShieldCheck,
        title: "Protagonismo e Responsabilidade",
        description:
          "Estímulo para tomar para si a responsabilidade de suas ações e das consequências advindas delas.",
      },
      {
        icon: Sprout,
        title: "Evolução Contínua",
        description:
          "Espaço seguro para se tornar alguém melhor todos os dias, compreendendo a si mesmo além dos olhares e expectativas dos outros.",
      },
    ],
  },
  {
    icon: Building2,
    tag: "Atendimento Organizacional (CNPJ)",
    title: "Eficiência Corporativa e Negócios",
    description:
      "Consultoria e assessoria estratégica que integram saúde mental e alta performance nas empresas.",
    items: [
      {
        icon: Compass,
        title: "Estruturação de Cultura Organizacional",
        description:
          "Mapeamento e definição de Missão, Visão e Valores para alinhar a equipe.",
      },
      {
        icon: ScrollText,
        title: "Regimento Interno e Normas (NR-1)",
        description:
          "Garantia de segurança jurídica, conduta operacional e alinhamento de rotinas.",
      },
      {
        icon: Users,
        title: "Desenvolvimento de Lideranças",
        description:
          "Formação de gestores e equipes focados na autonomia e no protagonismo.",
      },
      {
        icon: BrainCircuit,
        title: "Integração de Saúde Mental e Produtividade",
        description:
          "Soluções que alinham o bem-estar dos colaboradores aos resultados do negócio.",
      },
    ],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-accent uppercase">
            Vertentes
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
            Nossas Vertentes de Atuação
          </h2>
          <p className="mt-4 text-text-secondary">
            Dois caminhos, um mesmo princípio: o protagonismo de quem decide
            assumir o controle da própria trajetória.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {vertentes.map(
            ({ icon: VertenteIcon, tag, title, description, items }) => (
              <div key={tag}>
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                      <VertenteIcon size={24} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-accent uppercase">
                        {tag}
                      </p>
                      <h3 className="font-display text-2xl font-semibold text-text">
                        {title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-text-secondary">{description}</p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map(({ icon: Icon, title: itemTitle, description: itemDescription }) => (
                    <div
                      key={itemTitle}
                      className="group rounded-2xl border border-border bg-background p-7 transition-shadow hover:shadow-lg hover:shadow-primary/5"
                    >
                      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white transition-colors group-hover:bg-accent">
                        <Icon size={24} />
                      </div>
                      <h4 className="font-display text-lg font-semibold text-text">
                        {itemTitle}
                      </h4>
                      <p className="mt-2 text-sm text-text-secondary">
                        {itemDescription}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
