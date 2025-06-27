# 📰 Web de Noticias - React App

## 📌 Descripción

Aplicación web desarrollada con **React** que consume una API de noticias (https://newsapi.org o https://newsdata.io). Permite seleccionar categorías desde un formulario y visualizar noticias actualizadas en formato de tarjetas (cards).

---

## 🧩 Estructura de Componentes

- **Título**: Encabezado de la aplicación.
- **Formulario**: Incluye un `select` para elegir la categoría de noticias.
- **ListaNoticias**: Contenedor que mapea y muestra las noticias obtenidas de la API.
- **Noticia**: Componente para renderizar una noticia individual en una card.

---

## 🎯 Funcionalidades

- 🔌 Conexión a una API externa de noticias (NewsAPI o NewsData).
- 📂 Selección dinámica de **categorías** desde el `select`.
- 🧠 Renderizado dinámico de noticias al cambiar de categoría.
- 🖼️ Muestra de cada noticia en una **card** con:
  - Título
  - Imagen (si está disponible)
  - Descripción
  - Enlace al artículo original

---

## 🛠️ Tecnologías utilizadas

- **React**
- **Fetch API / Axios**
- **React Bootstrap** o **estilos CSS propios**
- **Hooks** (`useState`, `useEffect`)
- **APIs públicas**:
  - [https://newsapi.org](https://newsapi.org) – Solo funciona en desarrollo local.
  - [https://newsdata.io](https://newsdata.io/docs) – Compatible con deploys.

---

## ▶️ Cómo ejecutar el proyecto

1. Cloná este repositorio.
2. Ejecutá `npm install` para instalar las dependencias.
3. Agregá tu **API Key** en un archivo `.env`:

VITE_API_KEY=tu_clave_aqui

markdown
Copiar
Editar

4. Ejecutá la app:

npm run dev

yaml
Copiar
Editar

5. Abrí el navegador en `http://localhost:5173` (o puerto similar).

---

## 📝 Notas importantes

- ⚠️ **NewsAPI.org** solo funciona en entorno local. Si necesitás desplegar en Netlify, **usá https://newsdata.io**.
- 💡 Consultá la documentación de la API elegida para ver los endpoints disponibles y los parámetros para categorías.

---

## 🎯 Objetivo educativo

Este proyecto permite practicar:

- Consumo de APIs externas en React.
- Gestión de estado con Hooks.
- Modularización de componentes.
- Uso de formularios controlados.
- Renderizado condicional.

---

## ✍️ Autor

**Juan Manuel Blanco**

---

¡Informate en tiempo real con tu propia app de noticias! 🌐🗞️