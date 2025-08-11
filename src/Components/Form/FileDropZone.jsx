import React, { useState } from "react";
import { Controller } from "react-hook-form";

const FileDropZone = ({ name, control, requiredMessage, errors }) => {
  const [fileName, setFileName] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      return file;
    }
    return null;
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      return file;
    }
    return null;
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: requiredMessage }}
      render={({ field: { onChange } }) => (
        <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 relative">
          <input
            type="file"
            id="file-upload"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={(e) => onChange(handleChange(e))}
          />
          <div
            className="flex flex-col items-center justify-center space-y-2"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <p className="text-sm text-gray-600">
              {fileName || "Drag and drop files here or click to browse"}
            </p>
            {errors && errors[name] && (
              <p className="text-red-500 text-sm">{errors[name].message}</p>
            )}
          </div>
        </div>
      )}
    />
  );
};

export default FileDropZone;