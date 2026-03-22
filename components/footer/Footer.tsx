export function Footer() {
  return (
    <footer className="w-full py-12 border-t border-dashed border-slate-800 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 px-4 sm:px-8">
        <span className="font-display font-extrabold uppercase tracking-tighter text-4xl text-slate-200">
          MERIDIAN
        </span>
        <div className="flex flex-col items-center gap-2">
          <a
            href="https://x.com/MeridianOSX"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-slate-600 hover:text-primary transition-colors"
          >
            @MeridianOSX
          </a>
          <span className="font-mono text-xs text-slate-600">A mission in progress.</span>
        </div>
        <div className="mt-8 pt-8 border-t border-outline-variant/10 w-full text-center">
          <p className="font-mono text-[9px] tracking-[0.3em] text-outline uppercase">
            &copy; 2026 Meridian Orbital Command | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
