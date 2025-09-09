import React from "react";
import { Github, Award, Users, Calendar, Target, User } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import your project images
import HelmetImg from "@/assets/projects/helmet.jpg";
import ThesisImg from "@/assets/projects/thesis.jpg";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Smart Helmet with IoT Integration",
      category: "IoT & Safety Systems",
      description:
        "An IoT-enabled smart helmet for industrial safety with real-time hazard detection, environmental monitoring, and sub‑second emergency alerts, integrating hardware sensors with a robust software pipeline.",
      achievements: [
        "Implemented real-time sensor data processing with 91.9% accuracy",
        "Developed emergency alert system with sub-second response time",
        "Integrated hardware and software for comprehensive accident prevention",
        "Published research findings in IEEE ICCIT 2024",
      ],
      technologies: [
        "IoT",
        "ESP32",
        "Sensors",
        "Real-time hazard detection",
        "Smart Systems",
        "Safety features",
      ],
      metrics: {
        duration: "6 months",
        team: "3 members",
        supervisors: 2,
        status: "Published & Deployed",
      },
      image: { src: HelmetImg, alt: "Smart Helmet project preview" },
      links: {
        github: "https://github.com/sheiikhaminul/Smart-Helmet_IoT",
      },
    },
    {
      title: "Undergraduate Thesis",
      category: "Healthcare AI & Computer Vision",
      description:
        "An AI-driven diagnosis system for automated glaucoma detection using YOLOv8 for localization and CNNs for classification on large-scale fundus images, with a streamlined inference pipeline.",
      achievements: [
        "Achieved 92% detection accuracy with YOLOv8 and 87% classification accuracy using CNN",
        "Processed large-scale medical image datasets (17,000+ images)",
        "Developed automated diagnosis pipeline reducing manual review time",
      ],
      technologies: [
        "YOLOv8",
        "CNN",
        "Computer Vision",
        "Python",
        "Medical AI",
        "Deep Learning",
      ],
      metrics: {
        duration: "11 months",
        team: "2 members",
        supervisors: 1,
        status: "Published & Research Complete",
      },
      image: { src: ThesisImg, alt: "Glaucoma detection thesis preview" },
      links: {
        github: "https://github.com/sheiikhaminul/Glaucoma_Detection",
      },
    },
  ];

  const additionalProjects = [
    {
      title: "Reading Room — 3D Web Visualization",
      description:
        "Interactive 3D reading room built with Three.js and WebGL, featuring custom textures, PBR‑style lighting, and model‑based navigation with smooth camera controls.",
      tech: ["Three.js", "WebGL", "JavaScript", "HTML", "Textures", "Lighting"],
      github: "https://github.com/sheiikhaminul/ReadingRoom_Three.js",
    },
    {
      title: "InfinityDent — Dental Website",
      description:
        "Responsive dental clinic website using Bootstrap and PHP with a MySQL backend: service pages, doctor profiles, and a patient appointment scheduling system with validation.",
      tech: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
      github: "https://github.com/sheiikhaminul/infinityDent_DentalWebsite-PHP",
    },
    {
      title: "FrostWolf — Web Browser",
      description:
        "Lightweight JavaFX browser with tabbed UI, URL bar autocomplete, and MySQL-backed bookmarks and history management.",
      tech: ["JavaFX", "Java", "MySQL"],
      github: "https://github.com/sheiikhaminul/FrostWolf_WebBrowser_JavaFX",
    },
    {
      title: "Sketch — Factory Management System",
      description:
        "Java-based timber/wood factory management system with Microsoft SQL Server for inventory, orders, sales, and basic reporting workflows.",
      tech: ["Java", "Microsoft SQL Server", "Inventory", "Orders", "Sales"],
      github:
        "https://github.com/sheiikhaminul/A_Wood_Timber_Furniture_ManagementSystem-SKETCH",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions that combine cutting-edge technology
            with practical applications to solve real-world challenges.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project Image/Visual */}
              <div
                className={`lg:col-span-5 ${
                  index % 2 === 1 ? "lg:col-start-8" : ""
                }`}
              >
                {project.image?.src ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group block"
                    aria-label={`Open ${project.title} on GitHub`}
                  >
                    <div className="aspect-video overflow-hidden rounded-xl border border-border">
                      <img
                        src={project.image.src}
                        alt={project.image.alt || project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        draggable={false}
                      />
                      {/* Overlay gradient + CTA */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button variant="hero" size="sm">
                          <Github className="w-4 h-4 mr-2" />
                          View on GitHub
                        </Button>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div
                    className="relative group cursor-pointer"
                    onClick={() => window.open(project.links.github, "_blank")}
                  >
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl border border-border flex items-center justify-center overflow-hidden">
                      <div className="text-center p-8">
                        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Target className="w-8 h-8 text-accent" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {project.category}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Click to view
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="hero" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div
                className={`lg:col-span-7 ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                        {project.category}
                      </span>

                      {/* Only GitHub icon with circular green light on hover */}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          title="GitHub repository"
                          className="group relative inline-flex w-8 h-8 items-center justify-center rounded-full text-muted-foreground hover:text-accent transition-all duration-200 hover:scale-110 hover:ring-2 hover:ring-accent/40 ring-offset-2 ring-offset-background"
                        >
                          <span className="pointer-events-none absolute inset-0 rounded-full bg-accent/25 opacity-0 blur-md transition-opacity duration-200 group-hover:opacity-100"></span>
                          <Github className="w-4 h-4 transition-transform duration-200" />
                        </a>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-accent" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Metrics with Supervisors */}
                  <div className="grid grid-cols-4 gap-4 p-4 bg-card border border-border rounded-lg">
                    <div className="text-center">
                      <Calendar className="w-4 h-4 text-accent mx-auto mb-1" />
                      <div className="text-sm font-medium text-foreground">
                        {project.metrics.duration}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Duration
                      </div>
                    </div>
                    <div className="text-center">
                      <Users className="w-4 h-4 text-accent mx-auto mb-1" />
                      <div className="text-sm font-medium text-foreground">
                        {project.metrics.team}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Team Size
                      </div>
                    </div>
                    <div className="text-center">
                      <User className="w-4 h-4 text-accent mx-auto mb-1" />
                      <div className="text-sm font-medium text-foreground">
                        {project.metrics.supervisors}{" "}
                        {project.metrics.supervisors === 1
                          ? "Supervisor"
                          : "Supervisors"}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Supervision
                      </div>
                    </div>
                    <div className="text-center">
                      <Target className="w-4 h-4 text-accent mx-auto mb-1" />
                      <div className="text-sm font-medium text-foreground">
                        {project.metrics.status}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Status
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-md text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Additional Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {additionalProjects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-xl p-6 card-elevated transform-gpu transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_36px_rgba(16,185,129,0.22)] hover:ring-1 hover:ring-accent/30"
              >
                <h4 className="font-semibold text-foreground mb-3">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom-right GitHub icon with circular green light on hover */}
                <div className="absolute bottom-4 right-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="View on GitHub"
                    className="group/icon relative inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:text-accent transition-all duration-200 hover:scale-110 hover:ring-2 hover:ring-accent/40 ring-offset-2 ring-offset-background"
                  >
                    <span className="pointer-events-none absolute inset-0 rounded-full bg-accent/25 opacity-0 blur-md transition-opacity duration-200 group/icon-hover:opacity-100"></span>
                    <Github className="w-5 h-5 transition-transform duration-200 group-hover/icon:scale-110" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Button */}
          <div className="text-center">
            <Button
              variant="hero"
              size="lg"
              onClick={() =>
                window.open("https://github.com/sheiikhaminul", "_blank")
              }
            >
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>

        {/* Project Stats (Best Accuracy removed) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-card border border-border rounded-xl card-elevated">
            <div className="text-2xl font-bold text-accent mb-2">15+</div>
            <p className="text-sm text-muted-foreground">Total Projects</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-xl card-elevated">
            <div className="text-2xl font-bold text-accent mb-2">2</div>
            <p className="text-sm text-muted-foreground">Published Research</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-xl card-elevated">
            <div className="text-2xl font-bold text-accent mb-2">60%</div>
            <p className="text-sm text-muted-foreground">Efficiency Gain</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
