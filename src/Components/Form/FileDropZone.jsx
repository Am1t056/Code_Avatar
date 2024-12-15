import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import FileLogo from "../../assets/Union.png";

const FileDropZone = ({ onDrop }) => {
  const [file, setFile] = useState(null); // State to track the uploaded file
  const [error, setError] = useState(null); // State to track errors

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
        if (acceptedFiles.length > 0) {
          setFile(acceptedFiles[0]); // Set the uploaded file
          setError(null); // Clear error
          onDrop(acceptedFiles[0]); // Pass the file to the parent component
        }
      },
    accept: {
      "application/pdf": [".pdf"],
      "image/jpeg": [".jpeg", ".jpg"],
    },
    maxSize: 50 * 1024 * 1024, // 50MB Max Size
    onDropRejected: (fileRejections) => {
        const rejection = fileRejections[0];
        setError(rejection.errors[0]); // Display the first rejection error
      },
  });

  return (
    <div
      {...getRootProps()}
      className={`w-full h-48 flex flex-col justify-center items-center cursor-pointer ${
        isDragActive ? "bg-gray-100" : "bg-white"
      }`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center">
        {/* If file is uploaded, show the file info */}
        {file ? (
          <div className="flex flex-col items-center">
            {/* Display file name and icon */}
            <div className="bg-[#f6f6f6] w-[52px] h-[52px] rounded-full mb-2 flex items-center justify-center">
              <img className="object-cover object-center" src={FileLogo} alt="" />
            </div>
            <p className="text-gray-600">{file.name}</p> {/* Show the file name */}
            <p className="text-gray-500 text-sm">{(file.size / 1024 / 1024).toFixed(2)} MB</p> {/* Show the file size */}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            {/* File Upload Icon */}
            <div className="bg-[#f6f6f6] w-[52px] h-[52px] rounded-full mb-2 flex items-center justify-center">
              <img className="object-cover object-center" src={FileLogo} alt="" />
            </div>
            {/* Upload Instructions */}
            <p className="text-gray-600">
              {isDragActive ? (
                "Drop the file here..."
              ) : (
                <span>
                  <span className="underline text-[#1d1d22] underline-offset-2">Click to upload</span> or drag and
                  drop
                </span>
              )}
            </p>
            <p className="text-gray-500 text-sm">Maximum file size 50 MB</p>
          </div>
        )}
      </div>
      {error && <p className="text-red-500 mt-2 text-sm">{error.message}</p>}
    </div>
  );
};

export default FileDropZone;
