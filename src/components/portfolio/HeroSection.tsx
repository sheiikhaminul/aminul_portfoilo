import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Mail,
  FileText,
  Linkedin,
  Github,
  GraduationCap,
  IdCard,
  Phone,
  X,
  Download as DownloadIcon,
  ExternalLink,
} from "lucide-react";
import portraitImage from "@/assets/sheikh-aminul-potrait2.jpg";

// Local Tech Stack icons
import SqlIcon from "@/assets/icons/sql.png";
import ExcelIcon from "@/assets/icons/excel.png";
import TableauIcon from "@/assets/icons/tableau.png";
import PythonIcon from "@/assets/icons/python.png";

// Put your PDF in public/ and use the root path here (case-sensitive)
const RESUME_URL = "/Sheikh_Aminul_Islam-resume.pdf";

const HeroSection: React.FC = () => {
  const [resumeOpen, setResumeOpen] = React.useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Open inline viewer
  const openResumeViewer = () => setResumeOpen(true);
  const closeResumeViewer = () => setResumeOpen(false);

  // Open in new tab (browser’s PDF viewer shows download button too)
  const openResumeInNewTab = () => {
    window.open(RESUME_URL, "_blank", "noopener,noreferrer");
  };

  // Force download
  const downloadResume = async () => {
    const href = RESUME_URL;

    try {
      const res = await fetch(href);
      if (!res.ok) {
        // Fallback: open in same tab if blocked
        window.open(href, "_self");
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Sheikh_Aminul_Islam-resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch {
      // Final fallback
      window.open(href, "_self");
    }
  };

  // Lock body scroll when modal is open + close on ESC
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeResumeViewer();
    };
    if (resumeOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [resumeOpen]);

  return (
    <section
      id="home"
      className="
        relative min-h-screen hero-gradient
        flex items-start lg:items-center justify-center
        px-4 sm:px-6 lg:px-8
        pt-[calc(var(--nav-h)+1rem)]
        sm:pt-[calc(var(--nav-h)+2rem)]
        lg:pt-[calc(var(--nav-h)+2.5rem)]
        pb-12
        scroll-mt-[calc(var(--nav-h)+0.5rem)]
      "
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-center">
          {/* Profile Card (subbox) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start mt-8 sm:mt-10 lg:mt-6 xl:mt-8">
            <div className="bg-card/20 backdrop-blur-md rounded-3xl p-8 border border-border/40 dark:border-white/10 max-w-sm w-full ring-1 ring-accent/20 shadow-xl shadow-black/10 dark:shadow-black/40 hover:shadow-2xl hover:shadow-accent/25 transform-gpu transition-all duration-300">
              {/* Name and Designation at top */}
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-lg font-bold text-foreground">Aminul</h2>
                <p className="text-sm text-accent text-right">
                  BI Developer & <br /> Data Analyst
                </p>
              </div>

              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <img
                    src={portraitImage}
                    alt="Sheikh Aminul Islam"
                    className="w-32 h-32 rounded-2xl object-cover ring-4 ring-accent/20"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse" />
                </div>
              </div>

              {/* Contact Info */}
              <div className="text-center space-y-1.5">
                <p className="text-sm text-muted-foreground">
                  sheiikhaminul@gmail.com
                </p>
                <p className="text-sm text-muted-foreground">
                  Dhaka, Bangladesh
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-8 space-y-4 mb-6">
                <h2 className="text-xl font-semibold text-foreground text-center">
                  Tech Stack
                </h2>

                <div className="grid grid-cols-2 gap-3">
                  {/* Tech cards */}
                  <Button
                    variant="outline"
                    className="h-24 w-full rounded-xl flex flex-col items-center justify-center gap-1.5 transform-gpu transition-all duration-200 hover:scale-105 hover:bg-transparent hover:shadow-[0_8px_24px_rgba(16,185,129,0.18)] hover:ring-2 hover:ring-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 text-foreground hover:text-foreground"
                  >
                    <img
                      src={SqlIcon}
                      alt="SQL"
                      className="w-8 h-8 object-contain pointer-events-none select-none"
                      loading="lazy"
                      draggable={false}
                    />
                    <span className="text-xs sm:text-sm">SQL</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-24 w-full rounded-xl flex flex-col items-center justify-center gap-1.5 transform-gpu transition-all duration-200 hover:scale-105 hover:bg-transparent hover:shadow-[0_8px_24px_rgba(16,185,129,0.18)] hover:ring-2 hover:ring-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 text-foreground hover:text-foreground"
                  >
                    <img
                      src={ExcelIcon}
                      alt="Excel"
                      className="w-8 h-8 object-contain pointer-events-none select-none"
                      loading="lazy"
                      draggable={false}
                    />
                    <span className="text-xs sm:text-sm">Excel</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-24 w-full rounded-xl flex flex-col items-center justify-center gap-1.5 transform-gpu transition-all duration-200 hover:scale-105 hover:bg-transparent hover:shadow-[0_8px_24px_rgba(16,185,129,0.18)] hover:ring-2 hover:ring-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 text-foreground hover:text-foreground"
                  >
                    <img
                      src={TableauIcon}
                      alt="Tableau"
                      className="w-8 h-8 object-contain pointer-events-none select-none"
                      loading="lazy"
                      draggable={false}
                    />
                    <span className="text-xs sm:text-sm">Tableau</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-24 w-full rounded-xl flex flex-col items-center justify-center gap-1.5 transform-gpu transition-all duration-200 hover:scale-105 hover:bg-transparent hover:shadow-[0_8px_24px_rgba(16,185,129,0.18)] hover:ring-2 hover:ring-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 text-foreground hover:text-foreground"
                  >
                    <img
                      src={PythonIcon}
                      alt="Python"
                      className="w-8 h-8 object-contain pointer-events-none select-none"
                      loading="lazy"
                      draggable={false}
                    />
                    <span className="text-xs sm:text-sm">Python</span>
                  </Button>
                </div>

                {/* Tools & Skills */}
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full text-base py-3 mt-5 bg-[hsl(163_94%_28%)] text-white transition-all hover:bg-[hsl(163_94%_28%)] hover:brightness-110 hover:shadow-[0_0_22px_rgba(16,185,129,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                  onClick={() => scrollToSection("#skills")}
                >
                  Tools & Skills
                </Button>

                {/* Social Icons + Phone */}
                <div className="flex justify-center space-x-3 pt-2">
                  <a
                    href="https://linkedin.com/in/sheiikhaminul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/sheiikhaminul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=DGbN93oAAAAJ&hl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label="Google Scholar"
                  >
                    <GraduationCap className="w-4 h-4" />
                  </a>
                  <a
                    href="https://orcid.org/0009-0006-9801-4030"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label="ORCID"
                    title="ORCID"
                  >
                    <IdCard className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => scrollToSection("#contact")}
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label="Phone"
                    title="Contact"
                  >
                    <Phone className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 text-center lg:text-left space-y-8 stagger-animation lg:pl-8 xl:pl-12">
            {/* Highlighted Heading Box */}
            <div className="relative rounded-2xl border border-accent/20 bg-accent/5 backdrop-blur-sm p-5 shadow-lg shadow-accent/20">
              <span className="inline-block text-xs sm:text-sm tracking-wide text-accent bg-accent/10 rounded-full px-3 py-1 ring-1 ring-accent/30 drop-shadow-[0_0_10px_rgba(16,185,129,0.35)]">
                Hi from,
              </span>

              <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground">
                Sheikh Aminul Islam
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-accent mt-1">
                Business Intelligence Developer • Data Analyst
              </p>

              {/* Unfold More */}
              <div
                className="mt-6 w-fit mx-auto flex flex-col items-center space-y-2 text-muted-foreground cursor-pointer group"
                onClick={() => scrollToSection("#experience")}
              >
                <div className="text-sm uppercase tracking-wider group-hover:text-accent transition-colors duration-300">
                  Unfold More
                </div>
                <div className="flex flex-col items-center group-hover:translate-y-2 transition-transform duration-300">
                  <ArrowDown className="w-6 h-6 text-accent animate-bounce" />
                  <ArrowDown
                    className="w-4 h-4 text-accent/60 animate-bounce -mt-2"
                    style={{ animationDelay: "0.2s" }}
                  />
                </div>
              </div>
            </div>

            {/* Blurb */}
            <div>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Passionate BI Developer & Data Analyst with expertise in Excel,
                SQL, Tableau, and Python, dedicated to transforming data into
                actionable insights, with hands-on experience in IoT and Machine
                Learning.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" onClick={openResumeViewer}>
                <FileText className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button
                variant="outline-accent"
                size="lg"
                onClick={() => scrollToSection("#contact")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                  2+
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  MONTHS OF BI
                  <br />
                  EXPERIENCE
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                  3+
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  YEARS OF TECH
                  <br />
                  EXPERIENCE
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                  15+
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  PROJECTS COMPLETED ON
                  <br />
                  DIFFERENT DOMAINS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Background Elements */}
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-20 left-10 w-24 h-24 bg-accent/5 rounded-full blur-2xl" />

      {/* Resume Viewer Modal */}
      {resumeOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeResumeViewer}
          role="dialog"
          aria-modal="true"
          aria-label="Resume viewer"
        >
          <div
            className="w-full max-w-5xl h-[85vh] bg-card rounded-2xl shadow-2xl border border-border/50 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-background/60 backdrop-blur">
              <div className="font-semibold">Resume — Sheikh Aminul Islam</div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={openResumeInNewTab}>
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Open in new tab
                </Button>
                <Button variant="hero" size="sm" onClick={downloadResume}>
                  <DownloadIcon className="w-4 h-4 mr-1" />
                  Download
                </Button>
                <Button variant="ghost" size="icon" onClick={closeResumeViewer} aria-label="Close">
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Viewer */}
            <div className="flex-1 bg-muted/20">
              <iframe
                src={`${RESUME_URL}#toolbar=1&zoom=page-width`}
                title="Resume PDF"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
