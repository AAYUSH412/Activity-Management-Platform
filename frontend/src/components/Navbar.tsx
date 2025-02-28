// src/components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex flex-col justify-center self-stretch px-24 py-3 bg-white border-b border-solid border-b-[color:var(--Color-stroke-Line,#E7E7E7)] max-md:px-5">
      <div className="flex justify-between items-center w-full max-md:max-w-full">
        <div className="flex flex-col justify-center items-start self-stretch my-auto min-w-60 w-[417px]">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Company Logo"
              width={195}
              height={75}
              className="object-contain max-w-full aspect-[2.6]"
              priority
            />
          </Link>
        </div>
        <nav className="flex flex-wrap gap-6 items-center self-stretch my-auto min-w-60 max-md:max-w-full">
          <div className="flex gap-4 self-stretch my-auto min-h-9 min-w-60 max-md:max-w-full" />
          <div className="flex gap-2 items-center self-stretch my-auto">
            <div className="flex gap-2 items-center self-stretch my-auto">
              <div className="self-stretch my-auto w-9 h-9 rounded-full overflow-hidden">
                <Image
                  src="/Avatar.svg"
                  alt="User Avatar"
                  width={36}
                  height={36}
                  style={{ width: "100%", height: "auto" }} // Add this line
                />
              </div>
              <p className="self-stretch my-auto text-base font-semibold text-zinc-800">
                Profile
              </p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
