import ProgressBar from "./ProgressBar";



const SkillCard = ({ category, skills }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h3 className="text-lg font-bold mb-4">{category}</h3>
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span>{skill.name}</span>
              <span>{skill.progress}%</span>
            </div>
            <ProgressBar progress={skill.progress} />
          </div>
        ))}
      </div>
    );
  };


  export default SkillCard;