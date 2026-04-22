// FAQ.jsx
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import FadeIn from "./FadeIn";

export default function FAQ() {
  const faqs = [
    {
      question: "Will this work for my product?",
      answer: "If buyers search Google for products in your category — and they do — this works. Before we take you on we check whether that buyer demand actually exists for what you make.",
    },
    {
      question: "I tried a digital marketing agency before and got nothing. How is this different?",
      answer: "Most agencies track traffic and rankings. We track one thing: how many serious buyers called you this month. We also back it with a guarantee in writing.",
    },
    {
      question: "How much of my time does this need?",
      answer: "One 30-minute call per week in the first month. Less after that. Your job is to tell us about your product and reply to the buyers who start calling.",
    },
    {
      question: "What if 90 days pass and we still have not gotten buyers?",
      answer: "We keep working at no extra cost until you do. That is the guarantee, in writing. We only take on manufacturers where we are confident the result is achievable.",
    },
    {
      question: "Why only 6 manufacturers per quarter?",
      answer: "Every client gets one person from our team working their account from day one. Six is the number that lets us deliver quality results reliably.",
    },
    {
      question: "We already have IndiaMART. Do we need to stop?",
      answer: "No. Keep it running. Most manufacturers find that within 6 months the quality of buyers from Google is far higher and they reduce IndiaMART on their own.",
    },
  ];

  return (
    <section className="bg-transparent py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <FadeIn>
          <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <FAQItem faq={faq} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-amber-500 shadow-[0_4px_15px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/20' : 'border-slate-200'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between bg-white px-4 py-3 sm:px-6 sm:py-4 text-left transition-colors hover:bg-slate-50"
      >
        <span className={`text-sm sm:text-base font-semibold transition-colors pr-4 ${isOpen ? 'text-amber-600' : 'text-slate-800'}`}>
          {faq.question}
        </span>
        {isOpen ? (
          <Minus className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600 flex-shrink-0" />
        ) : (
          <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 flex-shrink-0" />
        )}
      </button>
      <div
        className={`bg-slate-50 px-4 sm:px-6 text-slate-600 text-sm sm:text-base transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 py-3 sm:py-4 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
      >
        {faq.answer}
      </div>
    </div>
  );
}
