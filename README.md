# Omnipresence - Saved Quotes Challenge

This is a starter repo for the Omnipresence 2-day take-home challenge.

## Task

Build a scalable and maintainable backend module for a "Saved Quotes" feature as outlined in the challenge PDF.

## Getting Started

### Requirements
- Node.js (v16+)
- MongoDB or PostgreSQL
- Yarn or npm

### Setup
```bash
git clone [your-forked-repo]
cd omnipresence_saved_quotes_challenge
npm install
# or
yarn install
```

Create a `.env` file in the root with relevant DB and JWT configuration.

### Running the app
```bash
npm run dev
# or
yarn dev
```

### Testing
```bash
npm test
# or
yarn test
```

## Folder Structure

- `src/routes` - Route definitions
- `src/controllers` - Business logic handlers
- `src/models` - DB models (mongoose/sequelize/typeORM)
- `src/middleware` - Auth, error handling, etc.
- `src/utils` - Utilities and helpers
- `tests` - Unit/integration tests

## Notes
- Feel free to restructure or add libraries as needed.
- Add comments where helpful.
- Document any assumptions you make in the README.

Good luck 🚀
