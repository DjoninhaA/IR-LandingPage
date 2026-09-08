import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Psicologia Clínica e Organizacional`,
  description:
    "IR DHO — Desenvolvimento Humano e Organizacional em Toledo/PR. Psicologia clínica e desenvolvimento humano para pessoas (CPF) e consultoria em cultura, lideranças e NR-1 para empresas (CNPJ), com Rafael Ita.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text">
        {children}
      </body>
    </html>
  );
}
