import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-tr from-indigo-50 via-fuchsia-50 to-orange-50 p-8 sm:p-10">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Turn your voice into action in seconds
            </h3>
            <p className="mt-3 text-slate-600">
              Record, refine with AI, and share — all in one place. No more messy transcripts.
            </p>

            <div className="mt-6">
              <button className="inline-flex items-center gap-2 h-11 rounded-xl px-5 bg-slate-900 text-white shadow-sm hover:brightness-110 transition-all">
                Get started free <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* decorative blur */}
          <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-64 w-64 rounded-full bg-gradient-to-tr from-indigo-400/40 via-fuchsia-400/40 to-orange-300/40 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
