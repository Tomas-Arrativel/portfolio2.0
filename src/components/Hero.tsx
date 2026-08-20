"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Check, Download, MapPin } from "lucide-react";
import { EASE, maskReveal, stagger } from "@/lib/motion";
import { scrollToId } from "@/lib/scroll";
import { CV_URL, GITHUB_URL, LINKEDIN_URL } from "@/lib/site";
import SectionBackground from "./ui/SectionBackground";
import TechIcon from "./ui/TechIcon";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import type { Dictionary, HeroWord } from "@/dictionaries/types";

// Tecnologías de la franja inferior: es la primera prueba visual del sitio,
// antes de que nadie haga scroll.
const STACK = [
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Python",
	"FastAPI",
	"PostgreSQL",
	"Prisma",
	"Tailwind CSS",
	"Docker",
];

// Título con reveal por máscara: cada palabra sube desde detrás de un clip.
// El flag `br` del diccionario decide dónde corta la línea.
function MaskedTitle({ words, aria }: { words: HeroWord[]; aria: string }) {
	const lines: HeroWord[][] = [];
	let current: HeroWord[] = [];
	for (const word of words) {
		current.push(word);
		if (word.br) {
			lines.push(current);
			current = [];
		}
	}
	if (current.length) lines.push(current);

	return (
		<motion.h1
			className="text-[42px] sm:text-6xl md:text-[64px] lg:text-[72px] font-bold leading-[0.96] tracking-[-0.035em]"
			variants={stagger(0.15, 0.06)}
			initial="hidden"
			animate="visible"
			aria-label={aria}
		>
			{lines.map((line, li) => (
				<span key={li} className="block">
					{line.map((word, i) => (
						<span
							key={i}
							className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]"
							aria-hidden
						>
							<motion.span
								className={`inline-block ${word.violet ? "text-violet-400" : ""}`}
								variants={maskReveal}
							>
								{word.text}
							</motion.span>
							{i < line.length - 1 && <span>&nbsp;</span>}
						</span>
					))}
				</span>
			))}
		</motion.h1>
	);
}

const enter = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: EASE },
	},
};

const SECONDARY =
	"inline-flex items-center justify-center gap-2 h-[54px] md:h-[52px] px-7 rounded-full border border-zinc-700 text-zinc-200 font-medium text-sm";

const ICON_BUTTON =
	"inline-flex items-center justify-center w-[52px] h-[52px] rounded-full border border-zinc-700 text-zinc-400";

export default function Hero({
	lang,
	dict,
}: {
	lang: "es" | "en";
	dict: Dictionary["hero"];
}) {
	return (
		<section
			id="hero"
			tabIndex={-1}
			className="relative min-h-screen flex flex-col overflow-hidden"
		>
			<SectionBackground
				id="hero"
				mask="hero"
				dots={0.06}
				glows={[
					{
						w: 1200,
						h: 1100,
						color: "rgba(124,58,237,0.20)",
						style: { left: -320, top: -420 },
					},
					{
						w: 800,
						h: 800,
						color: "rgba(14,165,233,0.09)",
						style: { right: "2%", top: "16%" },
					},
				]}
			/>

			<motion.div
				className="relative z-10 flex-1 flex items-center px-6 md:px-16 lg:px-24 pt-28 pb-14 md:pt-24 md:pb-16"
				variants={stagger(0.05, 0.12)}
				initial="hidden"
				animate="visible"
			>
				<div className="max-w-6xl mx-auto w-full grid md:grid-cols-[minmax(0,1fr)_400px] gap-12 md:gap-16 items-center">
					{/* TEXTO */}
					<div className="flex flex-col items-center md:items-start text-center md:text-left">
						<motion.span
							variants={enter}
							className="inline-flex items-center gap-2.5 text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full text-violet-200 border border-violet-500/25 bg-violet-500/10"
						>
							<span className="relative inline-flex w-[7px] h-[7px]" aria-hidden>
								<span className="absolute -inset-1 rounded-full bg-emerald-400/20" />
								<span className="relative w-[7px] h-[7px] rounded-full bg-emerald-400" />
							</span>
							{dict.badge}
						</motion.span>

						<motion.p
							variants={enter}
							className="mt-6 text-[15px] text-zinc-400 tracking-[0.02em]"
						>
							{dict.greeting}
						</motion.p>

						<div className="mt-2.5">
							<MaskedTitle words={dict.titleWords} aria={dict.titleAria} />
						</div>

						<motion.p
							variants={enter}
							className="mt-6 max-w-xl text-base md:text-[17px] text-zinc-300 leading-relaxed text-pretty"
						>
							{dict.subtitle}
						</motion.p>

						<motion.div
							variants={enter}
							className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-[13px] text-zinc-400"
						>
							<span className="inline-flex items-center gap-1.5">
								<MapPin size={14} className="text-violet-400" aria-hidden />
								{dict.locationParts[0]}
							</span>
							{dict.locationParts.slice(1).map((part) => (
								<span key={part} className="inline-flex items-center gap-4">
									<span
										className="w-[3px] h-[3px] rounded-full bg-zinc-600"
										aria-hidden
									/>
									{part}
								</span>
							))}
						</motion.div>

						<motion.div
							variants={enter}
							className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
						>
							<motion.button
								onClick={() => scrollToId("projects")}
								className="inline-flex items-center justify-center gap-2 h-[54px] md:h-[52px] px-8 rounded-full bg-violet-600 text-white font-bold text-sm shadow-lg shadow-violet-500/25"
								whileHover={{ scale: 1.04, backgroundColor: "#8b5cf6" }}
								whileTap={{ scale: 0.96 }}
								transition={{ type: "spring", stiffness: 400, damping: 22 }}
							>
								{dict.ctaProjects}
								<ArrowRight size={15} aria-hidden />
							</motion.button>

							<motion.a
								href={CV_URL[lang]}
								download
								className={SECONDARY}
								whileHover={{
									scale: 1.04,
									borderColor: "rgba(161,161,170,0.8)",
									color: "#ffffff",
								}}
								whileTap={{ scale: 0.96 }}
								transition={{ type: "spring", stiffness: 400, damping: 22 }}
							>
								<Download size={16} aria-hidden />
								{dict.ctaCv}
							</motion.a>

							<div className="flex items-center justify-center gap-3.5">
								<motion.a
									href={GITHUB_URL}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub"
									className={ICON_BUTTON}
									whileHover={{
										scale: 1.06,
										borderColor: "rgba(161,161,170,0.8)",
										color: "#ffffff",
									}}
									whileTap={{ scale: 0.94 }}
									transition={{ type: "spring", stiffness: 400, damping: 22 }}
								>
									<GithubIcon />
								</motion.a>
								<motion.a
									href={LINKEDIN_URL}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn"
									className={ICON_BUTTON}
									whileHover={{
										scale: 1.06,
										borderColor: "rgba(161,161,170,0.8)",
										color: "#ffffff",
									}}
									whileTap={{ scale: 0.94 }}
									transition={{ type: "spring", stiffness: 400, damping: 22 }}
								>
									<LinkedinIcon />
								</motion.a>
							</div>
						</motion.div>
					</div>

					{/* RETRATO */}
					<motion.div
						className="relative w-full md:w-[400px] md:h-[476px] order-first md:order-none"
						variants={{
							hidden: { opacity: 0, scale: 0.94, y: 20 },
							visible: {
								opacity: 1,
								scale: 1,
								y: 0,
								transition: { duration: 0.9, ease: EASE },
							},
						}}
					>
						<div
							className="hidden md:block absolute w-[340px] h-[340px] -right-10 top-8 rounded-full bg-violet-600/25 blur-[90px]"
							aria-hidden
						/>

						{/* Marcas de encuadre */}
						<svg
							className="hidden md:block absolute -left-[30px] -top-[22px]"
							width="60"
							height="60"
							viewBox="0 0 60 60"
							fill="none"
							aria-hidden
						>
							<path d="M1 59V1h58" stroke="#a78bfa" strokeWidth="2" />
						</svg>
						<svg
							className="hidden md:block absolute -right-[26px] -bottom-5"
							width="60"
							height="60"
							viewBox="0 0 60 60"
							fill="none"
							aria-hidden
						>
							<path d="M59 1v58H1" stroke="#a78bfa" strokeWidth="2" />
						</svg>

						<div className="relative md:absolute md:left-5 md:top-0 w-full h-[236px] md:w-[360px] md:h-[452px] rounded-[22px] overflow-hidden border border-white/10 shadow-2xl">
							<Image
								src="/profile.jpg"
								alt="Tomás Arrativel"
								fill
								sizes="(max-width: 768px) 100vw, 360px"
								className="object-cover object-[center_22%] md:object-center grayscale-[0.35] contrast-[1.06] brightness-[0.94]"
								priority
							/>
							{/* Duotono violeta sobre la foto, y un degradado que la funde con el fondo. */}
							<div
								className="absolute inset-0 mix-blend-multiply"
								style={{
									background:
										"linear-gradient(165deg, rgba(124,58,237,0.45) 0%, rgba(10,10,15,0.05) 42%, rgba(10,10,15,0.86) 100%)",
								}}
								aria-hidden
							/>
							<div
								className="absolute inset-0"
								style={{
									background:
										"linear-gradient(to top, rgba(10,10,15,0.88) 0%, transparent 46%)",
								}}
								aria-hidden
							/>
							<svg
								className="absolute inset-0 w-full h-full opacity-[0.14] mix-blend-overlay"
								aria-hidden
							>
								<filter id="grain-portrait">
									<feTurbulence
										type="fractalNoise"
										baseFrequency="0.9"
										numOctaves="3"
									/>
								</filter>
								<rect width="100%" height="100%" filter="url(#grain-portrait)" />
							</svg>
							<div className="absolute left-5 right-5 bottom-5 flex flex-col gap-0.5 text-left">
								<span className="font-display font-bold text-[17px] text-white">
									Tomás Arrativel
								</span>
								<span className="text-xs text-violet-300 tracking-[0.05em]">
									{dict.portraitRole}
								</span>
							</div>
						</div>

						<div className="hidden md:flex absolute -left-[52px] top-[300px] items-center gap-3 px-[18px] py-3.5 rounded-2xl bg-[#14141c]/90 border border-white/10 shadow-2xl backdrop-blur-sm">
							<span
								className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-xl bg-emerald-400/10 border border-emerald-400/20"
								aria-hidden
							>
								<Check size={18} className="text-emerald-400" />
							</span>
							<span className="flex flex-col gap-0.5">
								<span className="text-sm font-bold text-white">
									{dict.productionNote.title}
								</span>
								<span className="text-xs text-zinc-400">
									{dict.productionNote.note}
								</span>
							</span>
						</div>
					</motion.div>
				</div>
			</motion.div>

			{/* Franja de stack: cierra el hero con logos reales. */}
			<motion.div
				className="relative z-10 border-t border-white/[0.06] bg-white/[0.012] px-6 md:px-16 lg:px-24 py-6 md:py-0 md:h-[92px] flex flex-col md:flex-row items-center gap-4 md:gap-10"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 0.8, ease: EASE }}
			>
				<span className="text-[11px] tracking-[0.18em] uppercase text-zinc-600 whitespace-nowrap">
					{dict.stackLabel}
				</span>
				<div className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-[34px] flex-1">
					{STACK.map((name) => (
						<TechIcon key={name} name={name} size={24} tone="muted" className="opacity-50" />
					))}
				</div>
				<span className="hidden md:inline-flex items-center gap-2 text-xs text-zinc-600 whitespace-nowrap">
					{dict.scrollLabel}
					<ArrowDown size={13} aria-hidden />
				</span>
			</motion.div>
		</section>
	);
}
