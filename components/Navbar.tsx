"use client";

import Image from "next/image";
import Link from "next/link";
import { Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Members", href: "/members" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-full shadow-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/navbar-logo.png"
            alt="GDG Ghardaia Logo"
            width={140}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/join"
            className="bg-[#1a73e8] hover:bg-[#1557b0] text-white text-sm font-medium px-6 py-2 rounded-full transition-colors"
          >
            Join
          </Link>
        </div>
      </nav>

      {/* Dark Mode Toggle - Positioned outside/next to the navbar based on design */}
      <button
        className="hidden lg:flex absolute right-[max(2rem,calc(50%-40rem))] top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors shadow-md"
        aria-label="Toggle theme"
      >
        <Moon size={20} />
      </button>
    </div>
  );
}
