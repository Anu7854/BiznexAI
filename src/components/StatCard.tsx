import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
export function StatCard({label,value,change,icon}:{label:string;value:string;change?:string;icon:ReactNode}) {
 return <div className="rounded-2xl border border-white/[.08] bg-white/[.025] p-5">
  <div className="flex items-center justify-between text-zinc-500"><span className="text-sm">{label}</span><span className="text-lime">{icon}</span></div>
  <div className="mt-4 flex items-end justify-between"><div className="text-2xl font-bold">{value}</div>{change&&<span className="flex items-center gap-1 text-xs text-lime">{change}<ArrowUpRight size={13}/></span>}</div>
 </div>
}
