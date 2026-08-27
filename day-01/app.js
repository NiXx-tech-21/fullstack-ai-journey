const developer = {
  name: "Nikhil Rana",
  role: "Frontend Developer",
  experience: 2,
  skills: {
    frontend: ["React", "TypeScript", "JavaScript"],
    backend: ["Node.js"],
    database: ["PostgreSQL"],
  },
};

const getProfile = () => {
  return developer;
};

const getSkills = () => {
  return developer.skills;
};

const getExperience = () => {
  return developer.experience;
};

const updatedDeveloper = {
  ...developer,
  role: "Full-Stack Developer",
};

const getSkillsByCategory = (category) => {
  const skillCategory = developer.skills[category];
  if (!skillCategory) {
    return [];
  }

  return skillCategory;
};

console.log(getProfile());
console.log(getSkills());
console.log(getExperience());
console.log(updatedDeveloper);
console.log(getSkillsByCategory("frontend"));
console.log(getSkillsByCategory("backend"));
