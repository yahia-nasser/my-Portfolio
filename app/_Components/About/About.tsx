"use client";

import SpotlightCard from "@/components/SpotlightCard";

import { FaHashtag } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full md:w-[80%] mx-auto my-10 ">
      <SpotlightCard
        className="custom-spotlight-card text-white mx-auto w-[90%] h-full md:h-[300px] text-xl my-border flex justify-center items-center relative"
        spotlightColor="rgba(46, 213, 255, .4)"
      >
        I am a frontend developer focused on building responsive, modern web
        interfaces using Next.js, React, TypeScript, and Tailwind CSS. I enjoy
        crafting clean UI, refining component structures, and experimenting with
        motion and layout patterns.
        <FaHashtag className="absolute bottom-3.5 right-3.5 text-3xl md:text-6xl text-gray-500" />
      </SpotlightCard>
    </div>
  );
};

export default About;
