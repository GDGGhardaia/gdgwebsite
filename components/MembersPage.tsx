"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

const members = [
  {
    id: 1,
    name: "Foulan",
    lastName: "FOULANI",
    role: "Role Role",
    department: "Core",
    bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit".',
    instagram: "foulan_foulani",
    discord: "foulan foulani",
    image: "/images/members/image.png",
  },
  {
    id: 2,
    name: "Foulan",
    lastName: "FOULANI",
    role: "Role Role",
    department: "Core",
    bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit".',
    instagram: "foulan_foulani",
    discord: "foulan foulani",
    image: "/images/members/image copy.png",
  },
  {
    id: 3,
    name: "Foulan",
    lastName: "FOULANI",
    role: "Role Role",
    department: "Core",
    bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit".',
    instagram: "foulan_foulani",
    discord: "foulan foulani",
    image: "/images/members/image copy 2.png",
  },
  {
    id: 4,
    name: "Foulan",
    lastName: "FOULANI",
    role: "Role Role",
    department: "Core",
    bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit".',
    instagram: "foulan_foulani",
    discord: "foulan foulani",
    image: "/images/members/image.png",
  },
  {
    id: 5,
    name: "Foulan",
    lastName: "FOULANI",
    role: "Role Role",
    department: "Core",
    bio: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit".',
    instagram: "foulan_foulani",
    discord: "foulan foulani",
    image: "/images/members/image copy.png",
  },
];

type Member = (typeof members)[0];

const departments = ["Core", "Relations", "Media", "Design", "Development"];

const TEAL_GREEN = "#34A853";

const gridBgStyle = {
  backgroundImage: `
    linear-gradient(to right, rgba(66, 133, 244, 0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(52, 168, 83, 0.08) 1px, transparent 1px)
  `,
  backgroundSize: "40px 40px",
};

/* ─── Instagram SVG Icon ─── */
function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="#888" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" stroke="#888" strokeWidth="1.5" />
      <circle cx="18" cy="6" r="1.2" fill="#888" />
    </svg>
  );
}

/* ─── Discord SVG Icon ─── */
function DiscordIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.593 10.971c-.542 0-.969.475-.969 1.055 0 .578.437 1.055.969 1.055.541 0 .968-.477.968-1.055.011-.581-.427-1.055-.968-1.055zm3.468 0c-.542 0-.969.475-.969 1.055 0 .578.437 1.055.969 1.055.541 0 .968-.477.968-1.055-.001-.581-.427-1.055-.968-1.055z"
        fill="#888"
      />
      <path
        d="M18.882 1.5H5.118A2.126 2.126 0 003 3.637v13.964a2.126 2.126 0 002.118 2.137h11.628l-.543-1.894 1.312 1.219 1.24 1.149L20.999 22.5V3.637A2.126 2.126 0 0018.882 1.5zm-3.61 13.713s-.369-.44-.676-.83c1.341-.379 1.853-1.22 1.853-1.22a5.854 5.854 0 01-1.177.604 6.735 6.735 0 01-1.484.44 7.127 7.127 0 01-2.652-.01 8.558 8.558 0 01-1.504-.44 5.986 5.986 0 01-.746-.348c-.031-.02-.061-.03-.092-.05a.141.141 0 01-.04-.03c-.184-.1-.286-.17-.286-.17s.489.82 1.789 1.21c-.307.39-.686.85-.686.85-2.262-.071-3.122-1.555-3.122-1.555 0-3.293 1.474-5.963 1.474-5.963 1.474-1.104 2.877-1.074 2.877-1.074l.103.12c-1.843.532-2.693 1.34-2.693 1.34s.225-.122.604-.295c1.095-.48 1.965-.613 2.323-.643.061-.01.112-.02.173-.02a8.776 8.776 0 012.092-.02c.981.11 2.032.4 3.104.981 0 0-.808-.769-2.55-1.3l.143-.17s1.403-.03 2.877 1.074c0 0 1.474 2.67 1.474 5.963 0 0-.87 1.484-3.122 1.555z"
        fill="#888"
      />
    </svg>
  );
}

/* ─── Member Avatar ─── */
function MemberAvatar({
  member,
  size = 64,
  isSelected = false,
  onClick,
}: {
  member: Member;
  size?: number;
  isSelected?: boolean;
  onClick?: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className="relative rounded-full flex-shrink-0 cursor-pointer focus:outline-none"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${TEAL_GREEN}, #4285F4)`,
        padding: "2.5px",
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        scale: isSelected ? 1.12 : 1,
        boxShadow: isSelected ? `0 0 0 3px rgba(52,168,83,0.25)` : "0 0 0 0px rgba(52,168,83,0)",
      }}
      transition={{ duration: 0.25 }}
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
    </motion.button>
  );
}

/* ─── Featured Member Info Card ─── */
function FeaturedMemberCard({ member }: { member: Member }) {
  return (
    <motion.div
      className="mx-auto w-full max-w-lg"
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.97 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div
        className="rounded-xl overflow-hidden"
        style={{
          border: `1.5px solid ${TEAL_GREEN}`,
          background: "white",
        }}
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-6">
          {/* Large avatar */}
          <div
            className="relative rounded-full overflow-hidden flex-shrink-0"
            style={{
              width: 120,
              height: 120,
              background: `linear-gradient(135deg, ${TEAL_GREEN}, #4285F4)`,
              padding: "3px",
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
              <Image
                src={member.image}
                alt={`${member.name} ${member.lastName}`}
                width={120}
                height={120}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Info */}
          <div className="text-center sm:text-left flex-1 pt-1">
            <p className="text-sm text-gray-800 font-bold">
              This is{" "}
              <span style={{ color: TEAL_GREEN }} className="font-bold">
                {member.name} {member.lastName}
              </span>
            </p>
            <p className="text-sm font-semibold text-gray-700 mt-0.5">{member.role}</p>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed max-w-xs">{member.bio}</p>

            {/* Social links */}
            <div className="mt-3 space-y-1.5">
              {member.instagram && (
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <InstagramIcon size={18} />
                  <span className="text-xs text-gray-500">@ {member.instagram}</span>
                </div>
              )}
              {member.discord && (
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <DiscordIcon size={18} />
                  <span className="text-xs text-gray-500">@ {member.discord}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main MembersPage Component ─── */
export default function MembersPage() {
  const [activeTab, setActiveTab] = useState("Core");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null);

  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const filteredMembers = members.filter((m) => {
    const matchesTab = m.department === activeTab;
    const matchesSearch =
      searchQuery === "" ||
      `${m.name} ${m.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const selectedMember = selectedMemberId !== null ? filteredMembers.find((m) => m.id === selectedMemberId) : null;

  const handleAvatarClick = (memberId: number) => {
    setSelectedMemberId((prev) => (prev === memberId ? null : memberId));
  };

  return (
    <section ref={sectionRef} className="relative w-full py-12 overflow-hidden min-h-screen">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none" style={gridBgStyle} />

      <div className="relative z-10 mx-auto max-w-3xl px-4">
        {/* ─── Title ─── */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1
            className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontStyle: "italic",
              background: "linear-gradient(135deg, #34A853 0%, #4285F4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Members
          </h1>
        </motion.div>

        {/* ─── Search Bar ─── */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Search for a member"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-gray-300 bg-white py-2.5 pl-5 pr-11 text-sm text-gray-600 placeholder-gray-400 shadow-sm outline-none focus:border-[#34A853] focus:ring-2 focus:ring-[#34A853]/20 transition-all"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#34A853]" />
          </div>
        </motion.div>

        {/* ─── Filter Tabs ─── */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-gray-200 bg-white p-1 shadow-sm">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => {
                  setActiveTab(dept);
                  setSelectedMemberId(null);
                }}
                className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
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

        {/* ─── Core Team Header ─── */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
            {activeTab} Team
          </h2>
          <div
            className="mx-auto h-0.5 w-24 rounded-full"
            style={{ background: TEAL_GREEN }}
          />
        </motion.div>

        {/* ─── Member Info Card (shown on click) ─── */}
        <div className="mb-8 min-h-[60px]">
          <AnimatePresence mode="wait">
            {selectedMember ? (
              <FeaturedMemberCard key={selectedMember.id} member={selectedMember} />
            ) : null}
          </AnimatePresence>
        </div>

        {/* ─── Avatar Row ─── */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 15 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.4, delay: 0.35 }}
        >
          <div className="flex items-center justify-center gap-5 sm:gap-7 flex-wrap">
            {filteredMembers.map((m) => (
              <MemberAvatar
                key={m.id}
                member={m}
                size={64}
                isSelected={m.id === selectedMemberId}
                onClick={() => handleAvatarClick(m.id)}
              />
            ))}
          </div>

          {/* Indicator line */}
          <div
            className="mt-5 h-0.5 w-24 rounded-full"
            style={{ background: TEAL_GREEN }}
          />
        </motion.div>

        {/* ─── Empty State ─── */}
        {filteredMembers.length === 0 && (
          <motion.p
            className="text-center text-gray-400 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No members found.
          </motion.p>
        )}

        {/* ─── CTA Section ─── */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="text-gray-700 text-base sm:text-lg font-semibold mb-6"
            style={{ fontStyle: "italic" }}
          >
            Want to be part of GDG Ghardaia? Join us and grow together!
          </p>
          <a
            href="/join"
            className="inline-block px-10 py-3.5 text-base font-bold rounded-full transition-all duration-200 hover:shadow-lg"
            style={{
              border: `2.5px solid ${TEAL_GREEN}`,
              color: TEAL_GREEN,
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = TEAL_GREEN;
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = TEAL_GREEN;
            }}
          >
            Be a Member
          </a>
        </motion.div>
      </div>
    </section>
  );
}
