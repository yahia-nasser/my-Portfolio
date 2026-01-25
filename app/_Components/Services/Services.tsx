"use client";

import FlowingMenu from "@/components/FlowingMenu";

const demoItems = [
  {
    link: "#services",
    text: "Responsive Designs",
    image: "/images/Responsive.png",
  },
  {
    link: "#services",
    text: "Front-End",
    image: "/images/Front-end.jpg",
  },
  {
    link: "#services",
    text: "SEO Optimaization",
    image: "/images/Seo.jpg",
  },
  {
    link: "#services",
    text: "Integration & API Handling",
    image: "/images/api.png",
  },
];

const Services = () => {
  return (
    <div className="w-[90%] flex mx-auto justify-center items-center gap-10 md:flex-row md:justify-between md:w-[80%] ">
      <FlowingMenu
        items={demoItems}
        speed={15}
        textColor="#ffffff"
        bgColor="#060010"
        marqueeBgColor="#ffffff"
        marqueeTextColor="#00EEFF"
        borderColor="#ffffff"
      />
    </div>
  );
};

export default Services;
