import React from "react";
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";

// Map company names to logo image paths
const COMPANY_LOGOS: Record<string, string> = {
  "Radiant Data Systems Ltd.": "/logos/radiant.jpg",
};

// Company logo with fallback to Briefcase icon
const CompanyLogo: React.FC<{ company: string; size?: number }> = ({
  company,
  size = 56,
}) => {
  const [error, setError] = React.useState(false);
  const src = COMPANY_LOGOS[company];

  if (!src || error) {
    return (
      <Briefcase
        className="text-accent"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <img
      src={src}
      alt={`${company} logo`}
      style={{ width: size, height: size }} // force 56px
      className="block object-contain shrink-0 rounded-md"
      onError={() => setError(true)}
    />
  );
};

const ExperienceSection: React.FC = () => {
  const companyName = "Radiant Data Systems Ltd.";

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional <span className="text-accent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Turning data into actionable insights and building robust BI
            solutions that drive business decisions.
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-accent/30"></div>

            {/* Experience Item */}
            <div className="relative pb-12">
              {/* Timeline Dot */}
              <div className="absolute left-6 top-16 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 z-10"></div>

              {/* Experience Card */}
              <div className="ml-16">
                <div className="bg-card border border-border rounded-xl p-8 card-elevated hover:glow-accent transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                      <div className="p-3  rounded-xl">
                        {/* Company logo (bigger) */}
                        <CompanyLogo company={companyName} size={56} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          Jr. BI Developer
                        </h3>
                        <p className="text-accent font-semibold text-lg">
                          @ {companyName}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:items-end space-y-2">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">Sept 2025 – Present</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>Dhaka, Bangladesh</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground text-lg mb-3">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Extract, transform, and analyze data from SQL databases to provide actionable business insights",
                        "Assist in developing and maintaining business intelligence dashboards and reports for data-driven decision-making",
                        "Ensure data integrity and consistency across reporting tools and dashboards",
                        "Support senior BI developers and analysts in preparing accurate and insightful reports",
                        "Continuously learn and adapt to new BI tools, technologies, and best practices",
                      ].map((responsibility, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-3">
                      Technologies & Tools:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Tableau",

                        "SQL Server",
                        "Python",
                        "Excel",

                        "Data Visualization",
                        "Business Intelligence",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Goals Section */}
            <div className="relative">
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-3 h-3 bg-accent/50 rounded-full transform -translate-x-1/2 z-10 animate-pulse"></div>

              <div className="ml-16">
                <div className="bg-card/50 border border-dashed border-accent/50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold text-foreground">
                      Career Goals
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Aspiring to advance into a Senior BI Developer role,
                    focusing on machine learning integration in business
                    intelligence and leading data-driven transformation
                    initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-card border border-border rounded-xl card-elevated">
            <div className="text-2xl font-bold text-accent mb-2">60%</div>
            <p className="text-sm text-muted-foreground">
              Reduction in Manual Processing
            </p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl card-elevated">
            <div className="text-2xl font-bold text-accent mb-2">3+</div>
            <p className="text-sm text-muted-foreground">
              Interactive Dashboards Created
            </p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-xl card-elevated">
            <div className="text-2xl font-bold text-accent mb-2">0+</div>
            <p className="text-sm text-muted-foreground">
              ETL Pipelines Implemented
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
