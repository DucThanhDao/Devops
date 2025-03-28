# Stage 1: Build the Next.js app in standalone mode
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY microservice/company-website/package*.json .
RUN npm install

# Copy source code and build
COPY microservice/company-website .

ENV NEXT_PUBLIC_STRAPI_CMS_API=https://cms.dayoneteams.com/
ENV PORT=7778
ENV NODE_ENV=production
ENV DEFAULT_LOCALE=en

RUN NEXT_TELEMETRY_DISABLED=1 npm run build

# Stage 2: Create minimal production image
FROM node:20-alpine
WORKDIR /app

# Copy only the required files from the builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

ENV NEXT_PUBLIC_STRAPI_CMS_API=https://cms.dayoneteams.com/
ENV PORT=7778
ENV NODE_ENV=production
ENV DEFAULT_LOCALE=en
# Expose port and start the server
EXPOSE 7778

CMD ["node", "server.js"]