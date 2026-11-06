import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Local Vite dev middleware plugin to simulate Vercel serverless /api endpoints locally
function localVercelApiPlugin(): Plugin {
  return {
    name: 'local-vercel-api-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url || !req.url.startsWith('/api')) {
          return next();
        }

        const urlObj = new URL(req.url, 'http://localhost');
        const pathname = urlObj.pathname;
        const query: Record<string, string> = {};
        urlObj.searchParams.forEach((val, key) => {
          query[key] = val;
        });

        // Collect body for POST requests
        let body: any = {};
        if (req.method === 'POST') {
          const buffers: Buffer[] = [];
          for await (const chunk of req) {
            buffers.push(Buffer.from(chunk));
          }
          const raw = Buffer.concat(buffers).toString('utf-8');
          try {
            body = raw ? JSON.parse(raw) : {};
          } catch {
            body = raw;
          }
        }

        // Mock response helper object matching Node/Vercel standard
        const resHelper: any = res;
        resHelper.status = (code: number) => {
          res.statusCode = code;
          return resHelper;
        };
        resHelper.json = (data: any) => {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(data));
          return resHelper;
        };

        const mockReq: any = {
          url: req.url,
          method: req.method,
          query,
          body,
          headers: req.headers
        };

        try {
          if (pathname === '/api/health') {
            const mod = await import('./api/health.js');
            return mod.default(mockReq, resHelper);
          } else if (pathname === '/api/software-projects') {
            const mod = await import('./api/software-projects.js');
            return mod.default(mockReq, resHelper);
          } else if (pathname === '/api/video-portfolio') {
            const mod = await import('./api/video-portfolio.js');
            return mod.default(mockReq, resHelper);
          } else if (pathname === '/api/contact') {
            const mod = await import('./api/contact.js');
            return mod.default(mockReq, resHelper);
          } else if (pathname === '/api/newsletter') {
            const mod = await import('./api/newsletter.js');
            return mod.default(mockReq, resHelper);
          }
        } catch (err: any) {
          console.error('[Local API Middleware Error]:', err);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify({ success: false, error: err.message }));
        }

        return next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), localVercelApiPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
