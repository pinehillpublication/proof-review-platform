# Pinehill Publications - Author Proof Review & Approval Platform

A comprehensive, production-ready web platform for streamlining the proofreading and final approval process for academic publications.

## 🎯 Overview

The Pinehill Publications Author Proof Review & Approval Platform is a white-label solution designed specifically for academic publishing houses. It streamlines the entire proof review workflow from PDF upload through final approval with digital signatures.

## ✨ Key Features

### Core Workflow
- Publisher uploads final proof PDFs
- Secure review links for authors
- Online annotation and commenting tools
- Multi-version revision tracking
- Digital signature approval
- Production status tracking

### PDF Review Capabilities
- **Annotation Tools**: Comments, highlights, underlines, strike-throughs, arrows, sticky notes
- **Smart Comments**: Auto-generated IDs, timestamps, position tracking, status management
- **Comment Categories**: Typographical errors, grammar, formatting, figures, tables, references, content revisions
- **Reply Threads**: Collaborative discussion on each comment

### Multi-PDF Support
- Upload multiple PDFs
- Merge into single proof package
- Automatic bookmarks and TOC generation
- Side-by-side version comparison

### Approval System
- Page-level approval checkboxes
- Manuscript-wide approval
- Digital signature capture (typed or drawn)
- Audit trail and approval certificates

### Advanced Features
- Real-time notifications via WebSocket
- Dashboard analytics and KPIs
- Report generation (PDF, Excel, CSV)
- Activity logging and audit trail
- Role-based access control

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 12+
- Docker (optional)

### Installation

1. Clone and setup:
```bash
git clone https://github.com/pinehillpublication/proof-review-platform.git
cd proof-review-platform
```

2. Backend setup:
```bash
cd backend
npm install
cp .env.example .env
npm run migrate
npm run dev
```

3. Frontend setup (new terminal):
```bash
cd frontend
npm install
npm start
```

4. Access:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 🐳 Docker Deployment

```bash
docker-compose up --build
```

## 📖 Documentation

- [Setup Guide](./setup.md)
- [API Documentation](./backend/API.md)
- [Database Schema](./backend/DATABASE.md)

## 📝 License

Proprietary Software - Pinehill Publications. All rights reserved.

## 📧 Support

contact@pinehillpublications.com