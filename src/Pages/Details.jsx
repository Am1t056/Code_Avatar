import React, { useState } from 'react';
import Stepper from '../Components/Stepper';

const Details = () => {
    const [resetKey, setResetKey] = useState(0)
  const handleFinalSubmit = (formData) => {
    console.log("Final form submission:", formData);
    alert('Form submitted successfully!');
      setResetKey(prev => prev + 1);
    
    // Here you would typically send data to your backend
  };

  return (
    <div className='max-w-[1920px] w-full mx-auto mt-10 p-2 md:p-8'>
      <Stepper  key={resetKey} onFinalSubmit={handleFinalSubmit} />
    </div>
  );
};

export default Details;