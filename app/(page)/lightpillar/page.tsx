"use client";
import LightPillar from "@/components/LightPillar";
import React from "react";

const page = () => {
  return (
    <div>
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
    </div>
  );
};

export default page;
