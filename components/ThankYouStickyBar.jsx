import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/919876543210"; // Same placeholder as ThankYou.jsx

const ThankYouStickyBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 300px (earlier than main page since thank you page is shorter)
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl p-4 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] flex items-center justify-between border-t border-slate-200 lg:px-20 z-[1000] space-x-2 sm:space-x-6 active:bg-slate-50 transition-colors"
                >
                    {/* Left: Message */}
                    <div className="flex flex-col items-start min-w-0 shrink-0">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                            <span className="text-slate-900 text-sm sm:text-lg font-bold">
                                Don't miss updates!
                            </span>
                        </div>
                        <div className="text-[10px] sm:text-sm font-medium text-slate-500 truncate max-w-[120px] sm:max-w-none">
                            Join the community now
                        </div>
                    </div>

                    {/* Right: CTA */}
                    <div className="flex items-center justify-end relative ml-2 sm:ml-0">
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-base rounded-full shadow-lg shadow-green-200/50 hover:shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-0.5 px-6 py-2.5 sm:px-8 sm:py-3 whitespace-nowrap cursor-pointer border border-green-500/20 no-underline"
                        >
                            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                            <span>Join Whatsapp Group</span>
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ThankYouStickyBar;
