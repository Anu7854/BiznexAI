import { BarChart3, Bot, BriefcaseBusiness, FileText, Gauge, LayoutDashboard, MapPinned, Settings, Wallet, LogOut, Bell } from "lucide-react";
import { Logo } from "./Logo";

const items = [
 ["Dashboard","dashboard",LayoutDashboard],["My Business","business",BriefcaseBusiness],["AI Advisor","advisor",Bot],
 ["Financials","financials",Wallet],["Market Insights","market",MapPinned],["Business Plan","plan",FileText],
 ["Funding","funding",BarChart3],["Reports","reports",Gauge]
] as const;

export function Sidebar({page,setPage}:{page:string;setPage:(p:string)=>void}) {
 return <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-white/[.07] bg-[#090c09] p-4">
   <div className="px-2 py-3"><Logo/></div>
   <button onClick={()=>setPage("advisor")} className="my-5 rounded-xl lime-gradient px-4 py-3 text-sm font-bold text-ink">＋ Ask BIZNEX Advisor</button>
   <nav className="space-y-1">
    {items.map(([label,key,Icon])=><button key={key} onClick={()=>setPage(key)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm ${page===key?"bg-lime/10 text-lime":"text-zinc-400 hover:bg-white/[.04] hover:text-white"}`}><Icon size={18}/>{label}</button>)}
   </nav>
   <div className="mt-auto space-y-1">
    <button onClick={()=>setPage("notifications")} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-zinc-400 hover:bg-white/[.04]"><Bell size={18}/>Notifications</button>
    <button onClick={()=>setPage("settings")} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-zinc-400 hover:bg-white/[.04]"><Settings size={18}/>Settings</button>
    <button onClick={()=>setPage("home")} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-zinc-400 hover:bg-white/[.04]"><LogOut size={18}/>Exit demo</button>
   </div>
 </aside>
}
