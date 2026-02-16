"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, LayoutGroup } from "framer-motion";

const members = [
  {
    id: 1,
    name: "SLIMANE",
    lastName: "DEMKAOUNI",
    role: "Vice President",
    image: "/images/members/image copy.png",
    borderColors: ["#FBBC04", "#EA4335"],
  },
  {
    id: 2,
    name: "Abderrahmane",
    lastName: "SAOUDI",
    role: "Club President",
    image: "/images/members/image.png",
    borderColors: ["#4285F4", "#7C3AED"],
  },
  {
    id: 3,
    name: "Brahim",
    lastName: "NACER",
    role: "External Relations Team Member",
    image: "/images/members/image copy 2.png",
    borderColors: ["#34A853", "#4285F4"],
  },
];

const cardTransition = {
  layout: {
    type: "spring" as const,
    stiffness: 250,
    damping: 28,
    mass: 0.9,
  },
};

const slotConfig = {
  left: {
    xOffset: -180,
    scale: 0.78,
    opacity: 0.65,
    zIndex: 1,
    cardWidth: 160,
    imageSize: 64,
  },
  center: {
    xOffset: 0,
    scale: 1,
    opacity: 1,
    zIndex: 10,
    cardWidth: 210,
    imageSize: 96,
  },
  right: {
    xOffset: 180,
    scale: 0.78,
    opacity: 0.65,
    zIndex: 1,
    cardWidth: 160,
    imageSize: 64,
  },
};

type SlotKey = keyof typeof slotConfig;

function MemberCard({
  member,
  slot,
}: {
  member: (typeof members)[0];
  slot: SlotKey;
}) {
  const config = slotConfig[slot];
  const isCenter = slot === "center";

  return (
    <motion.div
      layoutId={`member-card-${member.id}`}
      className="absolute"
      style={{
        zIndex: config.zIndex,
        originY: 1,
        left: "50%",
        bottom: 0,
        marginLeft: -(config.cardWidth / 2),
      }}
      animate={{
        x: config.xOffset,
        scale: config.scale,
        opacity: config.opacity,
      }}
      transition={cardTransition}
    >
      <motion.div
        className="relative rounded-2xl shadow-lg overflow-visible"
        style={{
          background: `linear-gradient(135deg, ${member.borderColors[0]} 0%, ${member.borderColors[1]} 100%)`,
          padding: "3px",
          width: config.cardWidth,
        }}
        layout
        transition={cardTransition}
      >
        <div className="bg-white rounded-2xl p-4 sm:p-6 flex flex-col items-center">
          <motion.div
            className="relative rounded-full overflow-hidden border-4 border-white shadow-lg -mt-10 sm:-mt-14"
            style={{
              background: `linear-gradient(135deg, ${member.borderColors[0]} 0%, ${member.borderColors[1]} 100%)`,
              padding: "3px",
              width: config.imageSize,
              height: config.imageSize,
            }}
            layout
            transition={cardTransition}
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
          </motion.div>

          <motion.div className="mt-3 sm:mt-4 text-center" layout transition={cardTransition}>
            <h3
              className={`font-bold text-gray-800 leading-tight ${isCenter ? "text-base sm:text-lg" : "text-xs sm:text-sm"
                }`}
            >
              {member.name}
            </h3>
            <h3
              className={`font-bold text-gray-800 leading-tight ${isCenter ? "text-base sm:text-lg" : "text-xs sm:text-sm"
                }`}
            >
              {member.lastName}
            </h3>
            <p
              className={`mt-1 text-gray-500 ${isCenter ? "text-xs sm:text-sm" : "text-[10px] sm:text-xs"
                }`}
            >
              {member.role}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Members() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const total = members.length;
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const visibleMembers: { member: (typeof members)[0]; slot: SlotKey }[] = [
    { member: members[prevIndex], slot: "left" },
    { member: members[currentIndex], slot: "center" },
    { member: members[nextIndex], slot: "right" },
  ];

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % members.length);
  }, []);

  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 mx-auto max-w-7xl border border-gray-200 rounded-lg bg-white">
        <div className="absolute inset-0 h-full w-full rounded-lg">
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(66, 133, 244, 0.15) 1.5px, transparent 1.5px),
                linear-gradient(to bottom, rgba(52, 168, 83, 0.12) 1.5px, transparent 1.5px)
              `,
              backgroundSize: "50px 50px",
              maskImage:
                "linear-gradient(to bottom, black 80%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 80%, transparent 100%)",
            }}
          />
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            <span className="text-gray-700">GDG</span>{" "}
            <span className="text-[#34A853]">Members</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet.
          </p>
        </div>

        {/* Members Carousel */}
        <div className="relative flex items-center justify-center py-0">
          {/* Left Arrow */}
          <button
            onClick={goToPrev}
            className="absolute left-0 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200 cursor-pointer"
            aria-label="Previous member"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>

          {/* Card stage */}
          <div
            className="relative w-full"
            style={{ maxWidth: 560, height: 200 }}
          >
            <LayoutGroup>
              {visibleMembers.map(({ member, slot }) => (
                <MemberCard key={member.id} member={member} slot={slot} />
              ))}
            </LayoutGroup>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200 cursor-pointer"
            aria-label="Next member"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
