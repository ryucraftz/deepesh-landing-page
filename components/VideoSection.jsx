export default function VideoSection() {
  return (
    <section className="bg-white flex flex-col items-center mt-0 md:-mt-48 lg:-mt-64 relative z-10">
      {/* Video */}
      <div className="w-full max-w-3xl aspect-video px-2 sm:px-0">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/kcfs1-ryKWE?autoplay=1&mute=1&rel=0&showinfo=0"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* ✅ More attractive line */}
      <div className="mt-5 px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-400 bg-sky-100 px-4 py-2 shadow-sm">
          

          <p className="text-center text-sm sm:text-base font-semibold text-slate-800">
            Watch how{" "}
            <span className="text-sky-600 ">busy Dads &amp; Parents</span>{" "}
            transformed their bodies{" "}
            <span className="text-sky-600">for life</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
