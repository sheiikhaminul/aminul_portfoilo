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
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const openResume = async () => {
    const href = RESUME_URL;

    // If running inside an iframe/sandbox, navigate same tab (avoids popup blocking)
    try {
      const isInIframe = window.top !== window.self;
      if (isInIframe) {
        window.location.href = href;
        return;
      }
    } catch {
      window.location.href = href;
      return;
    }

    // Try to fetch and force-download
    try {
      const res = await fetch(href);
      if (!res.ok) {
        // If not found or blocked, just open it in a new tab
        window.open(href, "_blank", "noopener,noreferrer");
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

  return (
    <section
      id="home"
      className="min-h-screen hero-gradient flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-[var(--nav-h)] lg:pt-0 scroll-mt-[var(--nav-h)]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Profile Card (floating + visible in dark) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start mt-4 sm:mt-6 lg:mt-0">
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
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
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
                  {/* Tech cards: scale + glow; no green bg on hover */}
                  <Button
                    variant="outline"
                    className="h-24 w-full rounded-xl flex flex-col items-center justify-center gap-1.5 transform-gpu transition-all duration-200 hover:scale-105 hover:bg-transparent hover:shadow-[0_8px_24px_rgba(16,185,129,0.18)] hover:ring-2 hover:ring-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
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
                    className="h-24 w-full rounded-xl flex flex-col items-center justify-center gap-1.5 transform-gpu transition-all duration-200 hover:scale-105 hover:bg-transparent hover:shadow-[0_8px_24px_rgba(16,185,129,0.18)] hover:ring-2 hover:ring-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
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
                    className="h-24 w-full rounded-xl flex flex-col items-center justify-center gap-1.5 transform-gpu transition-all duration-200 hover:scale-105 hover:bg-transparent hover:shadow-[0_8px_24px_rgba(16,185,129,0.18)] hover:ring-2 hover:ring-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
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
                    className="h-24 w-full rounded-xl flex flex-col items-center justify-center gap-1.5 transform-gpu transition-all duration-200 hover:scale-105 hover:bg-transparent hover:shadow-[0_8px_24px_rgba(16,185,129,0.18)] hover:ring-2 hover:ring-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
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

                {/* Tools & Skills button: no color change; subtle glow on hover */}
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

          {/* Main Content (shifted slightly right) */}
          <div className="lg:col-span-8 text-center lg:text-left space-y-8 stagger-animation lg:pl-8 xl:pl-12">
            {/* Highlighted Heading Box with green glow + Unfold More inside */}
            <div className="relative rounded-2xl border border-accent/20 bg-accent/5 backdrop-blur-sm p-5 shadow-lg shadow-accent/20">
              {/* Say hi from badge */}
              <span className="inline-block text-xs sm:text-sm tracking-wide text-accent bg-accent/10 rounded-full px-3 py-1 ring-1 ring-accent/30 drop-shadow-[0_0_10px_rgba(16,185,129,0.35)]">
                Hi from,
              </span>

              <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground">
                Sheikh Aminul Islam
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-accent mt-1">
                Business Intelligence Developer • Data Analyst
              </p>

              {/* Unfold More inside */}
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

            {/* Action Buttons (above Stats) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" onClick={openResume}>
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

            {/* Stats (now 3 items in one row on md+) */}
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
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute top-20 left-10 w-24 h-24 bg-accent/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default HeroSection;
