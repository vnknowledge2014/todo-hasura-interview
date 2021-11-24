# TODO: package the webhooks server
FROM node:17.1.0

WORKDIR /usr/app

COPY package*.json ./

RUN npm install typescript -g

RUN npm install tsc-watch -g

RUN npm install -g glob

RUN npm install --save glob

RUN npm install

COPY . .

CMD ["npm run", "prisma:generate"]