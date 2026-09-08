import { Handshake, Scale, Eye, Repeat, Target, Compass } from "lucide-react";

const values = [
  {
    icon: Handshake,
    title: "Respeito ao Ser Humano",
    description:
      "Não formatamos indivíduos em moldes prontos; nós os potencializamos para que encontrem suas próprias respostas, respeitando a realidade e o potencial de cada um.",
  },
  {
    icon: Scale,
    title: "Responsabilidade Compartilhada",
    description:
      "A IR desafia o cliente a encontrar o próprio caminho. Acompanhamos estrategicamente cada passo, mas a responsabilidade da execução permanece nas mãos de quem nos contrata.",
  },
  {
    icon: Eye,
    title: "Honestidade e Transparência",
    description:
      "Não maquiamos problemas; enfrentamos a realidade nua e crua com clareza absoluta, pois este é o caminho mais seguro para resultados sólidos.",
  },
  {
    icon: Repeat,
    title: "Prática e Repetição",
    description:
      "A transformação não mora na teoria, mas na aplicação prática contínua e na disciplina diária, até que o resultado almejado se torne a rotina.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-background-alt/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-sm font-semibold tracking-wide text-accent uppercase">
              Quem somos
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
              A IR DHO
            </h2>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-background-alt text-primary">
                    <Target size={22} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-text">
                    Nossa Missão
                  </h3>
                </div>
                <p className="mt-4 text-text-secondary">
                  Acolher e desenvolver pessoas — as verdadeiras responsáveis
                  por estruturar todos os resultados — através de um
                  acompanhamento autêntico, intencional e direto. Nossa missão
                  é ressignificar o trabalho, arrancando a narrativa de que ele
                  é um fardo, para resgatá-lo como a manifestação máxima da
                  dignidade e do protagonismo humano. Nós assumimos a
                  responsabilidade técnica de entregar clareza e estruturação,
                  devolvendo ao cliente a responsabilidade inegociável de
                  entrar em ação.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-background-alt text-primary">
                    <Compass size={22} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-text">
                    Nossa Visão
                  </h3>
                </div>
                <p className="mt-4 text-text-secondary">
                  Ser a referência em Toledo, no Paraná, no Brasil e no Mundo,
                  na articulação de negócios e na integração entre a saúde
                  mental e a eficiência corporativa.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold text-text">
              Nossos Valores Inegociáveis
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-5">
              {values.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-background p-6 shadow-sm"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-background-alt text-primary">
                    <Icon size={22} />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-text">
                    {title}
                  </h4>
                  <p className="mt-1.5 text-sm text-text-secondary">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
