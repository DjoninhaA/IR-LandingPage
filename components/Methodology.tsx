import { Search, Syringe, Flag } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    description:
      "Mapeamento profundo das necessidades do indivíduo ou da empresa.",
  },
  {
    icon: Syringe,
    title: "Intervenção",
    description:
      "Aplicação de estratégias intencionais, práticas e personalizadas.",
  },
  {
    icon: Flag,
    title: "Resultado",
    description:
      "Consolidação de mudanças reais através do protagonismo e da disciplina diária.",
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="bg-background-alt/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-accent uppercase">
            Metodologia
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
            Metodologia e Cultura do Protagonismo
          </h2>
          <p className="mt-4 text-text-secondary">
            Nosso ecossistema é pautado por uma comunicação clara, franca,
            direta e focada na execução. Trabalhamos sob um método estruturado.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div className="absolute top-6 right-0 left-0 hidden h-px bg-border sm:block" />

          {steps.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="relative flex flex-col items-start">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                <Icon size={22} />
              </div>
              <span className="mt-4 font-display text-sm font-semibold text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 font-display text-xl font-semibold text-text">
                {title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
