import logo from "@/assets/storm-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <img src={logo} alt="Storm Breakers" className="h-11 w-11 object-contain drop-shadow-[0_0_12px_oklch(0.68_0.22_245/0.5)]" />
      <div className="leading-none">
        <div className="font-display text-lg tracking-[0.2em]">STORM</div>
        <div className="font-display text-[10px] tracking-[0.4em] text-[var(--electric)]">BREAKERS · CC</div>
      </div>
    </div>
  );
}
