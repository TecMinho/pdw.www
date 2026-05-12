import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/config";
import type { Metadata } from "next";

export const revalidate = 86400;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isPt = lang === "pt";
  return {
    title: isPt
      ? "Como Funciona | Portuguese Digital Wallet"
      : "How It Works | Portuguese Digital Wallet",
    description: isPt
      ? "Descubra como a PDW emite, armazena e verifica credenciais digitais com privacidade total e conformidade europeia."
      : "Discover how PDW issues, stores and verifies digital credentials with total privacy and European compliance.",
  };
}

export default async function SolucaoPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const flowSteps = [
    { key: "step1", num: "01", color: "#006c4b" },
    { key: "step2", num: "02", color: "#0d8a62" },
    { key: "step3", num: "03", color: "#1a6b8a" },
    { key: "step4", num: "04", color: "#1a3b5d" },
  ];

  const features = [
    { key: "interoperability", icon: "🌐" },
    { key: "security", icon: "🛡️" },
    { key: "privacy", icon: "🔒" },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Hero + Wallet Concepts */}
      <AnimatedSection>
        <section className="section-card">
          <SectionHeading
            title={dict.solution.heading.title}
            subtitle={dict.solution.heading.subtitle}
          />
          <div className="grid-3" style={{ marginTop: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <article className="section-card" style={{
              background: 'linear-gradient(135deg, rgba(0, 108, 75, 0.04) 0%, rgba(26, 59, 93, 0.03) 100%)',
              borderColor: 'rgba(0, 108, 75, 0.1)',
            }}>
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '8px' }}>{dict.solution.whatIsWallet.title}</h4>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--color-muted)' }}>{dict.solution.whatIsWallet.text}</p>
            </article>
            <article className="section-card" style={{
              background: 'linear-gradient(135deg, rgba(26, 59, 93, 0.04) 0%, rgba(0, 108, 75, 0.03) 100%)',
              borderColor: 'rgba(26, 59, 93, 0.1)',
            }}>
              <h4 style={{ color: 'var(--color-primary)', marginBottom: '8px' }}>{dict.solution.whatAreVCs.title}</h4>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--color-muted)' }}>{dict.solution.whatAreVCs.text}</p>
            </article>
          </div>
        </section>
      </AnimatedSection>

      {/* How It Works — Flow Steps */}
      <AnimatedSection delay={0.1}>
        <section className="section-card">
          <h3 style={{ marginBottom: '4px' }}>{dict.solution.flow.title}</h3>

          {/* Flow diagram image */}
          {dict.solution.flowDiagram && (
            <div style={{
              margin: '20px 0',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 108, 75, 0.08)',
            }}>
              <Image
                src={dict.solution.flowDiagram.image}
                alt={dict.solution.flowDiagram.alt}
                width={1200}
                height={500}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          )}

          <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
            {flowSteps.map(({ key, num, color }) => {
              const flow = dict.solution.flow as Record<string, any>;
              const step = flow[key];
              const label = typeof step === 'string' ? step.split(':')[0] : step?.label;
              const text = typeof step === 'string' ? step.split(':').slice(1).join(':') : step?.text;
              return (
                <div key={key} style={{
                  padding: '16px 20px',
                  background: '#f8fafc',
                  borderRadius: '10px',
                  borderLeft: `4px solid ${color}`,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                }}>
                  <span style={{
                    fontWeight: 800,
                    fontSize: '20px',
                    color: color,
                    opacity: 0.5,
                    lineHeight: 1,
                    minWidth: '28px',
                  }}>{num}</span>
                  <div>
                    <strong style={{ color: color }}>{label}</strong>
                    <span style={{ color: 'var(--color-muted)' }}>{typeof step === 'string' ? '' : `: ${text}`}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </AnimatedSection>

      {/* Trust Triangle + App Mockup */}
      <AnimatedSection delay={0.15}>
        <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {/* Trust Triangle */}
          {dict.solution.trustTriangle && (
            <section className="section-card" style={{ textAlign: 'center' }}>
              <h3 style={{ marginBottom: '8px' }}>{dict.solution.trustTriangle.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--color-muted)', lineHeight: 1.5, marginBottom: '16px' }}>
                {dict.solution.trustTriangle.description}
              </p>
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 108, 75, 0.08)',
              }}>
                <Image
                  src={dict.solution.trustTriangle.image}
                  alt={dict.solution.trustTriangle.title}
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </section>
          )}

          {/* App Mockup */}
          {dict.solution.appMockup && (
            <section className="section-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 style={{ marginBottom: '16px' }}>
                {lang === "pt" ? "Interface da Aplicação" : "Application Interface"}
              </h3>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                maxWidth: '300px',
              }}>
                <Image
                  src={dict.solution.appMockup.image}
                  alt={dict.solution.appMockup.alt}
                  width={400}
                  height={500}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </section>
          )}
        </div>
      </AnimatedSection>

      {/* Features */}
      <AnimatedSection delay={0.2}>
        <section className="section-card">
          <h3>{dict.solution.features.title}</h3>
          <div className="grid-3" style={{ marginTop: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            {features.map(({ key, icon }) => {
              const featuresMap = dict.solution.features as Record<string, any>;
              const feature = featuresMap[key];
              const label = typeof feature === 'string' ? feature.split(':')[0] : feature?.label;
              const text = typeof feature === 'string' ? feature.split(':').slice(1).join(':').trim() : feature?.text;
              return (
                <article key={key} style={{
                  padding: '16px',
                  borderRadius: '10px',
                  background: 'rgba(0, 108, 75, 0.03)',
                  border: '1px solid rgba(0, 108, 75, 0.06)',
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>{icon}</div>
                  <strong style={{ color: 'var(--color-primary)', fontSize: '14px' }}>{label}</strong>
                  <p style={{ fontSize: '13px', color: 'var(--color-muted)', marginTop: '6px', lineHeight: 1.5 }}>{text}</p>
                </article>
              );
            })}
          </div>
        </section>
      </AnimatedSection>

      {/* Technical Standards */}
      {dict.solution.technicalStandards && (
        <AnimatedSection delay={0.25}>
          <section className="section-card">
            <h3>{dict.solution.technicalStandards.title}</h3>
            <div style={{ display: 'grid', gap: '10px', marginTop: '16px' }}>
              <div style={{
                padding: '12px 16px',
                borderRadius: '8px',
                background: '#f8fafc',
                borderLeft: '3px solid var(--color-primary)',
              }}>
                <span style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
                  <strong style={{ color: 'var(--color-primary)' }}>W3C</strong> — {dict.solution.technicalStandards.w3c}
                </span>
              </div>
              <div style={{
                padding: '12px 16px',
                borderRadius: '8px',
                background: '#f8fafc',
                borderLeft: '3px solid var(--color-secondary)',
              }}>
                <span style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
                  <strong style={{ color: 'var(--color-secondary)' }}>EBSI</strong> — {dict.solution.technicalStandards.ebsi}
                </span>
              </div>
              <div style={{
                padding: '12px 16px',
                borderRadius: '8px',
                background: '#f8fafc',
                borderLeft: '3px solid #10B981',
              }}>
                <span style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
                  <strong style={{ color: '#10B981' }}>DIDs</strong> — {dict.solution.technicalStandards.dids}
                </span>
              </div>
            </div>
          </section>
        </AnimatedSection>
      )}
    </div>
  );
}
