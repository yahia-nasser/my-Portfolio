"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor's Degree in Business Management & Startup Building",
    institution: "Mykolas Romeris University",
    location: "Vilnius, Lithuania",
    period: "09/2025 – Present",
    type: "education",
    icon: "🎓",
  },
  {
    degree: "Frontend Developer Intern",
    institution: "Route",
    location: "Alexandria, Egypt",
    period: "03/2025 – 09/2025",
    type: "experience",
    icon: "💼",
    bullets: [
      "Built responsive web apps with React & Next.js using SSR and code-splitting",
      "Developed reusable UI component library following atomic design principles",
      "Integrated REST APIs with React Query; participated in weekly code reviews",
    ],
  },
  {
    degree: "Bachelor's Degree in Management & Information Systems",
    institution: "Alexandria University, Faculty of Commerce",
    location: "Alexandria, Egypt",
    period: "09/2018 – 05/2022",
    type: "education",
    icon: "🎓",
  },
  {
    degree: "Frontend Developer – Freelance",
    institution: "Remote Callers",
    location: "Remote",
    period: "09/2023 – 10/2023",
    type: "experience",
    icon: "🌐",
    bullets: [
      "Built a real estate lead-generation platform for US-based investors",
      "Delivered fully responsive, cross-browser UI with HTML5, CSS3 & Bootstrap",
    ],
  },
];

const languages = [
  { lang: "English", level: "Professional Working Proficiency", pct: 85 },
  { lang: "Arabic", level: "Native", pct: 100 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" as const },
  }),
};

export default function Education() {
  return (
    <section className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden">
      {/* subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-[#00EEFF] uppercase mb-3">
            Background
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Education &amp; <span className="text-[#00EEFF]">Experience</span>
          </h2>
          <div className="mt-4 h-px w-16 bg-[#00EEFF]" />
        </motion.div>

        {/* timeline */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-[#00EEFF]/60 via-[#00EEFF]/20 to-transparent" />

          <div className="space-y-10">
            {educationData.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start md:items-center gap-6 pl-12 md:pl-0`}
                >
                  {/* dot */}
                  <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#00EEFF] bg-[#0a0a0a] z-10 mt-1 md:mt-0" />

                  {/* card */}
                  <div
                    className={`md:w-[45%] ${
                      isLeft
                        ? "md:pr-10 md:text-right"
                        : "md:pl-10 md:text-left"
                    }`}
                  >
                    <div className="group border border-white/8 bg-white/2 hover:bg-white/5 hover:border-[#00EEFF]/30 rounded-xl p-5 transition-all duration-300 backdrop-blur-sm">
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span
                          className={`text-[10px] tracking-widest uppercase font-semibold px-2 py-0.5 rounded-full ${
                            item.type === "education"
                              ? "bg-[#00EEFF]/10 text-[#00EEFF]"
                              : "bg-white/5 text-white/50"
                          }`}
                        >
                          {item.type}
                        </span>
                      </div>

                      <h3 className="text-white font-semibold text-base leading-snug mb-1">
                        {item.degree}
                      </h3>
                      <p className="text-[#00EEFF] text-sm font-medium">
                        {item.institution}
                      </p>
                      <p className="text-white/40 text-xs mt-0.5">
                        {item.location} · {item.period}
                      </p>

                      {item.bullets && (
                        <ul
                          className={`mt-3 space-y-1 text-left ${
                            isLeft ? "md:text-right" : ""
                          }`}
                        >
                          {item.bullets.map((b, bi) => (
                            <li
                              key={bi}
                              className="text-white/50 text-xs leading-relaxed flex gap-2"
                            >
                              <span className="text-[#00EEFF] shrink-0 mt-0.5">
                                ›
                              </span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* spacer for opposite side */}
                  <div className="hidden md:block md:w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* languages */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 border border-white/8 bg-white/2 rounded-2xl p-8"
        >
          <p className="text-xs tracking-[0.3em] text-[#00EEFF] uppercase mb-6">
            Languages
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {languages.map((l, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium text-sm">
                    {l.lang}
                  </span>
                  <span className="text-white/40 text-xs">{l.level}</span>
                </div>
                <div className="h-px bg-white/10 relative overflow-hidden rounded-full">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-linear-to-r from-[#00EEFF] to-[#e8c97a]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${l.pct}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: i * 0.2,
                      ease: "easeOut" as const,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
