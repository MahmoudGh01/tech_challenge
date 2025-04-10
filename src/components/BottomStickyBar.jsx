import React from 'react'

const BottomStickyBar = () => {
    return (
        <div className="fixed bottom-0 w-full bg-white border-t z-50 font-sans">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap gap-y-2 justify-between text-sm text-textDark">
                <div className="flex flex-col min-w-[120px]">
                    <p className="font-semibold">Zeptolab</p>
                    <p>Marketing Performance</p>
                </div>
                <div className="flex flex-col min-w-[120px]">
                    <p className="font-semibold">Location</p>
                    <p>Bangkok</p>
                </div>
                <div className="flex flex-col min-w-[120px]">
                    <p className="font-semibold">Duration</p>
                    <p>1 Year Full-Time</p>
                </div>
                <div className="flex flex-col min-w-[120px]">
                    <p className="font-semibold">Start date</p>
                    <p>3 Aug 2020</p>
                </div>
                <div className="flex flex-col min-w-[150px]">
                    <p className="font-semibold">Application deadline</p>
                    <p>30 June 2020</p>
                </div>
                <div className="flex flex-col min-w-[200px]">
                    <p className="font-semibold">Application closes in</p>
                    <p>6 Day ： 22 Hrs ： 56 Min</p>
                </div>
            </div>
        </div>
    )
}

export default BottomStickyBar
