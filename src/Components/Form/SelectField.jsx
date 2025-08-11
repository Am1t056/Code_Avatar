import React from "react";
import { Controller } from "react-hook-form";

const SelectField = ({ label, name, control, options, errors, validation }) => {
  return (
    <div className="flex flex-col gap-[6px]">
      <label className="block text-[16px] font-[550] leading-[24px] text-[#1d1d22]">
        {label}
        {validation?.required && <span className="text-red-500"> *</span>}
      </label>
      <Controller
        name={name}
        control={control}
        rules={validation}
        render={({ field }) => (
          <select
            {...field}
            className="border border-gray-300 rounded-[10px] p-[12px] text-[14px] leading-[20px] font-[450] focus:outline-none focus:ring-1 focus:ring-red-500"
          >
            <option value="">Select an option</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
      {errors && errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};

export default SelectField;