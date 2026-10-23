import type { Dictionary } from "./types";

const en: Dictionary = {
	meta: {
		title: "Tomás Arrativel - Full Stack Developer",
		description:
			"Full stack developer: Next.js, Python and applied AI. I build products end to end, with production systems since 2024. Available for remote roles.",
		ogDescription:
			"Full stack developer. Next.js, Python, PostgreSQL and applied AI. Available for remote roles.",
		keywords: [
			"full stack developer",
			"React",
			"Next.js",
			"Node.js",
			"Python",
			"TypeScript",
			"PostgreSQL",
			"applied AI",
			"Claude API",
			"remote work",
		],
	},
	nav: {
		items: [
			{ label: "Home", id: "hero" },
			{ label: "About", id: "about" },
			{ label: "Projects", id: "projects" },
			{ label: "Stack", id: "skills" },
			{ label: "Experience", id: "experience" },
			{ label: "Contact", id: "contact" },
		],
		toggleAria: "Switch language",
		skipToContent: "Skip to content",
	},
	hero: {
		badge: "Available for remote work",
		greeting: "Hi, I'm Tomás Arrativel",
		titleWords: [
			{ text: "Full", violet: true },
			{ text: "Stack", violet: true, br: true },
			{ text: "Developer" },
		],
		titleAria: "Full Stack Developer",
		subtitle:
			"I build products end to end, from architecture to deployment: interfaces in Next.js, APIs in Python and Node.js, PostgreSQL databases and AI integrated with judgment.",
		locationParts: ["Argentina", "GMT-3", "Spanish and English"],
		ctaProjects: "View projects",
		ctaCv: "Download CV",
		portraitRole: "Full Stack · Next.js · Python · AI",
		productionNote: {
			title: "Code in production",
			note: "with real users, since 2024",
		},
		stackLabel: "My daily stack",
		scrollLabel: "Scroll",
	},
	about: {
		eyebrow: "About me",
		titleLines: ["I work the whole", "lifecycle."],
		stats: [
			{ value: 4, suffix: "+", label: "Years programming" },
			{ value: 9, suffix: "+", label: "Projects built" },
			{ value: 2, suffix: "+", label: "Years of professional experience" },
		],
		paragraphs: [
			[
				{
					text: "Data model, API, interface and deployment. Most of what I build today runs on ",
				},
				{
					text: "TypeScript, React, Next.js, Node.js, Python and PostgreSQL",
					highlight: true,
				},
				{ text: "." },
			],
			[
				{ text: "I launched " },
				{ text: "Iron Basic", highlight: true },
				{
					text: ", an AI-powered training platform in production with real users. I integrate AI with judgment: the model interprets and explains, while tested, auditable business rules make the decisions.",
				},
			],
			[
				{ text: "Since April 2024 I've worked in the IT department of the " },
				{ text: "Municipality of Gualeguay", highlight: true },
				{
					text: ": new internal systems, databases, legacy modernization and user support.",
				},
			],
			[
				{ text: "Before that I did a " },
				{
					text: "remote front end internship at Alofa Company",
					highlight: true,
				},
				{
					text: " (Indonesia): a distributed team, an entirely English-speaking environment and agile methodology.",
				},
			],
		],
		closing:
			"Before moving into development I worked in digital marketing and ecommerce. It isn't my technical profile, but it gave me product judgement: I understand why a feature gets built and which metric it needs to move.",
		layerLabel: "layer",
		layers: [
			{
				name: "Interface",
				color: "#0ea5e9",
				tech: ["React", "Next.js", "Tailwind CSS"],
			},
			{
				name: "API",
				color: "#10b981",
				tech: ["Node.js", "Express", "FastAPI"],
			},
			{
				name: "Data",
				color: "#a78bfa",
				tech: ["PostgreSQL", "Prisma", "MySQL"],
			},
			{
				name: "Deployment",
				color: "#f59e0b",
				tech: ["Vercel", "Docker", "Git"],
			},
		],
		layersCaption:
			"Data model, API, interface and deployment. All four layers, in the same project.",
	},
	skills: {
		eyebrow: "Stack",
		title: "What I work with.",
		note: "What I use today on real projects, not everything I've ever tried.",
		categories: [
			{
				category: "Languages",
				dot: "#8b5cf6",
				items: ["TypeScript", "JavaScript", "Python", "PHP", "SQL", "HTML and CSS"],
			},
			{
				category: "Frontend",
				dot: "#0ea5e9",
				items: ["React", "Next.js", "Tailwind CSS", "React Native"],
			},
			{
				category: "Backend and data",
				dot: "#10b981",
				items: [
					"Node.js",
					"Express",
					"FastAPI",
					"PostgreSQL",
					"MySQL",
					"Prisma",
					"SQLAlchemy",
					"REST APIs",
				],
			},
			{
				category: "AI and infrastructure",
				dot: "#f59e0b",
				items: [
					"Claude API",
					"OpenAI",
					"Structured outputs",
					"Paddle",
					"Offline PWA",
					"Vercel",
					"Render",
					"Docker",
					"Git",
				],
			},
		],
	},
	projects: {
		eyebrow: "Projects",
		title: "What I've built.",
		note: "The repositories are private. Where I can, I show real screenshots of the app, and where I can't, how the system is put together inside.",
		featuredLabel: "Featured project",
		archLabel: "Architecture",
		shotsLabel: "Real screenshots",
		demoLabel: "Live site",
		codeLabel: "Code",
		privateLabel: "Private repository",
		items: [
			{
				title: "Iron Basic",
				subtitle:
					"AI-powered training SaaS, in production with real users. The model interprets and explains, while tested, auditable business rules decide the plan.",
				description:
					"The whole product end to end: frontend, backend, database, AI, payments and infrastructure.",
				bullets: [
					[
						{ text: "Planning engine " },
						{ text: "based on tested rules", highlight: true },
						{
							text: " that reduces gym volume according to each user's sessions in another sport, and recalibrates loads every week from what they actually lifted.",
						},
					],
					[
						{ text: "Integration with the " },
						{ text: "Claude API", highlight: true },
						{
							text: " to interpret natural-language requests, import routines, estimate macros from photos and generate weekly summaries.",
						},
					],
					[
						{ text: "Subscriptions with Paddle and " },
						{ text: "AI usage quotas per plan", highlight: true },
						{
							text: ". Postgres locks so parallel requests can't charge twice.",
						},
					],
					[
						{
							text: "A PWA with offline workout logging and later sync, push notifications and an admin dashboard with UTM attribution.",
						},
					],
				],
				scene: "rules",
				shots: {
					desktop: "/projects/ironbasic-desktop.webp",
					mobile: "/projects/ironbasic-mobile.webp",
					alt: "Iron Basic landing page and a weekly plan generated by the rules engine",
				},
				tags: [
					"Next.js 15",
					"TypeScript",
					"FastAPI",
					"PostgreSQL",
					"Prisma",
					"Claude API",
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
					"Offline-first personal finance. An expense is logged with no signal, shows up instantly and syncs when the connection returns, with no duplicates even if the push is retried.",
				description:
					"IndexedDB is the client's source of truth. The server upserts by a client-generated id, resolves conflicts with last write wins, and the sync cursor uses the server clock.",
				scene: "rules",
				shots: {
					desktop: "/projects/slate-desktop.webp",
					mobile: "/projects/slate-mobile.webp",
					alt: "Slate monthly summary on desktop and mobile",
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
				title: "CRM for epoxy flooring companies",
				subtitle:
					"A multi-tenant CRM with real isolation through Postgres Row Level Security. An AI agent qualifies WhatsApp inquiries and hands control to a person without losing context.",
				description:
					"WhatsApp inbox, pipeline, booking calendar, reports and automations, with idempotent webhooks and a per-sender lock.",
				scene: "agent",
				shots: {
					desktop: "/projects/crm-desktop.webp",
					mobile: "/projects/crm-mobile.webp",
					alt: "CRM pipeline on desktop and mobile",
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
				title: "Multi-tenant real estate platform",
				subtitle:
					"Each agency lives isolated on a single database. The tenant is resolved on every request and enforced in the data layer, so no query crosses the boundary.",
				description:
					"A server-rendered public listings site and a private CRM for properties, leads, contacts, meetings and notes, with authentication and roles through NextAuth.",
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
					"A multi-tenant SaaS for accounting firms, in development. Client portfolio, tax deadlines, monthly close, VAT and gross income tax, and electronic invoicing connected to Argentina's tax agency (ARCA).",
				description:
					"The ARCA integration signs the access ticket as CMS/PKCS#7 from Node with no OpenSSL, and stores certificates encrypted with AES-256-GCM. Amounts use exact decimals, never floats.",
				scene: "tenant",
				shots: {
					desktop: "/projects/kairotax-desktop.webp",
					mobile: "/projects/kairotax-mobile.webp",
					alt: "Kairotax tax deadline calendar and client portfolio",
				},
				tags: [
					"Next.js 16",
					"TypeScript",
					"PostgreSQL",
					"Drizzle",
					"Better Auth",
					"Claude API",
					"SOAP",
				],
				borderColor: "#38bdf8",
				repoPrivate: true,
			},
		],
	},
	experience: {
		eyebrow: "Experience",
		title: "Where I've worked.",
		note: "Four+ years of programming and my own product in production, in Spanish and English.",
		currentLabel: "Ongoing",
		jobs: [
			{
				role: "Founder and Developer",
				org: "Iron Basic",
				period: "June 2026 · Present",
				current: true,
				sealText: "IB",
				desc: "AI-powered training and nutrition platform. I designed and built the entire product: frontend, backend, database, AI, payments and infrastructure.",
				tags: ["Next.js", "FastAPI", "PostgreSQL", "Claude API", "Paddle"],
			},
			{
				role: "Developer",
				org: "Municipality of Gualeguay",
				period: "April 2024 · Present",
				current: true,
				sealText: "MG",
				desc: "New internal systems for municipal employees, from database design to the user interface. Legacy system modernization, database maintenance and support for internal users.",
				tags: ["PHP", "MySQL", "JavaScript"],
			},
			{
				role: "Founder and Developer",
				org: "CRM and client acquisition",
				period: "February 2026 · Present",
				current: true,
				desc: "A custom Next.js CRM for epoxy flooring companies in Mexico and Colombia, with AI agents that qualify WhatsApp inquiries.",
				tags: ["Next.js", "Prisma", "PostgreSQL", "WhatsApp API"],
			},
			{
				role: "Front End Developer, remote internship",
				org: "Alofa Company, Indonesia",
				period: "Nov 2023 · March 2024",
				sealText: "AC",
				desc: "Responsive components and views from Figma designs, and a contribution to the launch of a PWA MVP. International team, entirely English-speaking environment and agile methodology.",
				tags: ["React Native", "JavaScript", "Figma", "Scrum"],
			},
		],
		educationTitle: "Education and certifications",
		education: [
			{
				title: "Full-Stack Engineer",
				org: "Codecademy",
				period: "2024 · 2025",
				sealIcon: "Codecademy",
			},
			{
				title: "Full Stack with React diploma",
				org: "Universidad Tecnológica Nacional",
				period: "2023",
				sealText: "UTN",
			},
			{
				title: "Digital Marketing",
				org: "CoderHouse",
				period: "2026",
				sealText: "CH",
			},
		],
	},
	contact: {
		eyebrow: "Contact",
		titleLines: ["Let's talk about", "work."],
		textLines: [
			"I'm looking for remote full stack developer roles.",
			"The fastest way to reach me is by email.",
		],
		ctaEmail: "Send me an email",
		ctaCv: "Download CV",
		copyPrompt: "Or copy my email directly",
		copy: "Copy",
		copied: "Copied",
		statusLine: [
			"Available for remote work",
			"Argentina, GMT-3",
			"Spanish and English",
		],
	},
	footer: {
		note: "Designed and built by me",
	},
};

export default en;
