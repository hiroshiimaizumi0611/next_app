FROM node:alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build

FROM node:alpine
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app/ ./

EXPOSE 3000
CMD ["npm", "start"]
