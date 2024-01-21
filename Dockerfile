FROM node:18 AS builder
WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn prisma generate
RUN yarn build


FROM node:18 AS runner
ENV NODE_ENV=production

# https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.next/server ./.next/server
COPY --from=builder /app/.next/standalone ./

CMD ["node", "server.js"]
