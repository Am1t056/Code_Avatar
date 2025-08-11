import React, { forwardRef } from "react";
import { useForm } from "react-hook-form";
import InputField from "./Form/InputField";
import SelectField from "./Form/SelectField";

const Step2 =forwardRef(({ handleNext, handleBack, initialData }, ref) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm({ 
    defaultValues: initialData || {} 
  });

  const onSubmit = (data) => {
    handleNext(data);
  };

  return (
    <div className="py-[24px] px-[20px] md:py-[56px] md:px-[48px] flex flex-col gap-[20px] md:gap-[40px]">
      <div className="flex flex-col gap-[8px]">
        <h2 className="text-[20px] font-[550] leading-[24px] text-[#1d1d22]">
          Business Contact Details
        </h2>
        <p className="text-[13px] text-[#636567] leading-[20px] font-[450]">
          Please provide your business contact information.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
        <InputField
          label="Business Email"
          name="businessEmail"
          placeholder="contact@company.com"
          register={register}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email address"
            }
          }}
          errors={errors}
          type="email"
        />

        <InputField
          label="Phone Number"
          name="phoneNumber"
          placeholder="+1 (123) 456-7890"
          register={register}
          validation={{
            required: "Phone number is required",
            pattern: {
              value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
              message: "Invalid phone number"
            }
          }}
          errors={errors}
        />

        <InputField
          label="Street Address"
          name="streetAddress"
          placeholder="123 Business St"
          register={register}
          validation={{ required: "Address is required" }}
          errors={errors}
        />

        <InputField
          label="City"
          name="city"
          placeholder="New York"
          register={register}
          validation={{ required: "City is required" }}
          errors={errors}
        />

        <InputField
          label="State/Province"
          name="state"
          placeholder="NY"
          register={register}
          validation={{ required: "State is required" }}
          errors={errors}
        />

        <InputField
          label="ZIP/Postal Code"
          name="postalCode"
          placeholder="10001"
          register={register}
          validation={{ required: "Postal code is required" }}
          errors={errors}
        />

        <SelectField
          label="Country"
          name="country"
          control={control}
          validation={{ required: "Country is required" }}
          options={[
            { value: "us", label: "United States" },
            { value: "ca", label: "Canada" },
            { value: "uk", label: "United Kingdom" },
          ]}
          errors={errors}
        />

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
            Next
          </button>
        </div>
      </form>
    </div>
  );
});

export default Step2;