import type { ButtonHTMLAttributes, ReactNode } from "react";
export function Button({children,variant="primary",className="",...props}:{children:ReactNode;variant?: "primary"|"secondary"|"ghost";className?:string}&ButtonHTMLAttributes<HTMLButtonElement>) {
  const base="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-lime/50 disabled:opacity-50";
  const styles={primary:"lime-gradient text-ink hover:brightness-105",secondary:"border border-white/10 bg-white/[.04] text-white hover:bg-white/[.08]",ghost:"text-zinc-300 hover:text-white hover:bg-white/[.05]"};
  return <button className={`${base} ${styles[variant]} ${className}`} {...props}>{children}</button>
}
