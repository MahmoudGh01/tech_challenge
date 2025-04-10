import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchScholarship } from '../store/slices/scholarshipSlice'
import circleDesign from '../assets/circle-design.png'
import patternGrid from '../assets/pattern-grid.png'
import scgLogo from '../assets/scg-logo.png'
import { format, differenceInSeconds } from 'date-fns'

const HeroSection = () => {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.scholarship)
    const [countdown, setCountdown] = useState('')

    useEffect(() => {
        dispatch(fetchScholarship())
    }, [dispatch])

    useEffect(() => {
        if (!data?.scholarship?.application_end_date) return
        const endDate = new Date(data.scholarship.application_end_date)

        const updateCountdown = () => {
            const now = new Date()
            const secs = differenceInSeconds(endDate, now)
            if (secs <= 0) {
                setCountdown('Closed')
                return
            }

            const d = Math.floor(secs / 86400)
            const h = Math.floor((secs % 86400) / 3600)
            const m = Math.floor((secs % 3600) / 60)

            setCountdown(`${d} Days ： ${h} Hrs ： ${m} Min`)
        }

        updateCountdown()
        const interval = setInterval(updateCountdown, 1000)
        return () => clearInterval(interval)
    }, [data])

    if (!data) return null

    const scholarship = data.scholarship

    return (
        <section className="relative w-full px-4 py-10 md:py-20 max-w-7xl mx-auto font-sans grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <img src={circleDesign} alt="circle" className="absolute w-24 md:w-40 top-4 left-2 opacity-20 pointer-events-none" />

            <div className="flex flex-col md:block order-2 md:order-1 space-y-5 z-10">
                <h1 className="text-2xl md:text-5xl font-bold text-primary leading-tight">{scholarship.name}</h1>

                <div className="md:hidden text-sm text-textGray">
                    <p className="font-medium">Powered by:</p>
                    <p>{data.company?.name || 'Zeptolab'}</p>
                    <img src={scgLogo} alt="Zeptolab" className="w-8 h-8 mt-1 object-contain" />
                </div>

                <div className="md:hidden border rounded-lg p-4 bg-white text-sm">
                    <p className="text-primary font-semibold">Application closes in</p>
                    <p className="text-lg font-medium mt-1 tracking-wide">{countdown}</p>
                </div>

                <div className="md:hidden border rounded-lg p-4 grid grid-cols-2 gap-4 text-sm bg-white">
                    <div className="space-y-1">
                        <p className="text-primary font-medium">Location</p>
                        <p>{scholarship.location.name}</p>
                        <p className="text-primary font-medium">Start date</p>
                        <p>{format(new Date(scholarship.scholarship_start_date), 'dd MMM yyyy')}</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-primary font-medium">Duration</p>
                        <p>{scholarship.duration} Year</p>
                        <p>Full-Time</p>
                        <p className="text-primary font-medium">End date</p>
                        <p>{format(new Date(new Date(scholarship.scholarship_start_date).setFullYear(
                            new Date(scholarship.scholarship_start_date).getFullYear() + scholarship.duration)), 'dd MMM yyyy')}
                        </p>
                    </div>
                </div>

                <p className="font-semibold text-sm md:text-lg">A fully funded work–study program to launch your tech career</p>
                <p className="text-textGray text-sm md:text-base">{scholarship.description[0]?.data}</p>
                <p className="text-sm md:text-base">
                    <span className="font-semibold">Position:</span> {scholarship.position || 'Data Analyst Intern'}
                </p>

                <button className="bg-primary text-white rounded-full px-6 py-2 font-semibold text-sm w-fit mx-auto md:mx-0 mt-4">
                    Apply Now
                </button>
            </div>

            <div className="hidden md:flex flex-col gap-6 z-10 order-2">
                <div className="flex items-center gap-4">
                    <img src={scgLogo} alt="Zeptolab" className="w-10 h-10 object-contain" />
                    <p className="text-textGray font-medium">Powered by:<br />{data.company?.name || 'Zeptolab'}</p>
                </div>

                <div className="border rounded-lg p-4 w-full bg-white">
                    <p className="text-sm text-primary font-semibold">Application closes in</p>
                    <p className="text-xl font-medium mt-1 tracking-wide">{countdown}</p>
                </div>

                <div className="border rounded-lg p-4 grid grid-cols-2 gap-4 text-base bg-white">
                    <div className="space-y-2">
                        <div>
                            <p className="text-primary font-medium">Location</p>
                            <p>{scholarship.location.name}</p>
                        </div>
                        <div>
                            <p className="text-primary font-medium">Start date</p>
                            <p>{format(new Date(scholarship.scholarship_start_date), 'dd MMM yyyy')}</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <p className="text-primary font-medium">Duration</p>
                            <p>{scholarship.duration} Year</p>
                        </div>
                        <div>
                            <p className="text-primary font-medium">End date</p>
                            <p>{format(new Date(new Date(scholarship.scholarship_start_date).setFullYear(
                                new Date(scholarship.scholarship_start_date).getFullYear() + scholarship.duration)), 'dd MMM yyyy')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <img src={patternGrid} alt="pattern" className="absolute right-0 bottom-0 w-1/2 opacity-50 hidden md:block pointer-events-none" />
        </section>
    )
}

export default HeroSection
