import type { IconType } from "react-icons";
import {
	SiAnthropic,
	SiCodecademy,
	SiDocker,
	SiExpress,
	SiFastapi,
	SiGit,
	SiJavascript,
	SiMysql,
	SiN8N,
	SiNeon,
	SiNextdotjs,
	SiNodedotjs,
	SiPhp,
	SiPostgresql,
	SiPrisma,
	SiPython,
	SiReact,
	SiRender,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
} from "react-icons/si";
import { RestGlyph, SqlGlyph, WebhookGlyph } from "./GlyphIcons";

type Entry = { icon: IconType; color: string };

// Color de marca de simple-icons, salvo los logos negros: en un fondo #0a0a0f
// no se ven, así que van en blanco o en un tono claro de la misma familia.
const TECH: Record<string, Entry> = {
	typescript: { icon: SiTypescript, color: "#3178C6" },
	javascript: { icon: SiJavascript, color: "#F7DF1E" },
	python: { icon: SiPython, color: "#3776AB" },
	php: { icon: SiPhp, color: "#777BB4" },
	react: { icon: SiReact, color: "#61DAFB" },
	"react native": { icon: SiReact, color: "#61DAFB" },
	"next.js": { icon: SiNextdotjs, color: "#ffffff" },
	"tailwind css": { icon: SiTailwindcss, color: "#06B6D4" },
	"node.js": { icon: SiNodedotjs, color: "#5FA04E" },
	express: { icon: SiExpress, color: "#e4e4e7" },
	fastapi: { icon: SiFastapi, color: "#009688" },
	postgresql: { icon: SiPostgresql, color: "#4169E1" },
	mysql: { icon: SiMysql, color: "#4479A1" },
	prisma: { icon: SiPrisma, color: "#c7d2fe" },
	vercel: { icon: SiVercel, color: "#ffffff" },
	render: { icon: SiRender, color: "#ffffff" },
	neon: { icon: SiNeon, color: "#34D59A" },
	docker: { icon: SiDocker, color: "#2496ED" },
	git: { icon: SiGit, color: "#F03C2E" },
	n8n: { icon: SiN8N, color: "#EA4B71" },
	codecademy: { icon: SiCodecademy, color: "#c4b5fd" },
	"apis de llm": { icon: SiAnthropic, color: "#d97757" },
	"llm apis": { icon: SiAnthropic, color: "#d97757" },
};

// Sin logo de marca: se dibujan a mano, nunca con un emoji.
const GLYPHS: Record<string, { glyph: typeof SqlGlyph; color: string }> = {
	sql: { glyph: SqlGlyph, color: "#c4b5fd" },
	"apis rest": { glyph: RestGlyph, color: "#6ee7b7" },
	"rest apis": { glyph: RestGlyph, color: "#6ee7b7" },
	webhooks: { glyph: WebhookGlyph, color: "#fbbf24" },
};

// "Next.js 14+" y "Next.js 14" son la misma tecnología que "Next.js".
const normalize = (name: string) =>
	name
		.toLowerCase()
		.replace(/\s*\d+(\.\d+)?\+?$/, "")
		.trim();

interface TechIconProps {
	name: string;
	size?: number;
	/** "brand" usa el color de marca; "muted" deja todo en un gris parejo. */
	tone?: "brand" | "muted";
	className?: string;
}

export function hasTechIcon(name: string) {
	const key = normalize(name);
	return key in TECH || key in GLYPHS;
}

export default function TechIcon({
	name,
	size = 22,
	tone = "brand",
	className,
}: TechIconProps) {
	const key = normalize(name);
	const muted = tone === "muted";

	const glyph = GLYPHS[key];
	if (glyph) {
		const Glyph = glyph.glyph;
		return (
			<span
				className={className}
				style={{ color: muted ? "#d4d4d8" : glyph.color, display: "inline-flex" }}
			>
				<Glyph size={size} />
			</span>
		);
	}

	const entry = TECH[key];
	if (!entry) return null;

	const Icon = entry.icon;
	return (
		<Icon
			size={size}
			color={muted ? "#d4d4d8" : entry.color}
			className={className}
			aria-hidden
		/>
	);
}
