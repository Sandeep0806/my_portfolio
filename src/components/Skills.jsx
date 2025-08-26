import React, { useState } from "react";

const skillsList = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    category: "Frameworks & Tools",
    skills: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    category: "Concepts",
    skills: [
      { name: "Operating Systems", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Compilers", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Computer Networking", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ],
  },
];

export default function Skills() {
  const [selectedSkills, setSelectedSkills] = useState(new Set());

  const toggleSkill = (name) => {
    setSelectedSkills((prev) => {
      const updated = new Set(prev);
      updated.has(name) ? updated.delete(name) : updated.add(name);
      return updated;
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-cyan-500 mb-10 text-center 
                       border-b-4 border-cyan-400 pb-2 w-fit mx-auto">
          My Skills
        </h2>

        {/* Category & Skills */}
        {skillsList.map(({ category, skills }) => (
          <div key={category} className="mb-14">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-400 mb-8 text-center md:text-left">
              {category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
              {skills.map(({ name, logo }) => {
                const isSelected = selectedSkills.has(name);
                return (
                  <button
                    key={name}
                    onClick={() => toggleSkill(name)}
                    className={`
                      flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-3
                      rounded-lg shadow-md transition-all duration-300 focus:outline-none
                      ${
                        isSelected
                          ? "bg-cyan-600 text-white scale-105"
                          : "bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-300 hover:bg-cyan-200 dark:hover:bg-cyan-700"
                      }
                    `}
                    aria-pressed={isSelected}
                  >
                    <img
                      src={logo}
                      alt={`${name} logo`}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                      loading="lazy"
                    />
                    <span className="font-medium text-sm sm:text-base md:text-lg select-none">
                      {name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
