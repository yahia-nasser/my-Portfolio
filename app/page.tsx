import { FaReact } from "react-icons/fa";
import About from "./_Components/About/About";
import AboutSlider from "./_Components/AboutSlider/AboutSlider";
import Contact from "./_Components/Contact/Contact";
import Projects from "./_Components/Projects/Projects";
import { Divider } from "./_Components/Separator/Separator";
import Education from "./_Components/Education/Education";
import Capabilities from "./_Components/Services/Capabilities";
import Skills from "./_Components/Skills/Skills";
import Hero from "./_Components/heroSection/Hero";

const Home = () => {
  return (
    <div>
      <main>
        <Hero />
      </main>
      <section className="my-[130px]" id="about">
        <h2 className="text-white text-4xl md:text-7xl text-center my-20 font-bold">
          <span className="text-[#00EEFF]">About</span> Me
        </h2>
        <About />
        <AboutSlider />
      </section>
      <Divider thickness="3px" length="80%" color="#00EEFF" />
      <section className="my-[130px]" id="education">
        <h2 className="text-white text-4xl md:text-7xl text-center my-20 font-bold">
          <span className="text-[#00EEFF]">Education</span> & Experience
        </h2>
        <Education />
      </section>
      <Divider thickness="3px" length="80%" color="#00EEFF" />
      <section className="my-[130px]" id="services">
        <h2 className="text-white text-4xl md:text-7xl text-center my-20 font-bold">
          My <span className="text-[#00EEFF]">Services</span>
        </h2>
        <Capabilities />
      </section>
      <Divider thickness="3px" length="80%" color="#00EEFF" />
      <section className="my-[130px]" id="skills">
        <h2 className="text-white text-4xl md:text-7xl text-center my-20 font-bold">
          My <span className="text-[#00EEFF]">Skills</span>
        </h2>
        <Skills />
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
          All Rights Reserved: Yahia Soliman
        </h2>
        <FaReact className=" md:text-2xl" />
      </footer>
    </div>
  );
};

export default Home;
