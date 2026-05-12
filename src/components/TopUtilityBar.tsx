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
    { id: 'sm', label: 'A-', sizeClass: 'text-[9px]' },
    { id: 'base', label: 'A', sizeClass: 'text-[10px]' },
    { id: 'lg', label: 'A+', sizeClass: 'text-xs' },
  ];

  return (
    <div className="w-full bg-slate-900 dark:bg-slate-950 border-b border-slate-700/50 relative z-10 hidden sm:block">
      <div className="max-w-7xl mx-auto flex items-center justify-end gap-3 py-1 px-4 sm:px-6 lg:px-8">
        
        {/* Font Size Adjuster */}
        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            Text Size
          </span>
          <div className="flex items-center bg-slate-200/40 dark:bg-slate-800/40 p-0.5 rounded-full border border-slate-200/50 dark:border-slate-700/30">
            {fontOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFontSize(opt.id)}
                className={`
                  w-5 h-5 flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out
                  focus:outline-none focus:ring-1 focus:ring-blue-500/50
                  ${fontSize === opt.id 
                    ? 'bg-white dark:bg-slate-700/80 text-blue-600 dark:text-blue-400 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/5' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-300/40 dark:hover:bg-slate-700/30'
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
        <div className="w-px h-3 bg-slate-300/70 dark:bg-slate-700/50"></div>

        {/* Language Toggle */}
        <LanguageToggle />
        
      </div>
    </div>
  );
}
