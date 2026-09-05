import { useState } from "react";
import { ArrowLeft, LockKeyhole, Mail, UserRound } from "lucide-react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Logo } from "../components/Logo";
import { supabase } from "../lib/supabase";

export function Auth({onBack,onDemo,onSuccess}:{onBack:()=>void;onDemo:()=>void;onSuccess:()=>void}) {
 const [register,setRegister]=useState(false); const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [name,setName]=useState(""); const [error,setError]=useState(""); const [loading,setLoading]=useState(false);
 async function submit(e:React.FormEvent){e.preventDefault();setError("");setLoading(true);
   if(!supabase){setLoading(false);onSuccess();return;}
   const res=register?await supabase.auth.signUp({email,password,options:{data:{full_name:name}}}):await supabase.auth.signInWithPassword({email,password});
   setLoading(false); if(res.error){setError("We couldn't complete that request. Please check your details and try again.");return;} onSuccess();
 }
 return <div className="grid min-h-screen place-items-center bg-ink px-5"><div className="w-full max-w-md"><button onClick={onBack} className="mb-8 flex items-center gap-2 text-sm text-zinc-500 hover:text-white"><ArrowLeft size={16}/> Back</button><Card className="p-7"><Logo/><h1 className="mt-8 text-2xl font-bold">{register?"Create your BIZNEX account":"Welcome back"}</h1><p className="mt-2 text-sm text-zinc-500">{register?"Start building a smarter business journey.":"Continue to your business dashboard."}</p>
  <form onSubmit={submit} className="mt-7 space-y-4">{register&&<label className="block text-sm">Full name<div className="mt-2 flex items-center rounded-xl border border-white/10 bg-white/[.025] px-3"><UserRound size={17} className="text-zinc-600"/><input required value={name} onChange={e=>setName(e.target.value)} className="w-full bg-transparent px-3 py-3 outline-none" placeholder="Your name"/></div></label>}
  <label className="block text-sm">Email<div className="mt-2 flex items-center rounded-xl border border-white/10 bg-white/[.025] px-3"><Mail size={17} className="text-zinc-600"/><input required type="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full bg-transparent px-3 py-3 outline-none" placeholder="you@example.com"/></div></label>
  <label className="block text-sm">Password<div className="mt-2 flex items-center rounded-xl border border-white/10 bg-white/[.025] px-3"><LockKeyhole size={17} className="text-zinc-600"/><input required minLength={6} type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full bg-transparent px-3 py-3 outline-none" placeholder="At least 6 characters"/></div></label>
  {error&&<div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3 text-sm text-red-300">{error}</div>}
  <Button className="w-full" disabled={loading}>{loading?"Please wait…":register?"Create account":"Login"}</Button></form>
  <button onClick={onDemo} className="mt-3 w-full rounded-xl border border-lime/20 bg-lime/5 px-4 py-3 text-sm font-semibold text-lime hover:bg-lime/10">Explore SIH Demo</button>
  <button onClick={()=>setRegister(!register)} className="mt-6 w-full text-center text-sm text-zinc-500 hover:text-white">{register?"Already have an account? Login":"New to BIZNEX? Create an account"}</button>
 </Card></div></div>
}
