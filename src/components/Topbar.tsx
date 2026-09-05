import { Bell, Menu, Search } from "lucide-react";
import { Logo } from "./Logo";
export function Topbar({onMenu}:{onMenu:()=>void}) {
 return <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/[.07] bg-[#070907]/90 px-4 backdrop-blur-xl lg:px-7">
   <div className="lg:hidden"><Logo compact/></div>
   <div className="hidden max-w-md flex-1 items-center gap-3 rounded-xl border border-white/[.07] bg-white/[.025] px-4 py-2 md:flex"><Search size={17} className="text-zinc-500"/><input aria-label="Search" className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-600" placeholder="Search your business…"/></div>
   <div className="ml-auto flex items-center gap-2"><button aria-label="Notifications" className="rounded-xl p-2 text-zinc-400 hover:bg-white/[.05]"><Bell size={19}/></button><button onClick={onMenu} className="rounded-xl p-2 text-zinc-400 hover:bg-white/[.05] lg:hidden"><Menu size={20}/></button><div className="hidden h-9 w-9 place-items-center rounded-full bg-lime/15 text-sm font-bold text-lime sm:grid">MR</div></div>
 </header>
}
