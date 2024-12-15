import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import FileDropZone from "./Form/FileDropZone";
import InputField from "./Form/InputField";
import SelectField from "./Form/SelectField";
import TextareaField from "./Form/TextareaField";

const Step1 = ({ handleNext, handleBack }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(null);

  // Handle Form Submit
  const onSubmit = (data) => {
    console.log("Form Data on Submit:", data);
    handleNext();
  };

  const handleFileDrop = (file) => {
    if (file) {
      setError(null); // Clear error when a file is successfully uploaded
      console.log("File uploaded:", file);
    }
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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]"
      >
        {/* Legal Name */}
        <InputField
          label="Legal Name"
          name="legalName"
          placeholder="Legal Name"
          register={register}
          validation={{ required: "Legal Name is required" }}
          errors={errors}
        />

        {/* Doing Business As */}
        <InputField
          label="Doing Business As"
          name="doingBusinessAs"
          placeholder="Doing Business As"
          register={register}
          validation={{ required: "Doing Business As is required" }}
          errors={errors}
        />

        {/* Company Registration Number */}
        <InputField
          label="Company Registration Number"
          name="companyRegNumber"
          placeholder="Company Registration Number"
          register={register}
          validation={{ required: "Registration Number is required" }}
          errors={errors}
        />

        {/* Random Registration Number */}
        <InputField
          label="Random Registration Number"
          name="randomRegNumber"
          placeholder="Random Registration Number"
          register={register}
          validation={{ required: "Random Registration Number is required" }}
          errors={errors}
        />

        {/* Website URL */}
        <InputField
          label="Website URL"
          name="websiteURL"
          placeholder="Website URL"
          register={register}
          validation={{ required: "Website URL is required" }}
          errors={errors}
        />

        {/* Industry Name */}
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

        {/* Random Dropdown */}
        <SelectField
          label="One Random Dropdown?"
          name="randomDropdown"
          control={control}
          validation={{ required: "This field is required" }}
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
          ]}
          errors={errors}
        />

        {/*Which random dropdown*/}
        <SelectField
          label="Which dropdown would you like to select?"
          name="whichDropdown"
          control={control}
          validation={{ required: "This field is required" }}
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
            { value: "option4", label: "Option 4" },
            { value: "option5", label: "Option 5" },
          ]}
          errors={errors}
        />

        {/*Another Random Dropdown Appears */}
        <SelectField
          label="Another Random Dropdown Appears"
          name="anotherRandomDropdown"
          control={control}
          validation={{ required: "This field is required" }}
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
          ]}
          errors={errors}
        />

        {/*Account Usage Intent */}
        <SelectField
          label="Account usage Intent"
          name="accountUsageIntent"
          control={control}
          validation={{ required: "This field is required" }}
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
          ]}
          errors={errors}
        />

        {/* Random Count per Month */}
        <InputField
          label="Random count per month"
          name="randomCount"
          placeholder="Put the value to get the answer"
          register={register}
          validation={{ required: "Random Count is required" }}
          errors={errors}
          type="number" // Set the type as "number"
        />

        {/* Expected total visits in this page */}
        <InputField
          label="Expected total visits in this page"
          name="expectedVisit"
          placeholder="In number"
          register={register}
          validation={{ required: "Expected Visit is required" }}
          errors={errors}
          type="number" // Set the type as "number"
        />

        {/* Purpose of Fake Form */}
        <TextareaField
          label="Purpose of Using Fake Form"
          name="fakeFormPurpose"
          placeholder="Purpose of using fake form"
          register={register}
          validation={{ required: "Purpose is required" }}
          errors={errors}
        />

        {/* Ek description toh banta hai */}
        <TextareaField
          label="Ek description toh banta hai"
          name="ekDescription"
          placeholder="Product Description"
          register={register}
          validation={{ required: "Description is required" }}
          errors={errors}
        />

        {/* Contact Email */}
        <InputField
          label="Contact Email"
          name="contactEmail"
          placeholder="Contact Email"
          register={register}
          validation={{
            required: "Contact Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          }}
          errors={errors}
          type="email" // Set the type as "email"
        />
        {/* File Upload Section */}
        <div className="col-span-2 flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[6px]">
            <label className="block text-[16px] font-[550] leading-[24px] text-[#1d1d22]">
              Certificate of Incorporation{" "}
              <span className="text-red-500">*</span>
            </label>
            <p className="text-[13px] text-[#636567] leading-[20px] font-[450]">
              Upload the incorporation certificate
            </p>
          </div>

          <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 relative ">
            <Controller
              name="fileUpload"
              control={control}
              rules={{ required: "Please upload a file" }}
              render={({ field }) => (
                <FileDropZone onDrop={handleFileDrop} error={error} />
              )}
            />
          </div>
        </div>

        {/* File Upload Section */}
        <div className="col-span-2 flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[6px]">
            <label className="block text-[16px] font-[550] leading-[24px] text-[#1d1d22]">
              Company Logo <span className="text-red-500">*</span>
            </label>
            <p className="text-[13px] text-[#636567] leading-[20px] font-[450]">
              Upload the company logo
            </p>
          </div>

          <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 relative ">
            <Controller
              name="companyLogo"
              control={control}
              rules={{ required: "Please upload a file" }}
              render={({ field }) => (
                <FileDropZone onDrop={handleFileDrop} error={error} />
              )}
            />
          </div>
        </div>

        

        {/* Navigation Buttons for Step1 */}
        <div className="flex justify-between items-center w-full col-span-2">
          <button
            onClick={handleBack}
            className="p-[14px] w-[95px] h-[48px] bg-white text-[16px] text-[#1d1d22] font-[450] rounded-[10px] border border-green-500 disabled:border-[#1d1d22]"
            disabled={true} // Step 1 has no back button
          >
            Back
          </button>
          <button
            type="submit"
            onClick={handleNext}
            className="p-[14px] w-[95px] h-[48px] bg-red-500 text-white rounded-[10px] text-[16px]  font-[450] hover:bg-red-700"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
