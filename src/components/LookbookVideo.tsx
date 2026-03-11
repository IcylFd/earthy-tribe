"use client";

import { motion } from "framer-motion";

interface Props {
  youtubeId?: string;
  src?: string;
  ratio?: "vertical" | "horizontal";
  className?: string;
}

export default function LookbookVideo({
  youtubeId,
  src,
  ratio = "horizontal",
  className = "",
}: Props) {
  const ratioClass = ratio === "vertical" ? "aspect-[9/16]" : "aspect-video";

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.9 }}
      className={`relative overflow-hidden rounded-xl ${ratioClass} ${className}`}
    >
      {/* YouTube */}
      {youtubeId && (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
          allowFullScreen
        />
      )}

      {/* Local video */}
      {src && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      )}
    </motion.div>
  );
}
