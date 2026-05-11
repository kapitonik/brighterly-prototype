const OPENAI_RESPONSES_URL = "https://api.openai.com/v1/responses";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: corsHeaders });
    }

    if (!env.OPENAI_API_KEY) {
      return new Response("OPENAI_API_KEY is not configured", { status: 500, headers: corsHeaders });
    }

    const payload = await request.json();

    const openAiResponse = await fetch(OPENAI_RESPONSES_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.OPENAI_API_KEY}`
      },
      body: JSON.stringify(payload)
    });

    const body = await openAiResponse.text();

    return new Response(body, {
      status: openAiResponse.status,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json"
      }
    });
  }
};
