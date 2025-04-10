import React from 'react'
import profileImage from '../assets/profile-photo.png'
import circleBg from '../assets/circle-pattern.png'

const AboutSection = () => {
    return (
        <section className="relative max-w-7xl mx-auto px-4 py-16 font-sans">
            <div className="relative flex flex-col items-center md:grid md:grid-cols-2 md:items-center md:gap-12">

                <div className="relative w-52 h-52 md:w-72 md:h-72 z-20">
                    <img
                        src={circleBg}
                        alt="circle background"
                        className="absolute inset-0 w-full h-full object-cover rounded-full z-0"
                    />
                    <img
                        src={profileImage}
                        alt="student"
                        className="absolute inset-0 m-auto w-36 h-36 md:w-48 md:h-48 rounded-full object-cover z-10"
                    />
                </div>

                <div className="relative w-full mt-[-72px] md:mt-0 flex justify-center md:justify-start">
                    <div className="absolute top-0 w-full h-1/2 bg-primary rounded-t-xl md:hidden z-0" />
                    <div className="relative bg-white p-6 rounded-lg shadow-sm z-10 w-full max-w-md text-center md:text-left">
                        <h2 className="text-xl md:text-3xl font-bold text-primary">
                            About the apprenticeship
                        </h2>
                        <p className="text-sm md:text-base text-textGray mt-4">
                            Our scholarships are designed to give talented and driven young people from any background access
                            to top-class education, experience and network. We offer a fully-funded master’s degree
                            alongside an apprenticeship and a guaranteed job upon graduation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection

