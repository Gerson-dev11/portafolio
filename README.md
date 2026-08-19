# Developer Portfolio

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

Un portafolio web moderno, interactivo y completamente responsivo, diseñado para exhibir mi experiencia, proyectos y stack tecnológico como desarrollador Full Stack. Construido con un enfoque en el rendimiento, código limpio y animaciones fluidas.

**Demo en vivo:** [Visitar Portafolio](https://gerson-dev11.github.io/developer-portfolio/)

## Stack Tecnológico y Herramientas

Este proyecto fue inicializado con **Vite** para garantizar tiempos de carga y construcción ultrarrápidos.

*   **Core:** React 18 + TypeScript.
*   **Estilos y UI:** Tailwind CSS integrado con componentes de [shadcn/ui](https://ui.shadcn.com/) para una interfaz modular, accesible y altamente personalizable.
*   **Animaciones:** Framer Motion (utilizado para efectos de scroll, *bento grids* y transiciones de entrada).
*   **Iconografía:** Lucide React y React Icons (FontAwesome, SimpleIcons).
*   **Despliegue:** GitHub Pages.

## Arquitectura del Proyecto

El código está estructurado de manera modular para separar la interfaz de usuario, las secciones principales de la página y la lógica reutilizable:

```text
📦 src
 ┣ 📂 components
 ┃ ┗ 📂 ui          # Colección extensa de componentes base (shadcn/ui): Buttons, Cards, Dialogs, etc.
 ┣ 📂 hooks         # Custom hooks (ej. use-mobile.ts para responsive, use-toast.ts)
 ┣ 📂 lib           # Funciones utilitarias (ej. utils.ts para mergear clases de Tailwind)
 ┣ 📂 sections      # Módulos de la landing page (Hero, About, Skills, Projects, Footer)
 ┣ 📜 App.tsx       # Componente raíz y orquestador de las secciones
 ┣ 📜 index.css     # Estilos globales y variables CSS de Tailwind
 ┗ 📜 main.tsx      # Punto de entrada de React

```

## Características Destacadas del Código

* **Bento Grid Animado (`Skills.tsx`):** Implementación de una cuadrícula asimétrica utilizando `framer-motion` y el Intersection Observer API para revelar el stack técnico (Node.js, Laravel, Flutter, PostgreSQL, etc.) a medida que el usuario hace scroll.
* **Filtros Dinámicos:** Sistema de filtrado por categorías (Backend, Mobile, Cloud, DB) manejado a través del estado de React (`useState`), renderizando tarjetas de habilidades de forma condicional.
* **Componentes Reutilizables:** Uso intensivo de `Card`, `Badge` y utilidades de interfaz que mantienen consistencia visual en todo el sitio.

## Instalación y Desarrollo Local

Si deseas clonar y correr este proyecto en tu entorno local, sigue estos pasos:

1. **Clonar el repositorio:**
```bash
git clone [https://github.com/gerson-dev11/developer-portfolio.git](https://github.com/gerson-dev11/developer-portfolio.git)
cd developer-portfolio

```


2. **Instalar dependencias:**
Asegúrate de tener [Node.js](https://www.google.com/search?q=https%3A%2F%2Fnodejs.org%2F) instalado. Luego, ejecuta:
```bash
npm install

```


3. **Iniciar el servidor de desarrollo:**
```bash
npm run dev

```

El proyecto estará disponible en `http://localhost:5173`.

