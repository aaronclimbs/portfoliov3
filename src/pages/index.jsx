import { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObj } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SkillsSection from "../components/SkillsSection";
import Footer from "../components/Footer";

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
      {homeObj.map((item, index) => (
        <InfoSection {...item} key={index} />
      ))}
      <SkillsSection />
      <Footer/>
    </>
  );
};

export default Home;
