export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const BACKEND_HOST = 'http://187.77.184.141:8019';

  // Construct target URL
  let targetPath = req.url || '/';
  if (targetPath.startsWith('/api/proxy')) {
    const urlObj = new URL(req.url, 'http://localhost');
    const pathParam = urlObj.searchParams.get('path');
    if (pathParam) {
      urlObj.searchParams.delete('path');
      const remainingSearch = urlObj.searchParams.toString();
      targetPath = pathParam + (remainingSearch ? (pathParam.includes('?') ? `&${remainingSearch}` : `?${remainingSearch}`) : '');
    }
  }

  const targetUrl = `${BACKEND_HOST}${targetPath.startsWith('/') ? targetPath : `/${targetPath}`}`;

  try {
    const headers = {};
    for (const [key, value] of Object.entries(req.headers)) {
      const lower = key.toLowerCase();
      if (
        lower !== 'host' &&
        lower !== 'connection' &&
        lower !== 'content-length' &&
        lower !== 'x-forwarded-host'
      ) {
        headers[key] = value;
      }
    }

    const fetchOptions = {
      method: req.method,
      headers: headers,
    };

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      if (typeof req.body === 'string' || Buffer.isBuffer(req.body)) {
        fetchOptions.body = req.body;
      } else if (req.body && typeof req.body === 'object') {
        fetchOptions.body = JSON.stringify(req.body);
      }
    }

    const backendRes = await fetch(targetUrl, fetchOptions);
    const data = await backendRes.arrayBuffer();

    res.status(backendRes.status);
    const contentType = backendRes.headers.get('content-type');
    if (contentType) {
      res.setHeader('Content-Type', contentType);
    }
    res.send(Buffer.from(data));
  } catch (err) {
    console.error('Vercel proxy handler error:', err);
    res.status(500).json({ error: 'Proxy error', message: err.message });
  }
}
