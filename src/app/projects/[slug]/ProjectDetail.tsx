"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft, Clock, Tag, Target, Users, Lightbulb,
  CheckCircle2, Layers, TrendingUp, ExternalLink, Wrench
} from "lucide-react";
import { projects } from "@/data/portfolio";

type Project = (typeof projects)[0];

export default function ProjectDetail({ project }: { project: Project }) {
  const { prd } = project;

  return (
    <div className="min-h-screen bg-[hsl(240,10%,3.9%)] text-white">
      {/* Background */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 800px 500px at 50% -100px, ${project.color}20, transparent)`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          {/* Gradient strip */}
          <div
            className={`h-1 w-24 rounded-full bg-gradient-to-r ${project.gradient} mb-6`}
          />

          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
                {project.title}
              </h1>
              <p className="text-lg text-white/50">{project.tagline}</p>
            </div>
            <span
              className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: `${project.color}20`,
                color: project.color,
                border: `1px solid ${project.color}30`,
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: project.color }} />
              {project.status}
            </span>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-1.5 text-sm text-white/40">
              <Clock className="w-4 h-4" />
              {project.period}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/50 border border-white/[0.08]">
                  <Tag className="w-2.5 h-2.5" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-3 gap-3 sm:gap-4 mb-10"
        >
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="glass rounded-2xl border border-white/[0.06] p-4 text-center"
              style={{ boxShadow: `0 0 30px ${project.color}10` }}
            >
              <div className="text-2xl sm:text-3xl font-black" style={{ color: project.color }}>
                {m.value}
              </div>
              <div className="text-xs text-white/40 mt-1">{m.label}</div>
            </div>
          ))}
        </motion.div>

        {/* PRD Sections */}
        <div className="space-y-6">
          {/* Problem */}
          <PRDSection
            icon={<Target className="w-4 h-4" />}
            title="Problem Statement"
            color={project.color}
            delay={0.2}
          >
            <p className="text-white/70 leading-relaxed">{prd.problem}</p>
          </PRDSection>

          {/* User Personas */}
          <PRDSection
            icon={<Users className="w-4 h-4" />}
            title="User Personas & Pain Points"
            color={project.color}
            delay={0.25}
          >
            <div className="space-y-3">
              {prd.users.map((u) => (
                <div
                  key={u.persona}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${project.color}20` }}
                  >
                    <Users className="w-3.5 h-3.5" style={{ color: project.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{u.persona}</p>
                    <p className="text-sm text-white/50 mt-0.5">{u.pain}</p>
                  </div>
                </div>
              ))}
            </div>
          </PRDSection>

          {/* Solution */}
          <PRDSection
            icon={<Lightbulb className="w-4 h-4" />}
            title="Solution"
            color={project.color}
            delay={0.3}
          >
            <p className="text-white/70 leading-relaxed">{prd.solution}</p>
          </PRDSection>

          {/* Goals */}
          <PRDSection
            icon={<TrendingUp className="w-4 h-4" />}
            title="Goals & Success Metrics"
            color={project.color}
            delay={0.35}
          >
            <ul className="space-y-2">
              {prd.goals.map((g, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 shrink-0"
                    style={{ color: project.color }}
                  />
                  <span className="text-sm text-white/70">{g}</span>
                </li>
              ))}
            </ul>
          </PRDSection>

          {/* Features */}
          <PRDSection
            icon={<Layers className="w-4 h-4" />}
            title="Feature Set"
            color={project.color}
            delay={0.4}
          >
            <div className="space-y-3">
              {prd.features.map((f, i) => (
                <motion.div
                  key={f.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ background: project.color }}
                  />
                  <div>
                    <span className="text-sm font-semibold text-white">{f.name}: </span>
                    <span className="text-sm text-white/60">{f.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </PRDSection>

          {/* Tools */}
          <PRDSection
            icon={<Wrench className="w-4 h-4" />}
            title="Tools & Stack"
            color={project.color}
            delay={0.45}
          >
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-sm px-3 py-1.5 rounded-lg font-medium"
                  style={{
                    background: `${project.color}15`,
                    color: `${project.color}cc`,
                    border: `1px solid ${project.color}25`,
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </PRDSection>

          {/* Outcomes */}
          <PRDSection
            icon={<CheckCircle2 className="w-4 h-4" />}
            title="Outcomes & Results"
            color={project.color}
            delay={0.5}
          >
            <p className="text-white/70 leading-relaxed">{prd.outcomes}</p>
          </PRDSection>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 glass rounded-2xl border border-white/[0.06] p-6 sm:p-8 text-center"
        >
          <p className="text-lg font-bold text-white mb-2">Want to discuss this project?</p>
          <p className="text-sm text-white/40 mb-5">
            I&apos;d love to walk you through the decisions, trade-offs, and what I&apos;d do differently.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:shrayanshi.tomar@gmail.com?subject=Let's discuss your project"
              className="px-6 py-2.5 rounded-xl font-semibold text-sm text-white transition-all hover:scale-105 hover:shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${project.color}, ${project.color}88)`,
                boxShadow: `0 0 20px ${project.color}30`,
              }}
            >
              Get in touch
            </a>
            <Link
              href="/#projects"
              className="px-6 py-2.5 rounded-xl font-semibold text-sm text-white/70 glass border border-white/10 hover:text-white hover:border-white/20 transition-all"
            >
              View all projects
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function PRDSection({
  icon,
  title,
  color,
  delay,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  color: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="glass rounded-2xl border border-white/[0.06] p-5 sm:p-6 overflow-hidden"
    >
      <div className="flex items-center gap-2 mb-4">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ background: `${color}20`, color }}
        >
          {icon}
        </div>
        <h2 className="text-sm font-bold text-white uppercase tracking-wider">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}
