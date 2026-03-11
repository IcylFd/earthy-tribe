"use client";

import Navbar from "@/components/Navbar";
import LookbookImage from "@/components/LookbookImage";
import LookbookParallaxImage from "@/components/LookbookParallaxImage";

export default function HornSpiral() {
  return (
    <main className="bg-[#F2EFE9] text-[#2A2624] min-h-screen">
      <Navbar showNavbarLogo={true} />

      {/* Scroll Snap Container (mobile) */}
      <div
        className="
        pt-32
        md:snap-none
        snap-y
        snap-mandatory
        overflow-y-auto
      "
      >
        {/* HERO */}
        <section
          className="
          snap-start
          h-[70vh]
          flex items-center justify-center
          text-center
          px-4
        "
        >
          <div>
            <h1 className="text-4xl md:text-6xl tracking-[0.3em] mb-6">
              HORN SPIRAL
            </h1>

            <p className="italic opacity-70 max-w-xl mx-auto leading-relaxed">
              Crafted from naturally shed buffalo horn, Horn Spiral celebrates
              the quiet dialogue between craft and nature.
              <br />
              <br />
              Nepali artisans transform each horn into genderless earrings,
              revealing spiral forms that mirror patterns found throughout the
              natural world.
              <br />
              <br />A balance of material, craft and harmony.
            </p>
          </div>
        </section>

        {/* HERO IMAGE */}
        <section
          className="
          snap-start
          h-[80vh] md:h-[100vh]
        "
        >
          <LookbookParallaxImage
            src="/assets/jewelry/horn1.JPG"
            className="h-full"
          />
        </section>

        {/* TWO VERTICAL */}
        <section
          className="
          snap-start
          py-20
          px-4 md:px-20
        "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <LookbookImage
              src="/assets/jewelry/horn2.JPG"
              className="w-full md:w-auto h-[60vh] md:h-[700px]"
            />

            <LookbookImage
              src="/assets/jewelry/horn2-1.JPG"
              className="w-full md:w-auto h-[60vh] md:h-[700px]"
            />
          </div>
        </section>

        {/* SINGLE VERTICAL */}
        <section
          className="
          snap-start
          flex justify-center
          py-20
          px-4
        "
        >
          <LookbookImage
            src="/assets/jewelry/horn8.JPG"
            className="w-full md:w-[420px] h-[70vh]"
          />
        </section>

        {/* WIDE IMAGE */}
        <section
          className="
          snap-start
          py-20
          px-4 md:px-20
        "
        >
          <LookbookImage
            src="/assets/jewelry/horn6.JPG"
            className="h-auto md:h-[70vh] aspect-[16/9] md:aspect-auto"
          />
        </section>

        {/* THREE VERTICAL */}
        <section
          className="
          snap-start
          py-20
          px-4 md:px-20
        "
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <LookbookImage
              src="/assets/jewelry/horn4-1.JPG"
              className="h-[60vh]"
            />

            <LookbookImage
              src="/assets/jewelry/horn4.JPG"
              className="h-[60vh]"
            />

            <LookbookImage
              src="/assets/jewelry/horn4-2.JPG"
              className="h-[60vh]"
            />
          </div>
        </section>

        {/* SINGLE VERTICAL */}
        <section
          className="
          snap-start
          flex justify-center
          py-20
          px-4
        "
        >
          <LookbookImage
            src="/assets/jewelry/horn5.JPG"
            className="w-full md:w-[420px] h-[70vh]"
          />
        </section>

        {/* FINAL IMAGE */}
        <section
          className="
          snap-start
          h-[80vh] md:h-[100vh]
        "
        >
          <LookbookParallaxImage
            src="/assets/jewelry/horn9.JPG"
            className="h-full"
          />
        </section>

        {/* TWO VERTICAL */}
        <section
          className="
          snap-start
          py-20
          px-4 md:px-20
        "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <LookbookImage
              src="/assets/jewelry/horn7-1.JPG"
              className="w-full md:w-auto h-[60vh] md:h-[700px]"
            />

            <LookbookImage
              src="/assets/jewelry/horn7-2.JPG"
              className="w-full md:w-auto h-[60vh] md:h-[700px]"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
