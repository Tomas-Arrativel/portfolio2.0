import type { Dictionary } from "./types";

const es: Dictionary = {
	meta: {
		title: "Tomás Arrativel - Desarrollador Full Stack",
		description:
			"Desarrollador full stack: Next.js, Python e IA aplicada. Construyo producto de punta a punta, con sistemas en producción desde 2024. Disponible para trabajo remoto.",
		ogDescription:
			"Desarrollador full stack. Next.js, Python, PostgreSQL e IA aplicada. Disponible para trabajo remoto.",
		keywords: [
			"desarrollador full stack",
			"React",
			"Next.js",
			"Node.js",
			"Python",
			"TypeScript",
			"PostgreSQL",
			"IA aplicada",
			"API de Claude",
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
			"Construyo producto de punta a punta, desde la arquitectura hasta el despliegue: interfaces en Next.js, APIs en Python y Node.js, bases PostgreSQL e IA integrada con criterio.",
		locationParts: ["Argentina", "GMT-3", "Español e inglés"],
		ctaProjects: "Ver proyectos",
		ctaCv: "Descargar CV",
		portraitRole: "Full Stack · Next.js · Python · IA",
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
			{ value: 4, suffix: "+", label: "Años programando" },
			{ value: 9, suffix: "+", label: "Proyectos construidos" },
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
				{ text: "Lancé " },
				{ text: "Iron Basic", highlight: true },
				{
					text: ", una plataforma de entrenamiento con IA que está en producción con usuarios reales. Integro IA con criterio: el modelo interpreta y explica, y las reglas de negocio, testeadas y auditables, deciden.",
				},
			],
			[
				{ text: "Desde abril de 2024 trabajo en el área de sistemas de la " },
				{ text: "Municipalidad de Gualeguay", highlight: true },
				{
					text: ": sistemas internos nuevos, bases de datos, modernización de código heredado y soporte a usuarios.",
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
				items: ["TypeScript", "JavaScript", "Python", "PHP", "SQL", "HTML y CSS"],
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
					"SQLAlchemy",
					"APIs REST",
				],
			},
			{
				category: "IA e infraestructura",
				dot: "#f59e0b",
				items: [
					"API de Claude",
					"OpenAI",
					"Salidas estructuradas",
					"Paddle",
					"PWA offline",
					"Vercel",
					"Render",
					"Docker",
					"Git",
				],
			},
		],
	},
	projects: {
		eyebrow: "Proyectos",
		title: "Lo que construí.",
		note: "Los repositorios son privados. Donde puedo muestro capturas reales de la app, y donde no, cómo está resuelto el sistema por dentro.",
		featuredLabel: "Proyecto destacado",
		archLabel: "Arquitectura",
		shotsLabel: "Capturas reales",
		demoLabel: "Ver en vivo",
		codeLabel: "Código",
		privateLabel: "Repositorio privado",
		items: [
			{
				title: "Iron Basic",
				subtitle:
					"SaaS de entrenamiento con IA, en producción con usuarios reales. El modelo interpreta y explica, y las reglas de negocio, testeadas y auditables, deciden el plan.",
				description:
					"Producto completo de punta a punta: frontend, backend, base de datos, IA, pagos e infraestructura.",
				bullets: [
					[
						{ text: "Motor de planificación " },
						{ text: "basado en reglas testeadas", highlight: true },
						{
							text: " que descuenta volumen de gimnasio según las sesiones de otro deporte de cada usuario, y recalibra las cargas cada semana con lo que realmente levantó.",
						},
					],
					[
						{ text: "Integración con la " },
						{ text: "API de Claude", highlight: true },
						{
							text: " para interpretar pedidos en lenguaje natural, importar rutinas, estimar macros desde fotos y generar resúmenes semanales.",
						},
					],
					[
						{ text: "Suscripciones con Paddle y " },
						{ text: "cupos de uso de IA por plan", highlight: true },
						{
							text: ". Locks en Postgres para que pedidos en paralelo no cobren dos veces.",
						},
					],
					[
						{
							text: "PWA con registro de entrenamientos offline y sincronización posterior, notificaciones push y panel de administración con atribución por UTMs.",
						},
					],
				],
				scene: "rules",
				shots: {
					desktop: "/projects/ironbasic-desktop.webp",
					mobile: "/projects/ironbasic-mobile.webp",
					alt: "Landing de Iron Basic y plan semanal generado por el motor de reglas",
				},
				tags: [
					"Next.js 15",
					"TypeScript",
					"FastAPI",
					"PostgreSQL",
					"Prisma",
					"API de Claude",
					"Paddle",
					"PWA",
				],
				borderColor: "#e11d2a",
				demo: "https://train.ironbasic.com/",
				repoPrivate: true,
			},
			{
				title: "Slate",
				subtitle:
					"Finanzas personales offline first. Un gasto se carga sin señal, aparece al instante y se sincroniza cuando vuelve la conexión, sin duplicados aunque el envío se repita.",
				description:
					"IndexedDB es la fuente de verdad del cliente. El servidor hace upsert por un id generado en el cliente, resuelve conflictos con last write wins y el cursor de sincronización usa el reloj del servidor.",
				scene: "rules",
				shots: {
					desktop: "/projects/slate-desktop.webp",
					mobile: "/projects/slate-mobile.webp",
					alt: "Resumen mensual de Slate en escritorio y mobile",
				},
				tags: [
					"Next.js 15",
					"React 19",
					"TypeScript",
					"IndexedDB",
					"FastAPI",
					"PostgreSQL",
					"Web Push",
				],
				borderColor: "#8b6cff",
				demo: "https://slateapp-alpha.vercel.app/",
				repoPrivate: true,
			},
			{
				title: "CRM para empresas de pisos epóxicos",
				subtitle:
					"CRM multi tenant con aislamiento real por Row Level Security de Postgres. Un agente de IA califica las consultas de WhatsApp y le cede el control a una persona sin perder el contexto.",
				description:
					"Inbox de WhatsApp, pipeline, agenda con reservas, reportes y automatizaciones, con webhooks idempotentes y bloqueo por remitente.",
				scene: "agent",
				shots: {
					desktop: "/projects/crm-desktop.webp",
					mobile: "/projects/crm-mobile.webp",
					alt: "Pipeline del CRM en escritorio y mobile",
				},
				tags: [
					"Next.js 16",
					"TypeScript",
					"Prisma",
					"PostgreSQL",
					"FastAPI",
					"WhatsApp API",
					"OpenAI",
				],
				borderColor: "#9fe050",
				demo: "https://crm.alvessir.com/",
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
				title: "Kairotax",
				subtitle:
					"SaaS multi tenant para estudios contables, en desarrollo. Cartera de clientes, vencimientos, cierre mensual, IVA e Ingresos Brutos, y facturación electrónica conectada a ARCA.",
				description:
					"La integración con ARCA firma el ticket de acceso como CMS/PKCS#7 desde Node, sin OpenSSL, y guarda los certificados cifrados con AES-256-GCM. Los importes usan decimales exactos, nunca floats.",
				scene: "tenant",
				shots: {
					desktop: "/projects/kairotax-desktop.webp",
					mobile: "/projects/kairotax-mobile.webp",
					alt: "Calendario de vencimientos y cartera de clientes de Kairotax",
				},
				tags: [
					"Next.js 16",
					"TypeScript",
					"PostgreSQL",
					"Drizzle",
					"Better Auth",
					"API de Claude",
					"SOAP",
				],
				borderColor: "#38bdf8",
				repoPrivate: true,
			},
		],
	},
	experience: {
		eyebrow: "Experiencia",
		title: "Dónde trabajé.",
		note: "Más de cuatro años programando y producto propio en producción, en español e inglés.",
		currentLabel: "En curso",
		jobs: [
			{
				role: "Fundador y desarrollador",
				org: "Iron Basic",
				period: "Junio 2026 · Presente",
				current: true,
				sealText: "IB",
				desc: "Plataforma de entrenamiento y nutrición con IA. Diseñé y desarrollé el producto completo: frontend, backend, base de datos, IA, pagos e infraestructura.",
				tags: ["Next.js", "FastAPI", "PostgreSQL", "API de Claude", "Paddle"],
			},
			{
				role: "Desarrollador",
				org: "Municipalidad de Gualeguay",
				period: "Abril 2024 · Presente",
				current: true,
				sealText: "MG",
				desc: "Sistemas internos nuevos para empleados municipales, desde el diseño de la base de datos hasta la interfaz. Modernización de sistemas heredados, mantenimiento de las bases de datos y soporte a usuarios internos.",
				tags: ["PHP", "MySQL", "JavaScript"],
			},
			{
				role: "Fundador y desarrollador",
				org: "CRM y captación de clientes",
				period: "Febrero 2026 · Presente",
				current: true,
				desc: "CRM propio en Next.js para empresas de pisos epóxicos de México y Colombia, con agentes de IA que califican las consultas por WhatsApp.",
				tags: ["Next.js", "Prisma", "PostgreSQL", "WhatsApp API"],
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
				period: "2024 · 2025",
				sealIcon: "Codecademy",
			},
			{
				title: "Diplomatura Full Stack con React",
				org: "Universidad Tecnológica Nacional",
				period: "2023",
				sealText: "UTN",
			},
			{
				title: "Marketing Digital",
				org: "CoderHouse",
				period: "2026",
				sealText: "CH",
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
