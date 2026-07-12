import type { Dictionary } from "./types";

const es: Dictionary = {
	meta: {
		title: "Tomás Arrativel - Developer & Builder",
		description:
			"Desarrollador, marketer y builder. Combino programación, IA y marketing digital para construir negocios y sistemas que generan resultados reales.",
		ogDescription:
			"Programación, IA y marketing digital para construir negocios que escalan.",
		keywords: [
			"desarrollador",
			"marketing digital",
			"automatización",
			"IA",
			"ecommerce",
			"Next.js",
		],
	},
	nav: {
		items: [
			{ label: "Inicio", id: "hero" },
			{ label: "Sobre mí", id: "about" },
			{ label: "Skills", id: "skills" },
			{ label: "Proyectos", id: "projects" },
			{ label: "Servicios", id: "services" },
			{ label: "Proceso", id: "process" },
			{ label: "Contacto", id: "contact" },
		],
		toggleAria: "Cambiar idioma",
	},
	hero: {
		badge: "Desarrollador · Ecommerce · Automatización con IA",
		titleWords: [
			{ text: "Automatizo" },
			{ text: "y" },
			{ text: "escalo" },
			{ text: "sistemas", violet: true },
			{ text: "que" },
			{ text: "hacen" },
			{ text: "crecer" },
			{ text: "negocios." },
		],
		titleAria: "Automatizo y escalo sistemas que hacen crecer negocios.",
		subtitle:
			"Combino desarrollo fullstack, inteligencia artificial y marketing digital para construir sistemas que generan clientes de forma constante.",
		ctaProjects: "Ver proyectos",
		ctaContact: "Contactame",
	},
	about: {
		eyebrow: "Sobre mí",
		tags: ["Argentina 🇦🇷", "21 años", "Builder"],
		stats: [
			{ value: 9, suffix: "+", label: "Proyectos construidos" },
			{ value: 30, suffix: "+", label: "Tecnologías y herramientas" },
			{ value: 3, suffix: "", label: "Marcas propias fundadas" },
		],
		paragraphs: [
			[
				{
					text: "Soy Tomás Arrativel, tengo 21 años y soy de Argentina. Combino programación, automatización con IA y marketing digital para construir sistemas que generan resultados reales.",
				},
			],
			[
				{
					text: "Actualmente trabajo en el área de sistemas de la Municipalidad de Gualeguay, donde adquirí experiencia en ",
				},
				{
					text: "PHP, MySQL, JavaScript, Bootstrap, jQuery y atención al cliente",
					highlight: true,
				},
				{ text: " en entornos reales." },
			],
			[
				{ text: "De forma autodidacta desarrollé mis habilidades en " },
				{
					text: "JavaScript, React, Next.js, Node.js, Express, Python, PostgreSQL",
					highlight: true,
				},
				{
					text: " y múltiples herramientas modernas, construyendo proyectos propios y sistemas completos desde cero.",
				},
			],
			[
				{ text: "Actualmente estoy creando una " },
				{
					text: "empresa de crecimiento para empresas de pisos epóxicos",
					highlight: true,
				},
				{ text: " y desarrollo " },
				{ text: "Iron Basic", highlight: true },
				{
					text: " (SaaS con IA para personalización a escala). En el pasado creé ecommerce propios, aplicando todo este conocimiento en entornos reales de negocio.",
				},
			],
		],
		closing:
			"Me especializo en unir tecnología y negocio: diseñar el sistema, automatizarlo y escalarlo.",
	},
	skills: {
		eyebrow: "Skills",
		title: "Stack completo.",
		categories: [
			{
				category: "Desarrollo",
				dot: "bg-violet-500",
				items: [
					"Next.js",
					"React",
					"JavaScript",
					"TypeScript",
					"Node.js",
					"Express",
					"Python",
					"PHP",
				],
			},
			{
				category: "Bases de datos",
				dot: "bg-emerald-500",
				items: ["PostgreSQL", "MySQL", "APIs REST", "Integraciones"],
			},
			{
				category: "IA & Automatización",
				dot: "bg-sky-500",
				items: [
					"Agentes de IA",
					"OpenAI",
					"Anthropic",
					"n8n / Make",
					"Automatización de procesos",
					"Workflows complejos",
				],
			},
			{
				category: "Marketing & Growth",
				dot: "bg-orange-500",
				items: [
					"Meta Ads",
					"Copywriting",
					"Funnels",
					"Lead generation",
					"Optimización de conversiones",
				],
			},
			{
				category: "Ecommerce & CRM",
				dot: "bg-pink-500",
				items: [
					"Shopify",
					"Tienda Nube",
					"Ecommerce headless",
					"GoHighLevel",
					"Email marketing",
					"WhatsApp automation",
					"Sales pipelines",
				],
			},
			{
				category: "Frontend & UI",
				dot: "bg-amber-500",
				items: ["Tailwind CSS", "Bootstrap", "Responsive design", "UX/UI"],
			},
		],
	},
	projects: {
		eyebrow: "Proyectos",
		title: "Lo que construí.",
		upcomingEyebrow: "Próximamente",
		upcomingTitle: "En lo que trabajo.",
		upcomingBadge: "Próximamente",
		viewAria: "Ver",
		items: [
			{
				title: "Agencia de crecimiento",
				subtitle: "Empresa propia · CRM + IA propios · En curso",
				description:
					"Agencia enfocada en empresas de pisos epóxicos y comercios locales. Servicio integral de crecimiento: Meta Ads, branding y desarrollo web, sobre infraestructura propia con API en Python/FastAPI, CRM en Next.js con una misma base de datos, y agentes de WhatsApp con IA para calificar y seguir leads sin perder el override humano.",
				tags: [
					"Meta Ads",
					"Branding",
					"FastAPI",
					"Next.js 14",
					"PostgreSQL",
					"n8n",
					"Evolution API",
				],
				borderColor: "#10b981",
			},
			{
				title: "Agente de IA para leads",
				subtitle: "Calificación y seguimiento automático por WhatsApp",
				description:
					"Agente conversacional que califica prospectos, hace seguimiento y registra todo automáticamente en el CRM. Opera 24/7 con workflows en n8n y permite intervención humana en cualquier momento de la conversación.",
				tags: ["IA", "WhatsApp API", "n8n", "CRM"],
				borderColor: "#0ea5e9",
			},
			{
				title: "Ecommerce + IA para distribuidora",
				subtitle: "Caso real · Mayorista y minorista",
				description:
					"Implementación completa para una distribuidora: tienda en Tienda Nube con catálogo de +1.300 productos y tablas de precio diferenciadas mayorista/minorista.",
				tags: ["Tienda Nube", "IA", "CRM", "Ecommerce B2B"],
				borderColor: "#7c3aed",
			},
			{
				title: "Sistema de prospección B2B",
				subtitle: "Outreach multicanal automatizado",
				description:
					"Sistema de prospección en frío por email y WhatsApp con secuencias de seguimiento automatizadas, pensado para generar reuniones calificadas de forma constante y predecible.",
				tags: ["Cold Email", "WhatsApp", "Automatización", "B2B"],
				borderColor: "#f97316",
			},
			{
				title: "Iron Basic",
				subtitle: "SaaS con IA · Personalización a escala",
				description:
					"Plataforma SaaS que convierte preferencias en lenguaje natural en reglas estructuradas que un motor determinístico aplica: planes multi-semana que se ajustan solos comparando rendimiento real contra objetivo, con la IA explicando cada decisión. Incluye registro por foto con visión artificial, pagos por webhooks (Hotmart), panel admin con métricas de negocio y PWA con notificaciones push.",
				tags: ["Next.js", "IA", "LLM", "Visión artificial", "PWA", "Webhooks"],
				borderColor: "#22d3ee",
			},
			{
				title: "Plataforma inmobiliaria multi-tenant",
				subtitle: "SaaS de gestión · Construido desde cero",
				description:
					"Plataforma de gestión inmobiliaria con sitio público de listados y CRM privado: propiedades, leads y contactos, reuniones y notas. Arquitectura multi-tenant construida desde cero.",
				tags: ["Next.js 14", "Express.js", "Prisma", "PostgreSQL", "NextAuth"],
				borderColor: "#ec4899",
			},
			{
				title: "Ecommerce propio",
				subtitle: "Marca construida de cero",
				description:
					"Marca de ecommerce desde cero: validación de producto, branding, creativos con IA y tienda en Shopify. Campañas de Meta Ads con foco en margen y escalabilidad mediante bundles.",
				tags: ["Shopify", "Meta Ads", "IA Generativa", "Ecommerce"],
				borderColor: "#8b5cf6",
			},
			{
				title: "Ecommerce de infoproductos",
				subtitle: "Marca propia · Marketing digital end-to-end",
				description:
					"Marca propia de infoproductos con producto digital premium vendido vía Hotmart y comunidad real de compradores. Gestión completa de Meta Ads (estructura ABO, retargeting BOF) y calendario de contenido de +96 piezas.",
				tags: ["Hotmart", "Meta Ads", "Infoproductos", "Contenido"],
				borderColor: "#f59e0b",
			},
			{
				title: "Tienda online a medida",
				subtitle: "Ecommerce con código propio · Headless",
				description:
					"Tienda construida con código propio (Next.js + checkout headless) para casos donde Shopify o Tienda Nube se quedan cortos: lógica de catálogo personalizada, performance optimizada y total control del frontend.",
				tags: ["Next.js", "Headless", "Shopify", "Tienda Nube"],
				borderColor: "#64748b",
			},
		],
	},
	services: {
		eyebrow: "Servicios",
		title: "En qué puedo ayudarte.",
		items: [
			{
				icon: "⚡",
				title: "Automatización de procesos",
				desc: "Diseño e implementación de sistemas que eliminan tareas manuales: seguimiento de leads, CRM, reportes y flujos internos completamente automatizados.",
			},
			{
				icon: "🤖",
				title: "Agentes de IA",
				desc: "Agentes que califican prospectos, responden clientes y agendan reuniones automáticamente, integrados a WhatsApp y CRM.",
			},
			{
				icon: "📈",
				title: "Generación de clientes",
				desc: "Estrategia y ejecución de campañas en Meta Ads con foco en resultados: leads calificados y crecimiento sostenido.",
			},
			{
				icon: "🛒",
				title: "Ecommerce",
				desc: "Tiendas online listas para vender, ya sea con código propio (Next.js + headless), Tienda Nube o Shopify. Producto, branding, estructura de oferta y sistema de adquisición de clientes.",
			},
			{
				icon: "💻",
				title: "Desarrollo de sistemas",
				desc: "Construcción de plataformas, landing pages y herramientas internas adaptadas a cada negocio.",
			},
			{
				icon: "📊",
				title: "CRM & ventas",
				desc: "Implementación de sistemas de gestión de clientes con pipelines, automatizaciones y seguimiento inteligente.",
			},
		],
	},
	process: {
		eyebrow: "Cómo trabajo",
		title: "Un proceso claro, de punta a punta.",
		steps: [
			{
				title: "Diagnóstico gratuito",
				desc: "Una llamada corta para entender tu negocio: dónde se pierde tiempo, dónde se escapan clientes y qué se puede automatizar. Sin compromiso.",
			},
			{
				title: "Propuesta con alcance claro",
				desc: "Te presento qué voy a construir, en cuánto tiempo y a qué costo. Todo por escrito, sin letra chica ni sorpresas a mitad de camino.",
			},
			{
				title: "Implementación con avances visibles",
				desc: "Entregas parciales que podés probar desde la primera semana. Ves el sistema funcionando mientras se construye, no al final.",
			},
			{
				title: "Soporte post-entrega",
				desc: "El sistema queda documentado y funcionando. Te acompaño después del lanzamiento con ajustes y mejoras para que siga generando resultados.",
			},
		],
	},
	contact: {
		eyebrow: "Contacto",
		titleLines: ["Trabajemos", "juntos."],
		textLines: [
			"¿Tenés un proyecto o querés escalar tu negocio?",
			"Agendá una llamada o escribime directamente.",
		],
		ctaCall: "Agendá una llamada de 15 minutos",
		ctaWhatsapp: "WhatsApp",
		ctaEmail: "Abrir email",
		whatsappMessage:
			"Hola Tomás, vi tu portfolio y me gustaría consultarte...",
		copyPrompt: "O copiá mi email directamente",
		copy: "Copiar",
		copied: "Copiado",
	},
	footer: {
		note: "Diseñado y construido por mí",
	},
};

export default es;
