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
    <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-800/50 p-1.5 rounded-full w-fit border border-slate-200 dark:border-slate-700/50">
      {languages.map((lang) => {
        const isActive = active === lang.id;
        return (
          <button
            key={lang.id}
            onClick={() => setActive(lang.id)}
            className={`
              relative flex-1 px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-out
              focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 dark:focus:ring-offset-slate-900
              ${isActive 
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10' 
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-700/30'
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
