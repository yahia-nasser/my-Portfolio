"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Project {
  title: string;
  description?: string;
  image: string;
  link?: string;
  tech?: string[];
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  const isFeatured = index === 0;

  return (
    <motion.article
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group rounded-2xl overflow-hidden border border-white/10 bg-[#111214] transition-all duration-500
        ${isFeatured ? "col-span-1 sm:col-span-2 sm:row-span-2" : "col-span-1"}
      `}
      style={{
        boxShadow: hovered
          ? "0 0 0 1px rgba(0,255,255,0.35), 0 8px 40px rgba(0,255,255,0.12)"
          : "0 2px 20px rgba(0,0,0,0.4)",
      }}
    >
      {/* Image */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden"
        style={{ height: isFeatured ? "340px" : "200px" }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(10,12,14,0.95) 100%)",
          }}
        />

        {/* Number badge */}
        <div className="absolute top-4 left-4 font-mono text-xs text-cyan-400/60 tracking-widest">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Arrow */}
        {project.link && (
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                stroke="#00ffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </a>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-white font-semibold tracking-tight transition-colors duration-200 group-hover:text-cyan-300"
          style={{
            fontSize: isFeatured ? "1.25rem" : "1rem",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {project.title}
        </h3>

        {project.description && (
          <p className="mt-2 text-sm text-white/40 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        )}

        {/* Tech tags */}
        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tech.map((t, ti) => (
              <span
                key={ti}
                className="text-[11px] px-2.5 py-1 rounded-full font-mono tracking-wide"
                style={{
                  background: "rgba(0,255,255,0.06)",
                  border: "1px solid rgba(0,255,255,0.18)",
                  color: "rgba(0,255,255,0.75)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-cyan-400/60 to-transparent transition-all duration-500"
        style={{ width: hovered ? "100%" : "0%" }}
      />
    </motion.article>
  );
}

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      {/* Section header */}
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="text-xs font-mono tracking-[0.2em] text-cyan-400/60 mb-2 uppercase">
            Selected Work
          </p>
          <h2
            className="text-3xl font-semibold text-white"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Projects
          </h2>
        </div>
        <span className="text-white/20 text-sm font-mono">
          {String(projects.length).padStart(2, "0")} total
        </span>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 grid-cols-1 sm:grid-cols-2"
      >
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </motion.div>

      {/* Subtle bottom rule */}
      <div className="mt-16 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
