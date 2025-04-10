import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { format, differenceInSeconds } from 'date-fns'

const BottomStickyBar = () => {
    const { data } = useSelector(state => state.scholarship)
    const s = data?.scholarship
    const endDate = s?.application_end_date ? new Date(s.application_end_date) : null
    const startDate = s?.scholarship_start_date ? new Date(s.scholarship_start_date) : null

    const [remaining, setRemaining] = useState('')

    useEffect(() => {
        if (!endDate) return

        const updateCountdown = () => {
            const now = new Date()
            const seconds = differenceInSeconds(endDate, now)

            if (seconds <= 0) {
                setRemaining('Closed')
                return
            }

            const d = Math.floor(seconds / (3600 * 24))
            const h = Math.floor((seconds % (3600 * 24)) / 3600)
            const m = Math.floor((seconds % 3600) / 60)

            setRemaining(`${d} Days ： ${h} Hrs ： ${m} Min`)
        }

        updateCountdown()
        const interval = setInterval(updateCountdown, 1000)
        return () => clearInterval(interval)
    }, [endDate])

    if (!s) return null

    return (
        <div className="fixed bottom-0 w-full bg-white border-t z-50 font-sans">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap gap-y-2 justify-between text-sm text-textDark">
                <div className="flex flex-col min-w-[120px]">
                    <p className="font-semibold">{data.company?.name || 'Company'}</p>
                    <p>{s.position || 'Internship'}</p>
                </div>
                <div className="flex flex-col min-w-[120px]">
                    <p className="font-semibold">Location</p>
                    <p>{s.location?.name}</p>
                </div>
                <div className="flex flex-col min-w-[120px]">
                    <p className="font-semibold">Duration</p>
                    <p>{s.duration} Year Full-Time</p>
                </div>
                <div className="flex flex-col min-w-[120px]">
                    <p className="font-semibold">Start date</p>
                    <p>{startDate ? format(startDate, 'dd MMM yyyy') : ''}</p>
                </div>
                <div className="flex flex-col min-w-[150px]">
                    <p className="font-semibold">Application deadline</p>
                    <p>{endDate ? format(endDate, 'dd MMM yyyy') : ''}</p>
                </div>
                <div className="flex flex-col min-w-[200px]">
                    <p className="font-semibold">Application closes in</p>
                    <p>{remaining}</p>
                </div>
            </div>
        </div>
    )
}

export default BottomStickyBar
