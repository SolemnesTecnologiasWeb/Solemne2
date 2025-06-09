# SaludPlus - Sistema de Gestión de Citas Médicas

SaludPlus es una aplicación web desarrollada en Angular para gestionar el registro, visualización y administración de citas médicas en un centro de salud.

## Funcionalidades principales

- Registro de nuevas citas médicas.
- Historial de citas con filtros por nombre (médico o paciente), estado, fechas y especialidad.
- Calendario semanal de citas.
- Visualización de próximas citas y resumen mensual/semanal.

---

## Requisitos

- Node.jsv 18
- Angular CLI
- Docker

---

## Instalación y ejecución local

1. Clona el repositorio:

git clone https://github.com/SolemnesTecnologiasWeb/Solemne2.git

cd Solemne2

2. Instala las dependencias:
npm install

3. Ejecuta el servidor de desarrollo:
ng serve

4. Abre el navegador en:
http://localhost:4200

## Ejecución con Docker

1. Genera el build de producción:
ng build --configuration production
(Esto creará los archivos compilados en la carpeta dist/saludplus/browser/)

3. Construir la imagen Docker:
docker build -t saludplus-frontend .

4. Ejecutar el contenedor:
docker run -d -p 8080:80 saludplus-frontend

5. Ver la aplicación en el navegador:
http://localhost:8080
