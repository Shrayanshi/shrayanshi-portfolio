"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Building2, Calendar, MapPin, ChevronDown, GraduationCap } from "lucide-react";
import { experiences, education } from "@/data/portfolio";

function ExperienceCard({
  exp,
  index,
  isInView,
}: {
  exp: (typeof experiences)[0];
  index: number;
  isInView: boolean;
}) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative"
    >
      {/* Timeline line */}
      {index < experiences.length - 1 && (
        <div
          className="absolute left-5 top-14 w-0.5 h-full"
          style={{
            background: `linear-gradient(to bottom, ${exp.color}40, transparent)`,
          }}
        />
      )}

      <div
        className="group glass rounded-2xl border border-white/[0.06] overflow-hidden hover:border-white/10 transition-all duration-300"
        style={{ boxShadow: expanded ? `0 0 40px ${exp.color}15` : "none" }}
      >
        {/* Header */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-start gap-4 p-5 sm:p-6 text-left"
        >
          {/* Color dot */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
            style={{ background: `${exp.color}20`, border: `1px solid ${exp.color}30` }}
          >
            <Building2 className="w-4 h-4" style={{ color: exp.color }} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white">{exp.role}</h3>
                <p className="text-sm font-semibold" style={{ color: exp.color }}>
                  {exp.company}
                </p>
              </div>
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0 text-white/30"
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </div>
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="flex items-center gap-1 text-xs text-white/40">
                <Calendar className="w-3 h-3" />
                {exp.period}
              </span>
              <span className="flex items-center gap-1 text-xs text-white/40">
                <MapPin className="w-3 h-3" />
                {exp.location}
              </span>
              <span className="tag text-[11px]">{exp.type}</span>
            </div>
          </div>
        </button>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                <div
                  className="h-px mb-4"
                  style={{ background: `${exp.color}20` }}
                />
                <ul className="space-y-3">
                  {exp.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-start gap-3 text-sm text-white/60 leading-relaxed"
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: exp.color }}
                      />
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">Career</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">
            From engineering to product — building at every layer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-sm font-semibold text-white/40 uppercase tracking-wider mb-5"
            >
              <Building2 className="w-3.5 h-3.5" />
              Experience
            </motion.h3>
            <div className="space-y-4">
              {experiences.map((exp, i) => (
                <ExperienceCard key={exp.company} exp={exp} index={i} isInView={isInView} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-sm font-semibold text-white/40 uppercase tracking-wider mb-5"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Education
            </motion.h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.1 }}
                  className="glass rounded-2xl border border-white/[0.06] p-5 sm:p-6 hover:border-white/10 transition-all"
                  style={{ boxShadow: `0 0 30px ${edu.color}10` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${edu.color}20`, border: `1px solid ${edu.color}30` }}
                    >
                      <GraduationCap className="w-4 h-4" style={{ color: edu.color }} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{edu.school}</h3>
                      <p className="text-sm" style={{ color: edu.color }}>{edu.degree}</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-xs text-white/40">{edu.period}</span>
                        <span className="text-xs text-white/40">·</span>
                        <span className="text-xs text-white/40">{edu.details}</span>
                      </div>
                    </div>
                  </div>

                  {edu.courses.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-white/30 uppercase tracking-wider">
                        Coursework
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.courses.map((c) => (
                          <span
                            key={c}
                            className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 text-white/50 border border-white/[0.06]"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.clubs.length > 0 && (
                    <div className="mt-3 space-y-2">
                      <p className="text-xs font-semibold text-white/30 uppercase tracking-wider">
                        Activities
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.clubs.map((c) => (
                          <span
                            key={c}
                            className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
