# Development
FROM node:20-alpine AS development

WORKDIR /usr/src/app

ENV NODE_ENV development

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

USER node

# Production build
FROM node:20-alpine AS build

WORKDIR /usr/src/app

ENV NODE_ENV production

COPY --chown=node:node package*.json ./

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

RUN npm run build

RUN npm ci --omit=dev && npm cache clean --force

USER node

# Production 
FROM node:20-alpine AS production

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

COPY --chown=node:node ./public ./public

USER node

CMD [ "npm", "run", "start:prod" ]
