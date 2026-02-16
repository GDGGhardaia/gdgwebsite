"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const words = ["Connect", "Grow", "Learn"];
const wordColors: Record<string, string> = {
  Connect: "text-[#4285F4]",
  Grow: "text-[#34A853]",
  Learn: "text-[#FBBC04]",
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* --- GRID BACKGROUND START --- */}
      <div className="absolute inset-0 mx-auto max-w-7xl border border-gray-200 rounded-lg bg-white">
        <div className="absolute inset-0 h-full w-full rounded-lg">
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(234, 67, 53, 0.15) 1.5px, transparent 1.5px),
                linear-gradient(to bottom, rgba(66, 133, 244, 0.15) 1.5px, transparent 1.5px)
              `,
              backgroundSize: "50px 50px",
              maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
            }}
          />
        </div>
      </div>
      {/* --- GRID BACKGROUND END --- */}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gray-700">GDG</span>{" "}
            <span className="text-[#FBBC04]">Ghardaia</span>
          </h1>

          {/* Animated Text */}
          <div className="mt-6 flex flex-col items-center gap-1">
            <div className="flex flex-col items-center justify-center gap-2 text-xl sm:flex-row sm:text-2xl">
              <span className="text-gray-500">Together we</span>
              <div className="relative h-8 w-24 overflow-hidden text-center sm:h-9 sm:w-28 sm:text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[currentIndex]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`absolute inset-0 flex items-center justify-center sm:justify-start font-semibold ${
                      wordColors[words[currentIndex]]
                    }`}
                  >
                    {words[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="mt-20 grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-2xl font-bold text-[#34A853] sm:text-3xl">
              About Us
            </h2>
            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed non risus. Suspendisse lectus tortor,
              dignissim sit amet, adipiscing nec, ultricies sed.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image src="/images/google-logo.png" alt="Google G" width={120} height={120} />
          </div>
        </div>
      </div>
    </section>
  );
}
