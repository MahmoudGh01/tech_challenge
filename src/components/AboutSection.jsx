import React from 'react'
import profileImage from '../assets/profile-photo.png'
import mobileImage from '../assets/newsletter-photo.png'
import pattern from '../assets/circle-pattern.png'

const AboutSection = () => {
    return (
        <section className="relative w-full px-4 py-16 max-w-7xl mx-auto font-sans">
            {/* Desktop */}
            <div className="hidden md:grid grid-cols-2 items-center gap-12">
                <div className="relative w-[438px] h-[438px] rounded-full border border-slate-300 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img src={pattern} alt="pattern" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute left-1/2 top-1/2 w-[380px] h-[380px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
                        <img src={profileImage} alt="profile" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div>
                    <h2 className="text-[48px] font-semibold text-primary leading-tight mb-10">
                        About the apprenticeship
                    </h2>
                    <p className="text-[22px] font-light leading-[32px] tracking-[-0.33px] text-textGray max-w-[479px]">
                        Our scholarships are designed to give talented and driven young people from any background access
                        to top-class education, experience and network. We offer a fully-funded master’s degree
                        alongside an apprenticeship and a guaranteed job upon graduation.
                    </p>
                </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden flex flex-col items-center mt-20">
                <div className="relative w-[334px] h-[334px] rounded-full border border-slate-300 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img src={pattern} alt="pattern" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute left-1/2 top-1/2 w-[252px] h-[252px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full z-20">
                        <img src={mobileImage} alt="mobile" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="relative -mt-40 w-[376px] h-[401px] bg-primary z-0 rounded-t-[4px]" />

                <div className="relative -mt-[410px] z-10 w-[334px] h-[555px] bg-white border border-slate-200 flex flex-col items-center p-6 shadow-sm">
                    <h2 className="text-[35px] text-primary font-semibold mt-32 text-center">
                        About the apprenticeship
                    </h2>
                    <p className="text-[18px] text-textGray mt-10 text-center leading-[28px] tracking-tight">
                        Our scholarships are designed to give talented and driven young people from any background access
                        to top-class education, experience and network. We offer a fully-funded master’s degree
                        alongside an apprenticeship and a guaranteed job upon graduation.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
