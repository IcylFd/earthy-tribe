"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import InfinityLogo from "@/components/InfinityLogo";

const navLinks = [
  { name: "Handmade Jewelry", href: "/handmade-jewelry" },
  // { name: "Organic Products", href: "/organic-products" },
  { name: "Organic Products", href: "/hemp-handmade" },
  { name: "Thrift Store", href: "/thrift-store" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar(props: { showNavbarLogo: boolean | number }) {
  const { showNavbarLogo = true } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-10 z-50 text-white mix-blend-exclusion ">
        {/* Logo */}
        <Link href={"/"}>
          <motion.div
            style={{ opacity: showNavbarLogo ? 1 : 0 }}
            className="flex items-center"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <InfinityLogo size={40} color="#fff" />
            </motion.div>
          </motion.div>
        </Link>
        {/* Desktop menu */}
        <div className="hidden md:flex gap-10 text-xs tracking-[0.3em] uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:opacity-60 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className="w-6 h-[1px] bg-white"></span>
          <span className="w-6 h-[1px] bg-white"></span>
          <span className="w-6 h-[1px] bg-white"></span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#1A1A1A] text-white z-[100] flex flex-col items-center justify-center gap-10"
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-8 right-8 text-3xl"
            >
              ×
            </button>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl tracking-[0.3em] uppercase"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
