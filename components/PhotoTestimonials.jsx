import React from "react";
import { Quote } from "lucide-react";

// ✅ Import your testimonial images (update count as you have)
import t1 from "../src/assets/Image Testimonials/1.png";
import t2 from "../src/assets/Image Testimonials/2.png";
import t3 from "../src/assets/Image Testimonials/3.jpeg";
import t4 from "../src/assets/Image Testimonials/4.jpeg";
import t5 from "../src/assets/Image Testimonials/5.jpeg";
import t6 from "../src/assets/Image Testimonials/6.jpeg";

export default function PhotoTestimonials() {
  const DATA = [
    { img: t1, name: "Busy Dad", result: "Lost 10–12 kg • Waist down" },
    { img: t2, name: "Working Parent", result: "Lost 8–10 kg • Energy up" },
    { img: t3, name: "Busy Dad", result: "Lost 12–15 kg • Belly down" },
    { img: t4, name: "Working Parent", result: "Lost 10 kg • Stronger & fitter" },
    { img: t5, name: "Busy Dad", result: "Lost 11 kg • Stamina improved" },
    { img: t6, name: "Working Parent", result: "Lost 9 kg • Better routine" },
  ];

  return (
    <section className="relative bg-white py-4 sm:py-16 overflow-hidden">
      {/* background accents */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          {/* small pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-sky-600" />
            <p className="text-xs sm:text-sm font-extrabold tracking-[0.22em] uppercase text-sky-800">
              Social Proof
            </p>
            <span className="h-2 w-2 rounded-full bg-yellow-300" />
          </div>

          {/* ✅ Mobile: EXACT 3 lines like desktop */}
          <h2 className="mt-5 text-2xl font-extrabold leading-tight text-gray-900 sm:hidden">
            These Parents &amp; Busy Dads Were
            <br />
            <span className="text-sky-700">Tired, Stressed, and</span>
            <br />
            <span className="text-sky-700">Out of Shape.</span>
          </h2>

          {/* ✅ Mobile: Just Like You */}
          <div className="mt-3 flex justify-center sm:hidden">
            <span className="inline-flex items-center gap-3 rounded-2xl border border-sky-200 bg-white px-4 py-2 shadow-md">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-sky-700 text-white shadow-sm">
                <Quote className="h-4 w-4" />
              </span>
              <span className="text-sm font-extrabold text-gray-900">
                <span className="text-sky-700">Just Like You.</span>
              </span>
            </span>
          </div>

          {/* ✅ Desktop */}
          <h2 className="hidden sm:block mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.08] text-gray-900">
            <span className="block">
              These Parents &amp; Busy Dads{" "}
              <span className="relative inline-block">
                <span className="absolute -inset-x-2 -bottom-1 -z-10 h-4 rounded-full bg-sky-200/70" />
                Were
              </span>
            </span>

            <span className="block mt-2">
              <span className="relative inline-block px-2">
                <span className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-full bg-yellow-200/90" />
                Tired
              </span>
              ,{" "}
              <span className="relative inline-block px-2">
                <span className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-full bg-sky-200/80" />
                Stressed
              </span>
              , and{" "}
              <span className="relative inline-block px-2">
                <span className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-full bg-yellow-200/70" />
                Out of Shape.
              </span>
            </span>

            <span className="block mt-4">
              <span className="inline-flex items-center gap-3 rounded-2xl border border-sky-200 bg-white px-4 py-2 shadow-md">
                <span className="grid h-8 w-8 place-items-center rounded-xl bg-sky-700 text-white shadow-sm">
                  <Quote className="h-4 w-4" />
                </span>
                <span className="text-sm sm:text-base font-extrabold text-gray-900">
                  <span className="text-sky-700">Just Like You.</span>
                </span>
              </span>
            </span>
          </h2>

          {/* subtext */}
          <p className="mt-4 text-base font-semibold sm:text-lg text-gray-700">
            Real people. Real routines. Real results — without extreme diets or long workouts.
          </p>
        </div>

        {/* Content (FIXED for desktop alignment/width) */}
        <div className="mt-10">
          <div className="mx-auto w-full lg:max-w-5xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {DATA.map((t, idx) => (
                <TestimonialPhotoCard
                  key={idx}
                  img={t.img}
                  name={t.name}
                  result={t.result}
                />
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-sky-200 bg-white p-4 sm:p-5 shadow-sm">
              <p className="text-sm sm:text-base font-semibold text-gray-900 text-center">
                You’re not “too late.”
                <span className="text-sky-700"> You just need a system built for real life.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialPhotoCard({ img, name, result }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-sky-200 bg-white shadow-sm">
      <div className="aspect-[4/5] bg-white p-2">
        <img
          src={img}
          alt={name}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute inset-x-3 bottom-3">
        <div className="rounded-xl bg-black/55 backdrop-blur border border-white/15 p-2.5">
          <p className="text-xs sm:text-sm font-extrabold text-white leading-tight">
            {result}
          </p>
          <p className="mt-1 text-[11px] sm:text-xs text-white/85">{name}</p>
        </div>
      </div>
    </div>
  );
}
