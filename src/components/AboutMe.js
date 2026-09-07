import React from "react";
import Navbar from "./Navbar";
import "../aboutme.scss";
import Footer from "./Footer";

const experience = [
  {
    role: "Amazon Connect Developer",
    company: "Deloitte",
    dates: "Mar 2025 - Present",
    bullets: [
      "Develop and maintain 200+ customer interaction and IVR flows supporting several thousand calls per hour across a 500+ agent contact centre.",
      "Build conversational voice experiences with Amazon Lex and Amazon Bedrock, using DynamoDB for contextual data storage.",
      "Implement and debug AWS Lambda functions in TypeScript; diagnose production incidents with CloudWatch.",
      "Work directly with client stakeholders to translate business requirements into technical solutions.",
      "Mentor two junior developers.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "NOV",
    dates: "Jan 2024 - Mar 2025",
    bullets: [
      "Implemented a payment-processing feature in C#, JavaScript and SQL for financial teams.",
      "Migrated a client-facing application to a new company API using Python and JavaScript.",
      "Refactored SQL stored procedures and optimised VB code for a real estate management application.",
      "Resolved production edge cases in a Python asset-management cron job.",
    ],
  },
  {
    role: "Medical & Legal Translator",
    company: "Self-Employed",
    dates: "Jun 2021 - Apr 2023",
    bullets: [
      "Translated medical documents for British government entities under strict accuracy and confidentiality requirements.",
      "Collaborated with subject-matter experts on technical precision and terminology.",
    ],
  },
];

const skillGroups = [
  { label: "languages", skills: ["TypeScript", "Python", "JavaScript", "C#", "SQL"] },
  { label: "cloud & ai", skills: ["AWS", "Amazon Connect", "Amazon Lex", "Amazon Bedrock", "Lambda", "DynamoDB", "CloudWatch"] },
  { label: "backend", skills: ["Node.js", "Express", ".NET", "REST APIs"] },
  { label: "frontend", skills: ["React", "Bootstrap", "CSS/SCSS"] },
  { label: "databases", skills: ["Microsoft SQL Server", "MongoDB"] },
  { label: "tools", skills: ["Git", "Docker", "GitHub Actions", "Jest", "GitHub Copilot"] },
];

export default function AboutMe() {
  return (
    <div className="about-me">
      <Navbar />
      <div className="page page-wide">
        <section className="section about-intro">
          <div className="about-copy">
            <h1>Nice to meet you</h1>
            <p className="about-desc">
              I'm a software engineer and Amazon Connect developer based in
              Wrocław, Poland. I build production software, cloud-based
              customer systems and backend solutions, translating business
              requirements into production-ready code across the full
              development lifecycle.
            </p>
            <p className="about-desc">
              Before software, I worked as a self-employed medical and legal
              translator - which is where I picked up an eye for precision and
              for working closely with subject-matter experts, both of which
              carry over well into engineering.
            </p>
          </div>
          <div className="profile-panel">
            <img
              src="./images/profile-photo.jpg"
              alt="Krzysztof Zwolak"
              className="profile-photo"
            />
            <div className="profile-fact">
              <span className="mono">based in</span>
              <strong>Wrocław, Poland</strong>
            </div>
            <div className="profile-fact">
              <span className="mono">currently</span>
              <strong>Amazon Connect Developer @ Deloitte</strong>
            </div>
            <div className="profile-fact">
              <span className="mono">languages</span>
              <strong>Polish, English, French, Spanish</strong>
            </div>
          </div>
        </section>

        <section className="section">
          <p className="section-label mono">work experience</p>
          <div className="timeline">
            {experience.map((job) => (
              <div className="timeline-item" key={job.role + job.company}>
                <div className="timeline-heading">
                  <p className="timeline-role">{job.role}</p>
                  <p className="timeline-dates mono">{job.dates}</p>
                </div>
                <p className="timeline-company mono">{job.company}</p>
                <ul className="timeline-bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <p className="section-label mono">skills</p>
          <div className="skills-columns">
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
        </section>

        <section className="section">
          <p className="section-label mono">education</p>
          <div className="timeline-item">
            <div className="timeline-heading">
              <p className="timeline-role">BA (Joint Hons) Chinese and French</p>
              <p className="timeline-dates mono">2017 - 2021</p>
            </div>
            <p className="timeline-company mono">Bangor University, United Kingdom</p>
          </div>
        </section>

        <section className="section">
          <p className="section-label mono">outside of work</p>
          <div className="tag-group">
            {["History", "Photography", "Travel and anthropology", "Cooking", "Skiing", "Football"].map((hobby) => (
              <span className="tag" key={hobby}>
                {hobby}
              </span>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
