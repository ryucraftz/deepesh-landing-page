// VideoSection.jsx
import React from "react";

export default function VideoSection() {

  return (
    <section className="bg-transparent flex flex-col items-center mt-[-10px] sm:mt-[-20px] relative z-20">
      {/* ✅ Wistia Video Placeholder */}
      <div className="w-full max-w-3xl px-2 sm:px-0">
        <div className="rounded-lg shadow-lg overflow-hidden bg-slate-900 aspect-video flex items-center justify-center">
          <p className="text-white text-lg font-semibold">Video Placeholder</p>
        </div>
      </div>

      {/* Text line */}
      <div className="mt-5 px-4 w-full flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 backdrop-blur-md px-4 py-2 shadow-xl shadow-black/20">
          <p className="text-center text-sm sm:text-base font-semibold text-slate-300">
            Watch how <span className="text-blue-400 font-bold">busy fathers</span> lose 10–15 kilos of fat while{" "}
            <span className="text-amber-400 font-bold">eating normal Indian food</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
