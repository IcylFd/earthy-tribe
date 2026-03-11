/*
 * @Date: 2026-03-09 16:30:04
 * @LastEditors: lifangdi
 * @LastEditTime: 2026-03-10 22:06:31
 */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  src: string;
  className?: string;
}

export default function LookbookImage({ src, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-xl ${className}`}
    >
      <Image src={src} alt="" fill className="object-contain md:object-cover" />
    </motion.div>
  );
}
