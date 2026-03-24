import React from "react";
import { skills } from "@/data/site";
import { Code2, Server, Database, Cloud } from "lucide-react";

const ICON_MAP = {
  frontend: <Code2 className="text-blue-400 mb-4" size={32} />,
  backend: <Server className="text-purple-400 mb-4" size={32} />,
  database: <Database className="text-pink-400 mb-4" size={32} />,
  devops: <Cloud className="text-cyan-400 mb-4" size={32} />
};

const TITLE_MAP = {
  frontend: "Frontend Development",
  backend: "Backend Services",
  database: "Database & ORM",
  devops: "DevOps & Tools"
};

const BentoSkills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {(Object.keys(skills) as Array<keyof typeof skills>).map((category, index) => {
        const spanClass = index === 0 ? "md:col-span-2 lg:col-span-2" : index === 3 ? "md:col-span-2 lg:col-span-4 xl:col-span-1" : "";
        return (
          <div 
            key={category} 
            className={`group relative overflow-hidden rounded-3xl bg-slate-900/60 border border-slate-800/60 p-6 backdrop-blur-sm transition-all hover:bg-slate-800/80 hover:border-slate-600 shadow-xl ${spanClass}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 flex flex-col h-full">
              {ICON_MAP[category]}
              <h4 className="text-xl font-bold text-slate-200 mb-4 capitalize">
                {TITLE_MAP[category]}
              </h4>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {skills[category].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-sm rounded-full bg-slate-950/50 border border-slate-700/50 text-slate-300 shadow-inner"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BentoSkills;
