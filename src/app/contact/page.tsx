/*
 * @Date: 2026-03-11 17:04:34
 * @LastEditors: lifangdi
 * @LastEditTime: 2026-03-16 20:00:34
 */
"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";

export default function Contact() {
  return (
    <main className="relative min-h-screen bg-[#0f0f0f] text-white overflow-hidden">
      <Navbar showNavbarLogo={true} />

      {/* Floating particles background */}
      <FloatingParticles />

      <div className="relative pt-32">
        {/* HERO IMAGE */}
        <section className="px-6 md:px-20">
          <div className="relative h-[40vh] md:h-[50vh] overflow-hidden rounded-xl">
            <Image
              src="/assets/contact/contact.JPG"
              fill
              alt="Contact"
              className="object-cover brightness-75"
            />
          </div>
        </section>

        {/* CONTACT CONTENT */}
        <section className="py-24 flex flex-col items-center text-center px-6">
          <h1 className="text-2xl md:text-3xl tracking-[0.3em] mb-16">
            Contact with us
          </h1>

          <div className="space-y-8 text-lg tracking-[0.2em]">
            {/* Xiaohongshu */}
            <Link
              href="https://xhslink.com/m/25XltZLHlXK"
              target="_blank"
              className="block hover:opacity-60 transition"
            >
              小红书 · Red Note
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/earthytribeofficial?igsh=MWRsYXR3eGd3azJ4bg%3D%3D&utm_source=qr"
              target="_blank"
              className="block hover:opacity-60 transition"
            >
              Instagram
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
