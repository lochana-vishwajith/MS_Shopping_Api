From node:latest

WORKDIR /app
COPY package.json ./
COPY . .
RUN npm install

EXPOSE 5000

ENTRYPOINT [ "node","app.js" ]

