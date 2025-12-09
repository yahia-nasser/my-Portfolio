"use client";

import SpotlightCard from "@/components/SpotlightCard";
import { PixelCard } from "../PixelCard/PixelCart";
import { FaHashtag } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full md:w-[80%] mx-auto my-10 flex flex-col-reverse md:flex-row justify-between gap-10 ">
      <SpotlightCard
        className="custom-spotlight-card text-white mx-auto w-[90%] md:w-1/2 text-xl my-border flex justify-center items-center relative"
        spotlightColor="rgba(46, 213, 255, .4)"
      >
        Iam a frontend developer focused on building responsive, modern web
        interfaces using Next.js, React, TypeScript, and Tailwind CSS. I enjoy
        crafting clean UI, refining component structures, and experimenting with
        motion and layout patterns.
        <FaHashtag className="absolute bottom-3.5 right-3.5 text-3xl md:text-8xl text-gray-500" />
      </SpotlightCard>

      <PixelCard
        variant="blue"
        image="/images/me_bw_small.jpg"
        className="mx-auto w-[90%] md:w-1/2"
      />
    </div>
  );
};

export default About;
