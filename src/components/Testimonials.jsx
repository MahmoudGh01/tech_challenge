import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import pattern from '../assets/pattern-grid.png'
import avatar from '../assets/profile-photo.png'

const testimonials = [
    {
        name: 'Irene Pereyra',
        title: 'Research Lead, SCG',
        education: 'B.A. Visual Design',
        text: 'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.'
    },
    {
        name: 'Irene Pereyra',
        title: 'Research Lead, SCG',
        education: 'B.A. Visual Design',
        text: 'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.'
    },
    {
        name: 'Irene Pereyra',
        title: 'Research Lead, SCG',
        education: 'B.A. Visual Design',
        text: 'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.'
    }
]

const Testimonials = () => {
    const containerRef = useRef(null)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if (containerRef.current) {
            const scrollWidth = containerRef.current.scrollWidth
            const offsetWidth = containerRef.current.offsetWidth
            setWidth(scrollWidth - offsetWidth)
        }
    }, [])

    return (
        <section className="relative w-full py-20 overflow-hidden font-sans">
            <img
                src={pattern}
                alt="pattern"
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-full object-cover opacity-20 pointer-events-none z-0"
            />

            <div className="relative max-w-7xl mx-auto px-4 z-10">
                <motion.div ref={containerRef} className="cursor-grab overflow-hidden">
                    <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="flex gap-6">
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-[335px] md:w-[676px] h-[528px] md:h-[470px] rounded-md border border-slate-300 bg-white"
                            >
                                <div className="flex items-center justify-between p-6">
                                    <div className="flex items-center">
                                        <img
                                            src={avatar}
                                            alt="avatar"
                                            className="h-10 w-10 md:h-[75px] md:w-[75px] rounded-full object-cover border"
                                        />
                                        <div className="ml-4 flex flex-col">
                                            <p className="font-bold text-[#685DC5] text-sm md:text-base">{t.name}</p>
                                            <p className="text-xs md:text-sm text-textGray">{t.title}</p>
                                        </div>
                                    </div>
                                    <svg
                                        width="30"
                                        height="31"
                                        viewBox="0 0 30 31"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="hidden md:block"
                                    >
                                        <path
                                            opacity="0.3"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8.43243 6.85645C7.08961 6.85645 6 7.92225 6 9.23572C6 10.5492 7.08961 11.6373 8.43243 11.6373C9.77525 11.6373 10.8649 10.5492 10.8649 9.23572C10.864 7.92225 9.77441 6.85645 8.43243 6.85645ZM23.9955 24.0675V24.0667H24V17.4059C24 14.1474 23.3022 11.6373 19.5129 11.6373C17.6913 11.6373 16.4689 12.6422 15.9698 13.595H15.9171V11.9415H12.3243V24.0667H16.0654V18.0628C16.0654 16.4819 16.3635 14.9533 18.3108 14.9533C20.2295 14.9533 20.2582 16.7574 20.2582 18.1642V24.0675H23.9955ZM10.3784 12.5935H6.48649V24.0675H10.3784V12.5935Z"
                                            fill="black"
                                        />
                                    </svg>
                                </div>

                                <div className="h-[310px] md:h-[380px] bg-[#FBFBFB] px-6 py-8 flex flex-col justify-center">
                                    <p className="text-[#6A6A6A] text-lg md:text-xl leading-relaxed opacity-80">
                                        {t.text}
                                    </p>
                                    <p className="text-sm text-textGray mt-6">Education ・ {t.education}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials
