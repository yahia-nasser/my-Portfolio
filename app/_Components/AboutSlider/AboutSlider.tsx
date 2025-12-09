"use client";
import ScrollVelocity from "@/components/ScrollVelocity";
const AboutSlider = () => {
  return (
    <div className="my-20">
      <ScrollVelocity
        texts={["* Front-End *"]}
        className="text-gray-300"
        velocity={50}
        parallaxStyle={{ transform: "rotate(5deg) rotateY(5deg) " }}
      />
      <ScrollVelocity
        texts={["* React | Next.js *"]}
        className="text-[#00EEFF]"
        velocity={-50}
        parallaxStyle={{ transform: "rotate(5deg) rotateY(5deg) " }}
      />
    </div>
  );
};

export default AboutSlider;
