import React from "react"
import SkillsSection from "../Components/Skills/SkillsSection";
import Images from "../Components/Common/Images";
import Footer from "../Components/Common/Footer";

const Skills = ({ openModal, closeModal, isModalOpen }) => {
  return (
    <div className="w-full bg-slate-100 h-fit">
      <div className="flex flex-col w-full">
        <SkillsSection setModalOpen={openModal}
        closeModal={closeModal}
        isModalOpen={isModalOpen}/>
                
        <Images/>

        <Footer/>
      </div>
    </div>
  )
};

export default Skills;
