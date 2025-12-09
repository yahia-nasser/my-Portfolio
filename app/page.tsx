import { FaReact } from "react-icons/fa";
import About from "./_Components/About/About";
import AboutSlider from "./_Components/AboutSlider/AboutSlider";
import Contact from "./_Components/Contact/Contact";
import HeroSection from "./_Components/heroSection/HeroSection";
import Projects from "./_Components/Projects/Projects";
import { Divider } from "./_Components/Separator/Separator";
import Services from "./_Components/Services/Services";

const Home = () => {
  return (
    <div>
      <main>
        <HeroSection />
      </main>
      <section className="my-[130px]" id="about">
        <h2 className="text-white text-4xl md:text-7xl text-center my-20 font-bold">
          <span className="text-[#00EEFF]">About</span> Me
        </h2>
        <About />
        <AboutSlider />
      </section>
      <Divider thickness="3px" length="80%" color="#00EEFF" />
      <section className="my-[130px]" id="services">
        <h2 className="text-white text-4xl md:text-7xl text-center my-20 font-bold">
          My <span className="text-[#00EEFF]">Services</span>
        </h2>
        <Services />
      </section>
      <Divider thickness="3px" length="80%" color="#00EEFF" />
      <section className="my-[130px]" id="projects">
        <h2 className="text-white text-4xl md:text-7xl text-center my-20 font-bold">
          My <span className="text-[#00EEFF]">Projects</span>
        </h2>
        <Projects />
      </section>
      <Divider thickness="3px" length="80%" color="#00EEFF" />
      <section className="my-[130px]" id="contact">
        <h2 className="text-white text-4xl md:text-7xl text-center my-20 font-bold">
          <span className="text-[#00EEFF]">Contact</span> Me
        </h2>
        <Contact />
      </section>
      <footer className="p-2 md:p-10 text-center bg-gray-700 text-cyan-500 flex items-center justify-center gap-5">
        <FaReact className="text-xl md:text-2xl" />
        <h2 className="text-xl md:text-2xl font-bold">
          All Rights Reserved: Yahia Nasser
        </h2>
        <FaReact className=" md:text-2xl" />
      </footer>
    </div>
  );
};

export default Home;
