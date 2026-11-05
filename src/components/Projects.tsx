"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ExternalLink, Tag, Clock, CheckCircle2, FileText } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/portfolio";

function StatusBadge({ status }: { status: string }) {
  const isLive = status === "Live" || status === "Shipped";
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
        isLive
          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
          : "bg-amber-500/15 text-amber-400 border border-amber-500/20"
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${isLive ? "bg-emerald-400" : "bg-amber-400"} animate-pulse`} />
      {status}
    </span>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">
            Click any project to view the full PRD, case study, and try the product.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Link href={`/projects/${project.slug}`} className="block group h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="h-full glass rounded-2xl border border-white/[0.06] overflow-hidden hover:border-white/10 transition-all duration-300"
                  style={{
                    boxShadow: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${project.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Gradient banner */}
                  <div
                    className={`h-2 w-full bg-gradient-to-r ${project.gradient}`}
                  />

                  <div className="p-5 sm:p-6 flex flex-col h-full">
                    {/* Status + period */}
                    <div className="flex items-center justify-between mb-4">
                      <StatusBadge status={project.status} />
                      <span className="flex items-center gap-1 text-xs text-white/30">
                        <Clock className="w-3 h-3" />
                        {project.period}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-5 flex-1">
                      {project.tagline}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-5">
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="text-center p-2 rounded-xl bg-white/[0.03] border border-white/[0.05]"
                        >
                          <div className="text-base font-black text-white">{m.value}</div>
                          <div className="text-[10px] text-white/30 leading-tight">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] text-white/40 border border-white/[0.06]"
                        >
                          <Tag className="w-2.5 h-2.5" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                      {"documents" in project && project.documents && project.documents.length > 0 ? (
                        <span className="text-xs text-white/60 flex items-center gap-1">
                          <FileText className="w-3 h-3" style={{ color: project.color }} />
                          {project.documents.map((d) => d.title).join(" + ")} (PDF)
                        </span>
                      ) : (
                        <span className="text-xs text-white/40 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          View PRD & Case Study
                        </span>
                      )}
                      <motion.div
                        className="flex items-center gap-1 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300"
                        whileHover={{ x: 4 }}
                      >
                        Open
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}

          {/* "More coming" card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: projects.length * 0.12 }}
            className="glass rounded-2xl border border-dashed border-white/10 flex flex-col items-center justify-center p-8 text-center min-h-[320px]"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <ExternalLink className="w-5 h-5 text-white/20" />
            </div>
            <p className="text-sm font-semibold text-white/30 mb-1">More coming soon</p>
            <p className="text-xs text-white/20">AI PM projects & Duke coursework</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
