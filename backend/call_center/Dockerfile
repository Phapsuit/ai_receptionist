FROM node:14

WORKDIR /call_center

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "index.js"]
