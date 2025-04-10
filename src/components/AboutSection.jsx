import React from 'react'
import profileImage from '../assets/profile-photo.png'
import circleBg from '../assets/circle-pattern.png'

const AboutSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12 font-sans">
            <div className="relative w-full flex justify-center items-center">
                <div className="relative w-64 md:w-72 aspect-square">
                    <img src={circleBg} alt="circle background" className="absolute inset-0 w-full h-full rounded-full z-0" />
                    <img src={profileImage} alt="student" className="absolute inset-0 m-auto w-40 md:w-48 h-40 md:h-48 rounded-full object-cover z-10" />
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">About the apprenticeship</h2>
                <p className="text-sm md:text-base text-textGray max-w-md">
                    Our scholarships are designed to give talented and driven young people from any background access to top-class education, experience and network. We offer a fully-funded master's degree alongside an apprenticeship and a guaranteed job upon graduation.
                </p>
            </div>
        </section>
    )
}

export default AboutSection
