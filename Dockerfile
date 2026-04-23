FROM node:20-alpine AS base

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# Prisma on Alpine needs OpenSSL and libc compatibility.
RUN apk add --no-cache libc6-compat openssl


FROM base AS deps

COPY package*.json ./
RUN npm ci


FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npx prisma generate
RUN npm run build


FROM base AS runner

WORKDIR /app
ENV NODE_ENV=production

# Run as a non-root user.
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma

USER nextjs

EXPOSE 3000

CMD ["npm", "run", "start"]
