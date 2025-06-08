# Etapa 1: compilar Angular
FROM node:18 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Etapa 2: servir con Nginx
FROM nginx:alpine
COPY --from=build /app/dist/saludplus/browser /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
