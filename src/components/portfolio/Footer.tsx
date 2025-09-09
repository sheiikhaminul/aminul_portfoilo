import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sheiikhaminul",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sheiikhaminul",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:sheiikhaminul@gmail.com",
    },
  ];
  const quickLinks = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Education",
      href: "#education",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Certificates",
      href: "#certificates",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors duration-300 group"
                >
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Phone:</span>
                  <br />
                  +880 1849652311
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Email:</span>
                  <br />
                  sheiikhaminul@gmail.com
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Address:</span>
                  <br />
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="text-center">
            <div className="text-sm text-muted-foreground">
              <span>
                © {currentYear} Sheikh Aminul Islam. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
