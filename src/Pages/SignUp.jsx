import { ArrowLeft } from "lucide-react";
import React from "react";
import Singapore from "../assets/Clip path group.png";
import Hongkong from "../assets/Hong Kong (HK).png"
import USA from "../assets/United States of America (US).png"
import Card from "../Components/Card";
import VerifyEmail from "../Components/VerifyEmail";

const SignUp = () => {
  return (
    <div className="max-w-[1920px] w-full lg:flex min-h-screen relative overflow-hidden">
      {/* 1st box */}
      <div className="bg-[#696969] w-[948px] px-12 pb-8 hidden lg:block">
        
          <a
            className="flex py-[25px] items-center gap-[4px] text-[14px] text-[#e0e0e0] leading-[21px] font-normal"
            href=""
          >
            <span>
              <ArrowLeft className="w-[20px] h-[20px]" />
            </span>
            Back
          </a>
       
        <div className="pt-[24px] pb-[25px]">
          <h1 className="text-center text-[32px] text-[#f9f9f9] font-semibold leading-[40px]">
            Layout Cards
          </h1>
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="flex items-center justify-center">
             <Card flagSrc={Singapore} countryName="Singapore" officeType="Head Office" officeName="XYZ Pvt. Ltd." officeLocation="Road to nowhere, 06-404, 500 Internal Error"/>
          </div>

          <div className="flex gap-[24px] mx-auto">
           <Card flagSrc={Hongkong} countryName="Hong Kong" officeType="Branches" officeName="XYZ Pte. Ltd." officeLocation="The Infinite Loop Office, 404 Timeout Plaza"/>

           <Card flagSrc={USA} countryName="USA" officeType="Branches" officeName="XYZ Pte. Ltd." officeLocation="The Infinite Loop Office, 404 Timeout Plaza"/>
          </div>

          
        </div>
      </div>

      {/*2nd box  */}
      <div className="relative">
        <VerifyEmail/>
        <div className="absolute left-1/2 bottom-6 -translate-x-1/2 flex justify-center items-center">
          <p className="text-[14px] text-[#646464] leading-[21px] font-normal">By continuing, you’re agreeing to Nobody’s <a className="text-blue-500" href="">Terms of Service, Privacy Policy and Cookie Policy.</a></p>
      </div>
      </div>


      <div className="w-[990px] h-[990px] 2xl::w-[1031.95px] xl:h-[1031.95px] hidden xl:block rounded-full bg-gradient-to-br from-blue-800  via-purple-700 to-[#e38602] to-[80%] absolute top-[205px] -left-[400.5px] -rotate-[14.9deg] blur-sm opacity-100 z-10 " style={{"boxShadow": "0px 3.78px 3.78px 0px rgba(0, 0, 0, 0.25)"}}></div>
    </div>
  );
};

export default SignUp;
