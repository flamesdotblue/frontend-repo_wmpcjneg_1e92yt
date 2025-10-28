import Spline from "@splinetool/react-spline";
import { Mic, Wand2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background tint */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 via-fuchsia-500 to-orange-400 text-white">
                <Wand2 className="h-3 w-3" />
              </span>
              AI edits for audio memos — like Cursor, but for your voice
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Speak ideas. We craft spotless notes.
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">
              EchoNote turns spoken thoughts into structured notes with AI-powered
              clean-up, rewriting, and task extraction — so you can think out loud
              and get publish-ready docs in seconds.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center gap-2 h-11 rounded-xl px-5 bg-slate-900 text-white shadow-sm hover:brightness-110 transition-all">
                <Mic className="h-4 w-4" />
                Start dictating
              </button>
              <button className="inline-flex items-center justify-center h-11 rounded-xl px-5 border border-slate-200 text-slate-800 bg-white hover:bg-slate-50 transition-colors">
                Watch demo
              </button>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex -space-x-2">
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/80?img=1" alt="avatar" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/80?img=2" alt="avatar" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/80?img=3" alt="avatar" />
              </div>
              <span>Trusted by product teams and creators</span>
            </div>
          </div>

          {/* Spline Scene */}
          <div className="relative h-[460px] sm:h-[520px] md:h-[600px] rounded-3xl bg-white/60 border border-slate-200 shadow-sm overflow-hidden">
            {/* gentle gradient glow */}
            <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.18),_transparent_45%),radial-gradient(ellipse_at_center,_rgba(168,85,247,0.16),_transparent_55%),radial-gradient(ellipse_at_center,_rgba(251,146,60,0.12),_transparent_60%)]" />
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
