import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/i18n/config";

interface HeroProps {
  lang: Locale;
  dict: any;
}

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=pt.tecminho.pdw&pcampaignid=web_share";

export function HeroInstitutional({ lang, dict }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <span className="text-gradient">{dict.hero.title}</span>
        </h1>
        <p className="hero-subtitle">
          {dict.hero.subtitle}
        </p>
        <p className="hero-description">
          {dict.hero.description}
        </p>
        <div className="btn-row">
          <Link href={`/${lang}/casos-de-uso/diplomas-digitais`} className="cta cta-disruptive">
            {dict.hero.ctaDemo}
          </Link>
          <a 
            href={PLAY_STORE_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            {dict.hero.ctaApp}
          </a>
        </div>
      </div>
      <div className="hero-image-container">
        <div className="image-glow"></div>
        <Image 
          src={dict.hero.image} 
          alt={dict.hero.title} 
          width={600} 
          height={600} 
          className="disruptive-image"
          priority
        />
      </div>
    </section>
  );
}
