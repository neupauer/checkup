## Stage 1 (builder)
FROM node:14-alpine as build

ENV NODE_ENV=production
ENV NEXT_PUBLIC_DOCKER=1

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install --quiet

COPY . .

RUN npm run build

## Stage 2 (production)
FROM node:14-alpine as prod

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install --only=production --quiet && npm cache clean --force

COPY --from=build /usr/src/app/.next /usr/src/app/.next

CMD ["./node_modules/.bin/next", "start"]
