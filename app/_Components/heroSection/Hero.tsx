"use client";

import Image from "next/image";
import { Download, ArrowRight } from "lucide-react";
import Menu from "../Menu/Menu";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--background, #0d1117)" }}
    >
      <Menu />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div
          className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px]"
          style={{ background: "rgba(var(--primary-rgb, 224 92 42) / 0.07)" }}
        />

        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px]"
          style={{ background: "rgba(var(--primary-rgb, 224 92 42) / 0.13)" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-28 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        <div className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          <div className="inline-flex items-center gap-3 mb-6">
            <span
              className="block h-px w-8"
              style={{ background: "var(--primary, #e05c2a)" }}
            />
            <span
              className="font-mono text-xs tracking-[0.25em] uppercase"
              style={{ color: "var(--primary, #e05c2a)" }}
            >
              Hello, World.
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-5 text-white">
            I&apos;m{" "}
            <span style={{ color: "var(--primary, #e05c2a)" }}>Yahia</span>
            <span
              className="inline-block ml-1"
              style={{ color: "var(--primary, #e05c2a)" }}
            >
              .
            </span>
          </h1>

          <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
            <span
              className="block h-0.5 w-10 rounded-full"
              style={{ background: "var(--primary, #e05c2a)" }}
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 tracking-wide">
              Frontend Developer
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
            {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-full border"
                style={{
                  borderColor: "rgba(var(--primary-rgb, 224 92 42) / 0.35)",
                  color: "var(--primary, #e05c2a)",
                  background: "rgba(var(--primary-rgb, 224 92 42) / 0.07)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
            Building fast, accessible, and beautifully crafted web experiences
            from pixel-perfect UIs to production-ready apps.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="/yahia-soliman-cv.pdf"
              download
              className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5 text-white"
              style={{
                background: "var(--primary, #e05c2a)",
                boxShadow: "0 0 0 0 rgba(72, 196, 196,0)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 30px rgba(72, 196, 196,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 0 0 rgba(72, 196, 196,0)";
              }}
            >
              <Download size={17} strokeWidth={2.5} />
              Download CV
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-lg border transition-all duration-300 hover:-translate-y-0.5 text-gray-300 hover:text-white"
              style={{
                borderColor: "rgba(255,255,255,0.15)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--primary, #e05c2a)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.15)";
              }}
            >
              Get in Touch
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center lg:justify-end">
          <div className="relative flex items-center justify-center">
            <span
              className="absolute -left-12 top-1/2 -translate-y-1/2 text-7xl font-light leading-none select-none hidden sm:block"
              style={{ color: "rgba(var(--primary-rgb, 224 92 42) / 0.4)" }}
            >
              &lt;
            </span>

            <span
              className="absolute -right-12 top-1/2 -translate-y-1/2 text-7xl font-light leading-none select-none hidden sm:block"
              style={{ color: "rgba(var(--primary-rgb, 224 92 42) / 0.4)" }}
            >
              &gt;
            </span>

            <div
              className="absolute inset-0 rounded-full"
              style={{
                border: "2px dashed rgba(var(--primary-rgb, 224 92 42) / 0.35)",
                animation: "heroSpin 18s linear infinite",
              }}
            />

            <div
              className="absolute rounded-full"
              style={{
                inset: "-10px",
                border: "2px solid transparent",
                borderTopColor: "var(--primary, #e05c2a)",
                borderRightColor: "var(--primary, #e05c2a)",
                borderRadius: "9999px",
                animation: "heroSpin 6s linear infinite reverse",
              }}
            />

            <div
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden"
              style={{
                border: "3px solid rgba(var(--primary-rgb, 224 92 42) / 0.6)",
                boxShadow:
                  "0 0 0 8px rgba(var(--primary-rgb, 224 92 42) / 0.08), 0 0 80px rgba(var(--primary-rgb, 224 92 42) / 0.2)",
              }}
            >
              <Image
                src="/images/me_bw_small.jpeg"
                alt="Yahia Nasser — Frontend Developer"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            <div
              className="absolute bottom-4 -right-4 sm:-right-8 text-xs font-mono px-3 py-2 rounded-lg border backdrop-blur-sm text-white"
              style={{
                background: "rgba(13,17,23,0.85)",
                borderColor: "rgba(var(--primary-rgb, 224 92 42) / 0.4)",
              }}
            >
              <span style={{ color: "var(--primary, #e05c2a)" }}>⚡</span>{" "}
              Available for work
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-gray-300 text-xs font-mono tracking-widest uppercase">
          scroll
        </span>
        <div
          className="w-px h-10 rounded-full"
          style={{
            background:
              "linear-gradient(to bottom, var(--primary, #e05c2a), transparent)",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes heroSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
