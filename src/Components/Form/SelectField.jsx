import React from "react";
import { Controller } from "react-hook-form";

const SelectField = ({
  label,
  name,
  control,
  validation,
  options,
  errors,
}) => {
  return (
    <div className="col-span-2 lg:col-span-1">
      <label className="block mb-2 text-[14px] font-normal">
        {label} <span className="text-red-500">*</span>
      </label>
      <Controller
        name={name}
        control={control}
        rules={validation}
        render={({ field }) => (
          <select
            {...field}
            className="w-full p-2 border border-[#dad7dc] rounded bg-white text-[#9b9b9b]"
          >
            <option value="">Select an option</option>
            {options?.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};

export default SelectField;
