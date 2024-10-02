import React, { useState } from "react";
import SkillCard from "./SkillsCard";
import Modal from "./Modal";

const initialSkillsData = [
  {
    category: 'Front End Development',
    skills: [
      { name: 'HTML', progress: 90 },
      { name: 'CSS', progress: 85 },
      { name: 'JavaScript', progress: 80 },
      { name: 'PHP', progress: 75 },
      { name: 'WordPress', progress: 85 },
    ],
  },
  {
    category: 'Languages',
    skills: [
      { name: 'Hindi', progress: 90 },
      { name: 'English', progress: 85 },
    ],
  },
  {
    category: 'Back End Development',
    skills: [
      { name: 'NodeJS', progress: 90 },
      { name: 'SSR', progress: 85 },
    ],
  },
];

const SkillsSection = ({ setModalOpen, closeModal, isModalOpen }) => {
  const [skillsData, setSkillsData] = useState(initialSkillsData);

  const addSkill = (newSkillCategory) => {
    setSkillsData([...skillsData, newSkillCategory]);
  };

  const openModal = () => {
    setModalOpen(true); // Set modal open state in the parent
  };

  const handleCloseModal = () => {
    closeModal(); // Close the modal and update parent state
  };

  return (
    <div className="p-8 flex flex-col items-center w-full gap-10 mt-10">
      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        closeModal={handleCloseModal}
        addSkill={addSkill}
      />

      {/* Skills Grid */}
      <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((categoryData, index) => (
          <SkillCard
            key={index}
            category={categoryData.category}
            skills={categoryData.skills}
          />
        ))}
      </div>
      <button
        className="mb-6 px-4 py-2 bg-yellow-500 hover:bg-yellow-700 rounded-md mx-auto"
        onClick={openModal}
      >
        Add Skill
      </button>
    </div>
  );
};

export default SkillsSection;
