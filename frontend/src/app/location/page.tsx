"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import LocationDetailsForm from "@/components/LocationDetailsForm";

export default function LocationPage() {
  const [activeTab, setActiveTab] = useState("Location Details");
  const router = useRouter();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === "Activity Details") {
      router.push("/activity");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="py-2 bg-white max-md:p-6 max-sm:p-4">
          <h1 className="mb-8 text-2xl font-bold leading-8 text-zinc-900 max-sm:text-xl pl-12">
            Create new Activity
          </h1>
        </section>
        <div className="flex gap-8 max-md:flex-col">
          <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
          <div className="flex-1">
            <LocationDetailsForm />
          </div>
        </div>
      </main>
    </div>
  );
}