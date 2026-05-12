import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/config";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isPt = lang === "pt";
  return {
    title: isPt
      ? "Diplomas Digitais — Verificação Instantânea | PDW"
      : "Digital Diplomas — Instant Verification | PDW",
    description: isPt
      ? "Elimine a fraude e reduza 90% do tempo de verificação académica com diplomas digitais verificáveis pela PDW."
      : "Eliminate fraud and reduce 90% of academic verification time with PDW verifiable digital diplomas.",
  };
}

export default async function DiplomasPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": dict.diplomas.heading.title,
            "description": dict.diplomas.heading.subtitle,
            "provider": {
              "@type": "Organization",
              "name": "Portuguese Digital Wallet"
            },
            "areaServed": "PT",
            "serviceType": "Digital Identity Verification"
          })
        }}
      />
      <AnimatedSection>
        <section className="section-card">
          <SectionHeading
            title={dict.diplomas.heading.title}
            subtitle={dict.diplomas.heading.subtitle}
          />

          {/* Flow Image */}
          {dict.diplomas.flowImage && (
            <div style={{
              margin: '24px 0',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 108, 75, 0.08)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
            }}>
              <Image
                src={dict.diplomas.flowImage.image}
                alt={dict.diplomas.flowImage.alt}
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          )}

          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginTop: '24px' }}>
            <article className="section-card" style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.04) 0%, rgba(239, 68, 68, 0.02) 100%)',
              borderColor: 'rgba(239, 68, 68, 0.12)',
              borderLeft: '4px solid rgba(239, 68, 68, 0.5)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '20px' }}>⚠️</span>
                <h4 style={{ color: '#991b1b', margin: 0 }}>{dict.diplomas.problem.title}</h4>
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--color-muted)' }}>{dict.diplomas.problem.text}</p>
            </article>
            <article className="section-card" style={{
              background: 'linear-gradient(135deg, rgba(0, 108, 75, 0.04) 0%, rgba(16, 185, 129, 0.03) 100%)',
              borderColor: 'rgba(0, 108, 75, 0.12)',
              borderLeft: '4px solid var(--color-primary)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '20px' }}>✅</span>
                <h4 style={{ color: 'var(--color-primary)', margin: 0 }}>{dict.diplomas.solution.title}</h4>
              </div>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--color-muted)' }}>{dict.diplomas.solution.text}</p>
            </article>
          </div>
        </section>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection delay={0.15}>
        <section className="section-card">
          <h3>{dict.diplomas.benefits.title}</h3>
          <div className="grid-3" style={{ marginTop: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            <div style={{
              padding: '20px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.06) 0%, rgba(16, 185, 129, 0.02) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.12)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>⚡</div>
              <div style={{ fontWeight: 800, fontSize: '24px', color: '#10B981' }}>90%</div>
              <p style={{ fontSize: '13px', color: 'var(--color-muted)', marginTop: '6px', lineHeight: 1.4 }}>{dict.diplomas.benefits.time}</p>
            </div>
            <div style={{
              padding: '20px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, rgba(0, 108, 75, 0.06) 0%, rgba(0, 108, 75, 0.02) 100%)',
              border: '1px solid rgba(0, 108, 75, 0.12)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>🛡️</div>
              <div style={{ fontWeight: 800, fontSize: '24px', color: 'var(--color-primary)' }}>0%</div>
              <p style={{ fontSize: '13px', color: 'var(--color-muted)', marginTop: '6px', lineHeight: 1.4 }}>{dict.diplomas.benefits.fraud}</p>
            </div>
            <div style={{
              padding: '20px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, rgba(26, 59, 93, 0.06) 0%, rgba(26, 59, 93, 0.02) 100%)',
              border: '1px solid rgba(26, 59, 93, 0.12)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>💰</div>
              <div style={{ fontWeight: 800, fontSize: '18px', color: 'var(--color-secondary)' }}>
                {lang === "pt" ? "Drástica" : "Drastic"}
              </div>
              <p style={{ fontSize: '13px', color: 'var(--color-muted)', marginTop: '6px', lineHeight: 1.4 }}>{dict.diplomas.benefits.cost}</p>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        <LeadFormSection dict={dict} />
      </AnimatedSection>
    </div>
  );
}
