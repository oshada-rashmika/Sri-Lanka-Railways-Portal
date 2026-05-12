"use client";

import React, { useState } from 'react';

type Notice = {
  id: string;
  date: string;
  title: string;
  description: string;
  isNew?: boolean;
};

const publicNotices: Notice[] = [
  {
    id: 'p1',
    date: 'May 12, 2026',
    title: 'Schedule Changes for Poson Poya Holiday',
    description: 'Special train services will be operational to Anuradhapura. Check the updated timetable before planning your journey.',
    isNew: true,
  },
  {
    id: 'p2',
    date: 'May 08, 2026',
    title: 'Temporary Closure of Wellawatte Station Ticket Counter No. 2',
    description: 'Due to routine maintenance, counter 2 will remain closed until May 15. Please use the alternative counters.',
  },
  {
    id: 'p3',
    date: 'May 01, 2026',
    title: 'Introduction of E-Ticketing for Coastal Line',
    description: 'Passengers can now book digital tickets via the portal for all stations along the coastal line.',
  },
];

const mediaNotices: Notice[] = [
  {
    id: 'm1',
    date: 'May 10, 2026',
    title: 'Press Release: New Luxury Carriages Added to Ella Odyssey',
    description: 'The Ministry of Transport announces the addition of two panoramic viewing carriages to the historic mountain route.',
    isNew: true,
  },
  {
    id: 'm2',
    date: 'April 28, 2026',
    title: 'Annual Performance Report 2025 Published',
    description: 'Sri Lanka Railways records a 15% increase in tourist utilization over the last fiscal year.',
  },
];

export default function Notices() {
  const [activeTab, setActiveTab] = useState<'public' | 'media'>('public');

  const currentNotices = activeTab === 'public' ? publicNotices : mediaNotices;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Notice Board</h2>
        <p className="text-slate-500 dark:text-slate-400">Stay updated with the latest announcements regarding train services and releases.</p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 border-b border-slate-200 dark:border-slate-700">
        <button
          onClick={() => setActiveTab('public')}
          className={`
            px-5 py-3 text-sm font-medium transition-all relative
            focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-t-lg
            ${activeTab === 'public' 
              ? 'text-blue-600 dark:text-blue-400' 
              : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'}
          `}
        >
          Public Notices
          {activeTab === 'public' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-t" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('media')}
          className={`
            px-5 py-3 text-sm font-medium transition-all relative
            focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-t-lg
            ${activeTab === 'media' 
              ? 'text-blue-600 dark:text-blue-400' 
              : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'}
          `}
        >
          Media Notices
          {activeTab === 'media' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-t" />
          )}
        </button>
      </div>

      {/* List */}
      <div className="space-y-4">
        {currentNotices.map((notice) => (
          <div 
            key={notice.id}
            className="group flex flex-col md:flex-row md:items-start justify-between p-5 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 ease-out cursor-pointer"
          >
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 shrink-0">
                  {notice.date}
                </span>
                {notice.isNew && (
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-green-700 bg-green-100 dark:text-green-300 dark:bg-green-900/30 rounded-full">
                    New
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {notice.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
                {notice.description}
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 md:ml-6 flex items-center justify-end">
              <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-700/50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 dark:group-hover:bg-blue-900/30 dark:group-hover:text-blue-400 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
        
        {currentNotices.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400">
            No notices available at the moment.
          </div>
        )}
      </div>
    </div>
  );
}
