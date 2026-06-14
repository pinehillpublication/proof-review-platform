# Pinehill Publications - Setup Guide

## Prerequisites

- Node.js 18.x+
- npm 8.x+
- PostgreSQL 12+
- Git
- Docker (optional)

## Installation

### 1. Clone Repository
```bash
git clone https://github.com/pinehillpublication/proof-review-platform.git
cd proof-review-platform
```

### 2. Database Setup

#### Option A: Local PostgreSQL
```bash
sudo -u postgres psql
```

```sql
CREATE DATABASE pinehill_proof_review;
CREATE USER pinehill_user WITH PASSWORD 'your_secure_password';
ALTER ROLE pinehill_user SET client_encoding TO 'utf8';
ALTER ROLE pinehill_user SET default_transaction_isolation TO 'read committed';
GRANT ALL PRIVILEGES ON DATABASE pinehill_proof_review TO pinehill_user;
\q
```

#### Option B: Docker PostgreSQL
```bash
docker run --name pinehill-postgres -e POSTGRES_DB=pinehill_proof_review -e POSTGRES_USER=pinehill_user -e POSTGRES_PASSWORD=your_secure_password -p 5432:5432 -d postgres:15
```

### 3. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run migrate
npm run seed
npm run dev
```

### 4. Frontend Setup
```bash
cd frontend
npm install
npm start
```

## Environment Variables

### Backend .env
```env
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=pinehill_proof_review
DB_USER=pinehill_user
DB_PASSWORD=your_secure_password
JWT_SECRET=your_jwt_secret_key_min_32_chars_long
JWT_EXPIRATION=24h
FRONTEND_URL=http://localhost:3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=contact@pinehillpublications.com
```

### Frontend .env
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_SOCKET_URL=http://localhost:5000
REACT_APP_ENV=development
```

## Docker Deployment

```bash
docker-compose up --build
```

Services:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- PostgreSQL: localhost:5432

## Default Credentials

**Admin Account:**
- Email: admin@pinehillpublications.com
- Password: AdminPassword123!

**Test Author:**
- Email: author@example.com
- Password: AuthorPassword123!

**Test Production:**
- Email: production@example.com
- Password: ProdPassword123!

> Change these passwords immediately in production!

## Troubleshooting

### Database Connection Error
```bash
# Check PostgreSQL is running
sudo systemctl status postgresql

# Verify credentials
psql -U pinehill_user -d pinehill_proof_review
```

### Port Already in Use
```bash
# Find process on port 5000
lsof -i :5000

# Kill process
kill -9 <PID>
```

### Module Not Found
```bash
rm -rf node_modules package-lock.json
npm install
```

## Logo Setup

1. Place logo file in:
   - `frontend/public/assets/logo.png`
   - `backend/public/assets/logo.png`

2. Update branding config in:
   - `frontend/src/config/branding.ts`
   - `backend/src/config/branding.ts`

## Next Steps

1. Change default passwords
2. Configure email settings
3. Upload Pinehill Publications logo
4. Test application flow
5. Set up backups
6. Configure production deployment

## Support

contact@pinehillpublications.com