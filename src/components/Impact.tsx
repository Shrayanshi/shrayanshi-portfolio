"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Users, Map, Zap, TrendingUp, Shield } from "lucide-react";
import { stats } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  briefcase: Briefcase,
  users: Users,
  map: Map,
  zap: Zap,
  "trending-up": TrendingUp,
  shield: Shield,
};

const tagline = "From code to customers — here's the impact.";

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">Impact</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Numbers that <span className="gradient-text">matter</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">{tagline}</p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative group glass rounded-2xl p-6 border border-white/[0.06] overflow-hidden card-hover"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50 font-medium">{stat.label}</div>
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-indigo-500/5 blur-xl" />
              </motion.div>
            );
          })}
        </div>

        {/* Achievement bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 glass rounded-2xl border border-white/[0.06] p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x divide-white/[0.06]">
            {[
              { label: "Companies", value: "4", sub: "Duke Health · SpiceJet · Rapipay · Edpi" },
              { label: "Education", value: "Duke MEM", sub: "Class of 2028" },
              { label: "Certifications", value: "5+", sub: "AWS · Azure · AI PM" },
            ].map((item) => (
              <div key={item.label} className="text-center sm:px-6">
                <div className="text-2xl font-black text-white mb-1">{item.value}</div>
                <div className="text-xs font-semibold text-white/60 mb-0.5 uppercase tracking-wider">
                  {item.label}
                </div>
                <div className="text-xs text-white/30">{item.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
