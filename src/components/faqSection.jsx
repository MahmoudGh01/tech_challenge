import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const faqData = [
    {
        category: 'Program conditions',
        question: 'What are my obligations?',
        answer: `The majority of our students receive numerous job offers at the end of the second academic year of their Bachelor’s programme and at the end of the first academic year of their Master’s programme. The best applicants receive an offer from our industrial partners at the beginning of their programmes.

Harbour.Space is highly recognized among innovative employers and is strategic partner of B.Grimm multi-industry corporation with 140 years of history in Thailand. Together we ensure students get the best knowledge about the current job market opportunities.

We offer our students paid internships options during studies jointly with our industrial partners.

Employers that hired graduates of Harbour.Space in the past include Google, IBM, Accenture, Typeform, Frog, and other tech centric companies. Our industry specific employability report could be provided to you separately during the admission process.`
    },
    {
        category: 'Program conditions',
        question: 'Do I get a job placement upon graduation?',
        answer: `Yes. You are guaranteed a job placement upon graduation with SCG.`
    },
    {
        category: 'Program conditions',
        question: 'What if I want to start my own company?',
        answer: `You’ll have access to mentorship, funding and support from our network of entrepreneurs and investors.`
    },
    {
        category: 'Program conditions',
        question: 'Do I need a visa?',
        answer: `Yes, we support students in obtaining the necessary visas.`
    }
]

const categories = ['All', 'Admissions', 'Harbour.Space', 'SCG', 'Living in Bangkok', 'Program conditions']

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [filter, setFilter] = useState('Program conditions')
    const [showDropdown, setShowDropdown] = useState(false)

    const filteredFaq = faqData.filter(f => filter === 'All' || f.category === filter)

    return (
        <section className="w-full px-4 py-16 max-w-5xl mx-auto font-sans">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Frequently asked questions</h2>
                <div className="relative">
                    <button
                        className="border border-primary px-4 py-2 rounded-full text-primary font-semibold text-sm flex items-center gap-2"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        {filter}
                        <ChevronDown size={16} className={`${showDropdown ? 'rotate-180' : ''} transition-transform`} />
                    </button>
                    {showDropdown && (
                        <ul className="absolute top-full left-0 mt-2 w-56 bg-white border rounded-xl shadow-lg z-10 overflow-hidden">
                            {categories.map((cat, idx) => (
                                <li
                                    key={idx}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                    onClick={() => {
                                        setFilter(cat)
                                        setShowDropdown(false)
                                    }}
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className="flex flex-col divide-y">
                {filteredFaq.map((item, idx) => {
                    const isOpen = activeIndex === idx
                    return (
                        <div key={idx} className="py-6">
                            <div className="flex items-start gap-4">
                                <p className="text-primary font-semibold text-sm w-[180px] shrink-0">{item.category}</p>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start gap-4">
                                        <p className="font-semibold text-textDark text-base">{item.question}</p>
                                        <button
                                            className="w-6 h-6 rounded-full border flex items-center justify-center shrink-0"
                                            onClick={() => setActiveIndex(isOpen ? -1 : idx)}
                                        >
                                            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                        </button>
                                    </div>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="mt-4 text-sm text-textGray whitespace-pre-line">
                                                    {item.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default FaqSection
