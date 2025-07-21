# Main Backend Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile
EXPOSE 4000
CMD ["pnpm", "start"]
