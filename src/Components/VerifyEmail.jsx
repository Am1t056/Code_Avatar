import React, { useRef, useState, useEffect } from "react";
import Logo from "../assets/logo-87.png";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRef = useRef([]);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    const newCode = [...code];

    //handle pasted content
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);

      //focus on the last non-empty input or the first empty one
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRef.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);

      //Move focus to the next input field if value is entered
      if (value && index < 5) {
        inputRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (code.every((digit) => digit !== "")) {
      // All digits are filled, proceed to navigation
      navigate("/detail");
    } else {
      alert("Please enter all 6 digits of the verification code.");
    }
  };

  //for auto submission after the verification code entered
  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit(new Event("submit"));
    }
  }, [code]);

  return (
    <div className=" bg-white px-[20px] xl:px-24 w-full min-h-screen">
      <div className="py-[12px] lg:py-[36px]">
        <img
          src={Logo}
          className="w-[202px] h-[40px] object-cover object-center"
          alt="Logo"
        />
      </div>

      <div className="py-[18px] lg:py-[24px] flex flex-col gap-[24px] lg:gap-[48px] w-full">
        <div className="flex flex-col justify-center items-center lg:items-start md:justify-normal">
          <h1 className="text-[32px] text-[#202020] font-bold leading-[40px]">
            Verify your email
          </h1>
          <p className="text-[16px] text-[#646464] text-center md:text-start font-normal leading-[24px]">
            Please enter the 6 digit code we just sent to s*********a@xyz.com
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[24px] w-full lg:w-[519px]"
        >
            <div className="flex gap-[14px] items-center justify-center lg:justify-normal">
          <div className="flex gap-[14px] md:gap-[24px]">
            {code.slice(0, 3).map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRef.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] lg:w-[52px] lg:h-[52px] text-center text-2xl font-bold bg-white text-gray-800 border border-[#e0e0e0] rounded-[6px] focus:border-red-500 focus:outline-none"
              />
            ))}
          </div>

          {/* Separator line */}
          <div className="w-[16px] h-[3px] bg-[#333333]"></div>

          {/* Second group of 3 inputs */}
          <div className="flex items-center gap-[14px] md:gap-[24px]">
            {code.slice(3).map((digit, index) => (
              <input
                key={index + 3} // Add 3 to the index to ensure unique keys
                ref={(el) => (inputRef.current[index + 3] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index + 3, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index + 3, e)}
                className="w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] lg:w-[52px] lg:h-[52px] text-center text-2xl font-bold bg-white text-gray-800 border border-[#e0e0e0] rounded-[6px] focus:border-red-500 focus:outline-none"
              />
            ))}
          </div>
          </div>

          <div className="flex flex-col  items-center lg:items-start gap-[16px]">
            <button
              type="submit"
              className="max-w-lg w-full bg-[#e50101] text-white text-[16px] font-medium py-[14px] rounded-[10px]"
            >
              Verify Email
            </button>
            <p className="text-[16px] font-normal text-[#646464] leading-[24px]">
              Didn't receive a code?{" "}
              <a className="text-blue-600" href="">
                Resend Code
              </a>
            </p>
          </div>
        </form>
      </div>

      
    </div>
  );
};

export default VerifyEmail;
