"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  title: string;
  desc: string;
  images: string[];
}

export default function CollectionCarousel({ title, desc, images }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Title */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl tracking-[0.3em] mb-4">{title}</h2>

        <p className="max-w-xl mx-auto italic opacity-70">{desc}</p>
      </div>

      {/* Carousel */}
      <motion.div
        className="cursor-grab overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex gap-6"
          drag="x"
          dragConstraints={{ left: -1200, right: 0 }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative min-w-[280px] md:min-w-[420px] h-[360px] md:h-[500px] overflow-hidden rounded-xl"
            >
              <Image src={img} alt="" fill className="object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
