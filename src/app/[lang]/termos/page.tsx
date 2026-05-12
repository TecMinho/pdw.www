import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/config";
import type { Metadata } from "next";

export const revalidate = 86400;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "pt"
      ? "Termos de Utilização | Portuguese Digital Wallet"
      : "Terms of Use | Portuguese Digital Wallet",
  };
}

export default async function TermosPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <section className="section-card">
      <SectionHeading title={dict.terms.title} />
      <div style={{ lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p>{dict.terms.text}</p>
        <ul className="simple-list">
          <li><strong>{dict.terms.liability.split(':')[0]}:</strong> {dict.terms.liability.split(':').slice(1).join(':')}</li>
          <li><strong>{dict.terms.copyright.split(':')[0]}:</strong> {dict.terms.copyright.split(':').slice(1).join(':')}</li>
        </ul>
      </div>
    </section>
  );
}
