FROM node:20-alpine

RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY backend/package.json ./backend/
COPY backend/package-lock.json ./backend/

WORKDIR /app/backend
RUN npm install

WORKDIR /app

COPY . .

#nonroot user
RUN touch /app/backend/gramatDatabase.db && \
    chown -R node:node /app

USER node

EXPOSE 3000

#dla wydanosci
ENV NODE_ENV=production

WORKDIR /app/backend

CMD ["npm", "start"]