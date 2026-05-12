import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/config";
import type { Metadata } from "next";

export const revalidate = 86400;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isPt = lang === "pt";
  return {
    title: isPt
      ? "Contactos e Parcerias | Portuguese Digital Wallet"
      : "Contacts and Partnerships | Portuguese Digital Wallet",
    description: isPt
      ? "Quer implementar a PDW na sua instituição? Contacte-nos para uma demonstração personalizada."
      : "Want to implement PDW in your institution? Contact us for a personalized demonstration.",
  };
}

export default async function ContactosPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <AnimatedSection>
        <section className="section-card">
          <SectionHeading title={dict.contacts.heading.title} subtitle={dict.contacts.heading.subtitle} />
          <p style={{ lineHeight: 1.7, color: 'var(--color-muted)' }}>{dict.contacts.invite}</p>
          
          {dict.contacts.afterContact && (
            <div style={{
              marginTop: '16px',
              padding: '14px 18px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, rgba(0, 108, 75, 0.04) 0%, rgba(16, 185, 129, 0.03) 100%)',
              border: '1px solid rgba(0, 108, 75, 0.1)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
            }}>
              <span style={{ fontSize: '18px' }}>💡</span>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.5 }}>
                {dict.contacts.afterContact}
              </p>
            </div>
          )}

          <div style={{ marginTop: '20px', display: 'grid', gap: '8px' }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '16px' }}>📍</span>
              <strong style={{ fontSize: '14px' }}>{dict.footer.address}</strong>
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '16px' }}>✉️</span>
              <a href={`mailto:${dict.footer.email}`} style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '14px' }}>
                {dict.footer.email}
              </a>
            </p>
          </div>
        </section>
      </AnimatedSection>
      <AnimatedSection delay={0.15}>
        <LeadFormSection dict={dict} />
      </AnimatedSection>
    </>
  );
}
