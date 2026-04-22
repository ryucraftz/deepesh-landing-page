import React from "react";
import FadeIn from "./FadeIn";

export default function PhotoTestimonials({ hideHeader = false }) {
  return (
    <section className="relative bg-transparent py-10 sm:py-16 overflow-hidden">
      {/* background accents */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-amber-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        {!hideHeader && (
          <FadeIn className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur px-4 py-2 shadow-sm mb-6 max-[380px]:px-2">
              <span className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b]" />
              <p className="text-[10px] sm:text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-slate-600">
                Social Proof
              </p>
              <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-6">
              These Manufacturers Were Stuck on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Exhibitions and IndiaMART.</span>
              <br />
              Just <span className="text-slate-500">Like You.</span>
            </h2>

            <p className="mt-6 text-lg sm:text-xl font-medium text-slate-600 leading-relaxed max-w-3xl mx-auto">
              and <span className="text-amber-600 font-bold">delivered serious buyers from Australia and Kuwait</span>{" "}
              within 60 days of launching on Google.
            </p>
          </FadeIn>
        )}

        {/* Results Grid */}
        <div className="mt-8 sm:mt-12">
          <FadeIn delay={0.2} className="rounded-3xl border border-slate-200 bg-white/40 backdrop-blur-xl p-5 sm:p-8 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {/* Result 1 */}
              <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Vadodara</p>
                <h4 className="font-bold text-slate-900 mb-3 text-lg">EV Components</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <span className="font-bold text-slate-800">Before:</span> Two exhibitions a year. No buyers otherwise.<br />
                  <span className="font-bold text-blue-600">After:</span> Kuwait buyer found them on Google within 60 days. Continuing relationship.
                </p>
              </div>
              {/* Result 2 */}
              <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm relative">
                <span className="absolute -top-3 bg-amber-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-full ring-1 ring-amber-400">GLOBAL EXPORT</span>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Rajkot</p>
                <h4 className="font-bold text-slate-900 mb-3 text-lg">Industrial Equipment</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <span className="font-bold text-slate-800">Before:</span> Spent ₹4 lakh on one exhibition. 3 business cards.<br />
                  <span className="font-bold text-blue-600">After:</span> Buyers from Australia now reach them directly on WhatsApp.
                </p>
              </div>
              {/* Result 3 */}
              <div className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Surat</p>
                <h4 className="font-bold text-slate-900 mb-3 text-lg">Solar Systems</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  <span className="font-bold text-slate-800">Before:</span> IndiaMART bargaining below cost every day.<br />
                  <span className="font-bold text-blue-600">After:</span> 3 to 5 high-budget buyers per month who place real orders.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-6 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl p-4 sm:p-6 shadow-xl text-center">
            <p className="text-sm sm:text-base font-semibold text-slate-800">
              The buyers exist. They are searching.
              <span className="text-amber-600 block sm:inline">
                {" "}
                They are just not finding you. That is the only problem.
              </span>
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
