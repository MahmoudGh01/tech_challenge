import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchScholarship } from '../store/slices/scholarshipSlice'
import profileImage from '../assets/profile-photo.png'
import mobileImage from '../assets/newsletter-photo.png'
import pattern from '../assets/circle-pattern.png'

const AboutSection = () => {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.scholarship)

    useEffect(() => {
        dispatch(fetchScholarship())
    }, [dispatch])

    if (!data) return null

    const aboutText = data.scholarship.about[0]?.data

    return (
        <section className="relative w-full px-4 md:px-6 lg:px-8 py-16 max-w-7xl mx-auto font-sans">
            {/* Desktop & Tablet */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <div
                    className="relative w-full max-w-[438px] aspect-square rounded-full border border-slate-300 overflow-hidden mx-auto md:mx-0">
                    <div className="absolute inset-0 z-0">
                        <img src={pattern} alt="pattern" className="w-full h-full object-cover"/>
                    </div>
                    <div
                        className="absolute left-1/2 top-1/2 w-[80%] aspect-square -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
                        <img src={profileImage} alt="profile" className="w-full h-full object-cover"/>
                    </div>
                </div>

                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-[48px] font-semibold text-primary leading-tight mb-6 md:mb-10">
                        About the apprenticeship
                    </h2>
                    <p className="text-base md:text-[22px] font-light leading-relaxed text-textGray max-w-[479px] mx-auto md:mx-0">
                        {aboutText}
                    </p>
                </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden flex flex-col items-center mt-20">
                <div className="relative w-[334px] h-[334px] rounded-full border border-slate-300 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img src={pattern} alt="pattern" className="w-full h-full object-cover"/>
                    </div>
                    <div
                        className="absolute left-1/2 top-1/2 w-[252px] h-[252px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full z-20">
                        <img src={mobileImage} alt="mobile" className="w-full h-full object-cover"/>
                    </div>
                </div>

                <div className="relative -mt-40 w-full max-w-[376px] h-[401px] bg-primary z-0 rounded-t-[4px]"/>
                <div
                    className="relative -mt-[410px] z-10 w-full max-w-[334px] h-[555px] bg-white border border-slate-200 flex flex-col items-center p-6 shadow-sm">
                    <h2 className="text-[28px] sm:text-[35px] text-primary font-semibold mt-32 text-center leading-tight">
                        About the apprenticeship
                    </h2>
                    <p className="text-[16px] sm:text-[18px] text-textGray mt-6 text-center leading-[28px] tracking-tight">
                        {aboutText}
                    </p>
                </div>
            </div>
        </section>

    )
}

export default AboutSection
