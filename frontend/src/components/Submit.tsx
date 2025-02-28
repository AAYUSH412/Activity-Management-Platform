"use client";
import React from "react";
import Image from "next/image";

interface SuccessModalProps {
  onClose: () => void;
}

const CloseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-2.5 right-2.5 w-6 h-6 cursor-pointer"
      aria-label="Close modal"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fill="#E5E5E5"></rect>
        <path
          d="M12 10.8891L15.8891 7L17 8.11094L13.1109 12L17 15.8891L15.8891 17L12 13.1109L8.11094 17L7 15.8891L10.8891 12L7 8.11094L8.11094 7L12 10.8891Z"
          fill="black"
        ></path>
      </svg>
    </button>
  );
};

const IconCircle: React.FC = () => {
  return (
    <figure className="flex justify-center items-center p-2 mb-6 bg-indigo-100 h-[106px] rounded-[60px] w-[106px] max-sm:h-[90px] max-sm:w-[90px]">
      <Image 
        src="/Icon.svg" 
        alt="Success Icon" 
        width={60} 
        height={60}
      />
    </figure>
  );
};

const SuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      {/* Blurred background overlay */}
      <div 
        className="absolute inset-0 bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal content */}
      <div className="flex flex-col items-center p-8 bg-white rounded-2xl border border-solid shadow-lg border-black border-opacity-10 w-[510px] max-md:max-w-[510px] max-md:w-[90%] max-sm:p-6 max-sm:w-[95%] relative z-10">
        <IconCircle />
        <h2 className="text-2xl font-bold text-center text-black max-sm:text-xl">
          Activity Created Successfully
        </h2>
        <p className="mt-2 mb-6 text-center text-gray-600">
          Your activity has been created and saved successfully.
        </p>
        <button 
          onClick={onClose}
          className="px-5 py-3 text-sm font-semibold text-white bg-sky-950 rounded-[999px] hover:bg-sky-900 transition-colors"
        >
          Close
        </button>
        <CloseButton onClick={onClose} />
      </div>
    </div>
  );
};

export default SuccessModal;