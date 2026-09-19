import http from 'http';

export default function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  const BACKEND_HOST = '187.77.184.141';
  const BACKEND_PORT = 8019;

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

  const headers = {};
  for (const [key, value] of Object.entries(req.headers)) {
    const lower = key.toLowerCase();
    if (
      lower !== 'host' &&
      lower !== 'x-forwarded-host' &&
      lower !== 'connection' &&
      lower !== 'content-length'
    ) {
      headers[key] = value;
    }
  }

  // Ensure content-type is set if body is present
  if (req.method !== 'GET' && req.method !== 'HEAD' && !headers['content-type']) {
    headers['content-type'] = 'application/json';
  }

  let bodyData = null;
  if (req.method !== 'GET' && req.method !== 'HEAD' && req.body) {
    if (typeof req.body === 'object') {
      bodyData = JSON.stringify(req.body);
    } else {
      bodyData = req.body;
    }
    headers['content-length'] = Buffer.byteLength(bodyData);
  }

  const proxyReq = http.request(
    {
      host: BACKEND_HOST,
      port: BACKEND_PORT,
      path: targetPath.startsWith('/') ? targetPath : `/${targetPath}`,
      method: req.method,
      headers: headers,
      timeout: 30000,
    },
    (proxyRes) => {
      res.status(proxyRes.statusCode || 200);
      for (const [key, value] of Object.entries(proxyRes.headers)) {
        if (key.toLowerCase() !== 'transfer-encoding') {
          res.setHeader(key, value);
        }
      }
      proxyRes.pipe(res);
    }
  );

  proxyReq.on('error', (err) => {
    console.error('Node proxy connection error:', err);
    if (!res.headersSent) {
      res.status(502).json({ error: 'Proxy failed to connect to backend', details: err.message });
    }
  });

  if (bodyData) {
    proxyReq.write(bodyData);
  }

  proxyReq.end();
}
