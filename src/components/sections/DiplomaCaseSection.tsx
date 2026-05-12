"use client";

import Link from "next/link";
import { Locale } from "@/i18n/config";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { InteractiveSimulator } from "@/components/ui/InteractiveSimulator";

interface DiplomaCaseSectionProps {
  lang: Locale;
  dict: any;
}

export function DiplomaCaseSection({ lang, dict }: DiplomaCaseSectionProps) {
  return (
    <AnimatedSection delay={0.1}>
      <section className="section-card diploma-case-section" style={{
        marginTop: '32px',
        background: 'linear-gradient(135deg, rgba(0, 108, 75, 0.04) 0%, rgba(26, 59, 93, 0.04) 100%)',
        borderColor: 'rgba(0, 108, 75, 0.15)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(0, 108, 75, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{ fontSize: '24px' }}>🎓</span>
              <h3 style={{
                margin: 0,
                color: 'var(--color-primary)',
                fontSize: '18px',
                fontWeight: 700,
              }}>
                {dict.diplomaCase.title}
              </h3>
            </div>
            <p style={{
              color: 'var(--color-muted)',
              lineHeight: 1.7,
              fontSize: '15px',
              margin: '0 0 18px',
              maxWidth: '720px',
            }}>
              {dict.diplomaCase.text}
            </p>
            <Link
              href={`/${lang}/casos-de-uso/diplomas-digitais`}
              className="cta cta-disruptive"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                textDecoration: 'none',
              }}
            >
              {dict.diplomaCase.cta} →
            </Link>
          </div>
          <div style={{ width: '100%', maxWidth: '400px' }}>
            <InteractiveSimulator dict={dict} lang={lang} />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
