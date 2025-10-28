import { Mic, Wand2, Search, Cloud, Shield } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Real‑time dictation",
    desc: "Low-latency capture tuned for voice. Pause, resume, and keep flowing without losing your train of thought.",
  },
  {
    icon: Wand2,
    title: "AI edits like Cursor",
    desc: "Refactor rambles into clean outlines, bullet points, and action lists with conversational prompts.",
  },
  {
    icon: Search,
    title: "Semantic search",
    desc: "Find ideas by meaning, not keywords. Quickly surface tasks, decisions, and follow‑ups across notes.",
  },
  {
    icon: Cloud,
    title: "Multi‑device sync",
    desc: "Start on mobile, finish on desktop. Your audio, transcripts, and edits stay perfectly in sync.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Designed for flow</h2>
          <p className="mt-3 text-slate-600">Everything you need to turn voice into polished notes without breaking your momentum.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-fuchsia-500 to-orange-400 text-white flex items-center justify-center shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-medium text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
          <Shield className="h-4 w-4" />
          <span>Enterprise‑grade privacy. Your audio stays yours.</span>
        </div>
      </div>
    </section>
  );
}
