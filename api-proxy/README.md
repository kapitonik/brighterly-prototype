# OpenAI API proxy for GitHub Pages

GitHub Pages serves only static files, so it cannot securely store `OPENAI_API_KEY`.
For the public prototype, deploy a tiny serverless proxy and store the key there.

This folder contains a Cloudflare Worker example:

```text
api-proxy/cloudflare-worker.js
```

## Cloudflare Worker setup

1. Create a new Worker in Cloudflare.
2. Paste `cloudflare-worker.js`.
3. Add a secret named `OPENAI_API_KEY`.
4. Deploy the Worker.
5. Open the prototype → `Настройки ИИ`.
6. Select `Через серверный прокси`.
7. Paste the Worker URL as `Proxy URL`.

The browser sends the OpenAI request payload to the Worker. The Worker adds the API key and forwards the request to `https://api.openai.com/v1/responses`.

For a real production version, replace `Access-Control-Allow-Origin: *` with the exact GitHub Pages origin.
