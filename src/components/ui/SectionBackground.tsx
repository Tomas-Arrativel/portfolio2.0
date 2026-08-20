import type { CSSProperties } from "react";

// Máscaras con las que se desvanece la grilla de puntos. Sin máscara la grilla
// llega hasta el borde de la sección y se nota el corte.
const MASKS = {
	hero: "radial-gradient(ellipse 85% 70% at 50% 35%, #000 35%, transparent 100%)",
	top: "linear-gradient(to bottom, #000 0%, transparent 65%)",
	left: "radial-gradient(ellipse 70% 80% at 30% 40%, #000 30%, transparent 100%)",
	center:
		"radial-gradient(ellipse 65% 60% at 50% 42%, #000 25%, transparent 100%)",
	none: undefined,
} as const;

export interface Glow {
	/** Ancho y alto de la elipse de luz, en px. */
	w: number;
	h: number;
	color: string;
	/** Posición dentro de la sección. Puede quedar fuera: no se recorta. */
	style: CSSProperties;
}

interface SectionBackgroundProps {
	/**
	 * Identificador único en todo el documento: nombra el filtro de grano.
	 * Se pasa a mano en vez de usar useId() para que el componente siga siendo
	 * de servidor, ya que no tiene nada de interactivo.
	 */
	id: string;
	mask?: keyof typeof MASKS;
	/** Opacidad de la grilla de puntos. */
	dots?: number;
	grain?: number;
	glows?: Glow[];
	/** Color de un velo que sube desde el borde inferior de la sección. */
	bottomFade?: string;
}

export default function SectionBackground({
	id,
	mask = "top",
	dots = 0.05,
	grain = 0.05,
	glows = [],
	bottomFade,
}: SectionBackgroundProps) {
	const maskImage = MASKS[mask];
	const filterId = `grain-${id}`;

	return (
		// Sin overflow-hidden a propósito: los halos tienen que poder pasar de una
		// sección a la siguiente, si no la luz se corta en línea recta en cada
		// costura. Lo horizontal lo recorta el overflow-x-hidden del <main>.
		<div className="absolute inset-0 pointer-events-none" aria-hidden>
			{glows.map((glow, i) => (
				<div
					key={i}
					className="absolute"
					style={{
						width: glow.w,
						height: glow.h,
						// Degradado en vez de círculo sólido con blur: el blur deja un
						// perímetro visible, el degradado se apaga sin borde.
						background: `radial-gradient(ellipse at center, ${glow.color} 0%, transparent 72%)`,
						...glow.style,
					}}
				/>
			))}

			{bottomFade && (
				<div
					className="absolute inset-0"
					style={{
						background: `linear-gradient(to bottom, transparent 40%, ${bottomFade} 100%)`,
					}}
				/>
			)}

			<div
				className="absolute inset-0"
				style={{
					backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,${dots}) 1px, transparent 0)`,
					backgroundSize: "34px 34px",
					WebkitMaskImage: maskImage,
					maskImage,
				}}
			/>

			{/* Grano: le saca el aspecto de degradado plano al fondo y disimula el
			    bandeado de los halos grandes. */}
			<svg
				className="absolute inset-0 w-full h-full"
				style={{ opacity: grain, mixBlendMode: "overlay" }}
			>
				<filter id={filterId}>
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.85"
						numOctaves="3"
						stitchTiles="stitch"
					/>
				</filter>
				<rect width="100%" height="100%" filter={`url(#${filterId})`} />
			</svg>
		</div>
	);
}
