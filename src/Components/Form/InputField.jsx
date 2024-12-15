import React from "react";

const InputField = ({
  label,
  name,
  placeholder,
  register,
  validation,
  errors,
  type = "text",
}) => {
  return (
    <div className="col-span-2 lg:col-span-1">
      <label className="block mb-2 text-[14px] font-normal">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        {...register(name, validation)}
        placeholder={placeholder}
        className="w-full p-2 border border-[#dad7dc] rounded bg-white text-[#9b9b9b]"
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};

export default InputField;
