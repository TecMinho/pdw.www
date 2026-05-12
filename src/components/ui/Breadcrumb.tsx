'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbProps {
  dict: any;
  lang: string;
}

export function Breadcrumb({ dict, lang }: BreadcrumbProps) {
  const pathname = usePathname();
  
  // Remove o locale do início do pathname para processamento
  const pathWithoutLocale = pathname.replace(`/${lang}`, '');
  
  if (!pathWithoutLocale || pathWithoutLocale === '/') {
    return null; // Não mostra na Home
  }

  const segments = pathWithoutLocale.split('/').filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center text-sm text-slate-400">
      <Link 
        href={`/${lang}`}
        className="flex items-center hover:text-pdw-teal transition-colors"
        aria-label={dict?.navigation?.home || "Home"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      </Link>
      
      {segments.map((segment, index) => {
        const isLast = index === segments.length - 1;
        const href = `/${lang}/${segments.slice(0, index + 1).join('/')}`;
        
        // Capitalize e formata o texto (ex: casos-de-uso -> Casos de uso)
        const text = segment
          .split('-')
          .map((word, i) => i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word)
          .join(' ');

        return (
          <div key={href} className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mx-2 text-slate-600"><path d="m9 18 6-6-6-6"/></svg>
            {isLast ? (
              <span className="text-slate-200 font-medium" aria-current="page">
                {text}
              </span>
            ) : (
              <Link 
                href={href}
                className="hover:text-pdw-teal transition-colors"
              >
                {text}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
