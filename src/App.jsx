import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import CommitmentSection from "./components/CommitmentSection.jsx";

function App() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <CommitmentSection />

        </>
    );
}

export default App;
