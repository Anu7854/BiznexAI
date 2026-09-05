import { useState } from "react";
import { Landing } from "./pages/Landing";
import { Auth } from "./pages/Auth";
import { Dashboard } from "./pages/Dashboard";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";

export default function App(){
 const [mode,setMode]=useState<"home"|"auth"|"app">("home");
 const [page,setPage]=useState("dashboard");
 const [mobile,setMobile]=useState(false);
 if(mode==="home") return <Landing onDemo={()=>{setMode("app");setPage("dashboard")}} onLogin={()=>setMode("auth")}/>;
 if(mode==="auth") return <Auth onBack={()=>setMode("home")} onDemo={()=>{setMode("app");setPage("dashboard")}} onSuccess={()=>{setMode("app");setPage("dashboard")}}/>;
 return <div className="flex min-h-screen bg-ink"><Sidebar page={page} setPage={setPage}/>{mobile&&<div className="fixed inset-0 z-50 bg-black/70 lg:hidden" onClick={()=>setMobile(false)}><div className="h-full w-72 bg-[#090c09] p-5" onClick={e=>e.stopPropagation()}><div className="mb-6 text-xl font-bold">BIZ<span className="text-lime">NEX</span></div>{["dashboard","business","advisor","financials","market","plan","funding","reports","notifications","settings"].map(p=><button key={p} onClick={()=>{setPage(p);setMobile(false)}} className="block w-full rounded-xl px-3 py-3 text-left text-sm capitalize text-zinc-400 hover:bg-white/[.04]">{p}</button>)}<button onClick={()=>setMode("home")} className="mt-6 w-full rounded-xl border border-white/10 px-3 py-3 text-sm text-zinc-400">Exit demo</button></div></div>}<div className="min-w-0 flex-1"><Topbar onMenu={()=>setMobile(true)}/><main className="mx-auto max-w-[1500px] p-4 md:p-7"><Dashboard page={page} setPage={setPage}/></main></div></div>
}
