"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const sponsors = [
  { id: 1, name: "CoCreative", logo: "https://placehold.co/120x60/ffffff/333333?text=COCREATIVE" },
  { id: 2, name: "Yotta", logo: "https://placehold.co/120x60/ffffff/EA4335?text=YOTTA" },
  { id: 3, name: "Erinov", logo: "https://placehold.co/120x60/ffffff/34A853?text=erinov" },
  { id: 4, name: "Deli", logo: "https://placehold.co/120x60/ffffff/4285F4?text=DELI" },
  { id: 5, name: "Oriom", logo: "https://placehold.co/120x60/ffffff/FBBC04?text=oriom" },
  { id: 6, name: "TechCorp", logo: "https://placehold.co/120x60/ffffff/9333EA?text=TechCorp" },
  { id: 7, name: "Innovate", logo: "https://placehold.co/120x60/ffffff/EA4335?text=Innovate" },
  { id: 8, name: "DevHub", logo: "https://placehold.co/120x60/ffffff/4285F4?text=DevHub" },
];

const borderColors = ["#7C3AED", "#4285F4", "#4285F4", "#EA4335", "#EA4335", "#FBBC04", "#34A853", "#EA4335"];

export default function Sponsors() {
  const radius = 250;
  const circleRadius = 220;
  const [rotation, setRotation] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  
  const rotationDuration = 20000; // 20 seconds for full rotation

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      
      const elapsed = timestamp - startTimeRef.current;
      const currentRotation = (elapsed / rotationDuration) * 360;
      setRotation(currentRotation % 360);
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Grid Background - matching Hero style with pink/purple tint */}
      <div className="absolute inset-0 mx-auto max-w-7xl border border-gray-200 rounded-lg">
        <div className="absolute inset-0 h-full w-full">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(234, 67, 53, 0.12) 1.5px, transparent 1.5px),
                linear-gradient(to bottom, rgba(66, 133, 244, 0.12) 1.5px, transparent 1.5px)
              `,
              backgroundSize: "50px 50px",
              maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            <span className="text-gray-700">Our</span>{" "}
            <span className="text-[#7C3AED]">Sponsors</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
            sed, Lorem ipsum dolor sit amet,
          </p>
        </div>

        {/* Half Circle Visible Container - clips the bottom half */}
        <div className="relative h-[280px] overflow-hidden">
          {/* The full spinning circle - controlled by JS */}
          <div 
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              width: radius * 2,
              height: radius * 2,
              top: 0,
              transform: `translateX(-50%) rotate(${rotation}deg)`,
              transformOrigin: "center center",
            }}
          >
            {/* Circle arc path (decorative) */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 500 500"
            >
              {/* Full circle arc with gradient - radius matches sponsor positions */}
              <circle
                cx="250"
                cy="250"
                r={circleRadius}
                fill="none"
                stroke="url(#circleGradient)"
                strokeWidth="2"
                opacity="0.4"
              />
              <defs>
                <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EA4335" />
                  <stop offset="25%" stopColor="#FBBC04" />
                  <stop offset="50%" stopColor="#34A853" />
                  <stop offset="75%" stopColor="#4285F4" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
            </svg>

            {/* Sponsor circles positioned around the FULL circle */}
            {sponsors.map((sponsor, index) => {
              // Distribute sponsors evenly around full 360 degrees
              const angleStep = 360 / sponsors.length;
              const baseAngle = -90 + (index * angleStep); // Start from top (-90°)
              const radian = (baseAngle * Math.PI) / 180;
              
              // Position sponsors ON the circle arc
              const x = radius + circleRadius * Math.cos(radian);
              const y = radius + circleRadius * Math.sin(radian);
              
              const borderColor = borderColors[index % borderColors.length];
              
              // Counter-rotate to keep logos upright: negate both base angle and current rotation
              const counterRotation = -baseAngle - rotation;

              return (
                <div
                  key={sponsor.id}
                  className="absolute"
                  style={{
                    left: x,
                    top: y,
                    transform: `translate(-50%, -50%) rotate(${counterRotation}deg)`,
                  }}
                >
                  {/* Connector dot */}
                  <div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full z-10"
                    style={{ backgroundColor: borderColor }}
                  />
                  
                  {/* Sponsor circle */}
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-100 flex items-center justify-center shadow-lg"
                    style={{
                      border: `3px solid ${borderColor}`,
                    }}
                  >
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={70}
                      height={35}
                      className="object-contain p-1 rounded-full"
                      unoptimized
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom horizontal line with dots - this covers/hides the bottom of the circle */}
        <div className="relative z-30 flex items-center justify-center px-4 -mt-2">
          <div className="w-4 h-4 rounded-full bg-[#EA4335]" />
          <div className="flex-1 max-w-2xl h-1 bg-[#4285F4]" />
          <div className="w-4 h-4 rounded-full bg-[#4285F4]" />
        </div>
      </div>
    </section>
  );
}
