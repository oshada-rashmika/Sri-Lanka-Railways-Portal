"use client";

import { useState } from 'react';
import { withSanitizedInput } from '../utils/sanitize';

export default function SearchBar({ onSearch }: { onSearch?: (term: string) => void }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative flex items-center transition-all duration-300 ${isFocused ? 'w-full sm:w-64' : 'w-full sm:w-48'}`}>
      <div className={`flex items-center w-full px-4 py-2 bg-slate-100/80 dark:bg-slate-800/80 border rounded-full backdrop-blur-md transition-all duration-300 ${
        isFocused 
          ? 'border-blue-400 dark:border-blue-500 shadow-md ring-2 ring-blue-100 dark:ring-blue-900/30' 
          : 'border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600'
      }`}>
        <svg 
          className={`w-4 h-4 mr-2 transition-colors duration-200 ${isFocused ? 'text-blue-500 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={withSanitizedInput(setSearchTerm)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent border-none outline-none text-sm font-medium text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-0"
        />
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm("")}
            className="p-1 ml-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200 dark:hover:text-slate-300 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400/50"
            aria-label="Clear search"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </form>
  );
}
