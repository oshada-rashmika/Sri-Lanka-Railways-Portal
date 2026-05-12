"use client";

import { useState, useEffect } from 'react';
import LanguageToggle from './LanguageToggle';

type FontSize = 'sm' | 'base' | 'lg';

export default function TopUtilityBar() {
  const [fontSize, setFontSize] = useState<FontSize>('base');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Retrieve saved font size from localStorage if available
    const saved = localStorage.getItem('site-font-size') as FontSize;
    if (saved && ['sm', 'base', 'lg'].includes(saved)) {
      setFontSize(saved);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Apply font size to document.documentElement (rem scaling)
    const html = document.documentElement;
    if (fontSize === 'sm') {
      html.style.fontSize = '14px'; // 87.5%
    } else if (fontSize === 'lg') {
      html.style.fontSize = '18px'; // 112.5%
    } else {
      html.style.fontSize = '16px'; // 100%
    }
    
    // Persist choice
    localStorage.setItem('site-font-size', fontSize);
  }, [fontSize, mounted]);

  const fontOptions: { id: FontSize; label: string; sizeClass: string }[] = [
    { id: 'sm', label: 'A-', sizeClass: 'text-xs' },
    { id: 'base', label: 'A', sizeClass: 'text-sm' },
    { id: 'lg', label: 'A+', sizeClass: 'text-base' },
  ];

  return (
    <div className="w-full bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-end gap-4 sm:gap-6 py-2 px-4 sm:px-6 lg:px-8">
        
        {/* Font Size Adjuster */}
        <div className="flex items-center space-x-3">
          <span className="hidden sm:inline-block text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            Text Size
          </span>
          <div className="flex items-center bg-slate-200/50 dark:bg-slate-800/50 p-1 rounded-full border border-slate-200 dark:border-slate-700/50">
            {fontOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFontSize(opt.id)}
                className={`
                  w-8 h-8 flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out
                  focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-1 dark:focus:ring-offset-slate-900
                  ${fontSize === opt.id 
                    ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10 scale-105' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-300/50 dark:hover:bg-slate-700/30'
                  }
                `}
                aria-pressed={fontSize === opt.id}
                title={`Change text size to ${opt.id}`}
              >
                <span className={opt.sizeClass}>{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="w-px h-6 bg-slate-300 dark:bg-slate-700/50 hidden sm:block"></div>

        {/* Language Toggle */}
        <div className="scale-90 sm:scale-100 origin-right">
          <LanguageToggle />
        </div>
        
      </div>
    </div>
  );
}
