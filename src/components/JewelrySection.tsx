"use client";

import Carousel from "./Carousel";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
  id: string;
  title: string;
  desc: string;
  images: string[];
}

export default function JewelrySection({ id, title, desc, images }: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={ref}
      id={id}
      className="min-h-screen flex flex-col justify-center px-6"
    >
      {/* title */}
      <motion.div style={{ y }} className="text-center mb-16">
        <h2 className="text-4xl tracking-[0.3em] mb-4">{title}</h2>

        <p className="max-w-xl mx-auto italic opacity-70">{desc}</p>
      </motion.div>

      <Carousel images={images} />
    </section>
  );
}
