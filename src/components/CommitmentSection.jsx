import React from 'react'

const CommitmentSection = () => {
  return (
      <section className="max-w-[1440px] mx-auto px-4 py-16 flex flex-col gap-10 items-center">
        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center">
          <div className="border w-[320px] h-[524px] p-6 flex flex-col justify-between rounded-lg text-sm">
            <div>
              <p className="text-[#5B4EFF] font-medium mb-2">Scholarship value</p>
              <p className="text-3xl font-semibold mb-6">€31,300</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <p className="text-gray-600">Tuition covered</p>
                <p className="font-medium">€20,900</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#5B4EFF] text-xs font-medium">Remaining</p>
                <p className="font-medium text-xs">€2,000</p>
              </div>
              <div>
                <p className="text-gray-600">Living stipend</p>
                <p className="text-xs">€8,400 (€700/month)</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              <div className="w-[320px] h-[274px] border p-6 rounded-lg text-sm flex flex-col justify-between">
                <div>
                  <p className="text-[#5B4EFF] font-medium mb-2">Study commitment</p>
                  <p className="font-semibold mb-2">3 hours / day</p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time.
                  </p>
                </div>
              </div>

              <div className="w-[320px] h-[274px] border p-6 rounded-lg text-sm flex flex-col justify-between">
                <div>
                  <p className="text-[#5B4EFF] font-medium mb-2">Work commitment</p>
                  <p className="font-semibold mb-2">4 hours / day</p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Immerse yourself in the professional world during your apprenticeship. You'll learn the ropes from the best and get to apply your newly acquired knowledge in the field from day one.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[676px] max-w-full flex items-center justify-center text-xs text-gray-500 uppercase gap-2 tracking-wide mx-auto">
              <div className="w-full h-px bg-gray-300" />
              Graduation
              <div className="w-full h-px bg-gray-300" />
            </div>

            <div className="w-[680px] h-[178px] border p-6 rounded-lg text-sm mx-auto">
              <p className="text-[#5B4EFF] font-medium mb-1">A full-time contract</p>
              <p className="font-semibold text-lg mb-1">1 Year / Full-Time</p>
              <p className="text-gray-600 text-xs">You'll be guaranteed a 1 year contract with SCG upon graduation.</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CommitmentSection
