"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

/* ── Member Data ─────────────────────────────────────────── */
const members = [
  {
    id: 1,
    name: "Foulane",
    lastName: "FOULANI",
    role: "Club President",
    department: "Frontend",
    image: "/images/members/image.png",
    borderColors: ["#4285F4", "#7C3AED"],
  },
  {
    id: 2,
    name: "SLIMANE",
    lastName: "DEMKAOUNI",
    role: "Vice President",
    department: "Mobile",
    image: "/images/members/image copy.png",
    borderColors: ["#FBBC04", "#EA4335"],
  },
  {
    id: 3,
    name: "Brahim",
    lastName: "NACER",
    role: "External Relations",
    department: "Design",
    image: "/images/members/image copy 2.png",
    borderColors: ["#34A853", "#4285F4"],
  },
];

const departments = ["All", "Frontend", "Mobile", "Design", "Development"];

/* ── Org Chart Node ──────────────────────────────────────── */
function OrgNode({
  label,
  sublabel,
  delay = 0,
}: {
  label: string;
  sublabel?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="bg-white border-2 border-gray-200 rounded-xl px-4 py-2.5 shadow-sm text-center min-w-[110px] sm:min-w-[130px] hover:border-[#34A853] hover:shadow-md transition-all duration-200">
        <p className="text-xs sm:text-sm font-semibold text-gray-700">
          {label}
        </p>
        {sublabel && (
          <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">
            {sublabel}
          </p>
        )}
      </div>
    </motion.div>
  );
}

/* ── Vertical Connector ─────────────────────────────────── */
function VLine({ height = 24 }: { height?: number }) {
  return (
    <div
      className="mx-auto w-0.5 bg-gray-300"
      style={{ height }}
    />
  );
}

/* ── Horizontal Connector ────────────────────────────────── */
function HLine() {
  return <div className="flex-1 h-0.5 bg-gray-300" />;
}

/* ── Org Chart ───────────────────────────────────────────── */
function OrgChart() {
  return (
    <motion.div
      className="mt-10 mb-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Title */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
          The Club&apos;s Structure
        </h3>
        <div
          className="mt-2 mx-auto h-1 w-48 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, #4285F4 0%, #34A853 50%, #FBBC04 100%)",
          }}
        />
      </motion.div>

      {/* Tier 1: Club President */}
      <div className="flex flex-col items-center">
        <OrgNode label="Club President" sublabel="Management" delay={0.1} />
        <VLine />

        {/* Tier 2: three roles */}
        <div className="flex items-start justify-center gap-4 sm:gap-8 w-full max-w-xl mx-auto">
          <div className="flex flex-col items-center flex-1">
            <OrgNode label="Club Secretary" sublabel="Administration" delay={0.2} />
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="flex items-center w-full">
              <HLine />
              <OrgNode label="Club President" sublabel="Management" delay={0.2} />
              <HLine />
            </div>
          </div>
          <div className="flex flex-col items-center flex-1">
            <OrgNode label="Club Secretary" sublabel="Administration" delay={0.2} />
          </div>
        </div>
        <VLine />

        {/* Tier 3: four departments */}
        <div className="flex items-center justify-center w-full max-w-2xl mx-auto">
          <HLine />
          <div className="flex items-start justify-between gap-2 sm:gap-4 w-full">
            <OrgNode label="Club Member" sublabel="Development" delay={0.35} />
            <OrgNode label="Club Member" sublabel="Design" delay={0.4} />
            <OrgNode label="Club Member" sublabel="Mobile" delay={0.45} />
            <OrgNode label="Club Member" sublabel="Marketing" delay={0.5} />
          </div>
          <HLine />
        </div>
        <VLine />

        {/* Tier 4: middle node */}
        <OrgNode label="Club Leader" sublabel="Coordination" delay={0.55} />
        <VLine />

        {/* Tier 5: bottom row */}
        <div className="flex items-center justify-center w-full max-w-2xl mx-auto">
          <div className="flex items-start justify-between gap-2 sm:gap-4 w-full">
            <OrgNode label="Club Member" sublabel="Frontend" delay={0.6} />
            <OrgNode label="Club Member" sublabel="Backend" delay={0.65} />
            <OrgNode label="Club Member" sublabel="AI/ML" delay={0.7} />
            <OrgNode label="Club Member" sublabel="DevOps" delay={0.75} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Member Avatar Circle ────────────────────────────────── */
function MemberAvatar({
  member,
  size = 56,
  delay = 0,
}: {
  member: (typeof members)[0];
  size?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className="relative rounded-full overflow-hidden shadow-md"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${member.borderColors[0]}, ${member.borderColors[1]})`,
        padding: "2px",
      }}
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
        <Image
          src={member.image}
          alt={`${member.name} ${member.lastName}`}
          width={size}
          height={size}
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>
    </motion.div>
  );
}

/* ── Featured Member Card ────────────────────────────────── */
function FeaturedMemberCard({ member }: { member: (typeof members)[0] }) {
  return (
    <motion.div
      className="mx-auto max-w-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className="rounded-2xl shadow-lg overflow-visible"
        style={{
          background: `linear-gradient(135deg, ${member.borderColors[0]} 0%, ${member.borderColors[1]} 100%)`,
          padding: "3px",
        }}
      >
        <div className="bg-white rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5">
          {/* Avatar */}
          <div
            className="relative rounded-full overflow-hidden shadow-lg flex-shrink-0"
            style={{
              width: 90,
              height: 90,
              background: `linear-gradient(135deg, ${member.borderColors[0]}, ${member.borderColors[1]})`,
              padding: "3px",
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
              <Image
                src={member.image}
                alt={`${member.name} ${member.lastName}`}
                width={90}
                height={90}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Info */}
          <div className="text-center sm:text-left">
            <p className="text-gray-400 text-xs">
              This is{" "}
              <span className="font-bold text-gray-700">
                {member.name} {member.lastName}
              </span>
            </p>
            <p className="text-xs text-gray-400 mt-0.5">{member.role}</p>

            {/* Placeholder description lines */}
            <div className="mt-3 space-y-1.5">
              <div className="h-2 bg-gray-100 rounded-full w-40" />
              <div className="h-2 bg-gray-100 rounded-full w-36" />
              <div className="h-2 bg-gray-100 rounded-full w-32" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════ */
export default function MembersPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMemberId, setSelectedMemberId] = useState(members[0].id);

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });

  const membersRef = useRef(null);
  const membersInView = useInView(membersRef, { once: true, margin: "-60px" });

  /* Filter members */
  const filteredMembers = members.filter((m) => {
    const matchesTab =
      activeTab === "All" || m.department === activeTab;
    const matchesSearch =
      searchQuery === "" ||
      `${m.name} ${m.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const selectedMember =
    filteredMembers.find((m) => m.id === selectedMemberId) ??
    filteredMembers[0];

  return (
    <>
      {/* ════════════════════════════════════════════════════
          SECTION 1 — Hero + Org Chart (grid background)
          ════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative w-full py-16 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 mx-auto max-w-7xl border border-gray-200 rounded-lg bg-white">
          <div className="absolute inset-0 h-full w-full rounded-lg">
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(66, 133, 244, 0.12) 1.5px, transparent 1.5px),
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
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={
              heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-gray-700">GDG </span>
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #34A853 0%, #0F9D58 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Members
              </span>
            </h1>
          </motion.div>

          {/* Org Chart */}
          <OrgChart />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SECTION 2 — Members List (plain bg)
          ════════════════════════════════════════════════════ */}
      <section
        ref={membersRef}
        className="relative w-full py-16 overflow-hidden"
      >
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          {/* Section Heading */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={
              membersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #34A853 0%, #0F9D58 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Members
              </span>
            </h2>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={
              membersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
            }
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Search a member"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-gray-200 bg-white py-2.5 pl-5 pr-11 text-sm text-gray-600 placeholder-gray-400 shadow-sm outline-none focus:border-[#34A853] focus:ring-2 focus:ring-[#34A853]/20 transition-all"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#34A853]" />
            </div>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: 15 }}
            animate={
              membersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
            }
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-gray-200 bg-white p-1 shadow-sm">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveTab(dept)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                    activeTab === dept
                      ? "bg-[#34A853] text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Core Team Label */}
          <motion.p
            className="text-center text-sm font-bold text-gray-700 mb-6 tracking-wide"
            initial={{ opacity: 0 }}
            animate={membersInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Core Team
          </motion.p>

          {/* Featured Member Card */}
          <AnimatePresence mode="wait">
            {selectedMember ? (
              <motion.div
                key={selectedMember.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <FeaturedMemberCard member={selectedMember} />
              </motion.div>
            ) : (
              <motion.p
                key="empty"
                className="text-center text-gray-400 py-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                No members found.
              </motion.p>
            )}
          </AnimatePresence>

          {/* Member Avatar Row */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {filteredMembers.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setSelectedMemberId(m.id)}
                className={`rounded-full transition-all duration-200 ${
                  m.id === selectedMember?.id
                    ? "ring-2 ring-[#34A853] ring-offset-2"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <MemberAvatar member={m} size={50} delay={i * 0.08} />
              </button>
            ))}
          </div>

          {/* CTA: Be a Member */}
          <motion.div
            className="mt-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 text-sm sm:text-base font-medium mb-5">
              Want to be part of GDG Ghardaia? Join us and grow together!
            </p>
            <a
              href="/join"
              className="inline-block px-8 py-3 text-sm font-bold rounded-full bg-[#34A853] text-white shadow-md hover:bg-[#2d9249] hover:shadow-lg transition-all duration-200"
            >
              Be a Member
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
