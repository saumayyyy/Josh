import React from "react"
import Frame1 from "../../assets/Frame1.png"
import Frame2 from "../../assets/Frame2.png"
import Frame3 from "../../assets/Frame3.png"
import Frame4 from "../../assets/Frame4.png"

const Images = () => {
  return (
    <div className="w-full bg-slate-100 h-fit pt-5 pb-5">
        <div className="w-[80%] mx-auto flex justify-evenly">
            <img src={Frame1} alt="FrameImage" />
            <img src={Frame2} alt="FrameImage" />
            <img src={Frame3} alt="FrameImage" />
            <img src={Frame4} alt="FrameImage" />
        </div>
      
    </div>
  )
};

export default Images;
