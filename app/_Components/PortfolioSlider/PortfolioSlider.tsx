"use client";

import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  image: string;
  link?: string;
  tech?: string[];
}

export default function PortfolioMasonry({
  projects,
}: {
  projects: Project[];
}) {
  const breakpoints = { default: 4, 1280: 3, 1024: 3, 768: 2, 480: 1 };

  return (
    <div className="w-full mx-auto mt-10">
      <Masonry
        breakpointCols={breakpoints}
        className="flex flex-col justify-center items-center gap-7 md:flex-row"
        columnClassName="space-y-4"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="mt-10 bg-[#3c3c3c7d] h-[450px] border border-cyan-300/40 rounded-xl overflow-hidden hover:scale-[1.05] duration-300 shadow-xl hover:shadow-[0px_0px_10px_2px_rgba(0,255,255,0.7)] cursor-pointer"
          >
            <a href={p.link} target="_blank">
              <Image
                src={p.image}
                alt={p.title}
                width={100}
                height={100}
                className="w-full object-cover h-[180px]"
              />
            </a>

            <div className="p-4">
              <h3 className="text-white text-lg font-semibold">{p.title}</h3>

              <div className="flex flex-wrap gap-2 mt-5">
                {p.tech?.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-white/5 rounded-md text-[#00ffff] border border-cyan-400/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </Masonry>
    </div>
  );
}
