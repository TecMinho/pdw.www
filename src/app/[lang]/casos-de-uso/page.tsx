import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { UseCasesGrid } from "@/components/sections/UseCasesGrid";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/config";
import type { Metadata } from "next";

export const revalidate = 86400;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isPt = lang === "pt";
  return {
    title: isPt
      ? "Casos de Uso | Portuguese Digital Wallet"
      : "Use Cases | Portuguese Digital Wallet",
    description: isPt
      ? "Descubra os casos de uso da PDW: diplomas digitais, saúde, rastreabilidade alimentar, imobiliário e mais."
      : "Discover PDW use cases: digital diplomas, health, food traceability, real estate and more.",
  };
}

export default async function CasosPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <AnimatedSection>
      <SectionHeading
        title={dict.useCases.heading.title}
        subtitle={dict.useCases.heading.subtitle}
      />
      <UseCasesGrid lang={lang as Locale} dict={dict} />
    </AnimatedSection>
  );
}
