# Caruso Fútbol Club

Proyecto de una plataforma web para la reserva de canchas de fútbol 5 y un ecommerce para la venta de productos relacionados. Desarrollado por **Equipo 2 - Rolling Code** utilizando tecnologías como React, Bootstrap, Node.js, Express y MongoDB.

## Descripción del Proyecto

Caruso Fútbol Club es una plataforma web diseñada para gestionar la reserva de canchas de fútbol y ofrecer un ecommerce para la venta de productos deportivos. El sistema incluye funcionalidades de registro y login de usuarios, y permite a los administradores realizar un CRUD de canchas, productos y usuarios.

## Tecnologías Utilizadas

- **Frontend:** React, React-Bootstrap, Vite
- **Backend:** Node.js, Express
- **Base de Datos:** MongoDB
- **Autenticación:** JSON Web Tokens (JWT), bcrypt

## Características Principales

- **Sistema de Reservas:**
  - Calendario de disponibilidad de canchas.
  - Validación para evitar reservas duplicadas.
- **Ecommerce:**
  - Catálogo de productos.
  - Carrito de compras y sistema de pago.
- **Gestión Administrativa:**
  - CRUD de productos y canchas.
  - Gestión de usuarios (eliminación, desactivación).
- **Secciones del Sitio:**
  - Página principal con información del complejo y publicidades.
  - Sección de productos relacionados.
  - "Quiénes Somos"
  - "Contacto"
  - "Galería de Imágenes"

## Estructura del Proyecto

El proyecto se encuentra en el siguiente repositorio:

https://github.com/federicojclua/Caruso-futbol-club.git


## Instalación y Configuración

### Frontend

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/federicojclua/Caruso-futbol-club.git
   ```
2. Instalar dependencias:
   ```bash
   cd frontend
   npm install
   ```
3. Ejecutar la aplicación:
   ```bash
   npm run dev
   ```

### Backend

1. Clonar el repositorio:
   ```bash
git clone https://github.com/federicojclua/Caruso-futbol-club.git   ```
2. Instalar dependencias:
   ```bash
   cd backend
   npm install
   ```
3. Configurar las variables de entorno en un archivo `.env`:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/caruso-futbol-club
   JWT_SECRET=your_jwt_secret
   ```
4. Ejecutar el servidor:
   ```bash
   npm start
   ```

## Estructura de la Base de Datos

### Usuarios
```json
{
  "_id": "ObjectId",
  "nombre": "String",
  "correo_electronico": "String",
  "contraseña": "String",
  "rol": "String"
}
```

### Productos
```json
{
  "_id": "ObjectId",
  "nombre": "String",
  "descripcion": "String",
  "precio": "Number",
  "stock": "Number",
  "imagen": "String"
}
```

### Canchas
```json
{
  "_id": "ObjectId",
  "nombre": "String",
  "ubicacion": "String",
  "disponibilidad": [
    {
      "fecha": "Date",
      "horarios": ["String"]
    }
  ]
}
```

## Funcionalidades del Sistema

- **Autenticación y Autorización:**
  - Registro e inicio de sesión con JWT y bcrypt.
- **Integración Backend-Frontend:**
  - Conexión mediante axios para realizar solicitudes HTTP.
- **CRUD de Productos y Canchas:**
  - Formularios y vistas para la gestión de productos y canchas.
- **Reserva de Canchas:**
  - Validación de fechas y horarios para evitar duplicaciones.
- **Gestión de Usuarios:**
  - Administración de usuarios registrados, con capacidad para eliminar o suspender cuentas.
- **Validaciones:**
  - Validaciones en cada acción del usuario.
- **Manejo de Errores y Códigos de Estado:**
  - Página de error 404 personalizada.
  - Manejo de códigos de estado y mensajes de error.

## Panel de Trello

El progreso del proyecto se puede seguir en nuestro [Panel de Trello](https://trello.com/invite/b/5cPjslHD/ATTI2280cc351905517a436134a0d66e1023C718A47E/caruso-futbol-club).

## Mockups

Los diseños preliminares de la interfaz están disponibles en nuestro [Mockup](https://excalidraw.com/#room=2291e712f766209e0363,yj7mJjrMp4T-KPn0h5T8ug).

## Documentación Técnica

La documentación técnica completa del proyecto se puede encontrar en el archivo `CarusoFubolClub_Documentacion.pdf`.

## Contacto

Para cualquier consulta adicional, puedes contactarnos a través del siguiente número de teléfono: +543814723141.

## Contribuidores

- **Nicolás Spuches**
- **Luis Aragón**
- **María Marcoux**
- **Carolina González**
- **Federico Clua**
- **Pablo Herrera**

## Licencia

Este proyecto está bajo la Licencia MIT.
```

### `vite.config.js`

Contenido actualizado de `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: false, 
  },
})
```
