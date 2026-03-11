/*
 * @Date: 2026-03-09 16:30:19
 * @LastEditors: lifangdi
 * @LastEditTime: 2026-03-09 16:30:26
 */
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface Props {
  src: string;
  className?: string;
}

export default function LookbookParallaxImage({ src, className }: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image src={src} alt="" fill className="object-cover" />
      </motion.div>
    </div>
  );
}
