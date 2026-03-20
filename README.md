# Basquet Tournament Management System

Sistema de gestión integral para torneos de básquetbol desarrollado con React y Vite. Esta aplicación permite administrar fixtures, clubes, jugadores y noticias, ofreciendo una interfaz moderna y responsiva diseñada para administradores y usuarios.

## 🚀 Tecnologías Utilizadas

*   **Core:** React + Vite
*   **Estilos:** Tailwind CSS
*   **Enrutamiento:** React Router DOM
*   **Peticiones HTTP:** Axios
*   **Formularios:** React Hook Form
*   **UI/UX:** SweetAlert2, Swiper, React Icons

## 📋 Características Principales

### 🏀 Gestión Deportiva
*   **Fixture:** Programación de partidos, edición de resultados y gestión de jornadas.
*   **Clubes:** Administración completa de clubes participantes.
*   **Jugadores:** Gestión de plantillas y visualización de estadísticas (Top jugadores).

### 📰 Contenido y Administración
*   **Noticias:** CMS integrado para crear, editar y publicar novedades con imágenes y categorización.
*   **Autenticación:** Sistema de login seguro para el panel de administración.

## 🛠️ Instalación y Configuración

Sigue estos pasos para levantar el proyecto localmente:

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```

2.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto basándote en la configuración de los servicios:
    
    ```env
    VITE_APP_URL
    ```

3.  **Ejecutar en desarrollo:**
    ```bash
    npm run dev
    ```

## 📂 Estructura del Proyecto

*   `src/services`: Capa de integración con la API (`FixtureService`, `ClubesService`, etc.).
*   `src/pages/admin`: Componentes del panel de administración.
*   `src/components`: Componentes reutilizables de la UI.
*   `src/context`: Gestión del estado global de la aplicación.

## 🤝 Contribución

Las contribuciones son bienvenidas. Si deseas mejorar el sistema, por favor crea un Pull Request o abre un Issue para discutir los cambios.
