import type { SceneKey } from "@/components/ui/ProjectDiagram";

export interface HeroWord {
	text: string;
	violet?: boolean;
	/** Corta la línea después de esta palabra. */
	br?: boolean;
}

export interface Segment {
	text: string;
	highlight?: boolean;
}

export interface Dictionary {
	meta: {
		title: string;
		description: string;
		ogDescription: string;
		keywords: string[];
	};
	nav: {
		items: { label: string; id: string }[];
		toggleAria: string;
		skipToContent: string;
	};
	hero: {
		badge: string;
		greeting: string;
		titleWords: HeroWord[];
		titleAria: string;
		subtitle: string;
		/** Ubicación, huso e idiomas, separados para mostrarlos como chips. */
		locationParts: string[];
		ctaProjects: string;
		ctaCv: string;
		portraitRole: string;
		productionNote: { title: string; note: string };
		stackLabel: string;
		scrollLabel: string;
	};
	about: {
		eyebrow: string;
		titleLines: string[];
		stats: { value: number; suffix: string; label: string }[];
		paragraphs: Segment[][];
		closing: string;
		/** Las cuatro capas del ciclo completo, de la interfaz al despliegue. */
		layerLabel: string;
		layers: { name: string; color: string; tech: string[] }[];
		layersCaption: string;
	};
	skills: {
		eyebrow: string;
		title: string;
		note: string;
		categories: { category: string; dot: string; items: string[] }[];
	};
	projects: {
		eyebrow: string;
		title: string;
		note: string;
		featuredLabel: string;
		archLabel: string;
		demoLabel: string;
		codeLabel: string;
		privateLabel: string;
		items: {
			title: string;
			subtitle: string;
			description: string;
			/** Solo el destacado desglosa el problema en viñetas. */
			bullets?: Segment[][];
			scene: SceneKey;
			tags: string[];
			borderColor: string;
			demo?: string;
			repo?: string;
			repoPrivate?: boolean;
		}[];
	};
	experience: {
		eyebrow: string;
		title: string;
		note: string;
		currentLabel: string;
		jobs: {
			role: string;
			org: string;
			period: string;
			current?: boolean;
			/** Monograma del sello. Sin esto se dibuja el glifo de terminal. */
			sealText?: string;
			desc: string;
			tags: string[];
		}[];
		educationTitle: string;
		education: {
			title: string;
			org: string;
			period: string;
			sealText?: string;
			/** Nombre para TechIcon cuando la institución tiene logo propio. */
			sealIcon?: string;
		}[];
	};
	contact: {
		eyebrow: string;
		titleLines: string[];
		textLines: string[];
		ctaEmail: string;
		ctaCv: string;
		copyPrompt: string;
		copy: string;
		copied: string;
		statusLine: string[];
	};
	footer: {
		note: string;
	};
}
