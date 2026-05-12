"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import type { NavItem } from './Header';

interface MobileNavProps {
  navigation: NavItem[];
}

export default function MobileNav({ navigation }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Focus trap logic
  useEffect(() => {
    if (!isOpen) return;

    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const focusableElements = sidebar.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Focus first element when opened after a slight delay to allow transition
    setTimeout(() => {
      firstElement?.focus();
    }, 100);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden flex items-center">
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-controls="mobile-sidebar"
        aria-label="Open main menu"
      >
        {!isOpen ? (
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ) : (
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Off-canvas Sidebar */}
      <div
        id="mobile-sidebar"
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-[100dvh] w-4/5 max-w-sm bg-white dark:bg-slate-900 shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200/80 dark:border-slate-800/80">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300">
            Menu
          </span>
          <button
            type="button"
            className="p-2.5 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            onClick={() => {
              setIsOpen(false);
              triggerRef.current?.focus();
            }}
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6 space-y-2">
          {navigation.map((item) => (
            <div key={item.name} className="flex flex-col">
              {item.dropdown ? (
                <div className="flex flex-col space-y-1 mb-4">
                  <div className="px-4 py-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                    {item.name}
                  </div>
                  <div className="space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800/50 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors mb-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        
        {/* Footer info in sidebar */}
        <div className="p-6 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50">
          <p className="text-xs text-center text-slate-500 dark:text-slate-400">
            © 2026 Sri Lanka Railways.
          </p>
        </div>
      </div>
    </div>
  );
}
