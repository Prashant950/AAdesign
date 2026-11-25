import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

const dbPath = path.resolve(process.cwd(), 'db.json');

function readDb() {
  try {
    if (!fs.existsSync(dbPath)) {
      fs.writeFileSync(dbPath, JSON.stringify({ enquiries: [] }, null, 2), 'utf-8');
    }
    const raw = fs.readFileSync(dbPath, 'utf-8');
    const parsed = JSON.parse(raw || '{}');
    return Array.isArray(parsed.enquiries) ? parsed : { enquiries: [] };
  } catch {
    return { enquiries: [] };
  }
}

function attachEnquiryMiddleware(middlewares) {
  middlewares.use('/api/enquiries', (req, res, next) => {
    if (req.method === 'GET') {
      const db = readDb();
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(db));
      return;
    }

    if (req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', () => {
        try {
          const payload = JSON.parse(body || '{}');
          const { name, phone, email, companyName, city, service, budget, message } = payload;
          if (!name || !phone || !email || !service || !message) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Missing required enquiry fields.' }));
            return;
          }

          const db = readDb();
          const entry = {
            id: `ENQ-${Date.now()}`,
            name: String(name).trim(),
            phone: String(phone).trim(),
            email: String(email).trim(),
            companyName: companyName ? String(companyName).trim() : '',
            city: city ? String(city).trim() : '',
            service: String(service).trim(),
            budget: budget ? String(budget).trim() : '',
            message: String(message).trim(),
            submittedAt: new Date().toISOString(),
          };

          db.enquiries.unshift(entry);
          fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8');

          res.statusCode = 201;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: true, enquiry: entry }));
        } catch {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Invalid JSON payload.' }));
        }
      });
      return;
    }

    next();
  });
}

function dbJsonPlugin() {
  return {
    name: 'aa-db-json-api',
    configureServer(server) {
      attachEnquiryMiddleware(server.middlewares);
    },
    configurePreviewServer(server) {
      attachEnquiryMiddleware(server.middlewares);
    },
  };
}

export default defineConfig({
  plugins: [react(), dbJsonPlugin()],
});
