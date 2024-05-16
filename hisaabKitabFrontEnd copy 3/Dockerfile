FROM node:19.6.1
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json package-lock.json ./
RUN npm install # -g npm@9.4.0
COPY . .
EXPOSE 3000
CMD ["npm","run","dev"]