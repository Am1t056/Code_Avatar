import { Check } from 'lucide-react';
import React, { useRef, useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const Stepper = ({ onFinalSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    step1: {},
    step2: {},
    step3: {},
  });

  // Create refs for each step's form methods
  const step1FormRef = useRef();
  const step2FormRef = useRef();
  const step3FormRef = useRef();

  const handleNext = (step, stepData) => {
    const updatedData = {
      ...formData,
      [`step${step}`]: stepData,
    };

    setFormData(updatedData);

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Combine all steps' data for final submission
      const completeFormData = {
        ...updatedData.step1,
        ...updatedData.step2,
        ...updatedData.step3,
      };
      onFinalSubmit(completeFormData);

      // Reset everything after submission
      resetForms();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    {
      label: 'Business Type',
      content: (
        <Step1
          key="step1"
          ref={step1FormRef}
          handleNext={(data) => handleNext(1, data)}
          handleBack={handleBack}
          initialData={formData.step1}
        />
      ),
    },
    {
      label: 'Business Details',
      content: (
        <Step2
          key="step2"
          ref={step2FormRef}
          handleNext={(data) => handleNext(2, data)}
          handleBack={handleBack}
          initialData={formData.step2}
        />
      ),
    },
    {
      label: 'Authorized Representative',
      content: (
        <Step3
          key="step3"
          ref={step3FormRef}
          handleNext={(data) => handleNext(3, data)}
          handleBack={handleBack}
          initialData={formData.step3}
          isFinalStep={true}
        />
      ),
    },
  ];

  const resetForms = () => {
    // Reset all form states
    setFormData({
      step1: {},
      step2: {},
      step3: {},
    });

    // Reset each step's form
    if (step1FormRef.current) step1FormRef.current.reset();
    if (step2FormRef.current) step2FormRef.current.reset();
    if (step3FormRef.current) step3FormRef.current.reset();

    // Return to first step
    setCurrentStep(0);
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="flex items-start w-full max-w-3xl relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center relative"
          >
            <div
              className={`flex items-center justify-center w-[14px] h-[14px] rounded-full font-bold transition-all
              ${
                index < currentStep
                  ? 'bg-green-500 text-white'
                  : 'bg-[#ffffff] border-[3px] border-gray-500'
              }
              ${
                index === currentStep
                  ? 'border-[3px] border-green-500'
                  : 'border-[#dad7dc]'
              }`}
            >
              {index < currentStep ? (
                <Check className="w-[14px] h-[14px]" />
              ) : (
                ''
              )}
            </div>

            <p
              className={`mt-2 text-sm w-[59px] text-wrap text-center hidden md:block 
              ${
                index < currentStep
                  ? 'text-[#636567] font-normal'
                  : 'text-[#1d1d22]'
              } 
              ${index === currentStep ? 'font-semibold text-[#636567]' : ''}`}
            >
              {step.label}
            </p>

            {index < steps.length - 1 && (
              <div
                className={`absolute top-[5px] left-[6.5px] transform translate-x-1/2 w-full h-1 
                ${index < currentStep ? 'bg-green-500' : 'bg-gray-300'}`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="w-full max-w-3xl border rounded-lg shadow-md bg-white">
        <div className="text-gray-700">{steps[currentStep].content}</div>
      </div>
    </div>
  );
};

export default Stepper;
