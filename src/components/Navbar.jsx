import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-orange-400 flex items-center justify-center text-white shadow-sm">
            <Rocket className="h-4 w-4" />
          </div>
          <span className="font-semibold text-slate-900 tracking-tight">EchoNote</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#how" className="hover:text-slate-900 transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 rounded-lg px-4 border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors">Sign in</button>
          <button className="inline-flex h-9 rounded-lg px-4 bg-gradient-to-tr from-indigo-600 via-fuchsia-500 to-orange-400 text-white shadow-sm hover:brightness-110 transition-all">Start free</button>
        </div>
      </div>
    </header>
  );
}
