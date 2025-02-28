// src/components/Sidebar.tsx
"use client";

import React from "react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { TabItem } from "@/types";

type SidebarProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const router = useRouter();
  
  const tabs: TabItem[] = [
    { 
      name: "Activity Details", 
      icon: "/base.svg" 
    }, 
    { 
      name: "Location Details", 
      icon: "/location.svg" 
    }
  ];

  // Function to navigate to home
  const goToHome = () => {
    router.push('/');
  };

  return (
    <aside className="flex flex-col gap-4 pl-12 pr-8 border-r border-solid border-neutral-200 max-md:pl-0 max-md:pr-0 max-md:border-0">
      <div className="hidden md:block text-sm text-neutral-500 mb-2">
        <button onClick={goToHome} className="flex items-center gap-2 hover:text-sky-950">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </button>
      </div>
      
      <nav className="text-base w-[220px]">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => {
              onTabChange(tab.name);
              // Navigate to appropriate page when tab changes
              if (tab.name === "Location Details") {
                router.push('/location');
              } else if (tab.name === "Activity Details") {
                router.push('/activity');
              }
            }}
            className={`flex gap-2.5 items-center px-7 py-3 w-full mb-2 ${
              activeTab === tab.name
                ? "font-semibold rounded-lg bg-neutral-100 text-zinc-800"
                : "text-neutral-500 hover:bg-neutral-50"
            } max-md:px-5 transition-colors`}
          >
            <div className="flex flex-1 shrink gap-2.5 items-center self-stretch my-auto w-full basis-0">
              <div className="flex shrink-0 self-stretch my-auto w-6 h-6">
                <Image 
                  src={tab.icon} 
                  alt={tab.name} 
                  width={24} 
                  height={24}
                />
              </div>
              <span className="self-stretch my-auto">{tab.name}</span>
            </div>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;