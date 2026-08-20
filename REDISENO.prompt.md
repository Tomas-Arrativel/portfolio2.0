# Prompt de implementación: rediseño visual del portfolio

> Pegá todo lo que sigue en una sesión nueva de Claude Code, parado en la raíz del proyecto.

---

Sos el desarrollador de este portfolio (Next.js 16, React 19, Tailwind 3, framer-motion, next/font con Syne y DM Sans, i18n es/en por diccionarios en `src/dictionaries/`). Leé `AGENTS.md` antes de escribir código: esta versión de Next tiene cambios de API respecto de lo que conocés, y la documentación está en `node_modules/next/dist/docs/`.

El objetivo es visual, no funcional: el sitio tiene buen contenido pero se ve vacío y uniforme, y un reclutador que lo abre ve seis bloques de texto casi idénticos sin una sola prueba visual. No cambies la arquitectura, los diccionarios de contenido salvo donde se indique, ni la accesibilidad ya resuelta (skip link, focus-visible, reduced-motion, scrollspy).

## Reglas transversales

1. **Nada de emoji como ícono.** Los logos de tecnología salen de `react-icons` (instalalo: `npm i react-icons`). Los íconos de interfaz que ya vienen de `lucide-react` se quedan como están. Lo que no tiene logo de marca (SQL, APIs REST, Webhooks) se dibuja como SVG propio de trazo, `stroke-width: 1.7`, grilla de 24.
2. **No agregues secciones ni copy nuevo** más allá de lo que se detalla acá. Si algo te parece que falta, decilo al final en vez de agregarlo.
3. **Nunca uses el guión largo** en el copy del sitio. Usá comas, dos puntos, punto o paréntesis.
4. Respetá el sistema actual: fondo `#0a0a0f`, superficie `rgba(255,255,255,0.03)`, borde `rgba(255,255,255,0.07)`, violeta `#7c3aed` / `#a78bfa` / `#c4b5fd`, texto `#ffffff` / `#d4d4d8` / `#a1a1aa` / `#71717a`, radio 16 a 22 px, Syne en títulos y DM Sans en texto.
5. Todo lo nuevo tiene que respetar `prefers-reduced-motion` igual que el resto, y verse bien a 390 px de ancho.

## 1. Capas de fondo reutilizables (empezá por acá)

Creá `src/components/ui/SectionBackground.tsx`, un componente cliente que renderiza tres capas absolutas con `pointer-events-none` detrás del contenido de una sección:

- **Grilla de puntos**: `background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)` con `background-size: 34px 34px` y una `mask-image` configurable por prop (`radial` para el hero, `top` para las secciones que se desvanecen hacia abajo).
- **Grano**: un `<svg>` al 100% con `<filter><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/></filter>` sobre un `<rect>`, `opacity: 0.05`, `mix-blend-mode: overlay`. Cuidado con el `id` del filtro: hacelo único por instancia con `useId()`.
- **Halos**: uno o dos divs circulares con `filter: blur(120px)` y color configurable, por defecto `rgba(124,58,237,0.10)`.

Props: `variant` ("hero" | "section"), `mask`, `glows`. Aplicalo en Hero, About, Projects, Skills, Experience y Contact. Este único componente es lo que hace que el sitio deje de verse vacío, sin agregar una palabra de contenido.

## 2. Logos de marca

Creá `src/components/ui/TechIcon.tsx`: recibe el nombre de una tecnología y devuelve el ícono de `react-icons` correspondiente, en color de marca o monocromo según una prop `tone` ("brand" | "muted"). Mapeo:

| Nombre | Ícono | Color de marca |
| --- | --- | --- |
| TypeScript | `SiTypescript` | `#3178C6` |
| JavaScript | `SiJavascript` | `#F7DF1E` |
| Python | `SiPython` | `#3776AB` |
| PHP | `SiPhp` | `#777BB4` |
| React / React Native | `SiReact` | `#61DAFB` |
| Next.js | `SiNextdotjs` | `#ffffff` (el logo es negro, en fondo oscuro va en blanco) |
| Tailwind CSS | `SiTailwindcss` | `#06B6D4` |
| Node.js | `SiNodedotjs` | `#5FA04E` |
| Express | `SiExpress` | `#e4e4e7` |
| FastAPI | `SiFastapi` | `#009688` |
| PostgreSQL | `SiPostgresql` | `#4169E1` |
| MySQL | `SiMysql` | `#4479A1` |
| Prisma | `SiPrisma` | `#c7d2fe` |
| Vercel | `SiVercel` | `#ffffff` |
| Render | `SiRender` | `#ffffff` |
| Neon | `SiNeon` | `#34D59A` |
| Docker | `SiDocker` | `#2496ED` |
| Git | `SiGit` | `#F03C2E` |
| n8n | `SiN8N` | `#EA4B71` |
| APIs de LLM | `SiAnthropic` | `#d97757` |
| Codecademy | `SiCodecademy` | `#c4b5fd` |
| SQL | glifo propio: cilindro de base de datos | `#c4b5fd` |
| APIs REST | glifo propio: dos llaves angulares | `#6ee7b7` |
| Webhooks | glifo propio: tres arcos enlazados | `#fbbf24` |

Los tres glifos propios van en `src/components/ui/GlyphIcons.tsx`, mismo formato que `BrandIcons.tsx`. Verificá los nombres de export contra `node_modules/react-icons/si/index.d.ts` antes de usarlos, porque cambian entre versiones.

## 3. Hero

- El `<h1>` pasa a ser el puesto, no el nombre: "Desarrollador" en blanco y "Full Stack" en `#a78bfa`, dos líneas, 88 px en desktop, `line-height: 0.94`, `letter-spacing: -0.035em`. Encima, en 15 px `#a1a1aa`, la línea "Hola, soy Tomás Arrativel". Mantené el `maskReveal` por palabra que ya existe y el `aria-label` con el nombre completo. Actualizá `hero.titleWords` y agregá `hero.greeting` en los dos diccionarios y en `types.ts`.
- La foto pasa de cuadrado 340 a retrato 360 × 452, radio 22: `grayscale(0.35) contrast(1.06) brightness(0.94)`, encima un duotono `linear-gradient(165deg, rgba(124,58,237,0.45), rgba(10,10,15,0.05) 42%, rgba(10,10,15,0.86))` en `mix-blend-mode: multiply`, un degradado negro de abajo hacia arriba, y grano al 14%. Dentro, abajo a la izquierda, nombre y "Full Stack · TypeScript · Python".
- Dos marcas de encuadre en violeta (esquina superior izquierda y esquina inferior derecha, trazo 2 px, 58 px de lado) fuera del marco de la foto.
- Una tarjeta flotante que se superpone al borde izquierdo de la foto: check verde en cuadrado redondeado, "Código en producción" y "con usuarios reales, desde 2024".
- Franja inferior del hero, alto 92, `border-top` al 6%: la etiqueta "Trabajo a diario con" y diez logos monocromos al 50% (TypeScript, React, Next.js, Node.js, Python, FastAPI, PostgreSQL, Prisma, Tailwind, Docker), más el indicador de scroll a la derecha. En móvil esta franja va debajo de los botones, con los logos en dos filas centradas.
- Los botones a 52 px de alto en desktop y 54 en móvil, y sumá dos botones circulares de 52 con GitHub y LinkedIn al lado del CV.

## 4. Proyectos (el cambio que más rinde)

Los cinco repos son privados y no hay demos, así que el reclutador no ve nada. La solución no son capturas: es **un diagrama SVG por proyecto**, dibujado en código, que muestra cómo está resuelto el sistema.

Creá `src/components/ui/ProjectDiagram.tsx` con cinco escenas, cada una con su `viewBox` propio, `preserveAspectRatio` por defecto y color de acento igual al `borderColor` que el proyecto ya tiene en el diccionario:

1. **Iron Basic** (`#22d3ee`, viewBox `0 0 560 300`): burbuja de texto libre a la izquierda, flecha a un bloque "Modelo LLM" y debajo un bloque `{ reglas }`, flecha a la derecha hacia una grilla de plan multi semana con mini gráfico de barras, y una flecha punteada de vuelta rotulada "rendimiento real contra objetivo".
2. **Multi tenant** (`#ec4899`, `0 0 560 220`): tres carriles de inmobiliaria a la izquierda que convergen en un escudo rotulado "tenant resuelto en cada request", y a la derecha un cilindro de base con tres franjas `tenant_a/b/c`.
3. **CRM y agentes** (`#10b981`, `0 0 560 220`): columna de burbujas de chat, dos bloques "Agente" y "Humano" con flecha de relevo entre ellos, ambos conectados al mismo cilindro rotulado "un solo estado por lead".
4. **Auditor web** (`#f59e0b`, `0 0 560 220`): anillo de puntaje al 74%, lista de cuatro fuentes con tres tildes verdes y una marcada en ámbar ("Scraping bloqueado"), flecha a una hoja de informe.
5. **Ecommerce** (`#8b5cf6`, `0 0 560 220`): grilla de seis productos, flecha a dos tarjetas de precio, "mayorista" y "minorista".

Etiquetas dentro del SVG en DM Sans 10.5 px `#8b8b94`. Definí `marker` de flecha y degradado por escena con `id` únicos (`useId()`), porque si dos escenas comparten `id` la segunda rompe.

El diagrama va dentro de un panel con radio 14, `border` al 6%, fondo `radial-gradient(120% 120% at 20% 0%, rgba(255,255,255,0.05), rgba(255,255,255,0.015) 55%, transparent)` y su propia grilla de puntos de 22 px.

Además, en `Projects.tsx`:

- El primer proyecto pasa a **destacado**: tarjeta a todo el ancho, grid `560px 1fr`, diagrama a la izquierda y texto a la derecha, con una etiqueta "Proyecto destacado" en el color del proyecto. Los otros cuatro quedan en grid de dos columnas con el diagrama como banda superior de 190 px.
- El párrafo largo del destacado pasa a **tres viñetas** con punto del color del proyecto y las frases clave en `#e4e4e7`. En los compactos, el `description` se recorta a dos o tres renglones (subtítulo corto). Esto se hace en los diccionarios: agregá `bullets?: string[]` al tipo de proyecto y acortá `description` de los cuatro compactos.
- Sumá al pie de cada tarjeta una píldora "Arquitectura" en el color del proyecto, al lado de la de "Repositorio privado".
- En el encabezado de la sección, a la derecha, una línea de 13.5 px `#71717a`: "Los repositorios son privados, así que en lugar de capturas muestro cómo está resuelto cada sistema por dentro." (y su equivalente en inglés).

## 5. Sobre mí

- Título de sección: "Trabajo el ciclo completo." en dos líneas, en vez del nombre repetido.
- A la derecha, en lugar de solo texto, una **pila de cuatro capas** con `transform: skewY(-5deg)` en el contenedor y `skewY(5deg)` en el contenido de cada capa para que el texto quede recto. Cada capa: alto 82, radio 14, barra de color a la izquierda, nombre en Syne 16, rótulo "capa N" en 11 px del color, y los logos reales a la derecha.
  1. Interfaz `#0ea5e9`: React, Next.js, Tailwind
  2. API `#10b981`: Node.js, Express, FastAPI
  3. Datos `#a78bfa`: PostgreSQL, Prisma, MySQL
  4. Despliegue `#f59e0b`: Vercel, Docker, Git
  Debajo, centrado y en 12.5 px `#71717a`: "Modelo de datos, API, interfaz y despliegue. Las cuatro capas, en el mismo proyecto."
- Los tres números pasan a tarjetas de 16 px de radio con un glifo de trazo violeta arriba, el número en Syne 34 y la etiqueta en 12 px. Mantené el `Counter` que ya existe.
- El párrafo de cierre sobre marketing pasa a un bloque con fondo `rgba(139,92,246,0.055)`, borde `rgba(139,92,246,0.16)`, radio 16 y una comilla SVG violeta al 45% arriba a la izquierda.
- Acortá los tres primeros párrafos a dos o tres renglones cada uno: hoy son demasiado largos para escanear.

## 6. Stack

- Reemplazá el punto de color de cada categoría por el mismo punto **más** el logo real de cada tecnología: cada ítem pasa de etiqueta suelta a una fila con logo de 22 px y nombre en 13.5 px, dentro de una caja de radio 11, fondo al 2.5% y borde al 5.5%.
- Cuatro columnas en desktop (`grid-cols-4`), dos en tablet, una en móvil. El punto de la categoría lleva `box-shadow: 0 0 12px <color>`.
- Debajo, una **tira de logos** monocromos al 42% de opacidad, 28 px, separación 44, con `mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)` y `border-top`/`border-bottom` al 6%. Si la animás, que sea un desplazamiento infinito lento y que se detenga con `prefers-reduced-motion`.
- Encabezado a la derecha: "Lo que uso hoy en proyectos reales, no todo lo que probé alguna vez."

## 7. Experiencia

- La línea de tiempo pasa a grid de dos columnas: `190px` para el período (alineado a la derecha, en violeta si está en curso, con una línea "En curso" en verde) y el resto para la tarjeta.
- El eje vertical arranca en violeta y se desvanece hacia abajo: `linear-gradient(to bottom, rgba(167,139,250,0.5), rgba(255,255,255,0.10) 45%, transparent)`. El nodo del puesto actual lleva halo (`box-shadow: 0 0 0 1px rgba(167,139,250,0.35)`).
- Cada puesto va dentro de una tarjeta con un **sello de organización** de 48 px a la izquierda: monograma en Syne para "MG" y "AC", y un glifo de terminal para los proyectos propios.
- En formación, el sello de Codecademy usa `SiCodecademy` y el de la UTN un monograma "UTN".

## 8. Contacto y pie

- Subrayado dibujado a mano debajo de "trabajo.": un `<path>` de trazo 4 px en `#a78bfa`, `stroke-linecap: round`, con `preserveAspectRatio="none"` para que se estire con el texto.
- Detrás de la sección, el apellido en Syne 800 a 190 px con `opacity: 0.022`, pegado al borde inferior, como textura.
- Debajo del email copiable, una línea de estado en 13 px `#71717a`: punto verde y "Disponible para trabajo remoto", separador, "Argentina, GMT-3", separador, "Español e inglés".
- El `Footer` se integra a la sección de contacto (mismo bloque, `border-top` al 6%) en vez de flotar como franja aparte.

## Orden sugerido

1. `SectionBackground` y aplicarlo en las seis secciones.
2. `TechIcon` + `GlyphIcons` + react-icons.
3. Stack (es donde los logos rinden más rápido).
4. Hero.
5. `ProjectDiagram` y el rediseño de Projects.
6. About, Experience, Contact.

Al terminar cada bloque, corré `npm run build` y `npm run lint`, y revisá la vista a 390 px antes de pasar al siguiente.
