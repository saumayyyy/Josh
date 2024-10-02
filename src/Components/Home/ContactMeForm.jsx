import React, { useState } from "react";

const ContactMeForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full mx-auto mt-10 p-8 bg-white rounded-md h-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Your Full Name ( Required )
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
             bg-slate-100"
            placeholder="Your Full Name"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Your Email ( Required )
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
             bg-slate-100"
            placeholder="Your Email"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
             bg-slate-100"
            placeholder="Subject"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32
             bg-slate-100"
            placeholder="Your Message"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="bg-yellow-500 font-semibold py-3 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMeForm;
