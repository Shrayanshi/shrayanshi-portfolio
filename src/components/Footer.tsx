"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs text-white/25 flex items-center gap-1.5"
          >
            Built with <Heart className="w-3 h-3 text-indigo-400" /> by Shrayanshi Tomar
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs text-white/25 flex items-center gap-1.5"
          >
            <Sparkles className="w-3 h-3 text-indigo-400" />
            Powered by Next.js, Framer Motion, custom AI companion & lots of ☕
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
