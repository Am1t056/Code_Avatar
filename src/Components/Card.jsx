import React from "react";

const Card = ({
  flagSrc,
  countryName,
  officeType,
  officeName,
  officeLocation,
}) => {
  return (
    <div className="px-[28px] py-[24px] border border-gray-400 rounded-[12px] flex flex-col gap-[24px] max-w-[340px] z-50 backdrop-blur-0 bg-white/5">
      <div className="flex flex-col gap-[12px] w-full">
       
          <img
            className="w-[53px] h-[40px] object-cover rounded-lg mx-0"
            src={flagSrc}
            alt="Singapore"
          />
      

        <div>
          <h1 className="text-[18px] text-[#f9f9f9] font-semibold leading-[24px]">
            {countryName}
          </h1>
          <p className="text-[#e0e0e0] text-[14px] leading-[20px]">
            {officeType}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <p className="text-[14px] leading-[18px] text-[#e0e0e0] font-normal">
          {officeName}
        </p>
        <p className="text-[14px] leading-[18px] text-[#e0e0e0] font-normal">
          {officeLocation}
        </p>
      </div>
    </div>
  );
};

export default Card;
