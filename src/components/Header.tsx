"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type NavItem = {
  name: string;
  href: string;
  dropdown?: { name: string; href: string; }[];
};

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Train Schedule', href: '#' },
  { name: 'E-Ticketing', href: '#' },
  { 
    name: 'Services', 
    href: '#',
    dropdown: [
      { name: 'Freight Services', href: '#' },
      { name: 'Special Trains', href: '#' },
      { name: 'Reserved Carriages', href: '#' },
    ]
  },
  { 
    name: 'Notices', 
    href: '#',
    dropdown: [
      { name: 'General Notices', href: '#' },
      { name: 'Tenders', href: '#' },
      { name: 'Procurement', href: '#' },
    ]
  },
  { name: 'Contact Us', href: '#' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Left: Emblem & Title */}
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-16 sm:w-14 sm:h-20 flex-shrink-0 drop-shadow-md">
              <Image 
                src="/assets/sllogo.png" 
                alt="Sri Lanka Emblem" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            
            <div className="hidden sm:flex flex-col justify-center">
              <h1 className="text-xl sm:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 tracking-tight">
                Sri Lanka Railways
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                Department of Railways
              </p>
            </div>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button className="flex items-center gap-1 px-3 py-2 rounded-full text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 focus:outline-none">
                      {item.name}
                      <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="w-56 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl p-2 flex flex-col gap-1 ring-1 ring-black/5 dark:ring-white/10">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-white/50 dark:hover:bg-slate-800/50 hover:shadow-sm transition-all"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link 
                    href={item.href}
                    className="flex items-center px-3 py-2 rounded-full text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Railway Logo & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 drop-shadow-lg">
              <Image 
                src="/assets/Sri Lanka Railway.png" 
                alt="Sri Lanka Railway Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!mobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl absolute w-full left-0">
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
            {navigation.map((item) => (
              <div key={item.name} className="flex flex-col">
                {item.dropdown ? (
                  <div className="flex flex-col space-y-1">
                    <div className="block px-4 py-3 rounded-lg text-base font-semibold text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-slate-800/30">
                      {item.name}
                    </div>
                    <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-slate-100 dark:border-slate-800 ml-4">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 rounded-lg text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
