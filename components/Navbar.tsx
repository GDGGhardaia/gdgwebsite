"use client";

import Link from "next/link";
import { Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home", active: true },
  { href: "/events", label: "Events" },
  { href: "/members", label: "Members" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    // changed to fixed, centered, and given a max-width to look like a floating pill
    <header className="fixed top-6 left-0 right-0 z-50 mx-auto w-[95%] max-w-5xl px-4 md:px-0">
      <div className="flex items-center justify-between rounded-full bg-white/90 px-6 py-3 shadow-md backdrop-blur-md border border-gray-100 transition-all">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Ensure your logo image is cropped tightly or use height auto */}
          <Image 
            src="/images/navbar-logo.png" 
            alt="GDG Ghardaia" 
            width={120} 
            height={40}
            className="h-8 w-auto object-contain" // Keeps logo size controlled inside the pill
          />
        </Link>

        {/* Navigation - Centered */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#4285F4]",
                link.active ? "text-gray-900 font-semibold" : "text-gray-500"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions (Join + Theme) */}
        <div className="flex items-center gap-3">
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
            aria-label="Toggle theme"
          >
            <Moon className="h-5 w-5" />
          </button>
          
          <Link
            href="/join"
            className="rounded-full bg-[#4285F4] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3367D6] shadow-sm"
          >
            Join
          </Link>
        </div>

      </div>
    </header>
  );
}