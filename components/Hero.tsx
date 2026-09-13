import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site-config";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(200,139,84,0.18),transparent_45%),radial-gradient(circle_at_85%_0%,rgba(122,59,18,0.12),transparent_40%)]" />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <h1 className="font-display text-4xl leading-tight font-semibold text-text sm:text-5xl">
            Quero Transformar Minha Trajetória.{" "}
            <span className="text-primary italic">EU escolho IR!</span>
          </h1>

          <p className="mt-5 max-w-xl font-display text-xl text-text sm:text-2xl">
            As Empresas vão muito além dos processos: elas são feitas de
            Pessoas.
          </p>

          <p className="mt-6 max-w-xl text-lg text-text-secondary">
            Por trás de todo grande resultado sustentável, existe um indivíduo
            consciente que decidiu assumir o controle da própria trajetória.
            Juntos estruturamos um caminho, mas para chegar lá, você deve
            escolher IR.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink(
                "Olá! Quero transformar minha trajetória com a IR DHO."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              <MessageCircle size={18} />
              Quero Transformar Minha Trajetória. EU escolho IR!
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-background-alt"
            >
              Conheça nossas vertentes
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
          <div className="absolute inset-0 rounded-[3rem] bg-background-alt" />
          <div className="relative flex aspect-square w-full max-w-sm items-center justify-center rounded-[3rem] border border-border bg-background p-12 shadow-xl shadow-primary/5">
            <Image
              src="/Logo-CRP.jpg"
              alt="IR Desenvolvimento Humano e Organizacional"
              width={320}
              height={320}
              className="h-full w-full object-contain"
              priority
            />
          </div>

          <div className="absolute -bottom-6 left-1/2 w-64 -translate-x-1/2 rounded-2xl border border-border bg-background px-5 py-4 text-center shadow-lg">
            <p className="font-display text-2xl font-semibold text-primary">
              CPF + CNPJ
            </p>
            <p className="text-xs text-text-secondary">
              Atendimento a Pessoas e Desenvolvimento Organizacional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
