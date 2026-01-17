import { Star } from "lucide-react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ value, duration = 2 }) => {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });

    return () => controls.stop();
  }, [value, duration, count]);

  return <span>{display.toLocaleString()}+</span>;
};

const Review = () => {
  return (
    <div className="w-full flex justify-center py-6">
      <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/50 backdrop-blur-md border border-slate-700/50 shadow-xl shadow-black/20 hover:shadow-black/40 transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center gap-2 text-sm sm:text-base text-slate-200">
          <div className="bg-amber-500/10 p-1.5 rounded-full">
            <Star
              className="text-amber-400 fill-amber-400"
              size={18}
              strokeWidth={2.5}
            />
          </div>

          {/* Text + Animated 400 */}
          <span className="font-bold tracking-tight text-slate-100">ISSA Certified Coach</span>

          <span className="mx-2 text-slate-600">|</span>

          <span className="font-medium">
            <span className="font-bold text-amber-500"><AnimatedNumber value={400} /></span> Transformations
          </span>
        </div>
      </div>
    </div>
  );
};

export default Review;
