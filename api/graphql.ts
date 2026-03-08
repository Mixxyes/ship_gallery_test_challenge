type ApiRequest = {
  method?: string;
  body?: unknown;
};

type ApiResponse = {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
  send: (body: string) => void;
};

const UPSTREAM_URL = 'https://vortex.korabli.su/api/graphql/glossary/';

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const payload = typeof req.body === 'string' ? req.body : JSON.stringify(req.body ?? {});

    const upstreamResponse = await fetch(UPSTREAM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload,
    });

    const text = await upstreamResponse.text();
    res.status(upstreamResponse.status);
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.send(text);
  } catch {
    return res.status(502).json({ error: 'Upstream request failed' });
  }
}
