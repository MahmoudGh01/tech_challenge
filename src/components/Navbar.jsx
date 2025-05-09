import React from 'react'

const Navbar = () => {
    return (
        <header className="bg-primary w-full">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 font-sans">
                <a href="#" className="text-white text-sm sm:text-base font-semibold whitespace-nowrap">
                    <span className="font-bold">HARBOUR.SPACE</span>
                    <span className="font-normal"> /INTERACTION DESIGN</span>
                </a>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:block w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#4CAF71] text-white font-bold text-xs sm:text-sm leading-tight text-center shadow-md">
                        APPLY<br />NOW
                    </button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h12M4 18h16" />
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default Navbar
