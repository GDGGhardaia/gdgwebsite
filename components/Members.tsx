"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const members = [
  {
    id: 1,
    name: "SLIMANE",
    lastName: "DEMKAOUNI",
    role: "Vice President",
    image: "https://placehold.co/200x200/4285F4/ffffff?text=SD",
    borderColors: ["#FBBC04", "#EA4335"], // yellow to red
  },
  {
    id: 2,
    name: "Abderrahmane",
    lastName: "SAOUDI",
    role: "Club President",
    image: "https://placehold.co/200x200/7C3AED/ffffff?text=AS",
    borderColors: ["#4285F4", "#7C3AED"], // blue to purple
  },
  {
    id: 3,
    name: "Brahim",
    lastName: "NACER",
    role: "External Relations Team Member",
    image: "https://placehold.co/200x200/34A853/ffffff?text=BN",
    borderColors: ["#34A853", "#4285F4"], // green to blue
  },
  {
    id: 4,
    name: "Ahmed",
    lastName: "BENALI",
    role: "Technical Lead",
    image: "https://placehold.co/200x200/EA4335/ffffff?text=AB",
    borderColors: ["#EA4335", "#FBBC04"],
  },
  {
    id: 5,
    name: "Sara",
    lastName: "KHELIFI",
    role: "Marketing Lead",
    image: "https://placehold.co/200x200/FBBC04/333333?text=SK",
    borderColors: ["#7C3AED", "#EA4335"],
  },
];

export default function Members() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const getVisibleMembers = () => {
    const total = members.length;
    const prev = (currentIndex - 1 + total) % total;
    const next = (currentIndex + 1) % total;
    return [members[prev], members[currentIndex], members[next]];
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % members.length);
  };

  const visibleMembers = getVisibleMembers();

  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Grid Background */}
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

      {/* Top colored line */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-[#EA4335]" />
        <div className="flex-1 bg-[#FBBC04]" />
        <div className="flex-1 bg-[#34A853]" />
        <div className="flex-1 bg-[#4285F4]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            <span className="text-gray-700">GDG</span>{" "}
            <span className="text-[#34A853]">Members</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
            Suspendisse lectus tortor, dignissim sit amet.
          </p>
        </div>

        {/* Members Carousel */}
        <div className="relative flex items-center justify-center gap-4 sm:gap-8 py-8">
          {/* Left Arrow */}
          <button
            onClick={goToPrev}
            className="absolute left-0 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Previous member"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>

          {/* Member Cards */}
          <div className="flex items-end justify-center gap-4 sm:gap-6 px-12 sm:px-16">
            {visibleMembers.map((member, idx) => {
              const isCenter = idx === 1;
              return (
                <div
                  key={member.id}
                  className={`relative transition-all duration-300 ${
                    isCenter ? "z-10 scale-100" : "scale-75 opacity-70"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`relative bg-white rounded-2xl shadow-lg overflow-visible ${
                      isCenter ? "w-44 sm:w-52" : "w-32 sm:w-40"
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${member.borderColors[0]} 0%, ${member.borderColors[1]} 100%)`,
                      padding: "3px",
                    }}
                  >
                    <div className="bg-white rounded-2xl p-4 sm:p-6 flex flex-col items-center">
                      {/* Profile Image - positioned to overlap top */}
                      <div
                        className={`relative rounded-full overflow-hidden border-4 border-white shadow-lg -mt-12 sm:-mt-16 ${
                          isCenter ? "w-20 h-20 sm:w-24 sm:h-24" : "w-14 h-14 sm:w-18 sm:h-18"
                        }`}
                        style={{
                          background: `linear-gradient(135deg, ${member.borderColors[0]} 0%, ${member.borderColors[1]} 100%)`,
                          padding: "3px",
                        }}
                      >
                        <div className="w-full h-full rounded-full overflow-hidden">
                          <Image
                            src={member.image}
                            alt={`${member.name} ${member.lastName}`}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                            unoptimized
                          />
                        </div>
                      </div>

                      {/* Name & Role */}
                      <div className="mt-3 sm:mt-4 text-center">
                        <h3
                          className={`font-bold text-gray-800 ${
                            isCenter ? "text-base sm:text-lg" : "text-xs sm:text-sm"
                          }`}
                        >
                          {member.name}
                        </h3>
                        <h3
                          className={`font-bold text-gray-800 ${
                            isCenter ? "text-base sm:text-lg" : "text-xs sm:text-sm"
                          }`}
                        >
                          {member.lastName}
                        </h3>
                        <p
                          className={`mt-1 text-gray-500 ${
                            isCenter ? "text-xs sm:text-sm" : "text-[10px] sm:text-xs"
                          }`}
                        >
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Next member"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Bottom colored corners */}
      <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#FBBC04]" />
      <div className="absolute bottom-0 right-0 w-24 h-1 bg-[#34A853]" />
    </section>
  );
}
