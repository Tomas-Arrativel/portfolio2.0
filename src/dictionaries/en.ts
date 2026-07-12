import type { Dictionary } from "./types";

const en: Dictionary = {
	meta: {
		title: "Tomás Arrativel - Developer & Builder",
		description:
			"Developer, marketer and builder. I combine programming, AI and digital marketing to build businesses and systems that deliver real results.",
		ogDescription:
			"Programming, AI and digital marketing to build businesses that scale.",
		keywords: [
			"developer",
			"digital marketing",
			"automation",
			"AI",
			"ecommerce",
			"Next.js",
		],
	},
	nav: {
		items: [
			{ label: "Home", id: "hero" },
			{ label: "About", id: "about" },
			{ label: "Skills", id: "skills" },
			{ label: "Projects", id: "projects" },
			{ label: "Services", id: "services" },
			{ label: "Process", id: "process" },
			{ label: "Contact", id: "contact" },
		],
		toggleAria: "Switch language",
	},
	hero: {
		badge: "Developer · Ecommerce · AI Automation",
		titleWords: [
			{ text: "I" },
			{ text: "automate" },
			{ text: "and" },
			{ text: "scale" },
			{ text: "systems", violet: true },
			{ text: "that" },
			{ text: "grow" },
			{ text: "businesses." },
		],
		titleAria: "I automate and scale systems that grow businesses.",
		subtitle:
			"I combine fullstack development, artificial intelligence and digital marketing to build systems that generate customers consistently.",
		ctaProjects: "View projects",
		ctaContact: "Contact me",
	},
	about: {
		eyebrow: "About me",
		tags: ["Argentina 🇦🇷", "21 years old", "Builder"],
		stats: [
			{ value: 9, suffix: "+", label: "Projects built" },
			{ value: 30, suffix: "+", label: "Technologies and tools" },
			{ value: 3, suffix: "", label: "Own brands founded" },
		],
		paragraphs: [
			[
				{
					text: "I'm Tomás Arrativel, 21 years old, from Argentina. I combine programming, AI automation and digital marketing to build systems that deliver real results.",
				},
			],
			[
				{
					text: "I currently work in the IT department of the Municipality of Gualeguay, where I gained experience with ",
				},
				{
					text: "PHP, MySQL, JavaScript, Bootstrap, jQuery and customer support",
					highlight: true,
				},
				{ text: " in real production environments." },
			],
			[
				{ text: "As a self-taught developer I built my skills in " },
				{
					text: "JavaScript, React, Next.js, Node.js, Express, Python, PostgreSQL",
					highlight: true,
				},
				{
					text: " and many modern tools, building my own projects and complete systems from scratch.",
				},
			],
			[
				{ text: "I'm currently building a " },
				{
					text: "growth company for epoxy flooring businesses",
					highlight: true,
				},
				{ text: " and developing " },
				{ text: "Iron Basic", highlight: true },
				{
					text: " (an AI-powered SaaS for personalization at scale). In the past I created my own ecommerce brands, applying all of this knowledge in real business environments.",
				},
			],
		],
		closing:
			"I specialize in connecting technology and business: designing the system, automating it and scaling it.",
	},
	skills: {
		eyebrow: "Skills",
		title: "Full stack.",
		categories: [
			{
				category: "Development",
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
				category: "Databases",
				dot: "bg-emerald-500",
				items: ["PostgreSQL", "MySQL", "REST APIs", "Integrations"],
			},
			{
				category: "AI & Automation",
				dot: "bg-sky-500",
				items: [
					"AI agents",
					"OpenAI",
					"Anthropic",
					"n8n / Make",
					"Process automation",
					"Complex workflows",
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
					"Conversion optimization",
				],
			},
			{
				category: "Ecommerce & CRM",
				dot: "bg-pink-500",
				items: [
					"Shopify",
					"Tienda Nube",
					"Headless ecommerce",
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
		eyebrow: "Projects",
		title: "What I've built.",
		upcomingEyebrow: "Coming soon",
		upcomingTitle: "What I'm working on.",
		upcomingBadge: "Coming soon",
		viewAria: "View",
		items: [
			{
				title: "Growth agency",
				subtitle: "Own company · In-house CRM + AI · Ongoing",
				description:
					"Agency focused on epoxy flooring companies and local businesses. Full growth service: Meta Ads, branding and web development, on top of in-house infrastructure with a Python/FastAPI API, a Next.js CRM sharing a single database, and AI-powered WhatsApp agents that qualify and follow up leads while keeping human override.",
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
				title: "AI agent for leads",
				subtitle: "Automatic qualification and follow-up on WhatsApp",
				description:
					"Conversational agent that qualifies prospects, follows up and logs everything automatically in the CRM. It runs 24/7 with n8n workflows and allows human takeover at any point in the conversation.",
				tags: ["AI", "WhatsApp API", "n8n", "CRM"],
				borderColor: "#0ea5e9",
			},
			{
				title: "Ecommerce + AI for a wholesaler",
				subtitle: "Real case · Wholesale and retail",
				description:
					"Full implementation for a distribution company: a Tienda Nube store with a catalog of 1,300+ products and separate wholesale/retail price lists.",
				tags: ["Tienda Nube", "AI", "CRM", "B2B Ecommerce"],
				borderColor: "#7c3aed",
			},
			{
				title: "B2B prospecting system",
				subtitle: "Automated multichannel outreach",
				description:
					"Cold outreach system over email and WhatsApp with automated follow-up sequences, designed to generate qualified meetings in a consistent, predictable way.",
				tags: ["Cold Email", "WhatsApp", "Automation", "B2B"],
				borderColor: "#f97316",
			},
			{
				title: "Iron Basic",
				subtitle: "AI-powered SaaS · Personalization at scale",
				description:
					"SaaS platform that turns natural-language preferences into structured rules applied by a deterministic engine: multi-week plans that adjust themselves by comparing real performance against targets, with AI explaining every decision. Includes photo logging with computer vision, webhook-based payments (Hotmart), an admin panel with business metrics, and an installable PWA with push notifications.",
				tags: ["Next.js", "AI", "LLM", "Computer vision", "PWA", "Webhooks"],
				borderColor: "#22d3ee",
			},
			{
				title: "Multi-tenant real estate platform",
				subtitle: "Management SaaS · Built from scratch",
				description:
					"Real estate management platform with a public listings site and a private CRM: properties, leads and contacts, meetings and notes. Multi-tenant architecture built from scratch.",
				tags: ["Next.js 14", "Express.js", "Prisma", "PostgreSQL", "NextAuth"],
				borderColor: "#ec4899",
			},
			{
				title: "Own ecommerce brand",
				subtitle: "Brand built from zero",
				description:
					"Ecommerce brand from scratch: product validation, branding, AI-generated creatives and a Shopify store. Meta Ads campaigns focused on margin and scalability through bundles.",
				tags: ["Shopify", "Meta Ads", "Generative AI", "Ecommerce"],
				borderColor: "#8b5cf6",
			},
			{
				title: "Info-products ecommerce",
				subtitle: "Own brand · End-to-end digital marketing",
				description:
					"Own info-products brand with a premium digital product sold through Hotmart and a real community of buyers. Full Meta Ads management (ABO structure, BOF retargeting) and a content calendar of 96+ pieces.",
				tags: ["Hotmart", "Meta Ads", "Info-products", "Content"],
				borderColor: "#f59e0b",
			},
			{
				title: "Custom online store",
				subtitle: "Ecommerce with custom code · Headless",
				description:
					"Store built with custom code (Next.js + headless checkout) for cases where Shopify or Tienda Nube fall short: custom catalog logic, optimized performance and full frontend control.",
				tags: ["Next.js", "Headless", "Shopify", "Tienda Nube"],
				borderColor: "#64748b",
			},
		],
	},
	services: {
		eyebrow: "Services",
		title: "How I can help you.",
		items: [
			{
				icon: "⚡",
				title: "Process automation",
				desc: "Design and implementation of systems that remove manual work: lead follow-up, CRM, reporting and fully automated internal workflows.",
			},
			{
				icon: "🤖",
				title: "AI agents",
				desc: "Agents that qualify prospects, answer customers and book meetings automatically, integrated with WhatsApp and your CRM.",
			},
			{
				icon: "📈",
				title: "Customer acquisition",
				desc: "Strategy and execution of Meta Ads campaigns focused on results: qualified leads and sustained growth.",
			},
			{
				icon: "🛒",
				title: "Ecommerce",
				desc: "Online stores ready to sell, whether with custom code (Next.js + headless), Tienda Nube or Shopify. Product, branding, offer structure and a customer acquisition system.",
			},
			{
				icon: "💻",
				title: "Systems development",
				desc: "Platforms, landing pages and internal tools built for each business.",
			},
			{
				icon: "📊",
				title: "CRM & sales",
				desc: "Customer management systems with pipelines, automations and smart follow-up.",
			},
		],
	},
	process: {
		eyebrow: "How I work",
		title: "A clear process, end to end.",
		steps: [
			{
				title: "Free diagnosis",
				desc: "A short call to understand your business: where time is being lost, where customers slip away and what can be automated. No strings attached.",
			},
			{
				title: "Proposal with a clear scope",
				desc: "I show you what I'll build, how long it will take and what it will cost. Everything in writing, no fine print and no mid-project surprises.",
			},
			{
				title: "Implementation with visible progress",
				desc: "Partial deliveries you can try from the first week. You see the system working while it's being built, not just at the end.",
			},
			{
				title: "Post-delivery support",
				desc: "The system is delivered documented and running. I stay with you after launch with adjustments and improvements so it keeps producing results.",
			},
		],
	},
	contact: {
		eyebrow: "Contact",
		titleLines: ["Let's work", "together."],
		textLines: [
			"Have a project or want to scale your business?",
			"Book a call or message me directly.",
		],
		ctaCall: "Book a 15-minute call",
		ctaWhatsapp: "WhatsApp",
		ctaEmail: "Open email",
		whatsappMessage:
			"Hi Tomás, I saw your portfolio and I'd like to ask you about...",
		copyPrompt: "Or copy my email directly",
		copy: "Copy",
		copied: "Copied",
	},
	footer: {
		note: "Designed and built by me",
	},
};

export default en;
