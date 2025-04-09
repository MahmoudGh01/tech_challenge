import React from 'react'

const HeroSection = () => {
    return (
        <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl font-bold text-[#5B4EFF] leading-tight">
                    Interaction Design<br className="hidden sm:block" />
                    Apprenticeship
                </h1>
                <p className="font-semibold">
                    A fully funded work-study program to launch your tech career
                </p>
                <p className="text-gray-600 max-w-md">
                    Harbour.Space has partnered with SCG to empower driven talent and eliminate the barriers to accessing exceptional education and career opportunities through a Masters Fellowship.
                </p>
                <p><span className="font-semibold">Position:</span> Marketing Performance</p>
                <button className="bg-[#5B4EFF] text-white rounded-full px-6 py-2 font-semibold text-sm">
                    Apply Now
                </button>
            </div>

            <div className="space-y-6">
                <div className="border rounded-lg p-4">
                    <p className="text-sm text-[#5B4EFF] font-semibold">Application closes in</p>
                    <p className="text-lg font-medium mt-1">6 Day  ： 22 Hrs  ： 56 Min  ： 13 Seg</p>
                </div>
                <div className="border rounded-lg p-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="text-[#5B4EFF] font-medium">Location</p>
                        <p>Bangkok</p>
                        <p className="text-[#5B4EFF] font-medium mt-2">Start date</p>
                        <p>30 June 2020</p>
                    </div>
                    <div>
                        <p className="text-[#5B4EFF] font-medium">Duration</p>
                        <p>1 Year<br />Full-Time</p>
                        <p className="text-[#5B4EFF] font-medium mt-2">End date</p>
                        <p>3 Aug 2020</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
