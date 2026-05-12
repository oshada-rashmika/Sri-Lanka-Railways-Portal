"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import MobileNav from './MobileNav';
import SearchBar from './SearchBar';
import TopUtilityBar from './TopUtilityBar';

export type NavItem = {
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 w-full z-50 transition-all duration-500 ease-in-out">
      <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isScrolled ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]'}`}>
        <div className="overflow-hidden bg-slate-900 dark:bg-slate-950">
          <div className={`transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
            <TopUtilityBar />
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div 
          className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform ${
            isScrolled 
              ? 'w-[95%] max-w-7xl mx-auto translate-y-2 rounded-full border border-white/10 shadow-2xl backdrop-blur-lg bg-slate-900/80 dark:bg-slate-950/80 px-4 sm:px-6' 
              : 'w-full translate-y-0 bg-slate-900 dark:bg-slate-950 border-transparent px-4 sm:px-6 lg:px-8'
          }`}
        >
          <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'h-16' : 'h-24'}`}>
            
            {/* Left: Emblem & Title */}
            <div className="flex items-center gap-4">
              <div className={`relative flex-shrink-0 drop-shadow-md transition-all duration-500 ${isScrolled ? 'w-10 h-14 sm:w-11 sm:h-16' : 'w-12 h-16 sm:w-14 sm:h-20'}`}>
              <Image 
                src="/assets/sllogo.png" 
                alt="Sri Lanka Emblem" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            
            <div className="hidden sm:flex flex-col justify-center">
              <h1 className={`font-extrabold text-white tracking-tight transition-all duration-500 ${isScrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'}`}>
                Sri Lanka Railways
              </h1>
              <p className={`font-semibold text-blue-400 tracking-wider uppercase transition-all duration-500 ${isScrolled ? 'text-[10px] sm:text-xs' : 'text-xs sm:text-sm'}`}>
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
                    <button className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-bold transition-all duration-200 focus:outline-none ${isScrolled ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-200 hover:text-white hover:bg-white/10'}`}>
                      {item.name}
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    className={`flex items-center px-3 py-2 rounded-full text-sm font-bold transition-all duration-200 ${isScrolled ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-200 hover:text-white hover:bg-white/10'}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Search, Railway Logo & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden lg:block">
              <SearchBar />
            </div>
            
            <div className={`relative flex-shrink-0 drop-shadow-lg transition-all duration-500 ${isScrolled ? 'w-10 h-10 sm:w-12 sm:h-12' : 'w-12 h-12 sm:w-16 sm:h-16'}`}>
              <Image 
                src="/assets/Sri Lanka Railway.png" 
                alt="Sri Lanka Railway Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            
            {/* Mobile Menu Button - Replaced with MobileNav */}
            <MobileNav navigation={navigation} />
          </div>

        </div>
      </div>
    </div>
    </header>
  );
}
