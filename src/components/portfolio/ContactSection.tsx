import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  X,
  CalendarClock,
} from "lucide-react";

/* Small, simple Schedule a Call modal */
type ScheduleModalProps = {
  open: boolean;
  onClose: () => void;
  email: string; // your email
  phone: string; // your phone (tel:)
};

const ScheduleCallModal: React.FC<ScheduleModalProps> = ({
  open,
  onClose,
  email,
  phone,
}) => {
  const [userPhone, setUserPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const mailto = (subject: string, body: string) =>
    `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

  const handleShareNumber = () => {
    if (!userPhone.trim()) return;
    const body = `Hi Aminul,

I'd like to schedule a quick call.

My number: ${userPhone}

Thanks!`;
    window.location.href = mailto("Call request (phone share)", body);
    onClose();
  };

  const handleSchedule = () => {
    if (!userPhone.trim() || !date || !time) return;
    const body = `Hi Aminul,

I'd like to schedule a call.

My number: ${userPhone}
Preferred time: ${date} ${time}

Thanks!`;
    window.location.href = mailto("Call request (schedule)", body);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${
        open ? "flex" : "hidden"
      } items-center justify-center bg-black/60 p-4`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Schedule a call"
    >
      <div
        className="relative bg-card rounded-xl border border-border shadow-2xl w-full max-w-md p-5 ring-1 ring-border hover:ring-accent/30 transition-shadow"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="text-lg font-semibold text-foreground mb-1">
          Schedule a Call
        </h3>
        <p className="text-sm text-muted-foreground mb-5">
          Pick a quick option — no complex setup.
        </p>

        {/* A) Call now */}
        <div className="mb-4">
          <Button
            variant="hero"
            className="w-full hover:brightness-110 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]"
          >
            <a
              href={`tel:${phone}`}
              aria-label="Call now"
              className="inline-flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call now
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            Opens your phone dialer and calls me directly.
          </p>
        </div>

        {/* B) Share number */}
        <div className="mb-4">
          <label className="text-sm font-medium text-foreground">
            Your phone number
          </label>
          <input
            type="tel"
            placeholder="+8801XXXXXXXXX"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/40 focus:shadow-[0_0_0_6px_rgba(16,185,129,0.08)] transition-shadow"
          />
          <div className="mt-3">
            <Button
              className="w-full hover:shadow-[0_0_14px_rgba(16,185,129,0.25)]"
              onClick={handleShareNumber}
              disabled={!userPhone.trim()}
            >
              <Send className="w-4 h-4 mr-2" />
              Send number via email
            </Button>
          </div>
        </div>

        {/* C) Schedule for later */}
        <div>
          <label className="text-sm font-medium text-foreground">
            Pick a time (optional)
          </label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/40 focus:shadow-[0_0_0_6px_rgba(16,185,129,0.08)] transition-shadow"
            />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/40 focus:shadow-[0_0_0_6px_rgba(16,185,129,0.08)] transition-shadow"
            />
          </div>
          <div className="mt-3">
            <Button
              variant="outline-accent"
              className="w-full hover:ring-2 hover:ring-accent/40 hover:shadow-[0_0_18px_rgba(16,185,129,0.25)]"
              onClick={handleSchedule}
              disabled={!userPhone.trim() || !date || !time}
            >
              <CalendarClock className="w-4 h-4 mr-2" />
              Send schedule request
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Sends me an email with your number and preferred time. I’ll confirm
            ASAP.
          </p>
        </div>
      </div>
    </div>
  );
};

const ContactSection: React.FC = () => {
  const [openSchedule, setOpenSchedule] = useState(false);

  const MY_EMAIL = "sheiikhaminul@gmail.com";
  const MY_PHONE = "+8801849652311"; // normalized for tel:

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: MY_EMAIL,
      link: `mailto:${MY_EMAIL}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1849652311",
      link: `tel:${MY_PHONE}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "sheiikhaminul",
      link: "https://linkedin.com/in/sheiikhaminul",
    },
    {
      icon: Github,
      label: "GitHub",
      username: "sheiikhaminul",
      link: "https://github.com/sheiikhaminul",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's Work <span className="text-accent">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to turn your data into actionable insights? Let's discuss how
            I can help drive your business forward with innovative BI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact Details */}
            <div className="bg-card border border-border rounded-xl p-8 card-elevated hover:ring-1 hover:ring-accent/30 hover:shadow-[0_12px_36px_rgba(16,185,129,0.22)] transition-all">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group flex items-center space-x-4 p-2 rounded-lg hover:bg-accent/5 transition-colors"
                  >
                    <div className="p-3 bg-accent/10 rounded-xl ring-0 group-hover:ring-2 ring-accent/30 transition-all">
                      <info.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      <a
                        href={info.link}
                        className="font-medium text-foreground hover:text-accent transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card border border-border rounded-xl p-8 card-elevated hover:ring-1 hover:ring-accent/30 hover:shadow-[0_12px_36px_rgba(16,185,129,0.22)] transition-all">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Professional Profiles
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-4 p-3 rounded-lg hover:bg-accent/5 transition-colors"
                  >
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:ring-2 ring-accent/30 transition-all">
                      <social.icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {social.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {social.username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div
              id="contact-form"
              className="bg-card border border-border rounded-xl p-8 card-elevated hover:ring-1 hover:ring-accent/30 hover:shadow-[0_12px_36px_rgba(16,185,129,0.22)] transition-all"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full focus:ring-2 focus:ring-accent/40 focus:shadow-[0_0_0_6px_rgba(16,185,129,0.08)] transition-shadow"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full focus:ring-2 focus:ring-accent/40 focus:shadow-[0_0_0_6px_rgba(16,185,129,0.08)] transition-shadow"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or how I can help you..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full resize-none focus:ring-2 focus:ring-accent/40 focus:shadow-[0_0_0_6px_rgba(16,185,129,0.08)] transition-shadow"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full hover:brightness-110 hover:shadow-[0_0_22px_rgba(16,185,129,0.35)]"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="text-center">
                  <p className="text-muted-foreground text-sm">
                    I typically respond within 24 hours. For urgent matters,
                    feel free to reach me directly via phone or LinkedIn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-card border border-border rounded-xl p-8 card-elevated hover:ring-1 hover:ring-accent/30 hover:shadow-[0_12px_36px_rgba(16,185,129,0.22)] transition-all">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you need business intelligence solutions, data analytics
            expertise, or IoT integration, I'm here to help turn your ideas into
            reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Start a Project -> mailto */}
            <Button
              variant="hero"
              size="lg"
              asChild
              className="hover:brightness-110 hover:shadow-[0_0_22px_rgba(16,185,129,0.35)]"
            >
              <a
                href={`mailto:${MY_EMAIL}?subject=${encodeURIComponent(
                  "Project Inquiry"
                )}&body=${encodeURIComponent(
                  "Hi Aminul,\n\nI’d like to discuss a project about ...\n\nThanks!"
                )}`}
              >
                <Mail className="w-4 h-4 mr-2" />
                Start a Project
              </a>
            </Button>

            {/* Schedule a Call -> modal */}
            <Button
              variant="outline-accent"
              size="lg"
              onClick={() => setOpenSchedule(true)}
              className="hover:ring-2 hover:ring-accent/40 hover:shadow-[0_0_18px_rgba(16,185,129,0.25)]"
            >
              <Phone className="w-4 h-4 mr-2" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>

      {/* Schedule a Call Modal */}
      <ScheduleCallModal
        open={openSchedule}
        onClose={() => setOpenSchedule(false)}
        email={MY_EMAIL}
        phone={MY_PHONE}
      />
    </section>
  );
};

export default ContactSection;
