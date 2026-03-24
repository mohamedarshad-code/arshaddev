import React from "react";
import "./SkillsBar.css";

const MOCK_PERCENTAGES: Record<string, number> = {
  HTML: 90,
  CSS: 85,
  JavaScript: 80,
  TypeScript: 75,
  React: 85,
  "Next.js": 80,
  "Tailwind CSS": 90,
  "Node.js": 70,
  Express: 70,
  MongoDB: 65,
  Supabase: 60,
  Git: 80,
  GitHub: 85,
  Vercel: 80,
  Netlify: 80,
  Figma: 75,
};

const SkillsBar = ({ skills }: { skills: string[] }) => {
  return (
    <div className="skills-container">
      {skills.map((skill, index) => {
        const percent = MOCK_PERCENTAGES[skill] || Math.floor(Math.random() * (90 - 50 + 1) + 50);
        return (
          <div className="skill-box" key={skill}>
            <span className="skill-title">{skill}</span>
            <div className="skill-bar">
              <span
                className="skill-per"
                style={{
                  width: `${percent}%`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <span className="skill-tooltip">{percent}%</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsBar;
