import React from "react";
import {
  BookOpen,
  ExternalLink,
  Award,
  Users,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PublicationsSection: React.FC = () => {
  const publications = [
    {
      title: "Smart Helmet with IoT Integration",
      journal: "IEEE Xplore, ICCIT 2024",
      role: "First Author & Project Lead",
      description:
        "Led IoT-based smart helmet system development with real-time hazard detection and emergency alerts.",
      highlights: [
        "Real-time hazard monitoring",
        "Emergency alert system integration",
        "IoT sensor data analytics",
        "Safety protocol automation",
      ],
      tags: [
        "IoT",
        "Safety Systems",
        "Real-time Analytics",
        "Emergency Response",
      ],
      link: "https://ieeexplore.ieee.org/document/11022456",
      status: "Published",
    },
    {
      title: "Automated Glaucoma Detection and Classification",
      journal: "Applied Information System and Management (AISM) Journal",
      role: "First Author & Research Lead",
      description:
        "Directed AI-driven glaucoma detection pipeline using YOLOv8 and CNN on large-scale fundus image datasets.",
      highlights: [
        "YOLOv8 object detection implementation",
        "CNN-based classification system",
        "Large-scale medical image processing",
        "Automated diagnosis pipeline",
      ],
      tags: [
        "Machine Learning",
        "Computer Vision",
        "Healthcare AI",
        "YOLOv8",
        "CNN",
      ],
      link: "https://journal.uinjkt.ac.id/index.php/aism",
      status: "Accepted",
    },
  ];

  return (
    <section
      id="publications"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Research <span className="text-accent">Publications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contributing to the scientific community through innovative research
            in IoT, Machine Learning, and Healthcare Technology.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 card-elevated hover:glow-accent transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <BookOpen className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${
                        publication.status === "Published"
                          ? "bg-accent/10 text-accent"
                          : "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                      }`}
                    >
                      {publication.status}
                    </span>
                  </div>
                </div>

                {/* Corner icon -> opens link, no green bg on hover, just glow */}
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-muted-foreground hover:text-accent hover:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-[color,filter] duration-200"
                >
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open "${publication.title}"`}
                    className="hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.55)]"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>

              {/* Title and Journal */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                  {publication.title}
                </h3>
                <p className="text-accent font-semibold">
                  {publication.journal}
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <Award className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {publication.role}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {publication.description}
              </p>

              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                  Key Contributions
                </h4>
                <ul className="space-y-2">
                  {publication.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {publication.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-accent/10 text-accent rounded-md text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Research Impact */}
        <div className="bg-card border border-border rounded-xl p-8 card-elevated">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Research Impact
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              My research focuses on practical applications of emerging
              technologies to solve real-world problems, particularly in safety
              systems and healthcare diagnostics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-xl mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-accent mb-1">2</div>
              <p className="text-sm text-muted-foreground">Published Papers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-xl mx-auto mb-3">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-accent mb-1">1st</div>
              <p className="text-sm text-muted-foreground">Author Position</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-xl mx-auto mb-3">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-accent mb-1">IEEE</div>
              <p className="text-sm text-muted-foreground">Conference</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-xl mx-auto mb-3">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-accent mb-1">AISM</div>
              <p className="text-sm text-muted-foreground">Journal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
