import React from 'react'
import { useSelector } from 'react-redux'

const CommitmentSection = () => {
  const { data } = useSelector(state => state.scholarship)
  const s = data?.scholarship

  if (!s) return null

  return (
      <section
          className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-10 items-center font-sans">
        <div className="flex flex-col gap-6 w-full lg:flex-row lg:justify-between">
          <div className="w-full sm:max-w-sm lg:w-[32%] border rounded-lg p-6 text-sm flex flex-col justify-between">
            <div>
              <p className="text-primary font-medium mb-2">Scholarship value</p>
              <p className="text-3xl font-semibold mb-6">€{s.total_value}</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <p className="text-textGray">Tuition covered</p>
                <p className="font-medium">€{s.tuition}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-primary text-xs font-medium">Remaining</p>
                <p className="font-medium text-xs">€{s.remaining}</p>
              </div>
              <div>
                <p className="text-textGray">Living stipend</p>
                <p className="text-xs">€{s.stipend_per_year} (€{s.stipend_per_month}/month)</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[64%] flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <div className="w-full border rounded-lg p-6 text-sm flex flex-col justify-between">
                <p className="text-primary font-medium mb-2">Study Commitment</p>
                <p className="font-semibold mb-2">{s.study_commitment} hours / day</p>
                <p className="text-textGray text-xs leading-relaxed">{s.study_commitment_text}</p>
              </div>
              <div className="w-full border rounded-lg p-6 text-sm flex flex-col justify-between">
                <p className="text-primary font-medium mb-2">Apprenticeship Commitment</p>
                <p className="font-semibold mb-2">{s.internship_commitment} hours / day</p>
                <p className="text-textGray text-xs leading-relaxed">{s.internship_commitment_text}</p>
              </div>
            </div>

            <div className="flex items-center justify-center text-xs text-textGray uppercase gap-2 tracking-wide">
              <div className="w-full h-px bg-gray-300"/>
              Graduation
              <div className="w-full h-px bg-gray-300"/>
            </div>

            <div className="w-full border rounded-lg p-6 text-sm">
              <p className="text-primary font-medium mb-1">A Full-Time Contract</p>
              <p className="font-semibold text-lg mb-1">{s.duration} Year Full-Time</p>
              <p className="text-textGray text-xs">You’ll be guaranteed a {s.duration} year contract with SCG upon
                graduation.</p>
            </div>
          </div>
        </div>
      </section>

  )
}

export default CommitmentSection
