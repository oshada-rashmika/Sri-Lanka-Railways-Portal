import React from 'react';

type TenderNotice = {
  id: string;
  title: string;
  date: string;
  pdfUrl: string;
};

const tenderNotices: TenderNotice[] = [
  {
    id: 't1',
    title: 'Procurement of Lubricants for Diesel Locomotives',
    date: 'May 10, 2026',
    pdfUrl: '#',
  },
  {
    id: 't2',
    title: 'Modernization of Railway Signaling System - Track 4',
    date: 'May 02, 2026',
    pdfUrl: '#',
  },
  {
    id: 't3',
    title: 'Supply and Delivery of Ticket Printing Paper Rolls',
    date: 'April 28, 2026',
    pdfUrl: '#',
  },
  {
    id: 't4',
    title: 'Renovation of Passenger Waiting Halls at Mount Lavinia Station',
    date: 'April 15, 2026',
    pdfUrl: '#',
  },
];

export default function TenderNoticesTable() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Tender Notices</h2>
        <p className="text-slate-500 dark:text-slate-400">View and download the latest procurement and tender documents.</p>
      </div>

      <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm overflow-hidden">
        {/* Responsive wrapper for horizontal scrolling on small devices */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
            <thead className="bg-slate-50 dark:bg-slate-900/50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Date Published
                </th>
                <th scope="col" className="px-6 py-4 text-right text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700/50 bg-transparent">
              {tenderNotices.map((tender) => (
                <tr 
                  key={tender.id}
                  className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors duration-200 group"
                >
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-slate-900 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tender.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                    {tender.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a
                      href={tender.pdfUrl}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg dark:text-blue-400 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
                      aria-label={`Download PDF for ${tender.title}`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Download PDF</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {tenderNotices.length === 0 && (
            <div className="text-center py-10 text-slate-500 dark:text-slate-400 text-sm">
              No tender notices available at this time.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
