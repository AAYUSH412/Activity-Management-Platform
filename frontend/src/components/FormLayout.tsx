"use client";

import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface FormLayoutProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  children: React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({
  activeTab,
  onTabChange,
  children,
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex gap-8 max-md:flex-col">
          <Sidebar activeTab={activeTab} onTabChange={onTabChange} />
          <div className="flex-1">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default FormLayout;
