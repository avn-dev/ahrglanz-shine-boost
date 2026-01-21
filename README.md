# Ahrglanz Shine Boost

Frontend application built with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS.

## Getting started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install and run

```sh
# Install dependencies
npm install

# Start the development server
npm run dev
```

## Scripts

- `npm run dev` - Start the Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint
- `npm run test` - Run Vitest

## Docker

Build and run the production container:

```sh
docker build -t ahrglanz-shine-boost .
docker run --rm -p 3001:3001 ahrglanz-shine-boost
```
