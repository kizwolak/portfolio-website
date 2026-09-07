import React from "react";

const skillGroups = [
  {
    label: "languages",
    skills: ["TypeScript", "Python", "JavaScript", "C#", "SQL"],
  },
  {
    label: "cloud & ai",
    skills: ["AWS", "Amazon Connect", "Amazon Lex", "Amazon Bedrock", "Lambda", "DynamoDB", "CloudWatch"],
  },
  {
    label: "backend & tools",
    skills: ["Node.js", "Express", ".NET", "REST APIs", "Docker", "Git", "GitHub Actions"],
  },
];

export default function HomeSkills() {
  return (
    <div className="home-skills">
      {skillGroups.map((group) => (
        <div className="skill-group" key={group.label}>
          <p className="skill-group-label mono">{group.label}</p>
          <div className="tag-group">
            {group.skills.map((skill) => (
              <span className="tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
