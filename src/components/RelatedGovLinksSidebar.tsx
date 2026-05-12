import React from 'react';

const govLinks = [
  {
    id: 'gov-sl',
    title: 'Government of Sri Lanka',
    url: 'https://www.gov.lk/',
  },
  {
    id: 'ministry-transport',
    title: 'Ministry of Transport',
    url: 'https://www.transport.gov.lk/',
  },
  {
    id: 'tourism-board',
    title: 'Sri Lanka Tourism',
    url: 'https://www.srilanka.travel/',
  },
  {
    id: 'dmt',
    title: 'Department of Motor Traffic',
    url: 'https://dmt.gov.lk/',
  },
  {
    id: 'meteorology',
    title: 'Department of Meteorology',
    url: 'http://www.meteo.gov.lk/',
  },
];

export default function RelatedGovLinksSidebar() {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-slate-50 dark:bg-slate-900/40 border-t-4 border-t-emerald-500 border-x border-b border-slate-200 dark:border-slate-800 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-5">
        <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">
          Related Gov Links
        </h3>
      </div>
      
      <ul className="space-y-3">
        {govLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
            >
              <svg 
                className="w-4 h-4 mr-2 mt-0.5 shrink-0 text-emerald-500/50 group-hover:text-emerald-500 transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="font-medium underline decoration-transparent group-hover:decoration-emerald-500/30 underline-offset-4 transition-all duration-300">
                {link.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
