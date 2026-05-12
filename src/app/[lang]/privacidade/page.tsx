import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/config";
import type { Metadata } from "next";

export const revalidate = 86400;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "pt"
      ? "Política de Privacidade | Portuguese Digital Wallet"
      : "Privacy Policy | Portuguese Digital Wallet",
  };
}

export default async function PrivacidadePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <section className="section-card">
      <SectionHeading title={dict.privacy.title} />
      <div style={{ lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p>{dict.privacy.text}</p>
        <ul className="simple-list">
          <li><strong>{dict.privacy.dataCollected.split(':')[0]}:</strong> {dict.privacy.dataCollected.split(':').slice(1).join(':')}</li>
          <li><strong>{dict.privacy.purpose.split(':')[0]}:</strong> {dict.privacy.purpose.split(':').slice(1).join(':')}</li>
          <li><strong>{dict.privacy.legalBase.split(':')[0]}:</strong> {dict.privacy.legalBase.split(':').slice(1).join(':')}</li>
        </ul>
        {dict.privacy.contact && (
          <p style={{ 
            marginTop: '8px', 
            padding: '12px 16px', 
            borderRadius: '8px', 
            background: 'rgba(0, 108, 75, 0.04)',
            border: '1px solid rgba(0, 108, 75, 0.08)',
            fontSize: '14px',
          }}>
            📧 {dict.privacy.contact}
          </p>
        )}
      </div>
    </section>
  );
}
