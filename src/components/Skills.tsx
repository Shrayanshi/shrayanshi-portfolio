"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Brain, Wrench, Award } from "lucide-react";
import { skills, certifications } from "@/data/portfolio";

const categories = [
  {
    key: "product" as const,
    label: "Product Skills",
    icon: Layers,
    color: "#6366f1",
    desc: "Strategy to execution",
  },
  {
    key: "aiTechnical" as const,
    label: "AI & Technical",
    icon: Brain,
    color: "#a78bfa",
    desc: "Building AI-native products",
  },
  {
    key: "tools" as const,
    label: "Tools & Platforms",
    icon: Wrench,
    color: "#34d399",
    desc: "The full PM toolbox",
  },
];

// Marquee strip for skills
function SkillMarquee({ items, color }: { items: string[]; color: string }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden relative">
      <div className="flex gap-2 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium shrink-0"
            style={{
              background: `${color}12`,
              color: `${color}cc`,
              border: `1px solid ${color}25`,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">Toolkit</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">
            The full stack of PM and technical skills I bring to every product.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="glass rounded-2xl border border-white/[0.06] p-5 sm:p-6 overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: `${cat.color}20`, border: `1px solid ${cat.color}30` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: cat.color }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{cat.label}</h3>
                    <p className="text-xs text-white/30">{cat.desc}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills[cat.key].map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: i * 0.08 + j * 0.03 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="text-xs px-2.5 py-1 rounded-lg cursor-default transition-all"
                      style={{
                        background: `${cat.color}10`,
                        color: `${cat.color}bb`,
                        border: `1px solid ${cat.color}20`,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass rounded-2xl border border-white/[0.06] p-5 sm:p-6"
        >
          <div className="flex items-center gap-2 mb-5">
            <Award className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-bold text-white">Certifications</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert, i) => (
              <motion.span
                key={cert}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.07 }}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20"
              >
                <Award className="w-3 h-3" />
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
