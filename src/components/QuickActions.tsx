import React from 'react';

const actions = [
  {
    id: 1,
    title: 'Book Tickets',
    icon: (
      <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Train Schedules',
    icon: (
      <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Live Tracking',
    icon: (
      <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Tourist Packages',
    icon: (
      <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Station Info',
    icon: (
      <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z" />
      </svg>
    ),
  },
];

export default function QuickActions() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* CSS Grid for the 5 buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {actions.map((action, index) => (
          <button
            key={action.id}
            className={`
              flex flex-col items-center justify-center p-6 rounded-2xl
              bg-white dark:bg-slate-800 
              border border-slate-200 dark:border-slate-700
              text-slate-700 dark:text-slate-200
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:scale-105
              hover:border-blue-400 dark:hover:border-blue-500
              hover:text-blue-600 dark:hover:text-blue-400
              hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)]
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900
              ${index === 4 ? 'col-span-2 sm:col-span-1 md:col-span-1' : ''}
            `}
          >
            {action.icon}
            <span className="font-medium text-sm text-center">{action.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
