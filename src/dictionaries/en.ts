import type { Dictionary } from "./types";

const en: Dictionary = {
	meta: {
		title: "Tomás Arrativel - Full Stack Developer",
		description:
			"Full stack developer working with React, Next.js, Node.js, Python and PostgreSQL. Shipping production systems since 2024. Available for remote roles.",
		ogDescription:
			"Full stack developer. React, Next.js, Node.js, Python and PostgreSQL. Available for remote roles.",
		keywords: [
			"full stack developer",
			"React",
			"Next.js",
			"Node.js",
			"Python",
			"TypeScript",
			"PostgreSQL",
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
			"I build web applications end to end: interfaces in React and Next.js, APIs in Node.js and Python, and PostgreSQL databases already running in production.",
		locationParts: ["Argentina", "GMT-3", "Spanish and English"],
		ctaProjects: "View projects",
		ctaCv: "Download CV",
		portraitRole: "Full Stack · TypeScript · Python",
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
			{ value: 9, suffix: "+", label: "Projects built" },
			{ value: 20, suffix: "+", label: "Technologies and tools" },
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
				{ text: "Since April 2024 I've worked in the IT department of the " },
				{ text: "Municipality of Gualeguay", highlight: true },
				{
					text: ": internal systems, legacy code and user support. It's production code, with real users.",
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
				items: ["TypeScript", "JavaScript", "Python", "PHP", "SQL"],
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
					"REST APIs",
				],
			},
			{
				category: "Infrastructure",
				dot: "#f59e0b",
				items: [
					"Vercel",
					"Render",
					"Neon",
					"Docker",
					"Git",
					"Webhooks",
					"LLM APIs",
				],
			},
		],
	},
	projects: {
		eyebrow: "Projects",
		title: "What I've built.",
		note: "The repositories are private, so instead of screenshots I show how each system is put together inside.",
		featuredLabel: "Featured project",
		archLabel: "Architecture",
		demoLabel: "Demo",
		codeLabel: "Code",
		privateLabel: "Private repository",
		items: [
			{
				title: "Iron Basic",
				subtitle:
					"Training SaaS where the AI doesn't decide the plan: a deterministic, auditable engine does.",
				description:
					"The interesting problem was keeping the model out of the decision. The AI translates natural-language preferences into structured rules, and a deterministic engine applies them.",
				bullets: [
					[
						{ text: "The model translates natural-language preferences into " },
						{ text: "structured rules", highlight: true },
						{ text: ". The engine applies them, so the same input gives the same plan." },
					],
					[
						{ text: "Multi-week plans are recalculated by comparing " },
						{ text: "real performance against targets", highlight: true },
						{ text: "." },
					],
					[
						{
							text: "Webhook-based payments with retries and idempotency, photo logging with computer vision and a PWA with push notifications.",
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
					"Computer vision",
					"PWA",
					"Webhooks",
				],
				borderColor: "#22d3ee",
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
				title: "CRM with a conversational agent",
				subtitle:
					"A FastAPI service and a Next.js CRM on the same database: a single state per lead. The agent qualifies leads on WhatsApp and hands control to a person without losing context.",
				description:
					"Workflow orchestration and retries run on n8n, and the human override can step in at any point in the conversation.",
				scene: "agent",
				tags: [
					"FastAPI",
					"Python",
					"Next.js",
					"PostgreSQL",
					"n8n",
					"WhatsApp API",
					"LLM APIs",
				],
				borderColor: "#10b981",
				repoPrivate: true,
			},
			{
				title: "Automated web auditor",
				subtitle:
					"It combines performance, tracking pixels and contact data in a single pass. If a source fails, the report still ships and flags what's missing instead of breaking.",
				description:
					"From that raw data it writes a natural-language report using the Anthropic API.",
				scene: "audit",
				tags: ["Python", "PageSpeed API", "Anthropic API", "Scraping"],
				borderColor: "#f59e0b",
				repoPrivate: true,
			},
			{
				title: "Ecommerce and sales systems",
				subtitle:
					"A headless store on Next.js and a catalog of 1,300+ products with wholesale and retail pricing solved in the data model, not by duplicating the catalog.",
				description:
					"Includes payment integration and stock syncing over webhooks.",
				scene: "shop",
				tags: ["Next.js", "TypeScript", "Headless", "Webhooks", "Payments"],
				borderColor: "#8b5cf6",
				repoPrivate: true,
			},
		],
	},
	experience: {
		eyebrow: "Experience",
		title: "Where I've worked.",
		note: "Two years of remote and on-site work, in Spanish and English.",
		currentLabel: "Ongoing",
		jobs: [
			{
				role: "Full Stack Developer",
				org: "Municipality of Gualeguay",
				period: "April 2024 · Present",
				current: true,
				sealText: "MG",
				desc: "Development and maintenance of internal systems, work on legacy code and user support across departments.",
				tags: ["PHP", "MySQL", "JavaScript"],
			},
			{
				role: "Independent development",
				org: "Personal projects",
				period: "2025 · Present",
				current: true,
				desc: "Complete full stack applications: SaaS with payments and language models, multi-tenant platforms, CRM systems and conversational agents.",
				tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
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
				period: "2025",
				sealIcon: "Codecademy",
			},
			{
				title: "Full Stack with React diploma",
				org: "Universidad Tecnológica Nacional",
				period: "2023",
				sealText: "UTN",
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
