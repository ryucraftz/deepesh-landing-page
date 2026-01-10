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
    <div className="w-full flex justify-center bg-white py-5">
      <div className="flex items-center gap-2 px-3 py-2 rounded-full shadow-md">
        <div className="flex items-center gap-1 text-sm text-black">
          <Star
            className="text-yellow-400 fill-yellow-400"
            size={16}
            strokeWidth={2.2}
          />

          {/* Text + Animated 400 */}
          <span className="font-medium">ISSA Certified Coach</span>

          <span className="mx-1">•</span>

          <span>
            <AnimatedNumber value={400} /> Transformations
          </span>
        </div>
      </div>
    </div>
  );
};

export default Review;
