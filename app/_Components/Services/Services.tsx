"use client";

import TiltedCard from "@/components/TiltedCard";

const Services = () => {
  return (
    <div className="w-[90%] flex flex-col mx-auto justify-center items-center gap-7 md:flex-row md:justify-between md:w-[80%] ">
      <TiltedCard
        imageSrc="/images/Responsive.png"
        altText="Responsive Designs"
        captionText="Responsive Designs"
        containerHeight="200px"
        containerWidth="200px"
        imageHeight="200px"
        imageWidth="200px"
        rotateAmplitude={5}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p
            className="w-fit px-4 py-2 font-medium tracking-wide
             text-[#00EEFF] hover:text-black transition duration-300
            rounded-2xl shadow-[0_0_15px_#00EEFF] active:scale-95 bg-gray-50  "
          >
            Responsive Designs
          </p>
        }
      />

      <TiltedCard
        imageSrc="/images/Front-end.jpg"
        altText="Front-End"
        captionText="Front-End"
        containerHeight="200px"
        containerWidth="200px"
        imageHeight="200px"
        imageWidth="200px"
        rotateAmplitude={5}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p
            className="w-fit px-4 py-2 font-medium tracking-wide
             text-[#00EEFF] hover:text-black transition duration-300
            rounded-2xl shadow-[0_0_15px_#00EEFF] active:scale-95 bg-gray-50  "
          >
            Front-End
          </p>
        }
      />

      <TiltedCard
        imageSrc="/images/Seo.jpg"
        altText="SEO Optimaization"
        captionText="SEO Optimaization"
        containerHeight="200px"
        containerWidth="200px"
        imageHeight="200px"
        imageWidth="200px"
        rotateAmplitude={5}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p
            className="w-fit px-4 py-2 font-medium tracking-wide
             text-[#00EEFF] hover:text-black transition duration-300
            rounded-2xl shadow-[0_0_15px_#00EEFF] active:scale-95 bg-gray-50  "
          >
            SEO Optimaization
          </p>
        }
      />

      <TiltedCard
        imageSrc="/images/api.png"
        altText="Integration & API Handling"
        captionText="Integration & API Handling"
        containerHeight="200px"
        containerWidth="200px"
        imageHeight="200px"
        imageWidth="200px"
        rotateAmplitude={5}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p
            className="w-fit px-4 py-2 font-medium tracking-wide
             text-[#00EEFF] hover:text-black transition duration-300
            rounded-2xl shadow-[0_0_15px_#00EEFF] active:scale-95 bg-gray-50  "
          >
            Integration & API Handling
          </p>
        }
      />
    </div>
  );
};

export default Services;
