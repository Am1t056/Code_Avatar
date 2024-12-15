import { Check } from "lucide-react";
import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);



  // Navigate to the next step
  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
  };

  // Navigate to the previous step
  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

    // Define steps with their labels and content
    const steps = [
      { label: "Business Type", content: <Step1 handleNext={handleNext} handleBack={handleBack}/> },
      { label: "Business Details", content: <Step2 handleNext={handleNext} handleBack={handleBack}/> },
      { label: "Authorized Representative", content: <Step3 handleNext={handleNext} handleBack={handleBack}/> },
      { label: "Business Owners", content: <Step3 handleNext={handleNext} handleBack={handleBack}/> },
      { label: "Company Directors", content: <Step3 handleNext={handleNext} handleBack={handleBack}/> },
      { label: "Support Information", content: <Step3 handleNext={handleNext} handleBack={handleBack}/> },
      { label: "Add Details", content: <Step3 handleNext={handleNext} handleBack={handleBack}/> },
      { label: "Complete Registration", content: <Step3 handleNext={handleNext} handleBack={handleBack}/> },
  
    ];

  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Steps Indicator */}
      <div className="flex items-start w-full max-w-3xl relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center relative"
          >
            {/* Step Circle */}
            <div
              className={`flex items-center justify-center w-[14px] h-[14px] rounded-full font-bold transition-all
              ${
                index < currentStep
                  ? "bg-green-500 text-white"
                  : "bg-[#ffffff] border-[3px] border-gray-500"
              }
              ${
                index === currentStep
                  ? " border-[3px] border-green-500"
                  : " border-[#dad7dc]"
              }`}
            >
              {index < currentStep ? (
                <span className="text-white text-sm">
                  <Check className="w-[14px] h-[14px]"/>
                </span>
              ) : (
                ""
              )}
            </div>

            {/* Step Label */}
            <p
              className={`mt-2 text-sm w-[59px] text-wrap text-center hidden md:block 
              ${index < currentStep ? "text-[#636567] font-normal" : "text-[#1d1d22]"} 
              ${index === currentStep ? "font-semibold text-[#636567]" : ""}`}
            >
              {step.label}
            </p>

            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div
                className={`absolute top-[5px] left-[6.5px] transform translate-x-1/2 w-full h-1 
                ${index < currentStep ? "bg-green-500" : "bg-gray-300"}`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="w-full max-w-3xl border rounded-lg shadow-md bg-white">
        <div className="text-gray-700">{steps[currentStep].content}</div>
      </div>

      {/* Navigation Buttons */}
      {/* <div className="flex gap-4 mt-4">
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:bg-gray-200"
          disabled={currentStep === 0}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-green-300"
          disabled={currentStep === steps.length - 1}
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default Stepper;
