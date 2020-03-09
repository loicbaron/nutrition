FROM node:10.15.3

WORKDIR /app
COPY . ./
RUN npm rebuild node-sass
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]
