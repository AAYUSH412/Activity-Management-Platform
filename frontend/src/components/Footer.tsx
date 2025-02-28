// src/components/Footer.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SocialIconProps {
  src: string;
  alt: string;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, href }) => {
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="transition-opacity hover:opacity-80"
      aria-label={alt}
    >
      <Image src={src} alt={alt} width={24} height={24} />
    </Link>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center px-28 py-16 mx-auto my-0 w-full bg-white max-w-[1440px] max-md:px-16 max-md:py-12 max-sm:px-6 max-sm:py-8 border border-t border-solid border-neutral-200">
      <div className="mb-6">
        <Image 
          src="/logo.svg"
          alt="Company Logo"
          width={250}
          height={96}
          className="object-contain h-24 w-[250px] max-sm:h-auto max-sm:w-[200px]"
          priority
        />
      </div>

      <p className="mb-6 text-base leading-6 text-center text-neutral-500">
        Marketplace for searching, filtering and instantly booking team
        activities
      </p>

      <nav className="flex gap-6 mb-6 max-sm:gap-4">
        <SocialIcon 
          src="/facebook.svg" 
          alt="Facebook"
          href="https://facebook.com"
        />
        <SocialIcon 
          src="/insta.svg" 
          alt="Instagram"
          href="https://instagram.com"
        />
        <SocialIcon 
          src="/linkdin.svg" 
          alt="LinkedIn"
          href="https://linkedin.com"
        />
        <SocialIcon 
          src="/email.svg" 
          alt="Email"
          href="mailto:contact@example.com"
        />
      </nav>

      <hr className="mb-6 w-full h-px bg-neutral-50" />

      <p className="text-base leading-6 text-neutral-500">Copyright © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;