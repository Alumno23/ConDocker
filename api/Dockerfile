FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "app.js" ]

# 1. crear dockerfile
# 2. Ejecutamos docker buil .t api . //el pto es parte del comando
# 3. Correr imagen en docker run -dp 3000:3000 api
# 4. Verificar que la imagen esta corriendo: docker ps -a
# 5. docker pull para subirla a docker hub
# 6. nuevo commit -> volver al paso 2