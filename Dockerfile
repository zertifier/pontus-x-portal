FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Bundle app source
COPY . .

#RUN apt-get update

RUN npm install


ENTRYPOINT npm run start

# If you are building your code for production
# RUN npm ci --only=production


#RUN certbot certonly --webroot -w /usr/src/app/website --email jdavid@megatro.com --agree-tos --no-eff-email -d api.hash4life.com -d api.zertifier.com --preferred-challenges http --staging


EXPOSE 8000
