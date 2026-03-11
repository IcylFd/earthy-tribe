"use client";

import Navbar from "@/components/Navbar";
import LookbookImage from "@/components/LookbookImage";
import LookbookParallaxImage from "@/components/LookbookParallaxImage";
import LookbookVideo from "@/components/LookbookVideo";

export default function HimaZen() {
  return (
    <main className="bg-[#F7F6F3] text-[#2A2624] min-h-screen">
      <Navbar showNavbarLogo={true} />

      <div className="pt-32">
        {/* HERO */}
        <section className="h-[70vh] flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl tracking-[0.3em] mb-6">
              HIMA ZEN
            </h1>

            <p className="italic opacity-70 max-w-xl mx-auto leading-relaxed">
              Born from the silence of the Himalaya.
              <br />
              <br />
              Crafted with white quartz from the Himalayan plateau, each piece
              carries a quiet clarity shaped by altitude, purity, and time.
              <br />
              <br />A reflection of balance, calm, and inner alignment.
            </p>
          </div>
        </section>

        {/* PARALLAX IMAGE */}
        <section className="h-[80vh] md:h-[100vh]">
          <LookbookParallaxImage
            src="/assets/jewelry/hima1-2.JPG"
            className="h-full"
          />
        </section>

        {/* TWO IMAGE GRID */}
        <section className="py-20 px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-20">
            <LookbookImage
              src="/assets/jewelry/hima1-1.JPG"
              className="h-[600px]"
            />

            <LookbookImage
              src="/assets/jewelry/hima1.JPG"
              className="h-[600px]"
            />
          </div>
        </section>

        {/* VERTICAL IMAGE */}
        <section className="py-20 flex justify-center">
          <LookbookImage
            src="/assets/jewelry/hima4.JPG"
            className="w-[380px] h-[700px]"
          />
        </section>

        {/* THREE IMAGE GRID */}
        <section className="py-20 px-4 md:px-20">
          <div className="grid md:grid-cols-3 gap-10">
            <LookbookImage
              src="/assets/jewelry/hima6.JPG"
              className="h-[420px]"
            />

            <LookbookImage
              src="/assets/jewelry/hima6-1.JPG"
              className="h-[420px]"
            />

            <LookbookImage
              src="/assets/jewelry/hima6-2.JPG"
              className="h-[420px]"
            />
          </div>
        </section>
        {/* VIDEO BLOCK */}
        <section className="flex justify-center py-20 px-4 md:px-20">
          <LookbookVideo
            src="/assets/video/hima1.MP4"
            ratio="vertical"
            className="h-[70vh]"
          />
        </section>
        {/* WIDE IMAGE */}
        <section className="py-20 px-4 md:px-20">
          <LookbookImage
            src="/assets/jewelry/hima8.jpg"
            className="h-auto md:h-[70vh] aspect-[16/9] md:aspect-auto"
          />
        </section>

        {/* TWO IMAGE GRID */}
        <section className="py-20 px-4 md:px-20">
          <div className="grid md:grid-cols-2 gap-20">
            <LookbookImage
              src="/assets/jewelry/hima3.JPG"
              className="h-[600px]"
            />

            <LookbookImage
              src="/assets/jewelry/hima3-1.JPG"
              className="h-[600px]"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
