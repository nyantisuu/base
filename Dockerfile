FROM node:alpine

WORKDIR /app/backend

ENV DISCORD_TOKEN=$DISCORD_TOKEN
ENV DATABASE_URL=$DATABASE_URL

COPY . .

EXPOSE 3000

RUN npm install
RUN npm run build

CMD [ "npm", "run", "start:prod" ]

