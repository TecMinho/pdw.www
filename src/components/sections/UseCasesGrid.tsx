import Link from "next/link";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Locale } from "@/i18n/config";

interface UseCasesGridProps {
  lang: Locale;
  dict: any;
}

export function UseCasesGrid({ lang, dict }: UseCasesGridProps) {
  const cases = [
    {
      title: dict.useCases.diplomas.title,
      text: dict.useCases.diplomas.text,
      status: dict.useCases.diplomas.status as "available" | "development" | "research",
      icon: dict.useCases.diplomas.icon || "🎓",
      href: `/${lang}/casos-de-uso/diplomas-digitais`
    },
    {
      title: dict.useCases.studentId.title,
      text: dict.useCases.studentId.text,
      status: dict.useCases.studentId.status as "available" | "development" | "research",
      icon: dict.useCases.studentId.icon || "🪪",
      href: `/${lang}/casos-de-uso`
    },
    {
      title: dict.useCases.microCredentials.title,
      text: dict.useCases.microCredentials.text,
      status: dict.useCases.microCredentials.status as "available" | "development" | "research",
      icon: dict.useCases.microCredentials.icon || "📜",
      href: `/${lang}/casos-de-uso`
    },
    {
      title: dict.useCases.health.title,
      text: dict.useCases.health.text,
      status: dict.useCases.health.status as "available" | "development" | "research",
      icon: dict.useCases.health.icon || "🏥",
      href: `/${lang}/casos-de-uso`
    },
    {
      title: dict.useCases.foodChain.title,
      text: dict.useCases.foodChain.text,
      status: dict.useCases.foodChain.status as "available" | "development" | "research",
      icon: dict.useCases.foodChain.icon || "🌱",
      href: `/${lang}/casos-de-uso`
    },
    {
      title: dict.useCases.realEstate.title,
      text: dict.useCases.realEstate.text,
      status: dict.useCases.realEstate.status as "available" | "development" | "research",
      icon: dict.useCases.realEstate.icon || "🏠",
      href: `/${lang}/casos-de-uso`
    }
  ];

  return (
    <section style={{ marginTop: 14 }}>
      <div className="grid-3">
        {cases.map((item) => (
          <article key={item.title} className="section-card use-case-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: 'auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span style={{ fontSize: '28px' }}>{item.icon}</span>
                <StatusBadge status={item.status} dict={dict} />
              </div>
              <h3 style={{ margin: "2px 0 8px" }}>{item.title}</h3>
              <p style={{ marginTop: 0, color: "var(--color-muted)", fontSize: '14px', lineHeight: '1.5' }}>{item.text}</p>
            </div>
            <Link href={item.href} style={{ fontWeight: 700, color: "var(--color-primary)", marginTop: '12px', display: 'inline-block', fontSize: '14px' }}>
              {dict.useCases.diplomas.details} →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
