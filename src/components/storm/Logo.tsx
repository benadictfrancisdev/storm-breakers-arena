export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <div className="relative h-9 w-9 flex items-center justify-center">
        <div className="absolute inset-0 rotate-45 bg-gradient-to-br from-[var(--electric)] to-[var(--blood)] rounded-sm" />
        <div className="absolute inset-[3px] rotate-45 bg-background rounded-sm" />
        <svg viewBox="0 0 24 24" className="relative h-5 w-5 text-[var(--electric)] drop-shadow-[0_0_6px_var(--electric)]" fill="currentColor">
          <path d="M13 2L3 14h7l-1 8 11-14h-7l1-6z"/>
        </svg>
      </div>
      <div className="leading-none">
        <div className="font-display text-lg tracking-[0.2em]">STORM</div>
        <div className="font-display text-[10px] tracking-[0.4em] text-[var(--electric)]">BREAKERS</div>
      </div>
    </div>
  );
}
