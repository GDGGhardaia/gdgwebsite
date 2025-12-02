"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  { text: "Connect", color: "text-[#EA4335]" },
  { text: "Grow", color: "text-[#34A853]" },
  { text: "Learn", color: "text-[#4285F4]" },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change word every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen pt-32 pb-16 px-4 flex flex-col items-center justify-start overflow-hidden bg-white">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 h-full w-full bg-white"
          style={{
            backgroundImage:
              "linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-center mb-4">
          <span className="text-[#5F6368]">GDG</span>{" "}
          <span className="bg-gradient-to-r from-[#FBBC04] to-[#EA4335] bg-clip-text text-transparent">
            Ghardaia
          </span>
        </h1>

        {/* Animated Subtitle */}
        <div className="text-2xl md:text-4xl text-gray-500 font-normal mb-24 flex items-center gap-2 md:gap-3 h-12">
          <span>Together we</span>
          <div className="relative w-[140px] md:w-[200px] h-full flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index].text}
                initial={{ y: 20, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: -20, opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`absolute left-0 font-medium ${words[index].color}`}
              >
                {words[index].text}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* About Us Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="flex flex-col gap-6 text-left">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-[#4285F4]">About</span>{" "}
              <span className="text-[#34A853]">Us</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed non risus. Suspendisse lectus tortor,
              dignissim sit amet, adipiscing nec, ultricies sed,
            </p>
          </div>
          
          <div className="flex justify-center md:justify-end items-center">
            <Image
              src="/images/google-logo.png"
              alt="Google Logo"
              width={300}
              height={300}
              className="w-48 h-48 md:w-64 md:h-64 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-2 rounded-t-xl overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853]" />
      </div>
    </section>
  );
}
