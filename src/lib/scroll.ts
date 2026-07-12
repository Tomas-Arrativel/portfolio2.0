import type Lenis from "lenis";

declare global {
	interface Window {
		__lenis?: Lenis;
	}
}

// Scroll a una sección usando Lenis si está activo (fallback nativo).
export function scrollToId(id: string) {
	const el = document.getElementById(id);
	if (!el) return;
	if (window.__lenis) {
		window.__lenis.scrollTo(el, { offset: -8, duration: 1.1 });
	} else {
		el.scrollIntoView({ behavior: "smooth" });
	}
}
