import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  FileText,
  LineChart,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wallet,
} from "lucide-react";

import { Button } from "../components/Button";
import { Logo } from "../components/Logo";

export function Landing({
  onDemo,
  onLogin,
}: {
  onDemo: () => void;
  onLogin: () => void;
}) {
  const features = [
    [
      "AI Business Advisor",
      "Practical answers using your business context.",
      BrainCircuit,
    ],
    [
      "Financial Intelligence",
      "Track income, expenses, profit and cash flow.",
      Wallet,
    ],
    [
      "Local Market Insights",
      "Turn local context into clearer opportunities.",
      MapPinned,
    ],
    [
      "Business Plan Generator",
      "Create a structured plan you can refine and save.",
      FileText,
    ],
  ] as const;

  const problems = [
    "Limited financial knowledge",
    "Difficulty understanding local markets",
    "Lack of structured business planning",
    "Limited access to reliable advice",
    "Difficulty managing cash flow",
    "Low awareness of financing options",
  ];

  const problemIcons = [
    Wallet,
    MapPinned,
    FileText,
    BrainCircuit,
    LineChart,
    ShieldCheck,
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-ink">
      {/* NAVIGATION */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[.06] bg-ink/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Logo />

          <div className="hidden gap-7 text-sm text-zinc-400 md:flex">
            <a href="#features" className="hover:text-white">
              Features
            </a>

            <a href="#how" className="hover:text-white">
              How It Works
            </a>

            <a href="#impact" className="hover:text-white">
              Impact
            </a>

            <a href="#about" className="hover:text-white">
              About
            </a>
          </div>

          <div className="flex gap-2">
            <Button variant="ghost" onClick={onLogin}>
              Login
            </Button>

            <Button onClick={onDemo}>Explore Demo</Button>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="grid-bg relative flex min-h-screen items-center px-5 pt-24">
          <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-lime/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
            {/* HERO LEFT */}
            <div className="reveal">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime/20 bg-lime/5 px-3 py-1.5 text-xs text-lime">
                <Sparkles size={14} />
                BUILT FOR INDIA'S MICRO-ENTREPRENEURS
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[.98] tracking-tight sm:text-7xl">
                Build Smarter.
                <br />
                <span className="text-gradient">Grow Stronger.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
                AI-powered business guidance and financial intelligence
                designed for rural and micro entrepreneurs.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button onClick={onDemo}>
                  Start Your Business Journey
                  <ArrowRight size={17} />
                </Button>

                <Button
                  variant="secondary"
                  onClick={() =>
                    document
                      .getElementById("features")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore BIZNEX
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs text-zinc-500">
                <ShieldCheck size={16} className="text-lime" />
                Designed around privacy, clarity and responsible guidance.
              </div>
            </div>

            {/* BUSINESS SNAPSHOT */}
            <div className="glass rounded-3xl p-4 shadow-glow reveal">
              <div className="rounded-2xl border border-white/[.07] bg-[#0a0e0a] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500">
                      Business Snapshot
                    </p>

                    <p className="mt-1 text-xl font-bold">
                      Maya Foods{" "}
                      <span className="text-xs font-normal text-lime">
                        Demo
                      </span>
                    </p>
                  </div>

                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-lime/10 text-lime">
                    <LineChart />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    ["₹84K", "Revenue"],
                    ["₹53.5K", "Expenses"],
                    ["₹30.5K", "Profit"],
                    ["76/100", "Health"],
                  ].map(([value, label]) => (
                    <div
                      className="rounded-xl bg-white/[.03] p-3"
                      key={label}
                    >
                      <div className="text-xs text-zinc-500">{label}</div>

                      <div className="mt-1 text-sm font-bold">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-lime/15 bg-lime/5 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-lime">
                    <BrainCircuit size={17} />
                    AI INSIGHT
                  </div>

                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    Expenses are rising slower than revenue. Review transport
                    and raw-material costs to protect your margin.
                  </p>
                </div>

                <div className="mt-5 flex h-32 items-end gap-2">
                  {[38, 54, 49, 72, 67, 88, 80, 96, 84, 100, 91, 108].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t bg-lime/70"
                        style={{
                          height: `${height}px`,
                          opacity: 0.35 + index / 20,
                        }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT / PROBLEM SECTION */}
        <section
          id="about"
          className="border-t border-white/[.06] px-5 py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-lime">THE PROBLEM</p>

              <h2 className="mt-3 text-4xl font-bold">
                Small businesses shouldn't have to make big decisions alone.
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">
                BIZNEX brings market context, financial structure and
                practical AI guidance into one accessible workspace.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {problems.map((problem, index) => {
                const Icon = problemIcons[index];

                return (
                  <div
                    className="rounded-2xl border border-white/[.07] bg-white/[.02] p-5 transition hover:border-lime/20 hover:bg-white/[.04]"
                    key={problem}
                  >
                    <div className="mb-5 grid h-10 w-10 place-items-center rounded-xl bg-lime/10 text-lime">
                      <Icon size={20} />
                    </div>

                    <div className="font-semibold">{problem}</div>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      A clearer path from uncertainty to an actionable next
                      step.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how"
          className="border-t border-white/[.06] bg-[#090c09] px-5 py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-lime">HOW IT WORKS</p>

              <h2 className="mt-3 text-4xl font-bold">
                From your business details to your next smart decision.
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">
                BIZNEX simplifies business planning, financial tracking and
                decision-making into a practical workflow.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                [
                  "01",
                  "Tell us about your business",
                  "Add your business type, location, goals and financial information.",
                  Users,
                ],
                [
                  "02",
                  "Understand your situation",
                  "Get financial insights, market context and an easy-to-understand business health view.",
                  LineChart,
                ],
                [
                  "03",
                  "Take your next step",
                  "Use AI-powered recommendations, plans and tools to make better decisions.",
                  Target,
                ],
              ].map(([number, title, description, Icon]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-white/[.07] bg-white/[.02] p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-lime">
                      {number}
                    </span>

                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-lime/10 text-lime">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="mt-7 text-xl font-bold">{title}</h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section
          id="features"
          className="border-t border-white/[.06] px-5 py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-lime">
                BIZNEX INTELLIGENCE
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                Everything you need to build with confidence.
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">
                One workspace for financial clarity, business planning, local
                insights and practical AI assistance.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {features.map(([title, description, Icon]) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-white/[.07] bg-white/[.02] p-6 transition hover:border-lime/20 hover:bg-white/[.04]"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-lime/10 text-lime">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{title}</h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-lime">
                    <CheckCircle2 size={15} />
                    Designed for practical decisions
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section
          id="impact"
          className="border-t border-white/[.06] bg-[#090c09] px-5 py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold text-lime">THE IMPACT</p>

                <h2 className="mt-3 text-4xl font-bold">
                  Better information can create better businesses.
                </h2>

                <p className="mt-5 leading-7 text-zinc-400">
                  BIZNEX is designed to help micro-entrepreneurs move from
                  uncertainty to structured, informed action.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Improve financial visibility",
                    "Understand local opportunities",
                    "Create structured business plans",
                    "Make more confident decisions",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <CheckCircle2 size={18} className="text-lime" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["01", "Financial Clarity"],
                  ["02", "Market Awareness"],
                  ["03", "Business Planning"],
                  ["04", "Actionable Guidance"],
                ].map(([number, title]) => (
                  <div
                    key={number}
                    className="rounded-2xl border border-white/[.07] bg-white/[.02] p-6"
                  >
                    <div className="text-sm font-bold text-lime">{number}</div>

                    <div className="mt-8 text-lg font-bold">{title}</div>

                    <p className="mt-2 text-sm text-zinc-500">
                      Simple tools designed around real business needs.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-24">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-lime/15 bg-lime/5 p-8 text-center sm:p-14">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-lime/10 text-lime">
              <Sparkles size={26} />
            </div>

            <h2 className="mt-7 text-4xl font-bold">
              Your next business decision can be smarter.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-400">
              Explore BIZNEX and see how AI-powered guidance, financial
              intelligence and local insights can work together.
            </p>

            <div className="mt-8 flex justify-center">
              <Button onClick={onDemo}>
                Explore the BIZNEX Demo
                <ArrowRight size={17} />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/[.06] px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Logo />

            <p className="mt-3 text-xs text-zinc-500">
              AI-powered business intelligence for micro-entrepreneurs.
            </p>
          </div>

          <div className="text-xs text-zinc-600">
            © 2026 BIZNEX. Built for smarter businesses.
          </div>
        </div>
      </footer>
    </div>
  );
}