// src/app/page.tsx
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Activity Management - Home",
  description: "Welcome to Activity Management platform",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="min-h-screen flex-1 flex flex-col items-center justify-center p-24 max-md:p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Activity Management</h1>
        <p className="text-lg text-neutral-600 mb-8 max-w-lg text-center">
          Create and manage activities with our streamlined platform. Get started by creating your first activity.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link 
            href="/activity" 
            className="px-5 py-3 text-sm font-bold text-white bg-sky-950 rounded-[999px] hover:bg-sky-900 transition-colors"
          >
            Create Activity
          </Link>
        </div>
      </main>      
    </div>
  );
}