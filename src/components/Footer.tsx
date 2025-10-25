export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-primary-950/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm text-white/60 sm:flex-row">
        <div>
          <p className="font-display text-lg font-semibold text-white">
            Desenvolve<span className="text-neon-blue">AI</span>
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
            Nova Metrópole · Caucaia · Ceará
          </p>
        </div>
        <p>
          © {new Date().getFullYear()} Desenvolve AI. Impacto social + futuro do trabalho.
        </p>
      </div>
    </footer>
  );
}
