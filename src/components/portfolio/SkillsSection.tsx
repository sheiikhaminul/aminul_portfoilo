import React from "react";
import { Database, Code, Monitor, Users, CheckCircle } from "lucide-react";

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Core Technical Skills",
      skills: [
        "SQL",
        "Excel",
        "Tableau",
        "Python",
        "Data Analysis",
        "Data Visualization",
        "Reporting",
      ],
      icon: Database,
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      title: "Programming & Web Technologies",
      skills: [
        "C",
        "C++",
        "Java",
        "HTML",
        "CSS",
        "Tailwind",
        "JavaScript",
        "React",
        "Django",
      ],
      icon: Code,
      color: "bg-green-500/10 text-green-600 dark:text-green-400",
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Visual Studio Code",
        "Git",
        "GitHub",
        "MS Office",
        "Adobe Photoshop",
      ],
      icon: Monitor,
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    },
    {
      title: "Professional & Analytical Skills",
      skills: [
        "Data-driven Decision Making",
        "Problem Solving",
        "Team Collaboration",
        "Attention to Detail",
        "Time Management",
        "Adaptability",
      ],
      icon: Users,
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 scroll-mt-[var(--nav-h)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for turning data into insights and building
            intelligent solutions that drive business value.
          </p>
        </div>

        {/* Skills Grid (centered cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 justify-items-center">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group w-full max-w-xl bg-card border border-border rounded-2xl p-7 card-elevated transform-gpu transition-all duration-300 hover:shadow-[0_12px_36px_rgba(16,185,129,0.22)] hover:ring-1 hover:ring-accent/30"
            >
              {/* Icon and Title (centered) */}
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className={`p-3 rounded-xl ${category.color}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-foreground text-xl">
                  {category.title}
                </h3>
              </div>

              {/* Skills List (centered rows) */}
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center space-x-3 p-3 bg-muted/50 rounded-lg transform-gpu transition-all duration-200 hover:bg-accent/10 hover:scale-105"
                  >
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium text-foreground text-center">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary (centered, no hover effects) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="p-6 bg-card border border-border rounded-xl card-elevated">
            <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">
              25+
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Technical Skills
            </p>
          </div>
          <div className="p-6 bg-card border border-border rounded-xl card-elevated">
            <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">
              4
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Skill Categories
            </p>
          </div>
          <div className="p-6 bg-card border border-border rounded-xl card-elevated">
            <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">
              3+
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Years Experience
            </p>
          </div>
          <div className="p-6 bg-card border border-border rounded-xl card-elevated">
            <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">
              15+
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Projects Completed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
