export function Logo({compact=false}:{compact?:boolean}) {
  return <div className="flex items-center gap-3">
    <div className="relative h-9 w-9 rounded-xl bg-lime-gradient grid place-items-center shadow-glow">
      <span className="font-black text-ink text-lg">B</span>
      <span className="absolute -right-1 -bottom-1 h-3 w-3 rounded-full bg-ink border border-lime"></span>
    </div>
    {!compact && <div><div className="font-black tracking-[.18em] text-white">BIZ<span className="text-lime">NEX</span></div><div className="text-[9px] tracking-[.16em] text-zinc-500">AI BUSINESS PARTNER</div></div>}
  </div>
}
