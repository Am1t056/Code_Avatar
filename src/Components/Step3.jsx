import React, { forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import InputField from './Form/InputField';

const Step3 = forwardRef(({ handleNext, handleBack, initialData,isFinalStep }, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {},
  });

  const onSubmit = (data) => {
    handleNext(data);
  };

  return (
    <div className="py-[24px] px-[20px] md:py-[56px] md:px-[48px] flex flex-col gap-[20px] md:gap-[40px]">
      <div className="flex flex-col gap-[8px]">
        <h2 className="text-[20px] font-[550] leading-[24px] text-[#1d1d22]">
          Authorized Representative
        </h2>
        <p className="text-[13px] text-[#636567] leading-[20px] font-[450]">
          Please provide information about the authorized representative.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]"
      >
        <InputField
          label="Full Name"
          name="representativeName"
          placeholder="John Doe"
          register={register}
          validation={{ required: 'Name is required' }}
          errors={errors}
        />

        <InputField
          label="Position"
          name="position"
          placeholder="CEO"
          register={register}
          validation={{ required: 'Position is required' }}
          errors={errors}
        />

        <InputField
          label="Email"
          name="representativeEmail"
          placeholder="john@company.com"
          register={register}
          validation={{
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Invalid email address',
            },
          }}
          errors={errors}
          type="email"
        />

        <InputField
          label="Phone Number"
          name="representativePhone"
          placeholder="+1 (123) 456-7890"
          register={register}
          validation={{
            required: 'Phone number is required',
            pattern: {
              value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
              message: 'Invalid phone number',
            },
          }}
          errors={errors}
        />

        <div className="col-span-2 flex flex-col gap-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              {...register('termsAccepted', {
                required: 'You must accept the terms',
              })}
              className="form-checkbox h-4 w-4 text-red-500"
            />
            <span className="text-sm text-gray-700">
              I certify that all information provided is accurate and complete
            </span>
          </label>
          {errors.termsAccepted && (
            <p className="text-red-500 text-sm">
              {errors.termsAccepted.message}
            </p>
          )}
        </div>

        <div className="col-span-2 flex justify-between items-center">
          <button
            type="button"
            onClick={handleBack}
            className="p-[14px] w-[95px] h-[48px] bg-white text-[16px] text-[#1d1d22] font-[450] rounded-[10px] border border-green-500"
          >
            Back
          </button>
          <button
            type="submit"
            className="p-[14px] w-[95px] h-[48px] bg-red-500 text-white rounded-[10px] text-[16px] font-[450] hover:bg-red-700"
          >
            {isFinalStep ? 'Submit' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
});

export default Step3;
