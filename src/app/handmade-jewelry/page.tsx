"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Cosmic Revelry",
    image: "/assets/jewelry/cosmic1.JPG",
    href: "/handmade-jewelry/cosmic-revelry",
  },
  {
    title: "Hima Zen",
    image: "/assets/jewelry/hima1.JPG",
    href: "/handmade-jewelry/hima-zen",
  },
  {
    title: "Horn Spiral",
    image: "/assets/jewelry/horn1.JPG",
    href: "/handmade-jewelry/horn-spiral",
  },
  {
    title: "Unbound Craft",
    image: "/assets/jewelry/gem1.JPG",
    href: "/handmade-jewelry/unbound-craft",
  },
];

export default function HandmadeJewelry() {
  return (
    <main className="bg-[#F2EFE9] text-[#2A2624] px-6 md:px-20 py-24 min-h-screen">
      <Navbar showNavbarLogo={true}></Navbar>
      {/* Title */}
      <div className="mb-16">
        <h1 className="text-2xl tracking-[0.3em] mb-4">ALL COLLECTIONS</h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-10">
        {collections.map((c) => (
          <Link key={c.title} href={c.href}>
            <div className="group cursor-pointer">
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="text-center mt-4 tracking-[0.2em] text-sm">
                {c.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
