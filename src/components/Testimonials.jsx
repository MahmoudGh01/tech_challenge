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
        <section className="relative w-full py-20 overflow-hidden">
            <img src={pattern} alt="pattern" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4">
                <motion.div ref={containerRef} className="cursor-grab overflow-hidden">
                    <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="flex gap-6">
                        {testimonials.map((t, i) => (
                            <div key={i} className="w-[676px] h-[470px] bg-white border rounded-lg overflow-hidden shrink-0 snap-center">
                                <div className="bg-white p-6 flex items-center justify-between h-[90px]">
                                    <div className="flex items-center gap-3">
                                        <img src={avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                                        <div>
                                            <p className="font-semibold text-sm leading-tight">{t.name}</p>
                                            <p className="text-xs text-gray-500">{t.title}</p>
                                        </div>
                                    </div>
                                    <span className="text-gray-400 font-semibold text-sm">in</span>
                                </div>

                                <div className="bg-[#FAFAFA] h-[380px] px-6 py-8 flex flex-col justify-center gap-6">
                                    <p className="text-gray-700 text-lg leading-relaxed">{t.text}</p>
                                    <p className="text-xs text-gray-500">Education ・ {t.education}</p>
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
