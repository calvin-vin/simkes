#!/bin/sh

set -e

npx prisma generate

node src/jobs/index.js