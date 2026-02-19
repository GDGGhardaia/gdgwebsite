"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Google IO 2025",
    date: "Sept 02,2025",
    description:
      "An event where you can explore the latest technologies, products, innovations by google.",
    image: "/images/events/google-io.svg",
    pinColor: "#EA4335",
    rotation: -8,
    type: "past" as const,
  },
  {
    id: 2,
    title: "Massary",
    date: "Jul 21,2025",
    description: "Journey to Success for BAC Gainers",
    image: "/images/massary placeholder.png",
    pinColor: "#34A853",
    rotation: -2,
    type: "past" as const,
  },
  {
    id: 3,
    title: "Dev Fest",
    date: "Dec 7,2023",
    description:
      "DevFest is a global event series for developers of all skill levels, brought to you by Google Developers Groups (GDGs).",
    image: "/images/events/devfest.svg",
    pinColor: "#FBBC04",
    rotation: 5,
    type: "past" as const,
  },
  {
    id: 4,
    title: "CSE Around Algeria",
    date: "Mar 23,2024",
    description: "Introduction to WordPress",
    image: "/images/events/cse-around.svg",
    pinColor: "#4285F4",
    rotation: 10,
    type: "past" as const,
  },
];

/* ── Pin ─────────────────────────────────────────────────── */
function Pin({ color }: { color: string }) {
  return (
    <div
      className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 w-6 h-6 rounded-full shadow-md flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="w-2 h-2 rounded-full bg-white/60" />
    </div>
  );
}

/* ── Small event card in the row ─────────────────────────── */
function SmallEventCard({
  event,
  index,
  isSelected,
  onSelect,
}: {
  event: (typeof events)[0];
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative flex-shrink-0 cursor-pointer"
      style={{ width: 200 }}
      initial={{ opacity: 0, y: 60, rotate: 0 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, rotate: event.rotation }
          : { opacity: 0, y: 60, rotate: 0 }
      }
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: index * 0.12,
      }}
      whileHover={{
        scale: 1.08,
        rotate: 0,
        zIndex: 20,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      onClick={onSelect}
    >
      <Pin color={event.pinColor} />

      <div
        className={`bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.10)] overflow-hidden transition-all duration-200 ${
          isSelected
            ? "border-2 border-[#34A853] ring-2 ring-[#34A853]/20"
            : "border border-gray-100"
        }`}
      >
        {/* Image */}
        <div className="relative w-full h-28 bg-gray-50 flex items-center justify-center overflow-hidden p-3">
          <Image
            src={event.image}
            alt={event.title}
            width={180}
            height={100}
            className="object-contain w-full h-full"
            unoptimized
          />
        </div>

        {/* Content */}
        <div className="p-3">
          <h3 className="font-bold text-gray-800 text-xs leading-tight">
            {event.title}
          </h3>
          <p className="text-[10px] text-gray-400 mt-1 font-medium">
            {event.date}
          </p>
          <p className="text-[10px] text-gray-500 mt-1.5 leading-relaxed line-clamp-2">
            {event.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Featured / enlarged card ────────────────────────────── */
function FeaturedCard({ event }: { event: (typeof events)[0] }) {
  return (
    <motion.div
      className="mx-auto max-w-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
        {/* Image area */}
        <div className="relative w-full h-48 bg-gray-50 flex items-center justify-center overflow-hidden p-6">
          <Image
            src={event.image}
            alt={event.title}
            width={300}
            height={180}
            className="object-contain w-full h-full"
            unoptimized
          />
        </div>

        {/* Divider */}
        <div className="mx-6 border-t border-gray-100" />

        {/* Content */}
        <div className="p-6">
          <h3 className="font-bold text-gray-800 text-xl leading-tight">
            {event.title}
          </h3>
          <p className="text-sm text-gray-400 mt-1.5 font-medium">
            {event.date}
          </p>
          <p className="text-sm text-gray-500 mt-3 leading-relaxed">
            {event.description}
          </p>

          {/* Event Details button */}
          <div className="mt-5 flex justify-end">
            <button className="px-5 py-2 text-sm font-semibold rounded-full border-2 border-[#34A853] text-[#34A853] hover:bg-[#34A853] hover:text-white transition-colors duration-200">
              Event Details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main EventsPage ─────────────────────────────────────── */
export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<"past" | "upcoming">("past");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEventId, setSelectedEventId] = useState(events[1]?.id ?? 1);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Filter events
  const filteredEvents = events.filter((e) => {
    const matchesTab = e.type === activeTab;
    const matchesSearch =
      searchQuery === "" ||
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const selectedEvent =
    filteredEvents.find((e) => e.id === selectedEventId) ?? filteredEvents[0];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 mx-auto max-w-7xl border border-gray-200 rounded-lg bg-white">
        <div className="absolute inset-0 h-full w-full rounded-lg">
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(251, 188, 4, 0.12) 1.5px, transparent 1.5px),
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
        {/* ── Heading ────────────────────────────────────── */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-gray-700">GDG </span>
            <span
              className="italic"
              style={{
                background:
                  "linear-gradient(135deg, #34A853 0%, #0F9D58 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              EVENTS
            </span>
          </h1>
        </motion.div>

        {/* ── Search Bar ─────────────────────────────────── */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Search for an Event"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-gray-200 bg-white py-2.5 pl-5 pr-11 text-sm text-gray-600 placeholder-gray-400 shadow-sm outline-none focus:border-[#34A853] focus:ring-2 focus:ring-[#34A853]/20 transition-all"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#34A853]" />
          </div>
        </motion.div>

        {/* ── Tabs ────────────────────────────────────────── */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="inline-flex rounded-full border border-gray-200 bg-white p-1 shadow-sm">
            {(["past", "upcoming"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2 text-sm font-semibold rounded-full transition-all duration-200 capitalize ${
                  activeTab === tab
                    ? "bg-[#34A853] text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Event Cards Row ────────────────────────────── */}
        <div className="relative mb-14">
          <AnimatePresence mode="wait">
            {filteredEvents.length > 0 ? (
              <motion.div
                key={activeTab}
                className="flex items-start justify-center gap-6 sm:gap-8 px-4 py-8 overflow-x-auto scrollbar-hide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filteredEvents.map((event, index) => (
                  <SmallEventCard
                    key={event.id}
                    event={event}
                    index={index}
                    isSelected={event.id === selectedEvent?.id}
                    onSelect={() => setSelectedEventId(event.id)}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                className="flex items-center justify-center py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-400 text-lg">
                  {searchQuery
                    ? "No events match your search."
                    : `No ${activeTab} events yet.`}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Featured Card ──────────────────────────────── */}
        <AnimatePresence mode="wait">
          {selectedEvent && (
            <motion.div
              key={selectedEvent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <FeaturedCard event={selectedEvent} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
