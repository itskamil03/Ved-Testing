export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  const url = new URL(request.url);

  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': '*',
      },
    });
  }

  // Extract the target path
  let targetPath = url.searchParams.get('path') || url.pathname;
  url.searchParams.delete('path');
  const remainingQuery = url.searchParams.toString();
  if (remainingQuery) {
    targetPath += (targetPath.includes('?') ? '&' : '?') + remainingQuery;
  }

  const backendUrl = `http://187.77.184.141:8019${targetPath.startsWith('/') ? targetPath : `/${targetPath}`}`;

  try {
    const forwardHeaders = new Headers();
    request.headers.forEach((value, key) => {
      const lower = key.toLowerCase();
      if (lower !== 'host' && lower !== 'x-forwarded-host') {
        forwardHeaders.set(key, value);
      }
    });

    const bodyBuffer = (request.method !== 'GET' && request.method !== 'HEAD')
      ? await request.arrayBuffer()
      : undefined;

    const response = await fetch(backendUrl, {
      method: request.method,
      headers: forwardHeaders,
      body: bodyBuffer,
    });

    const responseHeaders = new Headers(response.headers);
    responseHeaders.set('Access-Control-Allow-Origin', '*');
    responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    responseHeaders.set('Access-Control-Allow-Headers', '*');

    return new Response(response.body, {
      status: response.status,
      headers: responseHeaders,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Proxy request failed', details: err.message }), {
      status: 502,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
