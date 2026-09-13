import {
  AirVent,
  Clock,
  FileCheck,
  KeyRound,
  MessageCircle,
  Puzzle,
  Sofa,
  Users,
} from "lucide-react";
import { whatsappLink } from "@/lib/site-config";

const diferenciais = [
  {
    icon: Sofa,
    title: "Recepção para Espera",
    description: "Espaço de espera confortável, com água, Wi-Fi e WC.",
  },
  {
    icon: AirVent,
    title: "Ambientes Climatizados",
    description:
      "Salas funcionais e preparadas para receber seus atendimentos com conforto e privacidade.",
  },
  {
    icon: Users,
    title: "Todos os Públicos",
    description:
      "Estrutura para atendimentos individuais (infantis, jovens, adultos e idosos), para casais e/ou corporativos.",
  },
  {
    icon: Puzzle,
    title: "Sala Lúdica",
    description: "Sala lúdica pronta para uso.",
  },
  {
    icon: Clock,
    title: "Contratação Flexível",
    description:
      "Por hora avulsa ou mais, ou por pacotes de horas mensais.",
  },
  {
    icon: FileCheck,
    title: "Contrato Transparente",
    description:
      "Sem taxa de adesão e com emissão de NF para CPF (PF) e CNPJ (PJ).",
  },
];

export default function Sublocacao() {
  return (
    <section id="sublocacao" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
              <KeyRound size={24} />
            </span>
            <div>
              <p className="text-xs font-semibold tracking-wide text-accent uppercase">
                Sublocação de Salas
              </p>
              <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">
                Estrutura Completa para o seu Atendimento
              </h2>
            </div>
          </div>
          <p className="mt-4 text-text-secondary">
            Salas de atendimento prontas para uso, com toda a estrutura que
            você e seus clientes precisam.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-background p-7 transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white transition-colors group-hover:bg-accent">
                <Icon size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-text">
                {title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={whatsappLink(
              "Olá! Gostaria de saber mais sobre a sublocação de salas."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent"
          >
            <MessageCircle size={18} />
            Consultar Disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}
