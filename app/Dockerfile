FROM node:20-alpine

WORKDIR /app

COPY package*.json /app/

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview", "--", "--host"]