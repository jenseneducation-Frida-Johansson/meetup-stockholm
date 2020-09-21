# tala om vilken context (mall) vi ska använda
# vi använder en beprövad version av Node
FROM node:lts-alpine

# installera en webbserver, för att kunna serva appen
RUN npm install -g http-server
# Varför inte: npm run serve ?
# I stället för: http-server dist/ ?
# Serve-versionen är DEVELOPMENT, alltså inte optimerad

# behövs om vi vill referera till appens mapp inuti image
WORKDIR /app

# kopiera package.json och package-lock.json till ./ inuti image
COPY package*.json ./

# installera alla npm-paket (Vue m.m.)
RUN npm install

# kopiera all koden till "current working directory" i image
COPY . .

# bygga hela Vue-appen
# resultatet hamnar i mappen ./dist/ (kort för distribution)
RUN npm run build

# Vue-appen är inställd på att lyssna på port 8080
# vi måste "öppna" den
EXPOSE 8080

# Tala om vad som köras när man kör image i en container
# Detta görs varje gång man startar containern
# Starta http-server och låt den serva mappen dist
CMD [ "http-server", "dist/" ]