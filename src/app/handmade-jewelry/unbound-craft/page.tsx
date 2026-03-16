/*
 * @Date: 2026-03-09 16:26:23
 * @LastEditors: lifangdi
 * @LastEditTime: 2026-03-16 19:51:52
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
              Unbound Craft
            </h1>

            <p className="italic opacity-70">
              Crafted in 925 sterling silver and combined with gemstones from
              the earth
              <br />
              Celebrates the freedom of creation.
              <br />
              Allowing material, intuition, and imagination to move freely.
              <br />
              <br />
              Handmade with love.
            </p>
          </div>
        </section>

        {/* PARALLAX HERO IMAGE */}
        <section className="h-[80vh] md:h-[100vh]">
          <LookbookParallaxImage
            src="/assets/jewelry/silver/1.JPG"
            className="h-full"
          />
        </section>

        <section className="flex justify-center py-20 px-6 md:px-20">
          <LookbookVideo
            src="/assets/video/silver6-2.MP4"
            ratio="vertical"
            className="w-full md:w-auto h-[60vh] md:h-[70vh]"
          />
        </section>

        {/* TWO IMAGE GRID */}
        <section className="py-20 px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-20">
            <LookbookImage
              src="/assets/jewelry/silver/2.JPG"
              className="h-[600px]"
            />

            <LookbookImage
              src="/assets/jewelry/silver/2-1.JPG"
              className="h-[600px]"
            />
          </div>
        </section>

        {/* VERTICAL IMAGE */}
        <section className="py-40 flex justify-center">
          <LookbookImage
            src="/assets/jewelry/silver/3.JPG"
            className="w-[380px] h-[700px]"
          />
        </section>

        {/* WIDE IMAGE */}
        <section className="py-20 px-4 md:px-20">
          <LookbookImage
            src="/assets/jewelry/silver/4.JPG"
            className="h-auto md:h-[70vh] aspect-[16/9] md:aspect-auto"
          />
        </section>

        <section className="flex justify-center py-20 px-4 md:px-20">
          <LookbookVideo
            src="/assets/video/silver-manta.MP4"
            ratio="vertical"
            className="h-[70vh]"
          />
        </section>
        {/* MIXED GRID */}
        <section className="py-20 px-4 md:px-20">
          <div className="grid md:grid-cols-3 gap-10">
            <LookbookImage
              src="/assets/jewelry/silver/5.JPG"
              className="h-[420px]"
            />
            <LookbookImage
              src="/assets/jewelry/silver/5-1.JPG"
              className="h-[420px]"
            />
            <LookbookImage
              src="/assets/jewelry/silver/5-2.JPG"
              className="h-[420px]"
            />
          </div>
        </section>

        <section className="py-40 flex justify-center">
          <LookbookImage
            src="/assets/jewelry/silver/9.JPG"
            className="w-[380px] h-[700px]"
          />
        </section>

        {/* FINAL IMAGE */}
        <section className="h-[80vh] md:h-[100vh]">
          <LookbookParallaxImage
            src="/assets/jewelry/silver/6.JPG"
            className="h-full"
          />
        </section>

        {/* TWO IMAGE GRID */}
        <section className="py-20 px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-20">
            <LookbookImage
              src="/assets/jewelry/silver/7.JPG"
              className="h-[600px]"
            />

            <LookbookImage
              src="/assets/jewelry/silver/7-1.JPG"
              className="h-[600px]"
            />
          </div>
        </section>

        {/* VERTICAL IMAGE */}
        <section className="py-40 flex justify-center">
          <LookbookImage
            src="/assets/jewelry/silver/8.JPG"
            className="w-[380px] h-[700px]"
          />
        </section>
      </div>
    </main>
  );
}
