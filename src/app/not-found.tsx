"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import InfinityLogo from "@/components/InfinityLogo";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F2EFE9] text-[#2A2624] flex items-center justify-center px-6">
      <div className="text-center space-y-10">
        {/* Logo breathing animation */}
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex justify-center"
        >
          <InfinityLogo size={70} color="#2A2624" />
        </motion.div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-4xl tracking-[0.35em]">Coming Soon</h1>

          <p className="italic opacity-70">敬请期待</p>
        </div>

        {/* Back home */}
        <Link
          href="/"
          className="text-xs tracking-[0.35em] opacity-60 hover:opacity-100 transition"
        >
          BACK HOME
        </Link>
      </div>
    </main>
  );
}
