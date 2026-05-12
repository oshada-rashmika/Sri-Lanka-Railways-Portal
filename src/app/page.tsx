import HeroCarousel from "@/components/HeroCarousel";
import QuickActions from "@/components/QuickActions";
import Notices from "@/components/Notices";
import TenderNoticesTable from "@/components/TenderNoticesTable";
import ImportantLinksSidebar from "@/components/ImportantLinksSidebar";
import RelatedGovLinksSidebar from "@/components/RelatedGovLinksSidebar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroCarousel />
      
      <div className="w-full bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800">
        <QuickActions />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-12">
            <Notices />
            <TenderNoticesTable />
          </div>
          
          <div className="flex flex-col gap-6">
            <ImportantLinksSidebar />
            <RelatedGovLinksSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
