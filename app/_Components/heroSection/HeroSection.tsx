"use client";
import LightPillar from "@/components/LightPillar";
import Menu from "../Menu/Menu";
import TextType from "@/components/TextType";
import StarBorder from "@/components/StarBorder";

const HeroSection = () => {
  return (
    <div>
      <div style={{ width: "100%", height: "700px", position: "relative" }}>
        <LightPillar
          topColor="#198ed7"
          bottomColor="#2ed5ff"
          intensity={1.0}
          rotationSpeed={0.3}
          glowAmount={0.005}
          pillarWidth={3.0}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={25}
          interactive={false}
          mixBlendMode="normal"
        />

        <Menu />

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-white text-xl w-full md:text-5xl font-bold flex flex-col gap-4 justify-center items-center">
          <h2>Hello, Iam</h2>
          <TextType
            text={["Yahia Nasser", "Frontend Developer"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            as={"h1"}
          />
          <h2>React | Next.Js</h2>

          <StarBorder
            as="button"
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
