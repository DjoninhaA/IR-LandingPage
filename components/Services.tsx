import {
  HeartPulse,
  TrendingUp,
  Mountain,
  ShieldCheck,
  Sprout,
  Briefcase,
  Compass,
  Network,
  ScrollText,
  Users,
  BrainCircuit,
  Rocket,
  User,
  Building2,
} from "lucide-react";

const vertentes = [
  {
    icon: User,
    tag: "Atendimento a Pessoas (CPF)",
    title: "Psicologia Clínica e Desenvolvimento Humano",
    description:
      "Atendimento personalizado para quem busca assumir o controle da própria vida. A IR DHO entrega as ferramentas para você chegar exatamente onde você deseja chegar.",
    items: [
      {
        icon: HeartPulse,
        title: "Psicologia Clínica e Saúde Mental",
        description:
          "Acolhimento terapêutico para o reprocessamento de traumas, desenvolvimento da inteligência emocional e conquista do bem-estar individual.",
      },
      {
        icon: TrendingUp,
        title: "Desempenho e Performance",
        description:
          "Ferramentas comportamentais para potencializar capacidades, alcançar metas pessoais e otimizar resultados.",
      },
      {
        icon: Mountain,
        title: "Superação de Limitações",
        description:
          "Suporte técnico para enfrentar traumas, ressignificar bloqueios e superar barreiras que impedem o seu avanço.",
      },
      {
        icon: ShieldCheck,
        title: "Protagonismo e Autonomia",
        description:
          "Estímulo para assumir o controle da própria história, com clareza nas tomadas de decisão e autorresponsabilidade.",
      },
      {
        icon: Sprout,
        title: "Evolução e Autoconhecimento",
        description:
          "Espaço seguro para o desenvolvimento contínuo, tornando-se alguém melhor todos os dias, compreendendo a si mesmo além das expectativas externas.",
      },
      {
        icon: Briefcase,
        title: "Orientação Profissional e Carreira",
        description:
          "Mapeamento vocacional, PDI personalizado e estratégias práticas para direcionar ou transicionar sua trajetória com clareza.",
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
          "Mapeamento e consolidação de Missão, Visão e Valores para alinhar a equipe, fortalecer a identidade corporativa e engajar a organização.",
      },
      {
        icon: Network,
        title: "Arquitetura de Cargos e Performance",
        description:
          "Descrição de cargos, planos de cargos e salários, trilhas de carreira e Planos de Desenvolvimento Individuais (PDI) para retenção de talentos.",
      },
      {
        icon: ScrollText,
        title: "Governança, Processos e Conformidade",
        description:
          "Regimento interno, POPs e adequação às NRs 1 e 17 (MTE), com foco em gestão de riscos psicossociais e segurança jurídica.",
      },
      {
        icon: Users,
        title: "Desenvolvimento de Lideranças",
        description:
          "Formação contínua de gestores e equipes com foco em autonomia, protagonismo e alta performance voltada a resultados.",
      },
      {
        icon: BrainCircuit,
        title: "Saúde Mental e Produtividade",
        description:
          "Soluções em Psicologia Organizacional para alinhar o bem-estar dos colaboradores ao desempenho e sustentabilidade do negócio.",
      },
      {
        icon: Rocket,
        title: "Desenvolvimento e Abertura Empresarial",
        description:
          "Suporte na estruturação do negócio desde a concepção: modelo de gestão, Contrato Social, formalização de CNPJ e alinhamento operacional.",
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
