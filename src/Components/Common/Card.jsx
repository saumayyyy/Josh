import React from 'react';

const Card = ({ title, image, description, tags }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm border-2 border-slate-300 hover:scale-105 transition-all duration-300
    cursor-pointer">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className=" text-md  text-gray-600 leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-2 bg-gray-200 text-gray-700 text-md font-semibold rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;