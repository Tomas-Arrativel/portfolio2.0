import type { Dictionary } from "./types";

const es: Dictionary = {
	meta: {
		title: "Tomás Arrativel - Desarrollador Full Stack",
		description:
			"Desarrollador full stack con experiencia en React, Next.js, Node.js, Python y PostgreSQL. Sistemas en producción desde 2024. Disponible para trabajo remoto.",
		ogDescription:
			"Desarrollador full stack. React, Next.js, Node.js, Python y PostgreSQL. Disponible para trabajo remoto.",
		keywords: [
			"desarrollador full stack",
			"React",
			"Next.js",
			"Node.js",
			"Python",
			"TypeScript",
			"PostgreSQL",
			"trabajo remoto",
		],
	},
	nav: {
		items: [
			{ label: "Inicio", id: "hero" },
			{ label: "Sobre mí", id: "about" },
			{ label: "Proyectos", id: "projects" },
			{ label: "Stack", id: "skills" },
			{ label: "Experiencia", id: "experience" },
			{ label: "Contacto", id: "contact" },
		],
		toggleAria: "Cambiar idioma",
		skipToContent: "Saltar al contenido",
	},
	hero: {
		badge: "Disponible para trabajo remoto",
		greeting: "Hola, soy Tomás Arrativel",
		titleWords: [
			{ text: "Desarrollador", br: true },
			{ text: "Full", violet: true },
			{ text: "Stack", violet: true },
		],
		titleAria: "Desarrollador Full Stack",
		subtitle:
			"Construyo aplicaciones web de punta a punta: interfaces en React y Next.js, APIs en Node.js y Python, y bases PostgreSQL que ya corren en producción.",
		locationParts: ["Argentina", "GMT-3", "Español e inglés"],
		ctaProjects: "Ver proyectos",
		ctaCv: "Descargar CV",
		portraitRole: "Full Stack · TypeScript · Python",
		productionNote: {
			title: "Código en producción",
			note: "con usuarios reales, desde 2024",
		},
		stackLabel: "Trabajo a diario con",
		scrollLabel: "Scroll",
	},
	about: {
		eyebrow: "Sobre mí",
		titleLines: ["Trabajo el ciclo", "completo."],
		stats: [
			{ value: 9, suffix: "+", label: "Proyectos construidos" },
			{ value: 20, suffix: "+", label: "Tecnologías y herramientas" },
			{ value: 2, suffix: "+", label: "Años de experiencia profesional" },
		],
		paragraphs: [
			[
				{
					text: "Modelo de datos, API, interfaz y despliegue. La mayor parte de lo que construyo hoy está en ",
				},
				{
					text: "TypeScript, React, Next.js, Node.js, Python y PostgreSQL",
					highlight: true,
				},
				{ text: "." },
			],
			[
				{ text: "Desde abril de 2024 trabajo en el área de sistemas de la " },
				{ text: "Municipalidad de Gualeguay", highlight: true },
				{
					text: ": sistemas internos, código heredado y soporte a usuarios. Es código en producción, con usuarios reales.",
				},
			],
			[
				{ text: "Antes hice una " },
				{
					text: "pasantía remota como front end en Alofa Company",
					highlight: true,
				},
				{
					text: " (Indonesia): equipo distribuido, entorno íntegramente en inglés y metodología ágil.",
				},
			],
		],
		closing:
			"Antes del desarrollo trabajé en marketing digital y ecommerce. No es mi perfil técnico, pero me dio criterio de producto: entiendo para qué se construye una funcionalidad y qué métrica tiene que mover.",
		layerLabel: "capa",
		layers: [
			{
				name: "Interfaz",
				color: "#0ea5e9",
				tech: ["React", "Next.js", "Tailwind CSS"],
			},
			{
				name: "API",
				color: "#10b981",
				tech: ["Node.js", "Express", "FastAPI"],
			},
			{
				name: "Datos",
				color: "#a78bfa",
				tech: ["PostgreSQL", "Prisma", "MySQL"],
			},
			{
				name: "Despliegue",
				color: "#f59e0b",
				tech: ["Vercel", "Docker", "Git"],
			},
		],
		layersCaption:
			"Modelo de datos, API, interfaz y despliegue. Las cuatro capas, en el mismo proyecto.",
	},
	skills: {
		eyebrow: "Stack",
		title: "Con qué trabajo.",
		note: "Lo que uso hoy en proyectos reales, no todo lo que probé alguna vez.",
		categories: [
			{
				category: "Lenguajes",
				dot: "#8b5cf6",
				items: ["TypeScript", "JavaScript", "Python", "PHP", "SQL"],
			},
			{
				category: "Frontend",
				dot: "#0ea5e9",
				items: ["React", "Next.js", "Tailwind CSS", "React Native"],
			},
			{
				category: "Backend y datos",
				dot: "#10b981",
				items: [
					"Node.js",
					"Express",
					"FastAPI",
					"PostgreSQL",
					"MySQL",
					"Prisma",
					"APIs REST",
				],
			},
			{
				category: "Infraestructura",
				dot: "#f59e0b",
				items: [
					"Vercel",
					"Render",
					"Neon",
					"Docker",
					"Git",
					"Webhooks",
					"APIs de LLM",
				],
			},
		],
	},
	projects: {
		eyebrow: "Proyectos",
		title: "Lo que construí.",
		note: "Los repositorios son privados, así que en lugar de capturas muestro cómo está resuelto cada sistema por dentro.",
		featuredLabel: "Proyecto destacado",
		archLabel: "Arquitectura",
		demoLabel: "Demo",
		codeLabel: "Código",
		privateLabel: "Repositorio privado",
		items: [
			{
				title: "Iron Basic",
				subtitle:
					"SaaS de entrenamiento donde la IA no decide el plan: lo decide un motor determinístico y auditable.",
				description:
					"El problema interesante fue no dejar que el modelo decidiera el plan. La IA traduce preferencias en lenguaje natural a reglas estructuradas, y un motor determinístico las aplica.",
				bullets: [
					[
						{ text: "El modelo traduce preferencias en lenguaje natural a " },
						{ text: "reglas estructuradas", highlight: true },
						{ text: ". El motor las aplica, así que el mismo input da el mismo plan." },
					],
					[
						{ text: "Los planes multi semana se recalculan comparando " },
						{ text: "rendimiento real contra objetivo", highlight: true },
						{ text: "." },
					],
					[
						{
							text: "Pagos por webhooks con reintentos e idempotencia, registro por foto con visión artificial y PWA con notificaciones push.",
						},
					],
				],
				scene: "rules",
				tags: [
					"Next.js 14",
					"TypeScript",
					"FastAPI",
					"PostgreSQL",
					"Prisma",
					"Visión artificial",
					"PWA",
					"Webhooks",
				],
				borderColor: "#22d3ee",
				repoPrivate: true,
			},
			{
				title: "Plataforma inmobiliaria multi tenant",
				subtitle:
					"Cada inmobiliaria vive aislada sobre una única base. El tenant se resuelve en cada request y se aplica en la capa de datos, así ninguna consulta cruza el límite.",
				description:
					"Sitio público de listados con renderizado en servidor y CRM privado de propiedades, leads, contactos, reuniones y notas, con autenticación y roles vía NextAuth.",
				scene: "tenant",
				tags: [
					"Next.js 14",
					"TypeScript",
					"Express",
					"Prisma",
					"PostgreSQL",
					"NextAuth",
				],
				borderColor: "#ec4899",
				repoPrivate: true,
			},
			{
				title: "CRM con agente conversacional",
				subtitle:
					"API en FastAPI y CRM en Next.js sobre la misma base: un solo estado por lead. El agente califica por WhatsApp y cede el control a una persona sin perder contexto.",
				description:
					"La orquestación de flujos y reintentos va con n8n, y el override humano puede entrar en cualquier punto de la conversación.",
				scene: "agent",
				tags: [
					"FastAPI",
					"Python",
					"Next.js",
					"PostgreSQL",
					"n8n",
					"WhatsApp API",
					"APIs de LLM",
				],
				borderColor: "#10b981",
				repoPrivate: true,
			},
			{
				title: "Auditor web automatizado",
				subtitle:
					"Cruza rendimiento, píxeles de seguimiento y datos de contacto en una pasada. Si una fuente falla, el informe sale igual y marca qué falta en lugar de romperse.",
				description:
					"Con los datos crudos arma un informe en lenguaje natural usando la API de Anthropic.",
				scene: "audit",
				tags: ["Python", "PageSpeed API", "API de Anthropic", "Scraping"],
				borderColor: "#f59e0b",
				repoPrivate: true,
			},
			{
				title: "Ecommerce y sistemas de venta",
				subtitle:
					"Tienda headless con Next.js y un catálogo de más de 1.300 productos con precios mayorista y minorista resueltos en el modelo de datos, no duplicando el catálogo.",
				description:
					"Incluye integración de pagos y sincronización de stock por webhooks.",
				scene: "shop",
				tags: ["Next.js", "TypeScript", "Headless", "Webhooks", "Pagos"],
				borderColor: "#8b5cf6",
				repoPrivate: true,
			},
		],
	},
	experience: {
		eyebrow: "Experiencia",
		title: "Dónde trabajé.",
		note: "Dos años de trabajo remoto y presencial, en español e inglés.",
		currentLabel: "En curso",
		jobs: [
			{
				role: "Desarrollador Full Stack",
				org: "Municipalidad de Gualeguay",
				period: "Abril 2024 · Presente",
				current: true,
				sealText: "MG",
				desc: "Desarrollo y mantenimiento de sistemas internos, trabajo sobre código heredado y soporte a usuarios de las distintas áreas.",
				tags: ["PHP", "MySQL", "JavaScript"],
			},
			{
				role: "Desarrollo independiente",
				org: "Proyectos propios",
				period: "2025 · Presente",
				current: true,
				desc: "Aplicaciones full stack completas: SaaS con pagos y modelos de lenguaje, plataformas multi tenant, CRM y agentes conversacionales.",
				tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
			},
			{
				role: "Desarrollador Front End, pasantía remota",
				org: "Alofa Company, Indonesia",
				period: "Nov 2023 · Marzo 2024",
				sealText: "AC",
				desc: "Componentes y vistas responsivas a partir de diseños en Figma, y contribución al lanzamiento del MVP de una PWA. Equipo internacional, entorno íntegramente en inglés y metodología ágil.",
				tags: ["React Native", "JavaScript", "Figma", "Scrum"],
			},
		],
		educationTitle: "Formación y certificaciones",
		education: [
			{
				title: "Full-Stack Engineer",
				org: "Codecademy",
				period: "2025",
				sealIcon: "Codecademy",
			},
			{
				title: "Diplomatura Full Stack con React",
				org: "Universidad Tecnológica Nacional",
				period: "2023",
				sealText: "UTN",
			},
		],
	},
	contact: {
		eyebrow: "Contacto",
		titleLines: ["Hablemos de", "trabajo."],
		textLines: [
			"Busco posiciones remotas como desarrollador full stack.",
			"La forma más rápida de llegarme es por email.",
		],
		ctaEmail: "Escribime un email",
		ctaCv: "Descargar CV",
		copyPrompt: "O copiá mi email directamente",
		copy: "Copiar",
		copied: "Copiado",
		statusLine: [
			"Disponible para trabajo remoto",
			"Argentina, GMT-3",
			"Español e inglés",
		],
	},
	footer: {
		note: "Diseñado y construido por mí",
	},
};

export default es;
