"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

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
    },
    {
        id: 2,
        title: "Massary",
        date: "Jul 21,2025",
        description: "Journey to Success for BAC Gainers",
        image: "/images/massary placeholder.png",
        pinColor: "#34A853",
        rotation: -2,
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
    },
    {
        id: 4,
        title: "CSE Around Algeria",
        date: "Mar 23,2024",
        description: "Introduction to WordPress",
        image: "/images/events/cse-around.svg",
        pinColor: "#4285F4",
        rotation: 10,
    },
];

// Pin component
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

// Individual event card
function EventCard({
    event,
    index,
}: {
    event: (typeof events)[0];
    index: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            className="relative flex-shrink-0"
            style={{
                width: 220,
            }}
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
        >
            <Pin color={event.pinColor} />

            {/* Card body */}
            <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.10)] border border-gray-100 overflow-hidden cursor-pointer">
                {/* Image area */}
                <div className="relative w-full h-32 bg-gray-50 flex items-center justify-center overflow-hidden p-3">
                    <Image
                        src={event.image}
                        alt={event.title}
                        width={200}
                        height={120}
                        className="object-contain w-full h-full"
                        unoptimized
                    />
                </div>

                {/* Content */}
                <div className="p-4">
                    <h3 className="font-bold text-gray-800 text-sm leading-tight">
                        {event.title}
                    </h3>
                    <p className="text-[11px] text-gray-400 mt-1 font-medium">
                        {event.date}
                    </p>
                    <p className="text-[11px] text-gray-500 mt-2 leading-relaxed line-clamp-3">
                        {event.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default function Events() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section className="relative w-full py-16 overflow-hidden" ref={sectionRef}>
            {/* Grid Background */}
            <div className="absolute inset-0 mx-auto max-w-7xl border border-gray-200 rounded-lg bg-white">
                <div className="absolute inset-0 h-full w-full rounded-lg">
                    <div
                        className="absolute inset-0 rounded-lg"
                        style={{
                            backgroundImage: `
                linear-gradient(to right, rgba(251, 188, 4, 0.15) 1.5px, transparent 1.5px),
                linear-gradient(to bottom, rgba(52, 168, 83, 0.15) 1.5px, transparent 1.5px)
              `,
                            backgroundSize: "50px 50px",
                            maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                        }}
                    />
                </div>
            </div>

            <div className="relative z-10 mx-auto max-w-5xl px-4 py-8">
                {/* Heading */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                        <span className="text-gray-700">Our </span>
                        <span
                            className="italic"
                            style={{
                                background:
                                    "linear-gradient(135deg, #34A853 0%, #0F9D58 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Events
                        </span>
                    </h2>
                    <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                        risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
                        nec, ultricies sed, Lorem ipsum dolor sit amet,
                    </p>
                </motion.div>

                {/* Event Cards - Horizontal scroll on mobile, centered on desktop */}
                <div className="relative">
                    {/* Horizontal scrollable card area */}
                    <div className="flex items-start justify-center gap-6 sm:gap-8 px-4 py-8 overflow-x-auto scrollbar-hide">
                        {events.map((event, index) => (
                            <EventCard key={event.id} event={event} index={index} />
                        ))}
                    </div>
                </div>

                {/* Bottom banner */}
                <motion.div
                    className="mt-12 flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="relative inline-block">
                        {/* Outer green border */}
                        <div
                            className="rounded-xl px-10 sm:px-16 py-4 sm:py-5"
                            style={{
                                border: "2.5px solid #34A853",
                                background: "transparent",
                            }}
                        >
                            {/* Inner yellow accent - offset box */}
                            <div
                                className="absolute -top-1 -left-1 rounded-xl w-full h-full pointer-events-none"
                                style={{
                                    border: "2.5px solid #FBBC04",
                                    transform: "translate(-4px, -4px)",
                                    width: "calc(100% + 0px)",
                                    height: "calc(100% + 0px)",
                                }}
                            />
                            <p className="text-lg sm:text-2xl font-semibold text-gray-700 relative z-10 text-center">
                                Google Developer Groups -{" "}
                                <span className="text-gray-800">GDG Ghardaia</span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
