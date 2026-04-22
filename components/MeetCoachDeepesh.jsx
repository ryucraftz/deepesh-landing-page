import React from "react";
import { BadgeCheck, Globe2, Users, Timer, Target, Sparkles } from "lucide-react";
import FadeIn from "./FadeIn";

export default function MeetCoachDeepesh() {
  return (
    <section className="relative bg-transparent py-12 sm:py-16 overflow-hidden">
      {/* soft accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-amber-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto">
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-4">
            We Are Not a Generic Agency. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">We Work Inside Your Market.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            <span className="font-semibold text-slate-800">
              We built Brand Buzzar in Vadodara — inside the same industrial belt where most of our clients make their products.
            </span>
          </p>
        </FadeIn>

        {/* Main layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* LEFT: Identity card */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.2} className="relative h-full rounded-3xl border border-slate-200 bg-white/70 p-3 sm:p-4 shadow-2xl backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 h-[300px] sm:h-[400px] flex items-center justify-center">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#00000012_1px,transparent_1px),linear-gradient(to_bottom,#00000012_1px,transparent_1px)] bg-[size:24px_24px]" />

                <p className="text-slate-400 font-medium relative z-10 text-center px-6 uppercase tracking-widest font-bold">Brand Buzzar <br />Vadodara</p>

                {/* Top tags */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 border border-slate-200 shadow-sm">
                    <BadgeCheck className="h-4 w-4 text-blue-600" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Industrial Belt Expertise
                    </span>
                  </div>

                  <div className="hidden sm:inline-flex items-center gap-2 rounded-full bg-amber-400 px-3 py-1.5 border border-amber-300 shadow-sm">
                    <Sparkles className="h-4 w-4 text-black" />
                    <span className="text-xs sm:text-sm font-bold text-black">
                      6 CLIENTS MAX
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-lg sm:text-xl font-extrabold text-slate-900">
                  Based in Vadodara
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Inside Gujarat's Industrial Belt
                </p>

                {/* stats */}
                <div className="mt-4">
                  <div className="grid grid-cols-2 gap-2 rounded-2xl bg-slate-50/50 backdrop-blur border border-slate-100 p-2 sm:p-3 shadow-inner text-left">
                    <MiniStatOverlay
                      icon={<Users className="h-4 w-4" />}
                      label="Vadodara-based local team"
                    />
                    <MiniStatOverlay
                      icon={<Globe2 className="h-4 w-4" />}
                      label="International Buyer Leads"
                    />
                    <MiniStatOverlay
                      icon={<Target className="h-4 w-4" />}
                      label="1:1 Dedicated Account Manager"
                    />
                    <MiniStatOverlay
                      icon={<Timer className="h-4 w-4" />}
                      label="Maximum 6 clients per quarter"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: Story + Expertise */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.4} className="h-full rounded-3xl border border-slate-200 bg-white/70 p-6 sm:p-8 shadow-xl backdrop-blur-xl">
              <div className="rounded-2xl border border-slate-200 bg-white/60 p-4 sm:p-5">
                <p className="text-sm font-bold tracking-[0.18em] uppercase text-amber-600">
                  Our measure
                </p>

                <div className="mt-3 space-y-3 text-slate-600 leading-relaxed">
                  <p>
                    Every agency our clients had tried gave them a traffic report and a ranking update. <span className="font-bold text-slate-900">Nobody gave them buyers.</span>
                  </p>

                  <p>
                    So we built a process with one measure: <span className="font-bold text-blue-600">how many serious buyers called you this month.</span>
                  </p>
                </div>
              </div>

              <div className="mt-7">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h4 className="text-sm font-bold tracking-[0.22em] uppercase text-blue-600">
                    Why Choose Us?
                  </h4>
                  <span className="rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-600">
                    Manufacturers Only
                  </span>
                </div>

                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Bullet>We understand the factory floor</Bullet>
                  <Bullet>We understand global buyers</Bullet>
                  <Bullet>Guaranteed results in writing</Bullet>
                  <Bullet>Maximum 6 spots per quarter</Bullet>
                </ul>
              </div>

              <div className="mt-7 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 shadow-lg">
                <p className="text-sm sm:text-base font-extrabold text-slate-800">
                  We only say yes to success.
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  If we check your market and buyer demand doesn't exist, we won't take your money.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStatOverlay({ icon, label }) {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2 rounded-xl border border-slate-200 bg-white/60 px-2 py-1.5 sm:px-2.5 sm:py-2 hover:bg-white transition-colors shadow-sm">
      <span className="text-amber-500 shrink-0">{icon}</span>
      <span className="text-[10px] sm:text-xs font-semibold text-slate-700 leading-snug">
        {label}
      </span>
    </div>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-white/50 px-3 py-3 hover:border-slate-300 transition-colors">
      <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_#3b82f6]" />
      <span className="text-sm sm:text-base text-slate-700 leading-snug">
        {children}
      </span>
    </li>
  );
}
