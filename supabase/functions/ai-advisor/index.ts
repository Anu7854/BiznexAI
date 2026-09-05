import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", {headers:cors});
  try {
    const {message,business} = await req.json();
    const apiKey = Deno.env.get("AI_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({
        answer: `Demo guidance: For ${business?.name ?? "your business"}, focus on ${business?.goal ?? "your current goal"}. Review costs, protect cash flow, and test one small improvement before committing more capital. This is guidance, not a guaranteed financial outcome.`
      }), {headers:{...cors,"Content-Type":"application/json"}});
    }

    const prompt = `You are BIZNEX Advisor, a simple-language business assistant for rural and micro entrepreneurs in India.
Business context: ${JSON.stringify(business)}
User question: ${message}
Return concise JSON with answer, recommendation, reasoningSummary and actionSteps. Avoid guarantees.`;

    const response = await fetch("https://api.openai.com/v1/responses", {
      method:"POST",
      headers:{"Content-Type":"application/json","Authorization":`Bearer ${apiKey}`},
      body:JSON.stringify({model:Deno.env.get("AI_MODEL") ?? "gpt-4.1-mini", input:prompt})
    });
    if(!response.ok) throw new Error("AI provider request failed");
    const data = await response.json();
    const answer = data.output_text ?? "I could not generate guidance right now. Please try again.";
    return new Response(JSON.stringify({answer}), {headers:{...cors,"Content-Type":"application/json"}});
  } catch {
    return new Response(JSON.stringify({error:"Something went wrong. Please try again."}), {status:500,headers:{...cors,"Content-Type":"application/json"}});
  }
});
