"use client";
import PortfolioMasonry from "../PortfolioSlider/PortfolioSlider";
const Projects = () => {
  const projects = [
    {
      title: "Linked Posts | Social Media",
      image: "/images/projects/linkedPost1.png",
      tech: [
        "UI/UX",
        "Responsive",
        "Next.js",
        "TS",
        "Tailwind",
        "React",
        "Shadcn",
        "Framer Motion",
        "axios",
        "Zod",
        "React Query",
        "Next Auth",
      ],
      link: "https://linked-posts-beta.vercel.app/",
    },
    {
      title: "Fresh Cart | E-commerce",
      image: "/images/projects/freshCart.jpg",
      tech: [
        "UI/UX",
        "Responsive",
        "Next.js",
        "TS",
        "Tailwind",
        "React",
        "Shadcn",
        "Framer Motion",
        "axios",
        "Zod",
        "Context",
        "Next Auth",
        "Stripe",
        "React Toastify",
        "React Hook Form",
        "React Icons",
        "React Router",
      ],
      link: "https://fresh-cart-ekbf.vercel.app/",
    },
    {
      title: "Daniels | Portfolio",
      image: "/images/projects/daniels.jpg",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Font Awesome"],
      link: "https://yahia-nasser.github.io/Daniels/",
    },
    {
      title: "Fokir | Landing Page",
      image: "/images/projects/fokir1.png",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Font Awesome"],
      link: "https://yahia-nasser.github.io/Fokir/",
    },
  ];
  return (
    <div className="w-[90%] md:max-w-[80%] mx-auto">
      <PortfolioMasonry projects={projects} />;
    </div>
  );
};

export default Projects;
