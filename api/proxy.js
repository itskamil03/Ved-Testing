import http from 'http';

async function getRequestBody(req) {
  if (req.method === 'GET' || req.method === 'HEAD') {
    return null;
  }
  if (req.body !== undefined && req.body !== null) {
    if (typeof req.body === 'object' && !Buffer.isBuffer(req.body)) {
      return Buffer.from(JSON.stringify(req.body));
    }
    return Buffer.isBuffer(req.body) ? req.body : Buffer.from(String(req.body));
  }
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
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

  try {
    const bodyBuffer = await getRequestBody(req);

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

    if (bodyBuffer && bodyBuffer.length > 0) {
      headers['content-length'] = bodyBuffer.length;
      if (!headers['content-type']) {
        headers['content-type'] = 'application/json';
      }
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

    if (bodyBuffer && bodyBuffer.length > 0) {
      proxyReq.write(bodyBuffer);
    }

    proxyReq.end();
  } catch (err) {
    console.error('Proxy handler error:', err);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Proxy internal error', details: err.message });
    }
  }
}
