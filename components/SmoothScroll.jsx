import { useEffect } from "react";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new window.Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}
