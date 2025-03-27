FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=7778

COPY public ./public
COPY ./.next/standalone ./
COPY ./.next/static ./.next/static

EXPOSE 7778
CMD ["node", "server.js"]