"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Send, MessageSquare, MapPin, GraduationCap } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const channels = [
    {
      icon: Mail,
      label: "Email me",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "#6366f1",
      action: "Copy",
      onClick: copyEmail,
    },
    {
      icon: Linkedin,
      label: "Connect on LinkedIn",
      value: "linkedin.com/in/shrayanshi-tomar",
      href: personalInfo.linkedin,
      color: "#0ea5e9",
      action: "Open",
    },
    {
      icon: MessageSquare,
      label: "Schedule a chat",
      value: "30-min intro call",
      href: `mailto:${personalInfo.email}?subject=Let's Chat — PM Opportunity`,
      color: "#10b981",
      action: "Book",
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-indigo-600/8 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="tag mb-4 inline-block">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Let&apos;s <span className="gradient-text">build together</span>
          </h2>
          <p className="text-white/40 text-base max-w-lg mx-auto leading-relaxed">
            I&apos;m actively looking for PM, AI PM, and TPM internships at big tech for Summer/Fall 2026. If you&apos;re working on something exciting — let&apos;s talk.
          </p>
        </motion.div>

        {/* Context cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 mb-8"
        >
          <div className="glass rounded-2xl border border-white/[0.06] p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Duke MEM · Starting Aug 2026</p>
              <p className="text-xs text-white/40">Master of Engineering Management</p>
            </div>
          </div>
          <div className="glass rounded-2xl border border-white/[0.06] p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Durham, NC (from Aug 2026)</p>
              <p className="text-xs text-white/40">Open to remote & relocation</p>
            </div>
          </div>
        </motion.div>

        {/* Contact channels */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <motion.div
                key={channel.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  onClick={channel.onClick}
                  className="block glass rounded-2xl border border-white/[0.06] p-5 hover:border-white/10 transition-all group"
                  style={{ boxShadow: "none" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 40px ${channel.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${channel.color}20`, border: `1px solid ${channel.color}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: channel.color }} />
                  </div>
                  <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">
                    {channel.label}
                  </p>
                  <p className="text-sm text-white/70 font-medium truncate mb-3">{channel.value}</p>
                  <span
                    className="inline-flex items-center gap-1 text-xs font-semibold"
                    style={{ color: channel.color }}
                  >
                    {channel.label === "Email me" && copied ? "Copied!" : channel.action}
                    <Send className="w-3 h-3" />
                  </span>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bold closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65 }}
          className="text-center glass rounded-2xl border border-white/[0.06] p-8"
        >
          <p className="text-xl sm:text-2xl font-black text-white mb-2">
            Ready to ship products that matter?
          </p>
          <p className="text-white/40 text-sm">
            I bring the rare combination of engineering depth and PM thinking. Let&apos;s build.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
