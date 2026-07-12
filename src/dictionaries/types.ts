export interface HeroWord {
	text: string;
	violet?: boolean;
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
	};
	hero: {
		badge: string;
		titleWords: HeroWord[];
		titleAria: string;
		subtitle: string;
		ctaProjects: string;
		ctaContact: string;
	};
	about: {
		eyebrow: string;
		tags: string[];
		stats: { value: number; suffix: string; label: string }[];
		paragraphs: Segment[][];
		closing: string;
	};
	skills: {
		eyebrow: string;
		title: string;
		categories: { category: string; dot: string; items: string[] }[];
	};
	projects: {
		eyebrow: string;
		title: string;
		upcomingEyebrow: string;
		upcomingTitle: string;
		upcomingBadge: string;
		viewAria: string;
		items: {
			title: string;
			subtitle: string;
			description: string;
			tags: string[];
			borderColor: string;
			link?: string;
		}[];
	};
	services: {
		eyebrow: string;
		title: string;
		items: { icon: string; title: string; desc: string }[];
	};
	process: {
		eyebrow: string;
		title: string;
		steps: { title: string; desc: string }[];
	};
	contact: {
		eyebrow: string;
		titleLines: string[];
		textLines: string[];
		ctaCall: string;
		ctaWhatsapp: string;
		ctaEmail: string;
		whatsappMessage: string;
		copyPrompt: string;
		copy: string;
		copied: string;
	};
	footer: {
		note: string;
	};
}
