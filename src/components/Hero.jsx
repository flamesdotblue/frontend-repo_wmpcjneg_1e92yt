import Spline from "@splinetool/react-spline";
import { Mic, Wand2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] md:min-h-[92vh] w-full overflow-hidden">
      {/* Full-cover Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Atmospheric overlays for readability and vibe */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_10%,rgba(0,0,0,0.15),rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.75))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-orange-400 text-white">
                <Wand2 className="h-3 w-3" />
              </span>
              AI edits for audio memos — cosmic clarity for your voice
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              Capture the galaxy of your ideas.
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-2xl">
              EchoNote transforms free‑flowing speech into structured, shareable notes. Dictate, refine with AI, and stay in motion — no busywork.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center gap-2 h-11 rounded-xl px-5 bg-white text-slate-900 shadow-sm hover:brightness-110 transition-all">
                <Mic className="h-4 w-4" />
                Start dictating
              </button>
              <button className="inline-flex items-center justify-center h-11 rounded-xl px-5 border border-white/30 text-white/90 bg-white/10 hover:bg-white/15 backdrop-blur transition-colors">
                Watch demo
              </button>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-white/70">
              <div className="flex -space-x-2">
                <img className="h-8 w-8 rounded-full ring-2 ring-white/40" src="https://i.pravatar.cc/80?img=11" alt="avatar" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white/40" src="https://i.pravatar.cc/80?img=22" alt="avatar" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white/40" src="https://i.pravatar.cc/80?img=33" alt="avatar" />
              </div>
              <span>Trusted by product teams and creators</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
