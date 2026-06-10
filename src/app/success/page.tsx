"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Animated checkmark */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center animate-fade-up">
            <CheckCircle
              size={64}
              className="text-green-500"
              strokeWidth={1.5}
            />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-fade-up delay-100">
          Order Received!
        </h1>

        <p className="text-dark-200 text-lg mb-10 animate-fade-up delay-200">
          Thank you for your order. We&apos;ll start building your landing page within
          24 hours. Payment on delivery.
        </p>

        {/* Next steps */}
        <div className="bg-dark-800 rounded-2xl p-8 border border-white/5 text-left mb-10 animate-fade-up delay-300">
          <h2 className="text-xl font-semibold text-white mb-6 text-center">
            What happens next:
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "We review your submission",
                desc: "Our team will review the details you provided and confirm everything is clear.",
              },
              {
                step: "2",
                title: "We build your page",
                desc: "Your custom landing page will be designed and developed within 48 hours.",
              },
              {
                step: "3",
                title: "You review and pay on delivery",
                desc: "We'll send you a preview link. Request any changes until you're 100% happy, then pay when everything is delivered.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ backgroundColor: "rgb(232, 93, 4)" }}
                >
                  {item.step}
                </div>
                <div>
                  <div className="text-white font-medium mb-1">{item.title}</div>
                  <div className="text-dark-300 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all hover:opacity-90 hover:scale-105"
          style={{ backgroundColor: "rgb(232, 93, 4)" }}
        >
          Back to Home
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
