"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Globe } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      // Reset success banner after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-primary to-navy-deep overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-gold/5 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-secondary/20 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] text-gold font-poppins uppercase font-semibold">
            INQUIRIES
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Connect & Collaborate
          </h2>
          <div className="h-[2px] w-24 bg-gold mt-4" />
          <p className="font-poppins text-sm sm:text-base text-gray-300 max-w-2xl mt-6 leading-relaxed">
            Get in touch for corporate governance consultation, leadership workshops, security audits, 
            speaking invitations, or civil services academic mentoring.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 flex">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-gold/15 space-y-8 flex-1 flex flex-col justify-center">
              <div>
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-2">
                  Official Directory
                </h3>
                <p className="font-poppins text-xs text-gray-400 leading-relaxed">
                  Reach out via our official communication channels or visit the academic mentorship office.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded-xl border border-gold/25 flex items-center justify-center shrink-0 text-gold mt-1">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-poppins text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold">
                      General Inquiries
                    </h4>
                    <a
                      href="mailto:contact@yespanchi.com"
                      className="font-poppins text-xs sm:text-sm text-white hover:text-gold transition-colors break-all mt-1 block"
                    >
                      contact@yespanchi.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/10 rounded-xl border border-gold/25 flex items-center justify-center shrink-0 text-gold mt-1">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-poppins text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold">
                      Mentorship Secretariat
                    </h4>
                    <p className="font-poppins text-xs sm:text-sm text-gray-300 leading-relaxed mt-1">
                      Officers IAS Academy, No. 18/5, Jayalakshmi Puram 1st Street, Nungambakkam, 
                      Chennai, Tamil Nadu 600034
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-gold/15 h-full flex flex-col justify-between">
              <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-6">
                Consultation Request
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label className="font-poppins text-[10px] text-gray-400 uppercase tracking-wider mb-2 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-secondary/40 border border-gold/15 focus:border-gold focus:outline-none font-poppins text-sm text-white placeholder-gray-500 transition-colors"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <span className="font-poppins text-[10px] text-red-500 mt-1">{errors.name}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="font-poppins text-[10px] text-gray-400 uppercase tracking-wider mb-2 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-secondary/40 border border-gold/15 focus:border-gold focus:outline-none font-poppins text-sm text-white placeholder-gray-500 transition-colors"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <span className="font-poppins text-[10px] text-red-500 mt-1">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="flex flex-col">
                    <label className="font-poppins text-[10px] text-gray-400 uppercase tracking-wider mb-2 font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-secondary/40 border border-gold/15 focus:border-gold focus:outline-none font-poppins text-sm text-white placeholder-gray-500 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && (
                      <span className="font-poppins text-[10px] text-red-500 mt-1">{errors.phone}</span>
                    )}
                  </div>

                  {/* Company */}
                  <div className="flex flex-col">
                    <label className="font-poppins text-[10px] text-gray-400 uppercase tracking-wider mb-2 font-medium">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl bg-secondary/40 border border-gold/15 focus:border-gold focus:outline-none font-poppins text-sm text-white placeholder-gray-500 transition-colors"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label className="font-poppins text-[10px] text-gray-400 uppercase tracking-wider mb-2 font-medium">
                    Brief Inquiry Message *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl bg-secondary/40 border border-gold/15 focus:border-gold focus:outline-none font-poppins text-sm text-white placeholder-gray-500 transition-colors resize-none"
                    placeholder="Describe your invitation or strategic consultation requirements..."
                  />
                  {errors.message && (
                    <span className="font-poppins text-[10px] text-red-500 mt-1">{errors.message}</span>
                  )}
                </div>

                {/* Submit button */}
                <div className="relative pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gold hover:bg-gold-hover text-primary font-poppins font-bold text-xs uppercase tracking-widest transition-colors shadow-lg shadow-gold/15 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Status Message */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3"
                  >
                    <CheckCircle className="text-emerald-500 shrink-0" size={20} />
                    <span className="font-poppins text-xs text-emerald-200">
                      Thank you! Your inquiry has been sent successfully. We will connect with you shortly.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
