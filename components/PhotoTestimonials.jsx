// PhotoTestimonials.jsx
import React from "react";
import { Quote } from "lucide-react";

export default function PhotoTestimonials() {
  return (
    <section className="relative bg-white py-10 sm:py-16 overflow-hidden">
      {/* background accents (keep or remove — your choice) */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 shadow-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-sky-600" />
            <p className="text-xs sm:text-sm font-extrabold tracking-[0.22em] uppercase text-sky-800">
              Social Proof
            </p>
            <span className="h-2 w-2 rounded-full bg-yellow-300" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Trusted by <span className="text-sky-700">working fathers</span>
            <br />
            who were <span className="text-slate-600">tired, overweight, and inconsistent</span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl font-medium text-gray-800 leading-relaxed max-w-3xl mx-auto">
            and <span className="text-sky-700 font-bold">lost significant fat, regained energy, and built strength</span>
            <br className="hidden sm:block" />
            without crash dieting or long gym sessions.
          </p>
        </div>

        {/* Placeholder for Testimonials */}
        <div className="mt-8 sm:mt-12">
          <div className="rounded-3xl border border-sky-200 bg-white p-8 shadow-sm flex items-center justify-center min-h-[200px]">
            <p className="text-gray-500 font-semibold text-lg italic">
              Transformation photos of dads who regained their fitness will be shown here.
            </p>
          </div>

          <div className="mt-6 rounded-3xl border border-sky-200 bg-white p-4 sm:p-5 shadow-sm">
            <p className="text-sm sm:text-base font-semibold text-gray-900 text-center">
              You’re not “too late.”
              <span className="text-sky-700">
                {" "}
                You just need a system built for real life.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
