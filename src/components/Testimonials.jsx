import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import pattern from '../assets/pattern-grid.png'
import avatar from '../assets/profile-photo.png'

const testimonials = [
    {
        name: 'Irene Pereyra',
        title: 'Interaction Design Fellow ’19',
        education: 'B.A. Visual Design',
        text: 'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.'
    },
    {
        name: 'Irene Pereyra',
        title: 'Interaction Design Fellow ’19',
        education: 'B.A. Visual Design',
        text: 'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.'
    },
    {
        name: 'Irene Pereyra',
        title: 'Interaction Design Fellow ’19',
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
                            <div key={i} className="w-[676px] h-[470px] bg-white border rounded-lg overflow-hidden shrink-0 snap-center">
                                <div className="bg-white p-6 flex items-center justify-between h-[90px]">
                                    <div className="flex items-center gap-3">
                                        <img src={avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                                        <div>
                                            <p className="font-semibold text-sm leading-tight">{t.name}</p>
                                            <p className="text-xs text-textGray">{t.title}</p>
                                        </div>
                                    </div>
                                    <span className="text-textGray font-semibold text-sm">in</span>
                                </div>

                                <div className="bg-surface h-[380px] px-6 py-8 flex flex-col justify-center gap-6">
                                    <p className="text-textDark text-lg leading-relaxed">{t.text}</p>
                                    <p className="text-xs text-textGray">Education ・ {t.education}</p>
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

