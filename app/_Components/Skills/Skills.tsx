"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Languages",
    icon: "{ }",
    skills: [
      { name: "JavaScript ES6+", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    label: "Frameworks & Libraries",
    icon: "⚛",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Redux / Zustand", level: 75 },
      { name: "React Query", level: 80 },
      { name: "shadcn/ui", level: 85 },
    ],
  },
  {
    label: "Styling",
    icon: "✦",
    skills: [
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 80 },
      { name: "CSS Modules", level: 75 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    label: "APIs & Auth",
    icon: "⇄",
    skills: [
      { name: "REST API Integration", level: 85 },
      { name: "Axios / Fetch", level: 90 },
      { name: "NextAuth", level: 80 },
      { name: "Stripe API", level: 70 },
    ],
  },
  {
    label: "Tools & Workflow",
    icon: "⚙",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Vite", level: 80 },
      { name: "Postman", level: 75 },
      { name: "Agile / Scrum", level: 75 },
    ],
  },
];

const techBadges = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Redux",
  "Zustand",
  "React Query",
  "shadcn/ui",
  "Framer Motion",
  "NextAuth",
  "Stripe",
  "Axios",
  "Git",
  "Vite",
  "Postman",
  "REST API",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Skills() {
  return (
    <section className="relative py-24 px-6 bg-[#0d0d0d] overflow-hidden">
      {/* noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* gold glow blob */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#00EEFF]/5 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-[#00EEFF] uppercase mb-3">
            Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Skills &amp; <span className="text-[#00EEFF]">Expertise</span>
          </h2>
          <div className="mt-4 h-px w-16 bg-[#00EEFF]" />
        </motion.div>

        {/* skill groups grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              custom={gi}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="border border-white/8 bg-white/2 hover:border-[#00EEFF]/25 rounded-2xl p-6 transition-colors duration-300 backdrop-blur-sm"
            >
              {/* group header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[#00EEFF] text-lg font-mono leading-none w-6 text-center">
                  {group.icon}
                </span>
                <h3 className="text-white text-sm font-semibold tracking-wide">
                  {group.label}
                </h3>
              </div>

              {/* skill bars */}
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <div key={si}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-white/70 text-xs">
                        {skill.name}
                      </span>
                      <span className="text-[#00EEFF]/70 text-[10px] font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-[3px] bg-white/8 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-linear-to-r from-[#00EEFF] to-[#e8c97a]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.9,
                          delay: gi * 0.05 + si * 0.08,
                          ease: "easeOut" as const,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* soft skills card — spans remaining space */}
          <motion.div
            custom={skillGroups.length}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="border border-[#00EEFF]/20 bg-[#00EEFF]/3 rounded-2xl p-6 md:col-span-2 xl:col-span-1"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#00EEFF] text-lg leading-none">✦</span>
              <h3 className="text-white text-sm font-semibold tracking-wide">
                Soft Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Cross-functional Collaboration",
                "Code Review",
                "Problem Solving",
                "Client Communication",
                "Agile Mindset",
                "Attention to Detail",
              ].map((s, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1.5 rounded-full border border-[#00EEFF]/25 text-[#00EEFF]/80 bg-[#00EEFF]/5"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-white/8 pt-10"
        >
          <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-6">
            Full Stack at a Glance
          </p>
          <div className="flex flex-wrap gap-2">
            {techBadges.map((t, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="text-xs px-3 py-1.5 rounded-full bg-white/4 border border-white/10 text-white/60 hover:border-[#00EEFF]/40 hover:text-[#00EEFF] transition-colors duration-200 cursor-default"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
