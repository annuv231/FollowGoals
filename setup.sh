#!/bin/bash

# Install dependencies
echo "Installing dependencies..."
npm install

# Create next-env.d.ts file
echo "Creating TypeScript environment file..."
echo 'declare module "*.css";' > next-env.d.ts

# Run the development server
echo "Starting development server..."
npm run dev 