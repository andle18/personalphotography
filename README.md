# Andres Gomes Portfolio

Professional photography portfolio built with Next.js, focused on visual presentation, curated galleries, and a clean browsing experience for selected work.

Este es un portafolio profesional de fotografia construido con Next.js, enfocado en la presentacion visual, galerias curadas y una experiencia limpia para explorar proyectos seleccionados.

## English

### Project Overview

This project is a personal photography portfolio for Andres Gomes. It showcases selected series through a cinematic landing page, a horizontally scrollable work index, and dedicated gallery pages for each collection.

The application is intentionally content-driven. It does not include a CMS, authentication, or a backend contact workflow at this stage.

### Features

- Landing page with editorial-style hero section and photographer introduction
- Work index with horizontal scroll interaction
- Dedicated gallery pages by collection slug
- Mixed image source support through Cloudinary and local assets
- Animated transitions for selected work cards
- Contact page with portfolio-style inquiry form UI
- Shared footer with social links

### Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- GSAP
- Swiper
- Cloudinary

### Installation and Setup

#### Prerequisites

- Node.js 20+
- npm

#### Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in the browser.

#### Production Build

```bash
npm run build
npm run start
```

### Environment Variables

Create a `.env.local` file for Cloudinary images and Google Analytics.

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Notes:

- Local images stored in `public/` work without this variable.
- Cloudinary-based image entries require this variable to render correctly.
- `NEXT_PUBLIC_GA_ID` enables GA4 page tracking via the Next.js Google Analytics integration.
- In production, add the same variables in your hosting provider (for example, Vercel Environment Variables).

### Scripts

- `npm run dev`: Start the development server
- `npm run build`: Create a production build
- `npm run start`: Start the production server
- `npm run lint`: Run ESLint

### Project Structure

```text
app/
	components/          Reusable UI and motion components
	contact/             Contact page
	data/                Portfolio and gallery data
	work/                Work listing and gallery routes
	globals.css          Global styles
	layout.tsx           Root layout and metadata
	page.tsx             Homepage
public/                Local static assets
```

### Current Limitations

- The contact form is currently presentational and does not submit to a backend service
- Project content is managed through local TypeScript data files instead of a CMS
- There is no automated test suite yet
- Metadata and SEO can be expanded further for production-grade discoverability

### Future Improvements

- Connect the contact form to a real email or form processing service
- Add stronger SEO metadata, Open Graph tags, and structured data
- Introduce a CMS or content workflow for easier gallery updates
- Add accessibility review and keyboard interaction refinements
- Add tests for critical UI flows and data integrity
- Improve asset organization and content consistency across routes

## Espanol

### Descripcion General

Este proyecto es un portafolio personal de fotografia para Andres Gomes. Presenta series seleccionadas a traves de una home con enfoque editorial, una seccion de trabajo con scroll horizontal y paginas de galeria dedicadas para cada coleccion.

La aplicacion esta pensada principalmente como una experiencia visual. En su estado actual no incluye CMS, autenticacion ni un flujo backend para el formulario de contacto.

### Funcionalidades

- Home con hero visual y presentacion del fotografo
- Seccion de trabajos con interaccion horizontal
- Paginas de galeria por coleccion
- Soporte para imagenes desde Cloudinary y assets locales
- Transiciones animadas en tarjetas destacadas
- Pagina de contacto con interfaz de formulario
- Footer compartido con enlaces sociales

### Stack Tecnologico

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- GSAP
- Swiper
- Cloudinary

### Instalacion y Puesta en Marcha

#### Requisitos

- Node.js 20+
- npm

#### Desarrollo Local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000` en el navegador.

#### Build de Produccion

```bash
npm run build
npm run start
```

### Variables de Entorno

Crea un archivo `.env.local` para imagenes de Cloudinary y Google Analytics.

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Notas:

- Las imagenes locales dentro de `public/` funcionan sin esta variable.
- Las entradas que usan Cloudinary necesitan esta variable para renderizar correctamente.
- `NEXT_PUBLIC_GA_ID` activa el tracking de paginas de GA4 mediante la integracion de Google Analytics de Next.js.
- En produccion, agrega las mismas variables en tu proveedor de hosting (por ejemplo, Environment Variables de Vercel).

### Scripts

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Genera el build de produccion
- `npm run start`: Inicia el servidor en modo produccion
- `npm run lint`: Ejecuta ESLint

### Estructura del Proyecto

```text
app/
	components/          Componentes reutilizables de UI y animacion
	contact/             Pagina de contacto
	data/                Datos del portafolio y galerias
	work/                Rutas de trabajos y galerias
	globals.css          Estilos globales
	layout.tsx           Layout raiz y metadata
	page.tsx             Pagina principal
public/                Assets estaticos locales
```

### Limitaciones Actuales

- El formulario de contacto es solo visual y no envia datos a un servicio real
- El contenido se gestiona desde archivos TypeScript locales, no desde un CMS
- Todavia no existe una suite de tests automatizados
- El SEO y la metadata todavia pueden mejorar para un lanzamiento mas solido

### Mejoras Futuras

- Conectar el formulario de contacto a un servicio real de email o forms
- Mejorar metadata SEO, Open Graph y structured data
- Incorporar un CMS o flujo de contenido mas facil de mantener
- Revisar accesibilidad y mejorar interacciones por teclado
- Agregar tests para flujos clave y validacion de datos
- Ordenar mejor los assets y unificar la consistencia del contenido entre rutas
