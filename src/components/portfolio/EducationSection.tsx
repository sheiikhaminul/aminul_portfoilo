import React from "react";
import { GraduationCap, Calendar, Award, X } from "lucide-react";

// Map institution names to logo image paths in your public folder
const SCHOOL_LOGOS: Record<string, string> = {
  "Ahsanullah University of Science and Technology": "/logos/aust.png",
  "Government Science College": "/logos/gsc.png",
  "Dhaka Residential Model College": "/logos/drmc.png",
};

// School logo (no rounded edges), bigger, with fallback to cap icon
const SchoolIcon: React.FC<{ school: string; size?: number }> = ({
  school,
  size = 56,
}) => {
  const [error, setError] = React.useState(false);
  const src = SCHOOL_LOGOS[school];

  if (!src || error) {
    return (
      <GraduationCap
        className="text-accent"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <img
      src={src}
      alt={`${school} logo`}
      width={size}
      height={size}
      className="object-contain"
      onError={() => setError(true)}
    />
  );
};

const EducationSection: React.FC = () => {
  const [previewSrc, setPreviewSrc] = React.useState<string | null>(null);

  const educationData = [
    {
      degree: "B.Sc in Computer Science and Engineering",
      institution: "Ahsanullah University of Science and Technology",
      gpa: "3.512/4.00",
      period: "Dec 2020 – Jan 2025",
      status: "Completed",
      certificateUrl: "/certificates/aust-degree.jpg",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Government Science College",
      gpa: "5.00/5.00",
      period: "2017 – 2019",
      status: "Completed",
      certificateUrl: "/certificates/hsc-result.jpg",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Dhaka Residential Model College",
      gpa: "5.00/5.00",
      period: "2015 – 2017",
      status: "Completed",
      certificateUrl: "/certificates/ssc-result.jpg",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Every great career begins with an even{" "}
            <span className="text-accent">better education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in computer science and engineering,
            consistently achieving academic excellence throughout my educational
            journey.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:-translate-x-px"></div>

          <div className="space-y-12">
            {educationData.map((education, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:items-start`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent rounded-full transform md:-translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-card border border-border rounded-xl p-6 card-elevated hover:glow-accent transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <SchoolIcon school={education.institution} size={56} />
                        <div>
                          <h3 className="font-semibold text-foreground text-lg">
                            {education.degree}
                          </h3>
                          <p className="text-accent font-medium">
                            {education.institution}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{education.period}</span>
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            education.status === "Completed"
                              ? "bg-accent/10 text-accent"
                              : "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                          }`}
                        >
                          {education.status}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          GPA:
                        </span>
                        <span className="font-semibold text-accent text-lg">
                          {education.gpa}
                        </span>
                      </div>

                      {/* View Certificate button -> opens modal */}
                      {education.certificateUrl && (
                        <div className="pt-4 flex justify-center">
                          <button
                            type="button"
                            onClick={() =>
                              setPreviewSrc(education.certificateUrl)
                            }
                            className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-white transition-colors"
                            aria-label={`View ${education.institution} certificate`}
                          >
                            <Award className="w-4 h-4" />
                            View Certificate
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-xl p-8 card-elevated max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Academic Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">
                  Consistent
                </div>
                <p className="text-sm text-muted-foreground">
                  Academic Excellence
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">
                  Perfect
                </div>
                <p className="text-sm text-muted-foreground">
                  HSC & SSC Results
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">
                  Strong
                </div>
                <p className="text-sm text-muted-foreground">
                  Technical Foundation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Preview (same style as Certificates) */}
      <div
        className={`fixed inset-0 z-50 ${
          previewSrc ? "flex" : "hidden"
        } items-center justify-center bg-black/60 p-4`}
        onClick={() => setPreviewSrc(null)}
        role="dialog"
        aria-modal="true"
        aria-label="Certificate preview"
      >
        <div
          className="relative bg-card rounded-xl border border-border shadow-2xl max-w-3xl w-full p-3"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
            onClick={() => setPreviewSrc(null)}
            aria-label="Close"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>

          {previewSrc &&
            (previewSrc.toLowerCase().endsWith(".pdf") ? (
              <iframe
                src={previewSrc}
                title="Certificate PDF"
                className="w-full h-[70vh] rounded-lg"
              />
            ) : (
              <img
                src={previewSrc}
                alt="Certificate"
                className="w-full h-auto rounded-lg object-contain"
                loading="lazy"
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
