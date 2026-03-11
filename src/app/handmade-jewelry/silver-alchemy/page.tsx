/*
 * @Date: 2026-03-09 16:26:23
 * @LastEditors: lifangdi
 * @LastEditTime: 2026-03-11 16:44:47
 */
"use client";

import Navbar from "@/components/Navbar";
import LookbookImage from "@/components/LookbookImage";
import LookbookParallaxImage from "@/components/LookbookParallaxImage";
import LookbookVideo from "@/components/LookbookVideo";

export default function CosmicRevelry() {
  return (
    <main className="bg-[#F2EFE9] text-[#2A2624] min-h-screen">
      <Navbar showNavbarLogo={true} />

      <div className="pt-32">
        {/* HERO */}
        <section className="h-[70vh] flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl tracking-[0.3em] mb-6">
              COSMIC REVELRY
            </h1>

            <p className="italic opacity-70">
              Inspired by celestial movement and cosmic rhythm.
            </p>
          </div>
        </section>

        {/* PARALLAX HERO IMAGE */}
        <section className="h-[80vh] md:h-[100vh]">
          <LookbookParallaxImage
            src="/assets/jewelry/cosmic1-1.jpg"
            className="h-full"
          />
        </section>

        {/* TWO IMAGE GRID */}
        <section className="py-20 px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-20">
            <LookbookImage
              src="/assets/jewelry/cosmic3.jpg"
              className="h-[600px]"
            />

            <LookbookImage
              src="/assets/jewelry/cosmic4.jpg"
              className="h-[600px]"
            />
          </div>
        </section>

        {/* VERTICAL IMAGE */}
        {/* <section className="py-40 flex justify-center">
          <LookbookImage
            src="/assets/jewelry/cosmic4.jpg"
            className="w-[380px] h-[700px]"
          />
        </section> */}
        <section className="flex justify-center py-20 px-6 md:px-20">
          <LookbookVideo
            src="/assets/video/cosmic4-1.mp4"
            ratio="vertical"
            className="w-full md:w-auto h-[60vh] md:h-[70vh]"
          />
        </section>

        {/* WIDE IMAGE */}
        <section className="py-20 px-4 md:px-20">
          <LookbookImage
            src="/assets/jewelry/cosmic6-1.jpg"
            className="h-auto md:h-[70vh] aspect-[16/9] md:aspect-auto"
          />
        </section>

        <section className="flex justify-center py-20 px-4 md:px-20">
          <LookbookVideo
            src="/assets/video/cosmic6-2.mp4"
            ratio="vertical"
            className="h-[70vh]"
          />
        </section>
        {/* MIXED GRID */}
        <section className="py-20 px-4 md:px-20">
          <div className="grid md:grid-cols-3 gap-10">
            <LookbookImage
              src="/assets/jewelry/cosmic5.jpg"
              className="h-[420px]"
            />
            <LookbookImage
              src="/assets/jewelry/cosmic5-1.jpg"
              className="h-[420px]"
            />
            <LookbookImage
              src="/assets/jewelry/cosmic5-2.jpg"
              className="h-[420px]"
            />
          </div>
        </section>

        {/* FINAL IMAGE */}
        <section className="h-[80vh] md:h-[100vh]">
          <LookbookParallaxImage
            src="/assets/jewelry/cosmic2-1.jpg"
            className="h-full"
          />
        </section>
      </div>
    </main>
  );
}
