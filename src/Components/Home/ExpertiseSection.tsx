import { MdCastForEducation } from "react-icons/md";

type Skill = {
  name: string;
  value: number;
};

export default function ExpertiseSection() {
  const leftSkills: Skill[] = [
    { name: "English", value: 80 },
    { name: "Khmer", value: 100 },
    { name: "Chinese", value: 80 },
    // { name: "Spanish", value: 80 },
  ];

  const rightSkills: Skill[] = [
    { name: "Web Development", value: 80 },
    { name: "UI/UX Design", value: 90 },
    { name: "Project Management", value: 80 },
    { name: "Communication", value: 80 },
  ];

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-[22px] font-bold text-black">{skill.name}</h3>

        <span className="text-[20px] text-gray-400">{skill.value}%</span>
      </div>

      <div className="h-5 w-full rounded-full bg-white">
        <div
          className="h-5 rounded-full bg-[#ff4b00]"
          style={{ width: `${skill.value}%` }}
        />
      </div>
    </div>
  );

  return (
    <section className="border-t-2 border-[#ff4b00] bg-[#f4ecee] px-6 py-24 md:px-16">
      <div className="mx-auto max-w-345">
        <p className="mb-5 text-[36px] font-medium text-[#ff4b00]">
          Why Choose Me
        </p>

        <h2 className="mb-20 flex items-center gap-4 text-[48px] font-extrabold leading-tight text-[#333333] md:text-[56px]">
          <MdCastForEducation className="shrink-0 text-[60px] text-[#ff4b00]" />
          My Expertise Area
        </h2>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">
          <div className="space-y-5">
            {leftSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>

          <div className="space-y-5">
            {rightSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
