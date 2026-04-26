"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "Frontend Development",
    subtitle: "React & Next.js",
    description:
      "Building performant, production-ready web apps with React and Next.js — leveraging SSR, SSG, and the App Router for fast, SEO-friendly experiences.",
    tags: ["React", "Next.js", "TypeScript", "App Router", "SSR / SSG"],
  },
  {
    number: "02",
    title: "UI Engineering",
    subtitle: "Components & Design Systems",
    description:
      "Crafting reusable, accessible component libraries using shadcn/ui, Tailwind CSS, and atomic design principles — turning Figma mockups into pixel-perfect interfaces.",
    tags: ["Tailwind CSS", "shadcn/ui", "Framer Motion", "Responsive Design"],
  },
  {
    number: "03",
    title: "API Integration",
    subtitle: "State & Data Management",
    description:
      "Integrating REST APIs and managing complex async data flows with React Query, Redux, and Zustand — including authentication flows via NextAuth and payment handling with Stripe.",
    tags: ["REST API", "React Query", "Redux", "Zustand", "NextAuth", "Stripe"],
  },
  {
    number: "04",
    title: "Performance & Optimization",
    subtitle: "Speed & Compatibility",
    description:
      "Applying code-splitting, lazy loading, and image optimization to meet Core Web Vitals targets. Ensuring cross-browser and mobile compatibility across all delivered features.",
    tags: [
      "Lazy Loading",
      "Code Splitting",
      "Image Optimization",
      "Cross-Browser",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" as const },
  }),
};

export default function Capabilities() {
  return (
    <section className="relative py-24 px-6 bg-[#080808] overflow-hidden">
      {/* decorative horizontal rule lines */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-white/2.5"
            style={{ top: `${(i + 1) * 16}%` }}
          />
        ))}
      </div>

      {/* gold blur blob */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#00EEFF]/4 blur-[100px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.3em] text-[#00EEFF] uppercase mb-3">
              What I Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Core <span className="text-[#00EEFF]">Capabilities</span>
            </h2>
            <div className="mt-4 h-px w-16 bg-[#00EEFF]" />
          </motion.div>
        </div>

        {/* capability cards */}
        <div className="grid md:grid-cols-2 gap-px bg-white/8 border border-white/8 rounded-2xl overflow-hidden">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-[#080808] hover:bg-[#0f0f0f] p-8 transition-colors duration-300 overflow-hidden"
            >
              {/* hover accent line */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#00EEFF]/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* number */}
              <span className="font-mono text-[#00EEFF]/20 text-5xl font-bold absolute top-6 right-8 group-hover:text-[#00EEFF]/30 transition-colors duration-300 select-none">
                {cap.number}
              </span>

              <div className="relative">
                <p className="text-[#00EEFF] text-xs tracking-widest uppercase font-medium mb-2">
                  {cap.subtitle}
                </p>
                <h3 className="text-white text-xl font-bold mb-4 group-hover:text-[#00EEFF] transition-colors duration-300">
                  {cap.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mb-6">
                  {cap.description}
                </p>

                {/* tags */}
                <div className="flex flex-wrap gap-2">
                  {cap.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="text-[10px] tracking-wide uppercase px-2.5 py-1 rounded-md bg-white/4 border border-white/8 text-white/40 group-hover:border-[#00EEFF]/20 group-hover:text-white/60 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/8 rounded-2xl px-8 py-6 bg-white/1.5"
        >
          <a
            href="#contact"
            className="shrink-0 text-xs tracking-widest uppercase font-semibold px-6 py-3 rounded-full border border-[#00EEFF]/50 text-[#00EEFF] hover:bg-[#00EEFF] hover:text-black transition-all duration-300"
          >
            Get in Touch →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
