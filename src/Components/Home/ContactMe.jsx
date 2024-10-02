import React from "react"
import ContactMeForm from "./ContactMeForm";
import ContactInfo from "./ContactInfo";

const ContactMe = () => {
  return (
    <div className="w-full h-full bg-slate-100">
        <div className="w-[90%] flex justify-between mx-auto">
          <div className="w-[65%]">
            <div className="text-3xl font-bold text-gray-800">Leave ME Your Info</div>
            <ContactMeForm/>
          </div>

          <div className="w-[35%] flex flex-col items-center">

            <div className="text-3xl font-bold text-gray-800 mb-11">Contact Information</div>
            <ContactInfo/>
          </div>
            
            
        </div> 
    </div>
  )
};

export default ContactMe;
