import { useState } from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <>
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} data-testid="sidebar" />
      <Navbar toggleSidebar={toggleSidebar} data-testid="navbar" />
      <HeroSection/>
      {homeObjOne.map((item, index) => (<InfoSection {...item} key={index}/>))}
    </>
  )
}

export default Home
