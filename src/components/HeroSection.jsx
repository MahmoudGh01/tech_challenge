import React from 'react'
import circleDesign from '../assets/circle-design.png'
import patternGrid from '../assets/pattern-grid.png'
import scgLogo from '../assets/scg-logo.png'

const HeroSection = () => {
    return (
        <section className="relative w-full px-4 py-10 md:py-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start font-sans">
            <img src={circleDesign} alt="circle" className="absolute w-32 md:w-40 top-8 left-4 opacity-20 pointer-events-none" />

            <div className="space-y-6 z-10">
                <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight relative z-10">
                    Interaction Design Apprenticeship
                </h1>
                <p className="font-semibold text-base md:text-lg">
                    A fully funded work–study program to launch your tech career
                </p>
                <p className="text-textGray text-sm md:text-base max-w-lg">
                    Harbour.Space has partnered with SCG to empower driven talent and eliminate the barriers to
                    accessing exceptional education and career opportunities through a Masters Fellowship.
                </p>
                <p className="text-sm md:text-base">
                    <span className="font-semibold">Position:</span> Marketing Performance
                </p>
                <button className="bg-primary text-white rounded-full px-6 py-2 font-semibold text-sm w-fit">
                    Apply Now
                </button>

            </div>

            <div className="flex flex-col gap-6 z-10">
                <div className="flex items-center gap-4">
                    <img src={scgLogo} alt="SCG" className="w-10 h-10 object-contain" />
                    <p className="text-textGray font-medium">Powered by:<br />Zeptolab</p>
                </div>

                <div className="border rounded-lg p-4 w-full bg-white">
                    <p className="text-sm text-primary font-semibold">Application closes in</p>
                    <p className="text-lg md:text-xl font-medium mt-1 tracking-wide">
                        6 Day ： 22 Hrs ： 56 Min ： 13 Seg
                    </p>
                </div>

                <div className="border rounded-lg p-4 grid grid-cols-2 gap-4 text-sm md:text-base bg-white">
                    <div className="space-y-2">
                        <div>
                            <p className="text-primary font-medium">Location</p>
                            <p>Bangkok</p>
                        </div>
                        <div>
                            <p className="text-primary font-medium">Start date</p>
                            <p>30 June 2020</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <p className="text-primary font-medium">Duration</p>
                            <p>1 Year</p>
                            <p>Full-Time</p>
                        </div>
                        <div>
                            <p className="text-primary font-medium">End date</p>
                            <p>3 Aug 2020</p>
                        </div>
                    </div>
                </div>
            </div>

            <img src={patternGrid} alt="pattern" className="absolute right-0 bottom-0 w-1/2 opacity-50 hidden md:block pointer-events-none" />
        </section>
    )
}

export default HeroSection
