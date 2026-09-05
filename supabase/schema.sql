create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique not null references auth.users(id) on delete cascade,
  full_name text not null default '',
  phone text,
  preferred_language text not null default 'en',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.locations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  state text, district text, block text, town text, village text, pincode text,
  created_at timestamptz not null default now()
);

create table if not exists public.business_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique not null references auth.users(id) on delete cascade,
  business_name text not null default '',
  business_type text,
  category text,
  years_in_operation int default 0,
  employee_count int default 0,
  monthly_revenue numeric(14,2) default 0,
  monthly_expenses numeric(14,2) default 0,
  existing_savings numeric(14,2) default 0,
  existing_debt numeric(14,2) default 0,
  monthly_loan_payment numeric(14,2) default 0,
  desired_investment numeric(14,2) default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.financial_transactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  business_id uuid references public.business_profiles(id) on delete cascade,
  transaction_type text not null check (transaction_type in ('income','expense')),
  category text not null,
  amount numeric(14,2) not null check (amount >= 0),
  transaction_date date not null default current_date,
  description text,
  created_at timestamptz not null default now()
);

create table if not exists public.business_goals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  goal text not null,
  target_value numeric(14,2),
  target_date date,
  status text not null default 'active',
  created_at timestamptz not null default now()
);

create table if not exists public.ai_conversations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null default 'New conversation',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.ai_messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.ai_conversations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('user','assistant','system')),
  content text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.business_plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  business_name text,
  content jsonb not null default '{}'::jsonb,
  status text not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.market_insights (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  location text not null,
  business_category text not null,
  opportunity_score int check (opportunity_score between 0 and 100),
  demand_level text,
  competition_level text,
  growth_potential text,
  analysis text,
  created_at timestamptz not null default now()
);

create table if not exists public.funding_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  required_amount numeric(14,2),
  purpose text,
  business_type text,
  status text not null default 'draft',
  created_at timestamptz not null default now()
);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  message text not null,
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  report_type text not null,
  content jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.locations enable row level security;
alter table public.business_profiles enable row level security;
alter table public.financial_transactions enable row level security;
alter table public.business_goals enable row level security;
alter table public.ai_conversations enable row level security;
alter table public.ai_messages enable row level security;
alter table public.business_plans enable row level security;
alter table public.market_insights enable row level security;
alter table public.funding_requests enable row level security;
alter table public.notifications enable row level security;
alter table public.reports enable row level security;

do $$
declare t text;
begin
  foreach t in array array['profiles','locations','business_profiles','financial_transactions','business_goals','ai_conversations','ai_messages','business_plans','market_insights','funding_requests','notifications','reports']
  loop
    execute format('drop policy if exists "Users can manage own %s" on public.%I', t, t);
    execute format('create policy "Users can manage own %s" on public.%I for all using (auth.uid() = user_id) with check (auth.uid() = user_id)', t, t);
  end loop;
end $$;
