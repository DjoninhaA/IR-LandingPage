import { KeyRound, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site-config";

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl rounded-3xl bg-primary px-6 py-14 text-center text-white sm:px-14">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Pronto para assumir a responsabilidade pelas suas escolhas e alcançar
          novos resultados?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Seja para transformar sua vida, alavancar sua empresa ou construir o
          seu legado em nosso espaço: juntos estruturamos o caminho, mas para
          chegar lá, você deve escolher IR.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={whatsappLink(
              "Olá! Gostaria de agendar um atendimento / consultoria."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-background-alt"
          >
            <MessageCircle size={18} />
            IR para agendar Atendimento / Consultoria
          </a>
          <a
            href={whatsappLink(
              "Olá! Gostaria de saber mais sobre a sublocação de salas."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <KeyRound size={18} />
            IR para Sublocar uma Sala
          </a>
        </div>
      </div>
    </section>
  );
}
