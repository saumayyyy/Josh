import { useState } from "react";

const Modal = ({ isOpen, closeModal, addSkill }) => {
  // Set up with 5 default skill input fields
  const [domain, setDomain] = useState('');
  const [skills, setSkills] = useState([
    { name: '', progress: '' },
    { name: '', progress: '' },
    { name: '', progress: '' },
    { name: '', progress: '' },
    { name: '', progress: '' }
  ]);

  const handleSkillChange = (index, field, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index][field] = value;
    setSkills(updatedSkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!domain) {
      alert('Domain is required!');
      return;
    }

    if (skills.some(skill => !skill.name || !skill.progress)) {
      alert('Each skill must have a name and proficiency!');
      return;
    }
    addSkill({ category: domain, skills });
    closeModal();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Add Skill</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Domain</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-slate-200"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="col-span-5 grid grid-cols-3 gap-4 mb-4">
                  <div className="col-span-2">
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-slate-200"
                      placeholder="Skill Name"
                      value={skill.name}
                      onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      className="w-full px-4 py-2 bg-slate-200"
                      placeholder="Proficiency (%)"
                      value={skill.progress}
                      onChange={(e) => handleSkillChange(index, 'progress', e.target.value)}
                      required
                      max={100}
                      min={0}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-10">
              
              <button
                type="submit"
                className="px-10 font-bold py-2 bg-yellow-500 rounded-md"
              >
                Add Skill
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="px-10 font-bold py-2 bg-white text-red-700 border border-red-700 rounded-md"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Modal;
