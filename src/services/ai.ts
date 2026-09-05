import { supabase } from "../lib/supabase";
import type { BusinessProfile } from "../types";

export async function askAdvisor(message: string, business: BusinessProfile) {
  if (supabase) {
    const { data, error } = await supabase.functions.invoke("ai-advisor", {
      body: { message, business }
    });
    if (!error && data?.answer) return data.answer as string;
  }
  return `Demo guidance: For ${business.name}, focus on your ${business.goal.toLowerCase()} goal. Based on the current snapshot, review your ${business.category.toLowerCase()} costs, protect cash flow, and test one small growth action before committing more capital. This is guidance, not a guaranteed financial outcome.`;
}
