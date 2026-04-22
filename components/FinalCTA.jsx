import React from "react";
import CallToActionButton from "./CallToActionButton";
import FadeIn from "./FadeIn";

export default function FinalCTA() {
    return (
        <section className="bg-gradient-to-b from-slate-50 to-amber-50/50 pt-20 pb-32 sm:py-20 px-4 relative overflow-hidden">
            {/* Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-white/0 to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <FadeIn>
                    <h2 className="text-slate-900 text-2xl sm:text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                        You Make a Good Product.{" "}
                        <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Serious Buyers Should Be Finding You.</span>
                    </h2>
                    <p className="text-slate-600 text-lg sm:text-xl mb-10 leading-relaxed">
                        Right now they are searching. They are calling whoever shows up.{" "}
                        <br className="hidden sm:block" />
                        One conversation can change whether that is you or your competitor.{" "}
                        <br className="hidden sm:block" />
                        Book Your Strategy Call.
                    </p>
                    <div className="flex justify-center">
                        <CallToActionButton text="Book Your Strategy Call" />
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
