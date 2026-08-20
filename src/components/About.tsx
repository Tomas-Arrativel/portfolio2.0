import FadeIn from "./ui/FadeIn";
import Counter from "./ui/Counter";
import SectionBackground from "./ui/SectionBackground";
import TechIcon from "./ui/TechIcon";
import type { Dictionary } from "@/dictionaries/types";

// Glifos de las tarjetas de números. Son tres trazos, no vale traer un paquete.
const STAT_GLYPHS = [
	<path key="a" d="M4 7h16M4 12h16M4 17h10" />,
	<g key="b">
		<path d="M9 5 4 12l5 7" />
		<path d="m15 5 5 7-5 7" />
	</g>,
	<g key="c">
		<circle cx="12" cy="12" r="8" />
		<path d="M12 8v4.5l3 1.8" />
	</g>,
];

// Cada capa se corre un poco más que la anterior: da la sensación de pila.
const LAYER_OFFSET = ["md:ml-0", "md:ml-3.5", "md:ml-7", "md:ml-[42px]"];

export default function About({ dict }: { dict: Dictionary["about"] }) {
	return (
		<section id="about" className="relative py-24 md:py-28 px-6 md:px-16 lg:px-24">
			<SectionBackground id="about" mask="left" dots={0.045} />

			<div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_460px] gap-14 lg:gap-16 items-center">
				<FadeIn>
					<p className="text-xs text-violet-400 font-semibold tracking-widest uppercase">
						{dict.eyebrow}
					</p>
					<h2 className="mt-3.5 text-4xl md:text-5xl font-bold leading-[1.05] tracking-[-0.03em]">
						{dict.titleLines[0]}
						<br />
						{dict.titleLines[1]}
					</h2>
					<div
						className="w-16 h-0.5 mt-6 rounded-full"
						style={{
							background: "linear-gradient(to right, #7c3aed, transparent)",
						}}
					/>

					<div className="mt-7 flex flex-col gap-4 max-w-[620px]">
						{dict.paragraphs.map((segments, i) => (
							<p
								key={i}
								className="text-[15px] leading-[1.7] text-zinc-400 text-pretty"
							>
								{segments.map((segment, j) =>
									segment.highlight ? (
										<span key={j} className="text-zinc-100 font-medium">
											{segment.text}
										</span>
									) : (
										<span key={j}>{segment.text}</span>
									),
								)}
							</p>
						))}
					</div>

					<div className="mt-8 grid grid-cols-3 gap-3.5 max-w-[620px]">
						{dict.stats.map((stat, i) => (
							<div
								key={stat.label}
								className="flex flex-col gap-2.5 p-4 sm:p-[18px] rounded-2xl bg-white/[0.028] border border-white/[0.06]"
							>
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#a78bfa"
									strokeWidth={1.7}
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden
								>
									{STAT_GLYPHS[i]}
								</svg>
								<Counter
									value={stat.value}
									suffix={stat.suffix}
									className="font-display text-3xl md:text-[34px] font-extrabold leading-none tracking-[-0.02em] text-white"
								/>
								<p className="text-xs text-zinc-400 leading-snug">{stat.label}</p>
							</div>
						))}
					</div>

					{/* Contexto de producto: relevante, pero separado del perfil técnico. */}
					<div className="relative mt-7 max-w-[620px] pl-[54px] pr-[22px] py-5 rounded-2xl bg-violet-500/[0.055] border border-violet-500/[0.16]">
						<svg
							className="absolute left-5 top-[18px]"
							width="22"
							height="22"
							viewBox="0 0 24 24"
							fill="#a78bfa"
							fillOpacity="0.45"
							aria-hidden
						>
							<path d="M9.6 5.4c-3.4 1.5-5.6 4.6-5.6 8.4 0 3 1.8 5 4.4 5 2.3 0 4-1.6 4-3.8 0-2.1-1.5-3.7-3.5-3.7-.4 0-.9.1-1 .1.3-1.9 2-3.8 3.9-4.7l-2.2-1.3Zm9.2 0c-3.4 1.5-5.6 4.6-5.6 8.4 0 3 1.8 5 4.4 5 2.3 0 4-1.6 4-3.8 0-2.1-1.5-3.7-3.5-3.7-.4 0-.9.1-1 .1.3-1.9 2-3.8 3.9-4.7l-2.2-1.3Z" />
						</svg>
						<p className="text-[13.5px] leading-[1.65] text-violet-300 text-pretty">
							{dict.closing}
						</p>
					</div>
				</FadeIn>

				{/* Pila de capas: la prueba visual de que el ciclo está cubierto entero. */}
				<FadeIn delay={150}>
					<div className="relative rounded-[22px] bg-white/[0.022] border border-white/[0.06] overflow-hidden px-5 sm:px-6 pt-7 pb-6">
						<div
							className="absolute w-[380px] h-[380px] left-10 top-8 rounded-full bg-violet-600/[0.16] blur-[90px] pointer-events-none"
							aria-hidden
						/>
						<ul className="relative flex flex-col gap-4 md:[transform:skewY(-5deg)]">
							{dict.layers.map((layer, i) => (
								<li
									key={layer.name}
									className={`relative flex items-center justify-between gap-4 h-[82px] pl-[26px] pr-[22px] rounded-2xl border border-white/[0.09] shadow-xl ${LAYER_OFFSET[i]}`}
									style={{
										background:
											"linear-gradient(100deg, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.025) 100%)",
									}}
								>
									<span
										className="absolute left-0 top-3.5 bottom-3.5 w-[3px] rounded-full"
										style={{ background: layer.color }}
										aria-hidden
									/>
									<span className="flex flex-col gap-1 md:[transform:skewY(5deg)]">
										<span className="font-display font-bold text-base text-white">
											{layer.name}
										</span>
										<span
											className="text-[11px] tracking-[0.14em] uppercase"
											style={{ color: layer.color }}
										>
											{dict.layerLabel} {i + 1}
										</span>
									</span>
									<span className="flex items-center gap-3.5 md:[transform:skewY(5deg)]">
										{layer.tech.map((name) => (
											<TechIcon
												key={name}
												name={name}
												size={24}
												className="opacity-90"
											/>
										))}
									</span>
								</li>
							))}
						</ul>
						<p className="relative mt-8 text-center text-[12.5px] leading-relaxed text-zinc-500">
							{dict.layersCaption}
						</p>
					</div>
				</FadeIn>
			</div>
		</section>
	);
}
