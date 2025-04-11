import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import CommitmentSection from './components/CommitmentSection'
import Testimonials from './components/Testimonials'
import FaqSection from './components/FaqSection'
import BottomStickyBar from "./components/BottomStickyBar.jsx";

function App() {
    return (
        <main className="bg-white text-black">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <CommitmentSection />
            <Testimonials />
            <FaqSection />
            <BottomStickyBar />

        </main>
    )
}

export default App
