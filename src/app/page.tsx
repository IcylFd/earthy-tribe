"use client";

import { useEffect } from "react";
import Image from "next/image";
import Lenis from "lenis";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import InfinityLogo from "@/components/InfinityLogo";

// --- Text Reveal ---
const Reveal = ({ children, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-100px" }}
    transition={{
      duration: 1.2,
      delay,
      ease: [0.215, 0.61, 0.355, 1],
    }}
  >
    {children}
  </motion.div>
);

// --- Character Reveal ---
const TextReveal = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default function Home() {
  // --- LENIS SMOOTH SCROLL ---
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // --- SCROLL ---
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress);

  const heroTextY = useTransform(scrollYProgress, [0, 0.3], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const showNavbarLogo = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const hideHeroLogo = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  return (
    <main className="bg-[#F2EFE9] text-[#2A2624] overflow-x-hidden font-serif">
      {/* SCROLL PROGRESS */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#C66B3D] origin-left z-[100]"
        style={{ scaleX: progress }}
      />
      <Navbar showNavbarLogo={showNavbarLogo} />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: bgScale }} className="absolute inset-0">
          <Image
            src="/assets/bg1.jpg"
            fill
            alt=""
            className="object-cover"
            priority
          />
        </motion.div>

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />

        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-10 text-white text-center px-6 space-y-12"
        >
          {/* HERO LOGO */}

          <motion.div
            style={{ opacity: hideHeroLogo }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4 }}
            className="flex flex-col items-center space-y-6"
          >
            <InfinityLogo size={90} color="#fff" />

            <div className="tracking-[0.6em] text-sm md:text-base">
              EARTHY TRIBE
            </div>
          </motion.div>
          <h1 className="text-2xl md:text-7xl tracking-[0.3em] leading-tight">
            <TextReveal text="我们是大地孕育的精灵" />
          </h1>

          <Reveal delay={0.4}>
            <p className="tracking-[0.6em] uppercase text-xs opacity-80">
              We are Earth-born spirits
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-3 border border-white text-xs tracking-[0.4em]"
            >
              Explore
            </motion.button>
          </Reveal>
        </motion.div>
      </section>

      {/* DEFINITION */}
      <section className="py-32 px-6 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 space-y-10">
            <Reveal>
              <h2 className="text-4xl text-[#C66B3D] tracking-widest">
                Earthy
              </h2>

              <p className="text-xl italic leading-loose opacity-90">
                Raw, grounded.
                <br />A return to nature and simple living.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="text-4xl text-[#C66B3D] tracking-widest">Tribe</h2>

              <p className="text-xl italic leading-loose opacity-90">
                A reminder that we belong
                <br />
                to one global family.
              </p>
            </Reveal>
          </div>

          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="md:col-span-7 relative h-[400px] md:h-[600px] overflow-hidden shadow-2xl"
          >
            <Image src="/assets/bg6.jpg" alt="" fill className="object-cover" />
          </motion.div>
        </div>
      </section>
      {/* STORY */}
      <section className="relative py-52 px-6 bg-[#2A2624] text-[#D9D2C5]">
        <Image
          src="/assets/bg3.jpg"
          fill
          alt=""
          className="object-cover opacity-40"
        />

        <div className="relative max-w-4xl mx-auto text-center space-y-20">
          <Reveal>
            <h2 className="text-5xl tracking-[0.2em]">Our Story</h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xl leading-[2.8]">
              Born from journeys with indigenous cultures,
              <br />
              these pieces carry identity, belief and protection.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="italic text-2xl">“These are living memories.”</p>
          </Reveal>
        </div>
      </section>

      {/* GEMSTONE */}
      <section className="relative h-[120vh] flex items-center justify-center px-6">
        <Image
          src="/assets/bg5.jpg"
          fill
          alt=""
          className="object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/90" />

        <div className="relative z-10 max-w-3xl text-center space-y-16">
          <Reveal>
            <h2 className="text-4xl tracking-[0.3em] text-[#C66B3D]">
              Earth’s Memory Crystals
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xl leading-[2.4] italic opacity-90">
              Our gemstones are more than beauty —<br />
              they are Earth's memory crystals.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="text-xl leading-[2.4] italic opacity-90">
              Each carries grounding energy,
              <br />
              supporting your journey through life.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FINAL */}
      <section className="relative h-[120vh] flex items-center justify-center text-center px-6 bg-[#1A1A1A] text-[#D9D2C5]">
        <Image
          src="/assets/bg4.jpg"
          fill
          alt=""
          className="object-cover opacity-50"
        />

        <div className="relative max-w-2xl space-y-10">
          <Reveal>
            <h3 className="text-2xl tracking-[0.5em]">终会回归宇宙星辰</h3>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="italic opacity-80">
              To loam we return,
              <br />
              To starlight ascend.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-xs uppercase tracking-[0.5em] opacity-40">
        © 2024 Earthy Tribe
      </footer>
    </main>
  );
}
