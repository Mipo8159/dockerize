FROM node:20-alpine as build
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm i -g @nestjs/cli
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5000

FROM node:20-alpine AS production 
WORKDIR /usr/src/app
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
COPY --from=build /usr/src/app/dist /dist
COPY ./package*.json ./
RUN npm i -g @nestjs/cli
RUN npm install --only=production
EXPOSE 5000
CMD ["node", "dist/main.js"]