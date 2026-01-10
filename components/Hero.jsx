export default function Hero() {
  return (
    <div className="relative bg-white min-h-0 md:min-h-[80vh] flex items-start justify-center overflow-hidden">
      {/* 📱 Push down on mobile */}
      <div className="relative px-2 sm:px-4 text-center max-w-5xl mt-1 md:mt-0">
        {/* Title */}
        <h1 className="font-bold leading-snug tracking-tight mx-auto text-lg sm:text-2xl md:text-3xl lg:text-4xl">
          {/* ✅ Mobile: STRICT 4 lines */}
          <span className="block sm:hidden text-slate-900 leading-tight tracking-tight">
            <span className="block">
              India’s Trusted <span className="text-sky-500">Fat-Loss Coach</span>
            </span>

            <span className="block">
              Reveals the <span className="text-sky-500">FitDad System</span> That Helped
            </span>

            <span className="block">
              <span className="text-sky-500">400+ Busy Dads &amp; Parents</span> Lose
            </span>

            <span className="block">
              <span className="text-sky-500">10–15+ Kgs</span> — Sustainably.
            </span>
          </span>

          {/* Desktop */}
          <span className="hidden sm:block">
            <span className="block text-slate-900">
              India’s Trusted{" "}
              <span className="text-sky-500">Fat-Loss Coach</span> Reveals the{" "}
              <span className="text-sky-500">FitDad System</span> That Helped{" "}
              <span className="text-sky-500">400+ Busy Dads &amp; Parents</span> Lose{" "}
              <span className="text-sky-500">10–15+ Kgs</span> — Sustainably.
            </span>
          </span>
        </h1>

        {/* Subheading */}
        <h2 className="my-4 text-[15px] sm:text-sm md:text-base lg:text-lg font-medium text-slate-700 leading-snug mx-auto px-2 sm:px-6">
          Transform your body without extreme diets, long workouts, or sacrificing
          family time — even after 30.
        </h2>
      </div>
    </div>
  );
}
