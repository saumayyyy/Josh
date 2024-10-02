import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-slate-100 space-y-4 w-[80%] h-fit">
      <div className="bg-white p-5">
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-yellow-500 p-2 rounded-full">
            <MapPin size={24} />
          </div>
          <div className="space-y-4 w-full">
            <div className="flex justify-between">
              <span className="font-bold">Country:</span>
              <span>India</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">City:</span>
              <span>Delhi</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Street:</span>
              <span>BhajanPura</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Card */}
      <div className="bg-white p-5">
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-yellow-500 p-2 rounded-full">
            <Mail size={24} />
          </div>
          <div className="space-y-4 w-full">
            <div className="flex justify-between">
              <span className="font-bold">Email:</span>
              <span>youremail@gmail.com</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Skype:</span>
              <span>@YourUsername</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Telegram:</span>
              <span>@YourUsername</span>
            </div>
          </div>
        </div>
      </div>

      {/* Support Services Card */}
      <div className="bg-white p-5">
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-yellow-500 p-2 rounded-full">
            <Phone size={24} />
          </div>
          <div className="space-y-4 w-full">
            <div className="flex justify-between">
              <span className="font-bold">Support Services:</span>
              <span>15369</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Office:</span>
              <span>+58 (021)356 587 235</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Personal:</span>
              <span>+58 (021)356 587 235</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
