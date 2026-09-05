# BIZNEX

BIZNEX is a React + TypeScript + Tailwind + Supabase MVP for the SIH theme:

**AI-Driven Hyper-Local Business Advisory and Financial Structuring Assistant for Rural Micro-Entrepreneurs**

## Included

- Premium dark fintech-style landing page
- SIH demo mode with populated dashboard
- Responsive dashboard + mobile menu
- Financial transaction tracker with live calculations
- Recharts revenue/expense visualization
- AI Advisor with demo fallback and Supabase Edge Function integration
- Local Market Insights with explicit demo-estimate labeling
- Business Plan Generator UI
- Funding Assistant with responsible language
- Reports UI
- Supabase PostgreSQL schema + RLS policies
- Email/password auth wiring when Supabase credentials are configured
- Accessible form labels and keyboard-friendly controls
- No API secret in the React client

## Run locally

1. Install Node.js 18+.
2. Copy `.env.example` to `.env`.
3. Optional: add your Supabase URL and anon key.
4. Run:

```bash
npm install
npm run dev
```

5. Open the Vite URL shown in the terminal.

### Demo mode

You can click **Explore Demo** from the landing page or auth screen. The app works without Supabase credentials using clearly labeled sample data.

### Supabase

Create a Supabase project, then run `supabase/schema.sql` in the SQL editor.

For the Edge Function:

- Deploy `supabase/functions/ai-advisor`
- Set `AI_API_KEY` as a server-side secret
- Optionally set `AI_MODEL`

Never place the AI provider secret in `.env` variables exposed to Vite.

## Production checklist

- Replace demo data with Supabase queries for each page.
- Add a production PDF generator in a server-side function.
- Connect verified market/location data sources.
- Add the full 5-step onboarding persistence.
- Add Hindi/Bengali translation files and language switching.
- Configure Supabase redirect URLs and password-reset email templates.
- Run `npm run build` before deployment.
