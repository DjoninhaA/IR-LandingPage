import Image from "next/image";
import { Camera } from "lucide-react";

// Cada ambiente mostra 2 fotos de ângulos diferentes. Para trocar/adicionar,
// coloque o arquivo em /public e informe o caminho em `src` (null = foto em breve).
const ambientes: {
  nome: string;
  fotos: { src: string | null; alt: string }[];
}[] = [
  {
    nome: "Sala 1",
    fotos: [
      { src: "/sala-1-a.jpg", alt: "Sala 1 — vista geral" },
      { src: "/sala-1-b.jpg", alt: "Sala 1 — outro ângulo" },
    ],
  },
  {
    nome: "Sala 2",
    fotos: [
      { src: "/sala-2-a.jpg", alt: "Sala 2 — vista geral" },
      { src: "/sala-2-b.jpg", alt: "Sala 2 — outro ângulo" },
    ],
  },
  {
    nome: "Sala 3",
    fotos: [
      { src: "/sala-3-a.jpg", alt: "Sala 3 — escrivaninha e cadeira" },
      { src: "/sala-3-b.jpg", alt: "Sala 3 — sofás" },
    ],
  },
  {
    nome: "Recepção",
    fotos: [
      { src: "/recepcao-1.jpg", alt: "Recepção — vista geral" },
      { src: "/recepcao-2.jpg", alt: "Recepção — outro ângulo" },
    ],
  },
];

export default function Space() {
  return (
    <section id="espaco" className="bg-background-alt/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-accent uppercase">
            Nosso espaço
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
            Conheça o espaço de atendimento
          </h2>
          <p className="mt-4 text-text-secondary">
            Um ambiente acolhedor, pensado para o conforto e a privacidade de
            cada atendimento.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ambientes.map(({ nome, fotos }) => (
            <div
              key={nome}
              className="rounded-2xl border border-border bg-background p-4 sm:p-5"
            >
              <h3 className="mb-4 font-display text-lg font-semibold text-text">
                {nome}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {fotos.map((foto) => (
                  <div
                    key={foto.alt}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-background-alt"
                  >
                    {foto.src ? (
                      <Image
                        src={foto.src}
                        alt={foto.alt}
                        fill
                        sizes="(min-width: 1024px) 17rem, (min-width: 640px) 25vw, 50vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center gap-2 text-text-secondary">
                        <Camera size={22} />
                        <span className="text-xs">Foto em breve</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
