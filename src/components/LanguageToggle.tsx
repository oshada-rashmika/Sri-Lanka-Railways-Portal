"use client";

import { useState } from 'react';

type Language = 'English' | 'සිංහල' | 'தமிழ்';

export default function LanguageToggle() {
  const [active, setActive] = useState<Language>('English');

  const languages: { id: Language; label: string }[] = [
    { id: 'English', label: 'English' },
    { id: 'සිංහල', label: 'සිංහල' },
    { id: 'தமிழ்', label: 'தமிழ்' },
  ];

  return (
    <div className="flex items-center bg-slate-800/40 p-0.5 rounded-full w-fit border border-slate-700/50">
      {languages.map((lang) => {
        const isActive = active === lang.id;
        return (
          <button
            key={lang.id}
            onClick={() => setActive(lang.id)}
            className={`
              relative px-3 py-1 text-[10px] font-medium rounded-full transition-all duration-300 ease-out leading-none
              focus:outline-none focus:ring-1 focus:ring-blue-500/50
              ${isActive 
                ? 'bg-slate-700/80 text-blue-400 shadow-sm ring-1 ring-white/5' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/30'
              }
            `}
            aria-pressed={isActive}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
