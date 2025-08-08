#!/bin/bash

set -x

# Generate Prisma client
npx prisma generate

# Jalankan dengan nodemon
exec nodemon --legacy-watch --watch /app index.js