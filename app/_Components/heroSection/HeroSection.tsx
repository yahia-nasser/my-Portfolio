"use client";
import Menu from "../Menu/Menu";
import TextType from "@/components/TextType";
import StarBorder from "@/components/StarBorder";
import LightVideo from "../LightVideo/LightVideo";

const HeroSection = () => {
  return (
    <div>
      <div style={{ width: "100%", height: "700px", position: "relative" }}>
        <LightVideo className="absolute -top-15 md:-top-20 left-0 w-full h-screen object-cover pointer-events-none" />

        <Menu />

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-white text-xl w-full md:text-5xl font-bold flex flex-col gap-4 justify-center items-center">
          <h2>Hello, Iam</h2>
          <TextType
            text={["Yahia Soliman", "Front-end Developer"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            as={"h1"}
          />
          <h2>React | Next.Js</h2>

          <StarBorder
            as="a"
            href="/yahia-soliman-cv.pdf"
            className="cursor-pointer w-fit px-4 py-2 font-medium tracking-wide
             text-[#00EEFF] hover:text-black transition duration-300
             hover:shadow-[0_0_15px_#00EEFF] active:scale-95"
            color="#00EEFF"
            speed="4s"
            thickness={3}
          >
            Download CV
          </StarBorder>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
