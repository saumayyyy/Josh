import React from "react"
import Cards from "./Cards";

const Projects = () => {
  return (
    <div className="w-full h-fit bg-slate-100 relative">
      <div className="w-[90%] mx-auto  flex flex-col items-center">
        <div className="w-[50%] mx-auto text-center pt-16">
            <div className="text-4xl font-bold mb-6 text-gray-800">Projects</div>
            <div className="text-lg text-gray-500 leading-relaxed">
                Amet minim mollit non deserunt ullamco est sit 
                aliqua dolor do amet sint.Velit officia consequat
                 duis enim velit mollit. lorem ipsum
            </div>
        </div>

        <Cards/>

      </div>
    </div>
  )
};

export default Projects;
