import React from "react"
import Logo from "../../assets/Logo.png";
import FooterLinks from "./FooterLinks";
import Rec1 from "../../assets/Rectangle97.png";
import Rec2 from "../../assets/Rectangle99.png";
import Rec3 from "../../assets/Rectangle100.png";
const Footer = () => {
  return (
    <div className="w-full bg-slate-100 h-fit">
      <div className="w-[90%] mx-auto">
        <div className="mb-10">
          <img src={Logo} alt="logo"/>
        </div>
        <div className="flex justify-evenly gap-10">
          <div className="w-[30%] flex flex-col gap-5 ml-10">
            <div className="w-full mb-5">
              <img src={Rec1} alt="image1" />
              <div className="text-sm text-slate-500">4.5/5 Rating on Lorem</div>
            </div>
            <div className="w-full mb-5">
              <img src={Rec2} alt="image2" />
              <div className="text-sm text-slate-500">9/10 Rating on Lorem</div>
            </div>
            <div className="w-full mb-5">
              <img src={Rec3} alt="image3" />
              <div className="text-sm text-slate-500">4.5/5 Rating on Dorel</div>
            </div>
          </div>
          <FooterLinks/>
        </div>

      </div>
    </div>
  )
};

export default Footer;
