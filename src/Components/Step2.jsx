import React from 'react'

const Step2 = ({handleNext,handleBack}) => (
    <div className="flex flex-col gap-[10px] p-4">
      <h2 className="text-xl font-semibold mb-4">Step 2: Contact Details</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full border border-gray-300 rounded-md px-3 py-2"
      />
  
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center w-full">
            <button
              onClick={handleBack}
              className="p-[14px] w-[95px] h-[48px] bg-white text-[16px] text-[#1d1d22] font-[450] rounded-[10px] border border-green-500 "
            
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="p-[14px] w-[95px] h-[48px] bg-red-500 text-white rounded-[10px] text-[16px]  font-[450] hover:bg-red-700"
            >
              Next
            </button>
          </div>
  
    </div>
  );

export default Step2