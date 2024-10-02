import React from "react"

const YellowButton = ({message,navigate,navigateTo}) => {
  return (
    <div className="mt-8 bg-[#ffb300] text-xl font-semibold py-4 px-6 rounded-md w-max hover:bg-yellow-600 transition duration-300">
      <button onClick={()=>navigate(navigateTo)}
        className=""
        >{message}</button>
    </div>
  )
};

export default YellowButton;
