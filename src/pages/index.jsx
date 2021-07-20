import { useState } from "react";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import { homeObj } from "../components/ProjectSection/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SkillsSection from "../components/SkillsSection";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Sidebar
        toggleSidebar={toggleSidebar}
        isOpen={isSidebarOpen}
        data-testid="sidebar"
      />
      <Navbar toggleSidebar={toggleSidebar} data-testid="navbar" />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      {homeObj.map((item, index) => (
        <ProjectSection {...item} key={index} />
      ))}
      <Footer />
    </>
  );
};

export default Home;
