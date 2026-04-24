# Andres Gomes Photography Portfolio

A modern, responsive photography portfolio built with Next.js, showcasing curated galleries through cinematic interactions and clean design. Features a contact form with Firebase integration for client inquiries.

Un portafolio de fotografía moderno y responsivo construido con Next.js, que muestra galerías curadas a través de interacciones cinematográficas y un diseño limpio. Incluye un formulario de contacto con integración de Firebase para consultas de clientes.

## Project Overview

This is a personal photography portfolio for Andres Gomes, designed to present selected work series in an engaging, scroll-driven interface. The site emphasizes visual storytelling with smooth animations, optimized image loading, and a minimal aesthetic that lets the photography take center stage.

Este es un portafolio personal de fotografía para Andres Gomes, diseñado para presentar series de trabajos seleccionados en una interfaz impulsada por scroll. El sitio enfatiza la narrativa visual con animaciones suaves, carga optimizada de imágenes y una estética minimalista que permite que la fotografía ocupe el centro del escenario.

## Features

- **Cinematic Landing Page**: Hero section with background image, gradient overlay, and call-to-action buttons
- **Horizontal Work Gallery**: Scrollable index of photography series with animated card interactions
- **Dedicated Gallery Pages**: Individual pages for each work collection with grid layouts
- **Contact Form**: Client inquiry form with validation, Firebase Firestore storage, and Google Analytics tracking
- **Responsive Design**: Optimized for mobile and desktop viewing
- **SEO Optimized**: Proper metadata, Open Graph, and Twitter Card support
- **Performance Focused**: Image optimization via Cloudinary, lazy loading, and efficient bundling

- **Página de Aterrizaje Cinematográfica**: Sección hero con imagen de fondo, superposición de gradiente y botones de llamada a la acción
- **Galería de Trabajo Horizontal**: Índice desplazable de series fotográficas con interacciones animadas de tarjetas
- **Páginas de Galería Dedicadas**: Páginas individuales para cada colección de trabajo con diseños de cuadrícula
- **Formulario de Contacto**: Formulario de consulta de cliente con validación, almacenamiento en Firebase Firestore y seguimiento de Google Analytics
- **Diseño Responsivo**: Optimizado para visualización en móvil y escritorio
- **Optimizado para SEO**: Soporte adecuado de metadatos, Open Graph y Twitter Card
- **Enfocado en el Rendimiento**: Optimización de imágenes vía Cloudinary, carga diferida y empaquetado eficiente

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP
- **Carousels**: Swiper
- **Images**: Cloudinary
- **Database**: Firebase Firestore
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel (recommended)

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilización**: Tailwind CSS
- **Animaciones**: GSAP
- **Carruseles**: Swiper
- **Imágenes**: Cloudinary
- **Base de Datos**: Firebase Firestore
- **Análisis**: Google Analytics 4
- **Despliegue**: Vercel (recomendado)

## Installation & Setup

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/myportfolio.git
   cd myportfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create environment variables file (see Environment Variables section below)

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Production Build

```bash
npm run build
npm run start
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Cloudinary (required for image optimization)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name

# Google Analytics 4 (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Firebase (required for contact form)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX

# Site configuration (optional)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SOCIAL_PREVIEW_ID=your_image_id
```

**Notes:**

- Cloudinary variables are required if using Cloudinary-hosted images
- Firebase variables are required for the contact form to function
- Ensure Firestore security rules allow write operations for contact form submissions
- For production deployment, set these variables in your hosting platform (Vercel, Netlify, etc.)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
app/
├── api/
│   └── contact/
│       └── route.ts          # Contact form API endpoint
├── components/
│   ├── CloudImage.tsx        # Optimized image component
│   ├── Footer.tsx            # Site footer
│   ├── WorkCard.tsx          # Work gallery card
│   ├── WorkGalleryRail.tsx   # Horizontal scroll component
│   └── ...
├── contact/
│   ├── ContactForm.tsx       # Contact form component
│   └── page.tsx              # Contact page
├── data/
│   ├── galleries.ts          # Gallery image data
│   ├── site.ts               # Work/portfolio data
│   └── work.ts               # Site configuration
├── work/
│   ├── [slug]/
│   │   └── page.tsx          # Dynamic gallery pages
│   └── page.tsx              # Work index page
├── globals.css               # Global styles
├── layout.tsx                # Root layout
└── page.tsx                  # Homepage

lib/
└── firebase.ts               # Firebase configuration

public/                       # Static assets
```

## Future Improvements

- Add unit and integration tests
- Implement rate limiting for contact form
- Add image lazy loading and progressive enhancement
- Consider migrating contact API to Firebase Admin SDK for better security
- Add dark/light theme toggle
- Implement CMS for easier content management
- Add image zoom/modal functionality
- Optimize Core Web Vitals scores further
- Add internationalization (i18n) support

## Contributing

This is a personal portfolio project. For suggestions or issues, please open a GitHub issue.

## License

This project is private and not licensed for public use.

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

- El formulario de contacto depende de una configuracion valida de Firebase / Firestore y de reglas compatibles
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
