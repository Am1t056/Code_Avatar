import React, { forwardRef } from "react";
import { useForm } from "react-hook-form";
import InputField from "./Form/InputField";
import SelectField from "./Form/SelectField";
import TextareaField from "./Form/TextareaField";
import FileDropZone from "./Form/FileDropZone";

const Step1 =  forwardRef(({ handleNext, handleBack, initialData }, ref) => {
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
          Tell us more about your business
        </h2>
        <p className="text-[13px] text-[#636567] leading-[20px] font-[450]">
          Your info is like the Wi-Fi password—totally crucial for keeping
          things running, impressing the money folks, and making sure you get
          top-notch service without any buffering!
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
        <InputField
          label="Legal Name"
          name="legalName"
          placeholder="Legal Name"
          register={register}
          validation={{ required: "Legal Name is required" }}
          errors={errors}
        />

        <InputField
          label="Doing Business As"
          name="doingBusinessAs"
          placeholder="Doing Business As"
          register={register}
          validation={{ required: "Doing Business As is required" }}
          errors={errors}
        />

        <InputField
          label="Company Registration Number"
          name="companyRegNumber"
          placeholder="Company Registration Number"
          register={register}
          validation={{ required: "Registration Number is required" }}
          errors={errors}
        />

        <InputField
          label="Website URL"
          name="websiteURL"
          placeholder="Website URL"
          register={register}
          validation={{ 
            required: "Website URL is required",
            pattern: {
              value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
              message: "Invalid URL format"
            }
          }}
          errors={errors}
        />

        <SelectField
          label="Industry Name"
          name="industryName"
          control={control}
          validation={{ required: "Industry Name is required" }}
          options={[
            { value: "tech", label: "Technology" },
            { value: "finance", label: "Finance" },
            { value: "healthcare", label: "Healthcare" },
          ]}
          errors={errors}
        />

        <InputField
          label="Expected monthly transactions"
          name="monthlyTransactions"
          placeholder="Enter number"
          register={register}
          validation={{ 
            required: "This field is required",
            min: { value: 1, message: "Must be at least 1" }
          }}
          errors={errors}
          type="number"
        />

        <TextareaField
          label="Business Description"
          name="businessDescription"
          placeholder="Describe your business"
          register={register}
          validation={{ 
            required: "Description is required",
            minLength: { value: 20, message: "Minimum 20 characters required" }
          }}
          errors={errors}
        />

        <div className="col-span-2 flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[6px]">
            <label className="block text-[16px] font-[550] leading-[24px] text-[#1d1d22]">
              Certificate of Incorporation <span className="text-red-500">*</span>
            </label>
            <p className="text-[13px] text-[#636567] leading-[20px] font-[450]">
              Upload the incorporation certificate
            </p>
          </div>
          <FileDropZone 
            name="incorporationCertificate"
            control={control}
            requiredMessage="Certificate is required"
            errors={errors}
          />
        </div>

        <div className="col-span-2 flex justify-between items-center">
          <button
            type="button"
            onClick={handleBack}
            className="p-[14px] w-[95px] h-[48px] bg-white text-[16px] text-[#1d1d22] font-[450] rounded-[10px] border border-green-500"
            disabled
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

export default Step1;