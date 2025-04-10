import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [filter, setFilter] = useState('All')
    const [showDropdown, setShowDropdown] = useState(false)

    const { data } = useSelector(state => state.scholarship)
    const faqs = data?.scholarship?.faqs?.items || []
    const categories = ['All', ...(data?.scholarship?.faqs?.categories || [])]

    const filteredFaq = faqs.filter(f => filter === 'All' || f.type === filter)

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
                    const answerText = item.answer.map(a => a.data).join('\n\n')
                    return (
                        <div key={idx} className="py-6">
                            <div className="flex items-start gap-4">
                                <p className="text-primary font-semibold text-sm w-[180px] shrink-0">{item.type}</p>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start gap-4">
                                        <p className="font-semibold text-textDark text-base">{item.question}</p>

                                        <motion.button
                                            onClick={() => setActiveIndex(isOpen ? -1 : idx)}
                                            className="w-12 h-12 rounded-full flex items-center justify-center"
                                            initial={false}
                                            animate={{
                                                rotate: isOpen ? 180 : 0,
                                                backgroundColor: isOpen ? '#685DC5' : '#FFFFFF',
                                            }}
                                            transition={{duration: 0.3}}
                                        >
                                            <div className="relative w-3 h-0.5">
                                                <motion.div
                                                    animate={{rotate: isOpen ? 0 : 90}}
                                                    transition={{duration: 0.3}}
                                                    className={`absolute w-3 h-0.5 ${isOpen ? 'bg-white' : 'bg-[#685DC5]'} left-0 top-0`}
                                                />
                                                <div className={`w-3 h-0.5 ${isOpen ? 'bg-white' : 'bg-[#685DC5]'}`}/>
                                            </div>
                                        </motion.button>


                                    </div>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{opacity: 0, height: 0}}
                                                animate={{opacity: 1, height: 'auto'}}
                                                exit={{opacity: 0, height: 0}}
                                                transition={{duration: 0.3}}
                                                className="overflow-hidden"
                                            >
                                                <div className="mt-4 text-sm text-textGray whitespace-pre-line">
                                                    {answerText}
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
