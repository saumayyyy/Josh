import React from "react";
import YellowButton from "../Common/YellowButton";
import bg_top from "../../assets/bg_top.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[90%] mt-16 h-[80vh] relative bg-white mx-auto overflow-x-hidden">

        <div className="w-[50%] h-[50%] flex flex-col gap-16 absolute top-5 left-5 mt-10">
          <div className="text-5xl font-bold leading-tight text-gray-800">
            I'm Saumay Aggarwal
            <div className="text-yellow-500">Front-end Developer</div>
          </div>
          <p className="text-lg text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
            feugiat placerat lobortis. Natoque rutrum semper sed suspendisse
            nunc lectus.
          </p>
          <YellowButton message={"Hire Me →"} navigate={navigate} navigateTo={"/#contact"} />
        </div>

        <div className="w-[50%] bottom-0 right-0 absolute overflow-x-hidden mt-5">
          <img src={bg_top} alt="background" className="object-contain" />
        </div>

        <div className="absolute top-0 left-0 w-[25px] h-[25px] border-2 border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-[40px] left-[30px] w-[20px] h-[20px] border-2 border-green-400 rounded-full"></div>
        <div className="absolute top-[70px] left-[52vw] w-[20px] h-[20px] border-2 border-green-400 rounded-full"></div>
        <div className="absolute bottom-[25vh] left-[35vw] w-[20px] h-[20px] border-2 border-blue-600 rotate-[60deg]"></div>
        <div className="absolute top-[100px] right-[100px] w-[25px] h-[25px] border-2 border-yellow-500 rotate-[100deg]"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-[20px] h-[20px] absolute bottom-12 right-[85px]">
    <path d="M50 10 L90 90 L10 90 Z" fill="none" stroke="red" strokeWidth="8" />
  </svg>
    </div>
  );
};

export default HeroSection;
