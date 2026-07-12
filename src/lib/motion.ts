import type { Variants, Transition } from "framer-motion";

// Curva única del sitio: salida rápida, frenado suave (estilo "premium").
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Spring compartido para micro-interacciones (hover, tap, magnetismo).
export const SPRING: Transition = {
	type: "spring",
	stiffness: 380,
	damping: 26,
	mass: 0.7,
};

export const SPRING_SOFT: Transition = {
	type: "spring",
	stiffness: 160,
	damping: 22,
};

// Config de viewport compartida: dispara una sola vez, un poco antes de entrar.
export const VIEWPORT = { once: true, margin: "-80px" } as const;

export const fadeUp: Variants = {
	hidden: { opacity: 0, y: 28 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.65, ease: EASE },
	},
};

export const fadeIn: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

// Contenedor que escalona a sus hijos.
export const stagger = (delayChildren = 0, staggerChildren = 0.08): Variants => ({
	hidden: {},
	visible: {
		transition: { delayChildren, staggerChildren },
	},
});

// Reveal de texto con máscara: la línea sube desde detrás de un clip.
export const maskReveal: Variants = {
	hidden: { y: "110%" },
	visible: {
		y: "0%",
		transition: { duration: 0.9, ease: EASE },
	},
};

// Item de tag dentro de una card (stagger corto).
export const tagPop: Variants = {
	hidden: { opacity: 0, y: 8, scale: 0.9 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.35, ease: EASE },
	},
};
