// Glifos propios para lo que no tiene logo de marca en simple-icons.
// Mismo trazo que el resto de la interfaz: 1.7, grilla de 24, extremos redondeados.

interface GlyphProps {
	size?: number;
	className?: string;
}

function Glyph({
	size = 22,
	className,
	children,
}: GlyphProps & { children: React.ReactNode }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.7}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
			aria-hidden
		>
			{children}
		</svg>
	);
}

export function SqlGlyph(props: GlyphProps) {
	return (
		<Glyph {...props}>
			<ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" />
			<path d="M4.5 5.5v13c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8v-13" />
			<path d="M4.5 12c0 1.6 3.4 2.8 7.5 2.8s7.5-1.2 7.5-2.8" />
		</Glyph>
	);
}

export function RestGlyph(props: GlyphProps) {
	return (
		<Glyph {...props}>
			<path d="M9 4 5.5 12 9 20" />
			<path d="m15 4 3.5 8L15 20" />
		</Glyph>
	);
}

export function WebhookGlyph(props: GlyphProps) {
	return (
		<Glyph {...props}>
			<path d="M9.5 8.5a3.5 3.5 0 1 1 5.2 3l2.3 4" />
			<path d="M14.5 19.5a3.5 3.5 0 1 1-1.2-5.9" />
			<path d="M6 12.5a3.5 3.5 0 1 0 3.2 5.2" />
		</Glyph>
	);
}

export function TerminalGlyph({ size = 22, className }: GlyphProps) {
	return (
		<Glyph size={size} className={className}>
			<path d="M5 7l4 4-4 4" />
			<path d="M12 16h7" />
		</Glyph>
	);
}
