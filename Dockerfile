FROM node:20-alpine AS base

WORKDIR /app

RUN apk add --no-cache \
    libc6-compat \
    openssl \
    python3 \
    make \
    g++


FROM base AS deps

COPY package*.json ./

RUN npm ci


FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Prisma generate (IMPORTANT)
RUN npx prisma generate

# # Build Next.js app
# RUN npm run build


# FROM node:20-alpine AS runner

# WORKDIR /app

# ENV NODE_ENV=production
# ENV NEXT_TELEMETRY_DISABLED=1

# # Required runtime deps for Prisma
# RUN apk add --no-cache openssl

# # Copy only what we need
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json
# COPY --from=builder /app/prisma ./prisma

# Expose Next.js port
EXPOSE 3000

# Start app
CMD ["npm", "run", "start"]
