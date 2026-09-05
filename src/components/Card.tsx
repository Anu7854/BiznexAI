import type { ReactNode } from "react";
export function Card({children,className=""}:{children:ReactNode;className?:string}) {
  return <div className={`rounded-2xl border border-white/[.08] bg-white/[.025] p-5 ${className}`}>{children}</div>
}
