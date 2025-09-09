import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, Building2, X } from "lucide-react";

const CertificatesSection: React.FC = () => {
  const [previewSrc, setPreviewSrc] = React.useState<string | null>(null);

  const certificates = [
    {
      title: "Blockchain Technology",
      institution: "Creative IT Institute",
      period: "Feb 2023 – Sept 2023",
      description:
        "Successfully completed a certified course on Blockchain Technology, focusing on decentralized applications, smart contracts, and blockchain fundamentals.",
      skills: [
        "Blockchain",
        "Smart Contracts",
        "DApps",
        "Decentralized Systems",
        "Ethereum",
        "Solidity",
        "Cryptocurrency",
      ],
      logoSrc: "/logos/creative.png",
      certificateSrc: "/certificates/bc.jpg",
    },
  ];

  return (
    <section
      id="certificates"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <Award className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Certificates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and completed courses that enhance my
            expertise
          </p>
        </div>

        {/* Certificates */}
        <div className="grid gap-8">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:ring-1 hover:ring-accent/30 hover:shadow-[0_12px_36px_rgba(16,185,129,0.22)]"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Institution Logo (56px, rounded edges, no bg) */}
                  <div className="flex-shrink-0">
                    <img
                      src={cert.logoSrc}
                      alt={`${cert.institution} logo`}
                      className="w-[56px] h-[56px] object-contain rounded-md"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {cert.title}
                        </h3>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Building2 className="w-4 h-4 mr-2" />
                          <span className="font-medium">
                            {cert.institution}
                          </span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{cert.period}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-accent/10 text-accent border-accent/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* View Certificate (with Award icon) */}
                    <div className="flex justify-start">
                      <Button
                        variant="outline-accent"
                        size="sm"
                        onClick={() => setPreviewSrc(cert.certificateSrc)}
                      >
                        <Award className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
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
          {previewSrc && (
            <img
              src={previewSrc}
              alt="Certificate"
              className="w-full h-auto rounded-lg object-contain"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
