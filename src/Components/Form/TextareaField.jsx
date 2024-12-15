import React from "react";

const TextareaField = ({
  label,
  name,
  placeholder,
  register,
  validation,
  errors,
}) => {
  return (
    <div className="col-span-2 lg:col-span-1">
      <label className="block mb-2 text-[14px] font-normal">
        {label} <span className="text-red-500">*</span>
      </label>
      <textarea
        {...register(name, validation)}
        placeholder={placeholder}
        className="w-full p-4 border border-[#dad7dc] rounded bg-white text-[#9b9b9b] h-[100px] resize-none"
      ></textarea>
      {errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};

export default TextareaField;
