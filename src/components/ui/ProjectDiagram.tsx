// Diagramas de arquitectura, uno por proyecto.
//
// Los repositorios son privados y no hay demos, así que no hay capturas para
// mostrar. Estos SVG dicen cómo está resuelto cada sistema por dentro, que es
// justamente lo que un perfil técnico quiere ver, y no filtran nada del código.
//
// Los ids de marcador y degradado se derivan de la clave de la escena, que es
// única por proyecto: si dos escenas compartieran id, la segunda se rompe.

export type SceneKey = "rules" | "tenant" | "agent" | "audit" | "shop";


export type Lang = "es" | "en";

const TEXT = {
	es: {
		input: "preferencias en lenguaje natural",
		model: "Modelo LLM",
		rules: "{ reglas }",
		rulesOut: "reglas estructuradas",
		plan: "Plan multi semana",
		feedback: "rendimiento real contra objetivo",
		tenantResolved: "tenant resuelto en cada request",
		oneDatabase: "una sola base, filas aisladas",
		agent: "Agente",
		human: "Humano",
		handoff: "relevo sin perder contexto",
		oneState: "un solo estado por lead",
		pagespeed: "PageSpeed",
		pixels: "Píxeles de seguimiento",
		contacts: "Datos de contacto",
		blocked: "Scraping bloqueado",
		score: "puntaje del sitio",
		report: "informe legible",
		catalog: "catálogo de más de 1.300 productos",
		wholesale: "Precio mayorista",
		retail: "Precio minorista",
		onePriceTable: "una tabla, dos listas de precio",
	},
	en: {
		input: "natural-language preferences",
		model: "LLM model",
		rules: "{ rules }",
		rulesOut: "structured rules",
		plan: "Multi-week plan",
		feedback: "real performance against target",
		tenantResolved: "tenant resolved on every request",
		oneDatabase: "one database, rows isolated",
		agent: "Agent",
		human: "Human",
		handoff: "handoff without losing context",
		oneState: "a single state per lead",
		pagespeed: "PageSpeed",
		pixels: "Tracking pixels",
		contacts: "Contact data",
		blocked: "Scraping blocked",
		score: "site score",
		report: "readable report",
		catalog: "catalog of 1,300+ products",
		wholesale: "Wholesale price",
		retail: "Retail price",
		onePriceTable: "one table, two price lists",
	},
} as const;

type Copy = Record<keyof (typeof TEXT)["es"], string>;

const LABEL = { fontSize: 10.5, fill: "#8b8b94", letterSpacing: "0.02em" };
const LABEL_STRONG = { fontSize: 11.5, fill: "#d4d4d8", fontWeight: 600 };
const MONO = { fontFamily: "ui-monospace, monospace" };

interface SceneProps {
	color: string;
	t: Copy;
}

function Defs({ id, color }: { id: SceneKey; color: string }) {
	return (
		<defs>
			<marker
				id={`ar-${id}`}
				viewBox="0 0 10 10"
				refX="8"
				refY="5"
				markerWidth="6"
				markerHeight="6"
				orient="auto-start-reverse"
			>
				<path d="M0 0 L10 5 L0 10 z" fill={color} opacity="0.75" />
			</marker>
			<linearGradient id={`gl-${id}`} x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stopColor={color} stopOpacity="0.18" />
				<stop offset="100%" stopColor={color} stopOpacity="0.03" />
			</linearGradient>
		</defs>
	);
}

// 1. Iron Basic: lenguaje natural a reglas, y un motor determinístico que las aplica.
function Rules({ color, t }: SceneProps) {
	const arrow = "url(#ar-rules)";
	const week = [0, 1, 2, 3];
	const days = [0, 1, 2, 3, 4, 5];
	const bars = [10, 16, 13, 22, 18];

	return (
		<svg viewBox="0 0 560 300" width="100%" height="100%" fill="none" aria-hidden>
			<Defs id="rules" color={color} />

			<rect x="24" y="96" width="148" height="86" rx="12" fill="url(#gl-rules)" stroke={color} strokeOpacity="0.35" />
			<rect x="40" y="118" width="104" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.3" />
			<rect x="40" y="134" width="88" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.18" />
			<rect x="40" y="150" width="66" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.12" />
			<text x="24" y="204" style={LABEL}>{t.input}</text>

			<path d="M180 139 H222" stroke={color} strokeOpacity="0.5" strokeWidth="1.4" markerEnd={arrow} />

			<rect x="230" y="40" width="118" height="52" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.1" />
			<circle cx="252" cy="66" r="8" stroke={color} strokeOpacity="0.8" strokeWidth="1.4" />
			<circle cx="252" cy="66" r="2.6" fill={color} />
			<text x="268" y="70" style={LABEL_STRONG}>{t.model}</text>

			<rect x="230" y="106" width="118" height="96" rx="12" fill="#ffffff" fillOpacity="0.04" stroke={color} strokeOpacity="0.3" />
			<text x="244" y="130" style={{ ...MONO, fontSize: 11 }} fill={color} fillOpacity="0.9">{t.rules}</text>
			<rect x="244" y="142" width="76" height="6" rx="3" fill="#ffffff" fillOpacity="0.22" />
			<rect x="244" y="156" width="90" height="6" rx="3" fill="#ffffff" fillOpacity="0.15" />
			<rect x="244" y="170" width="60" height="6" rx="3" fill="#ffffff" fillOpacity="0.15" />
			<text x="230" y="224" style={LABEL}>{t.rulesOut}</text>
			<path d="M289 96 V102" stroke={color} strokeOpacity="0.5" strokeWidth="1.4" markerEnd={arrow} />

			<path d="M356 154 H396" stroke={color} strokeOpacity="0.5" strokeWidth="1.4" markerEnd={arrow} />

			<rect x="404" y="58" width="132" height="144" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.1" />
			<text x="418" y="80" style={LABEL_STRONG}>{t.plan}</text>
			{week.map((r) =>
				days.map((c) => {
					const on = (r + c) % 3 === 0;
					return (
						<rect
							key={`${r}-${c}`}
							x={418 + c * 19}
							y={94 + r * 20}
							width="14"
							height="14"
							rx="3.5"
							fill={on ? color : "#ffffff"}
							fillOpacity={on ? 0.55 : 0.08}
						/>
					);
				}),
			)}
			{bars.map((h, i) => (
				<rect key={i} x={418 + i * 19} y={186 - h} width="12" height={h} rx="2" fill={color} fillOpacity="0.38" />
			))}

			<path
				d="M470 214 C470 252, 289 252, 289 216"
				stroke={color}
				strokeOpacity="0.42"
				strokeWidth="1.3"
				strokeDasharray="4 4"
				markerEnd={arrow}
			/>
			<text x="316" y="268" style={LABEL}>{t.feedback}</text>
		</svg>
	);
}

// 2. Multi tenant: varias inmobiliarias, una sola base, el límite aplicado en cada request.
function Tenant({ color, t }: SceneProps) {
	const lanes = [0, 1, 2];

	return (
		<svg viewBox="0 0 560 220" width="100%" height="100%" fill="none" aria-hidden>
			<Defs id="tenant" color={color} />

			{lanes.map((i) => (
				<g key={i}>
					<rect x="20" y={28 + i * 56} width="118" height="42" rx="11" fill="url(#gl-tenant)" stroke={color} strokeOpacity="0.28" />
					<circle cx="42" cy={49 + i * 56} r="7" fill={color} fillOpacity="0.55" />
					<rect x="58" y={44 + i * 56} width="58" height="6" rx="3" fill="#ffffff" fillOpacity="0.28" />
					<rect x="58" y={55 + i * 56} width="36" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.14" />
					<path
						d={`M146 ${49 + i * 56} C186 ${49 + i * 56}, 196 110, 236 110`}
						stroke={color}
						strokeOpacity="0.4"
						strokeWidth="1.3"
					/>
				</g>
			))}

			<rect x="238" y="76" width="96" height="68" rx="14" fill="#ffffff" fillOpacity="0.045" stroke={color} strokeOpacity="0.35" />
			<path d="M286 92 l16 8 v11 c0 10-7 17-16 21-9-4-16-11-16-21v-11z" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.12" />
			<text x="238" y="164" style={LABEL}>{t.tenantResolved}</text>

			<path d="M342 110 H382" stroke={color} strokeOpacity="0.5" strokeWidth="1.4" markerEnd="url(#ar-tenant)" />

			<ellipse cx="464" cy="52" rx="72" ry="17" fill="#ffffff" fillOpacity="0.06" stroke="#ffffff" strokeOpacity="0.12" />
			<path d="M392 52 v112 c0 9 32 17 72 17 s72-8 72-17 V52" fill="#ffffff" fillOpacity="0.03" stroke="#ffffff" strokeOpacity="0.12" />
			{lanes.map((i) => (
				<g key={i}>
					<rect x="410" y={76 + i * 30} width="108" height="20" rx="6" fill={color} fillOpacity={0.3 - i * 0.07} />
					<text x="422" y={90 + i * 30} style={{ ...MONO, fontSize: 10 }} fill="#ffffff" fillOpacity="0.75">
						{`tenant_${String.fromCharCode(97 + i)}`}
					</text>
				</g>
			))}
			<text x="392" y="204" style={LABEL}>{t.oneDatabase}</text>
		</svg>
	);
}

// 3. Agente que califica leads y cede el control a una persona sobre el mismo estado.
function Agent({ color, t }: SceneProps) {
	return (
		<svg viewBox="0 0 560 220" width="100%" height="100%" fill="none" aria-hidden>
			<Defs id="agent" color={color} />

			<rect x="20" y="18" width="176" height="184" rx="16" fill="#ffffff" fillOpacity="0.035" stroke="#ffffff" strokeOpacity="0.1" />
			<rect x="36" y="38" width="112" height="30" rx="10" fill="#ffffff" fillOpacity="0.08" />
			<rect x="48" y="48" width="76" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.28" />
			<rect x="48" y="57" width="50" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.16" />
			<rect x="68" y="78" width="112" height="30" rx="10" fill={color} fillOpacity="0.2" stroke={color} strokeOpacity="0.32" />
			<rect x="80" y="88" width="80" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.45" />
			<rect x="80" y="97" width="56" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.25" />
			<rect x="36" y="118" width="126" height="30" rx="10" fill="#ffffff" fillOpacity="0.08" />
			<rect x="48" y="128" width="90" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.28" />
			<rect x="48" y="137" width="62" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.16" />
			<rect x="68" y="158" width="112" height="26" rx="10" fill="#a78bfa" fillOpacity="0.18" stroke="#a78bfa" strokeOpacity="0.3" />
			<rect x="80" y="168" width="66" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.45" />

			<rect x="216" y="72" width="104" height="34" rx="10" fill="url(#gl-agent)" stroke={color} strokeOpacity="0.35" />
			<circle cx="236" cy="89" r="7" stroke={color} strokeWidth="1.4" />
			<circle cx="236" cy="89" r="2.4" fill={color} />
			<text x="250" y="93" style={LABEL_STRONG}>{t.agent}</text>

			<rect x="216" y="122" width="104" height="34" rx="10" fill="#a78bfa" fillOpacity="0.1" stroke="#a78bfa" strokeOpacity="0.3" />
			<circle cx="236" cy="139" r="7" stroke="#a78bfa" strokeWidth="1.4" />
			<path d="M231 146 c1.6-3.4 8.4-3.4 10 0" stroke="#a78bfa" strokeWidth="1.4" />
			<text x="250" y="143" style={LABEL_STRONG}>{t.human}</text>

			<path d="M268 110 V118" stroke="#a78bfa" strokeOpacity="0.7" strokeWidth="1.4" markerEnd="url(#ar-agent)" />
			<text x="330" y="118" style={LABEL}>{t.handoff}</text>

			<path d="M324 89 H392" stroke={color} strokeOpacity="0.45" strokeWidth="1.3" />
			<path d="M324 139 H392" stroke="#a78bfa" strokeOpacity="0.45" strokeWidth="1.3" />
			<path d="M392 89 V114 M392 139 V114 M392 114 H424" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="1.3" markerEnd="url(#ar-agent)" />

			<ellipse cx="490" cy="72" rx="52" ry="14" fill="#ffffff" fillOpacity="0.06" stroke="#ffffff" strokeOpacity="0.12" />
			<path d="M438 72 v78 c0 8 23 14 52 14 s52-6 52-14 V72" fill="#ffffff" fillOpacity="0.03" stroke="#ffffff" strokeOpacity="0.12" />
			<rect x="454" y="94" width="72" height="16" rx="5" fill={color} fillOpacity="0.28" />
			<rect x="454" y="116" width="72" height="16" rx="5" fill={color} fillOpacity="0.18" />
			<text x="438" y="186" style={LABEL}>{t.oneState}</text>
		</svg>
	);
}

// 4. Auditoría que cruza fuentes y sigue entregando informe si una falla.
function Audit({ color, t }: SceneProps) {
	const sources: [string, boolean][] = [
		[t.pagespeed, true],
		[t.pixels, true],
		[t.contacts, true],
		[t.blocked, false],
	];
	const lines = [72, 60, 68, 44, 72, 56, 64];

	return (
		<svg viewBox="0 0 560 220" width="100%" height="100%" fill="none" aria-hidden>
			<Defs id="audit" color={color} />

			<circle cx="98" cy="106" r="54" stroke="#ffffff" strokeOpacity="0.09" strokeWidth="12" />
			<path d="M98 52 a54 54 0 1 1 -46 82" stroke={color} strokeOpacity="0.85" strokeWidth="12" strokeLinecap="round" />
			<text x="98" y="112" textAnchor="middle" style={{ fontSize: 28, fontWeight: 800 }} fill="#ffffff">74</text>
			<text x="98" y="190" textAnchor="middle" style={LABEL}>{t.score}</text>

			{sources.map(([label, ok], i) => (
				<g key={label}>
					<rect
						x="196"
						y={26 + i * 40}
						width="196"
						height="30"
						rx="9"
						fill="#ffffff"
						fillOpacity="0.04"
						stroke={ok ? "#ffffff" : color}
						strokeOpacity={ok ? 0.09 : 0.4}
					/>
					{ok ? (
						<path
							d={`M214 ${41 + i * 40} l4 4 7-8`}
							stroke="#34d399"
							strokeWidth="1.8"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					) : (
						<path d={`M219 ${34 + i * 40} l7 12 h-14 z`} stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
					)}
					<text x="236" y={45 + i * 40} style={{ fontSize: 11.5 }} fill={ok ? "#d4d4d8" : color}>
						{label}
					</text>
				</g>
			))}

			<path d="M400 106 H432" stroke={color} strokeOpacity="0.5" strokeWidth="1.4" markerEnd="url(#ar-audit)" />
			<rect x="440" y="28" width="104" height="156" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.1" />
			<rect x="456" y="46" width="58" height="8" rx="4" fill="#ffffff" fillOpacity="0.35" />
			{lines.map((w, i) => (
				<rect key={i} x="456" y={68 + i * 14} width={w} height="5" rx="2.5" fill="#ffffff" fillOpacity="0.14" />
			))}
			<rect x="456" y="166" width="52" height="6" rx="3" fill={color} fillOpacity="0.5" />
			<text x="440" y="204" style={LABEL}>{t.report}</text>
		</svg>
	);
}

// 5. Catálogo grande con dos listas de precio resueltas en el modelo de datos.
function Shop({ color, t }: SceneProps) {
	const cols = [0, 1, 2];
	const rows = [0, 1];

	return (
		<svg viewBox="0 0 560 220" width="100%" height="100%" fill="none" aria-hidden>
			<Defs id="shop" color={color} />

			{cols.map((c) =>
				rows.map((r) => (
					<g key={`${c}-${r}`}>
						<rect x={24 + c * 108} y={20 + r * 88} width="96" height="80" rx="11" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.09" />
						<rect
							x={36 + c * 108}
							y={32 + r * 88}
							width="72"
							height="34"
							rx="7"
							fill={color}
							fillOpacity={0.1 + ((c + r) % 3) * 0.06}
						/>
						<rect x={36 + c * 108} y={74 + r * 88} width="52" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.24" />
						<rect x={36 + c * 108} y={85 + r * 88} width="32" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.13" />
					</g>
				)),
			)}
			<text x="24" y="208" style={LABEL}>{t.catalog}</text>

			<path d="M356 110 H392" stroke={color} strokeOpacity="0.5" strokeWidth="1.4" markerEnd="url(#ar-shop)" />

			<rect x="400" y="42" width="140" height="56" rx="12" fill="url(#gl-shop)" stroke={color} strokeOpacity="0.32" />
			<text x="416" y="66" style={LABEL_STRONG}>{t.wholesale}</text>
			<rect x="416" y="76" width="60" height="7" rx="3.5" fill={color} fillOpacity="0.55" />

			<rect x="400" y="112" width="140" height="56" rx="12" fill="#ffffff" fillOpacity="0.04" stroke="#ffffff" strokeOpacity="0.1" />
			<text x="416" y="136" style={LABEL_STRONG}>{t.retail}</text>
			<rect x="416" y="146" width="44" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.3" />

			<text x="400" y="190" style={LABEL}>{t.onePriceTable}</text>
		</svg>
	);
}

const SCENES: Record<SceneKey, (props: SceneProps) => React.ReactElement> = {
	rules: Rules,
	tenant: Tenant,
	agent: Agent,
	audit: Audit,
	shop: Shop,
};

export default function ProjectDiagram({
	scene,
	color,
	lang,
}: {
	scene: SceneKey;
	color: string;
	lang: Lang;
}) {
	const Scene = SCENES[scene];
	return <Scene color={color} t={TEXT[lang]} />;
}
