import Image from "next/image";
import "./sponsors.css";

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
  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 mx-auto max-w-7xl border border-gray-200 rounded-lg bg-[#FFF]">
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

        {/* Half Circle Visible Container */}
        <div className="relative h-[280px] overflow-hidden">
          {/* The spinning circle - CSS animated */}
          <div className="sponsors-circle">
            {/* Circle arc path (decorative) */}
            <svg className="sponsors-svg" viewBox="0 0 500 500">
              <circle
                cx="250"
                cy="250"
                r="220"
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

            {/* Sponsor items positioned with CSS custom properties */}
            {sponsors.map((sponsor, index) => {
              const angleStep = 360 / sponsors.length;
              const baseAngle = 0 + index * angleStep;
              // const baseAngle = -90 + index * angleStep;
              const borderColor = borderColors[index % borderColors.length];

              return (
                <div
                  key={sponsor.id}
                  className="sponsor-item"
                  style={{ "--angle": `${baseAngle}deg` } as React.CSSProperties}
                >
                  <div className="sponsor-content">
                    {/* Sponsor circle */}
                    <div
                      className="sponsor-logo-wrapper"
                      style={{ borderColor: borderColor }}
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
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom horizontal line with dots */}
        <div className="relative z-30 flex items-center justify-center px-4 -mt-2">
          <div className="w-4 h-4 rounded-full bg-[#EA4335]" />
          <div className="flex-1 max-w-2xl h-1 bg-[#4285F4]" />
          <div className="w-4 h-4 rounded-full bg-[#4285F4]" />
        </div>
      </div>
    </section>
  );
}
