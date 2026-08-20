"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import SectionBackground from "./ui/SectionBackground";
import Tag from "./ui/Tag";
import TechIcon from "./ui/TechIcon";
import { TerminalGlyph } from "./ui/GlyphIcons";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import type { Dictionary } from "@/dictionaries/types";

type ExperienceDict = Dictionary["experience"];

const SURFACE = {
	background: "rgba(255,255,255,0.026)",
	border: "1px solid rgba(255,255,255,0.06)",
};

// Sello de la organización: monograma, logo de marca, o el glifo de terminal
// para lo que hice por mi cuenta.
function Seal({
	text,
	icon,
	muted,
}: {
	text?: string;
	icon?: string;
	muted?: boolean;
}) {
	const color = muted ? "#71717a" : "#a78bfa";

	return (
		<span
			className="inline-flex items-center justify-center w-12 h-12 flex-shrink-0 rounded-[14px] font-display font-extrabold text-[15px]"
			style={{
				background: `${color}1a`,
				border: `1px solid ${color}33`,
				color,
			}}
			aria-hidden
		>
			{icon ? (
				<TechIcon name={icon} size={22} />
			) : text ? (
				text
			) : (
				<TerminalGlyph size={22} />
			)}
		</span>
	);
}

export default function Experience({ dict }: { dict: ExperienceDict }) {
	return (
		<section
			id="experience"
			className="relative py-24 md:py-28 px-6 md:px-16 lg:px-24"
		>
			<SectionBackground
				id="experience"
				mask="top"
				dots={0.045}
				glows={[
					{
						w: 1100,
						h: 1000,
						color: "rgba(124,58,237,0.13)",
						style: { left: -260, bottom: -420 },
					},
					{
						w: 1500,
						h: 800,
						color: "rgba(124,58,237,0.10)",
						style: { left: "50%", bottom: -560, transform: "translateX(-50%)" },
					},
				]}
			/>

			<div className="relative z-10 max-w-6xl mx-auto">
				<SectionHeader
					eyebrow={dict.eyebrow}
					title={dict.title}
					note={dict.note}
				/>

				{/* Línea de tiempo: eje vertical, un nodo por puesto. */}
				<motion.ol
					className="relative flex flex-col gap-8 md:gap-5"
					variants={stagger(0, 0.1)}
					initial="hidden"
					whileInView="visible"
					viewport={VIEWPORT}
				>
					<span
						className="absolute left-[7px] md:left-[190px] top-3 bottom-3 w-px"
						style={{
							background:
								"linear-gradient(to bottom, rgba(167,139,250,0.5), rgba(255,255,255,0.10) 45%, transparent)",
						}}
						aria-hidden
					/>

					{dict.jobs.map((job) => (
						<motion.li
							key={`${job.org}-${job.period}`}
							variants={fadeUp}
							className="relative grid md:grid-cols-[190px_minmax(0,1fr)] gap-2 md:gap-9"
						>
							<span
								className={`absolute left-px md:left-[184px] top-2 md:top-6 w-[13px] h-[13px] rounded-full border-[3px] border-[#0a0a0f] ${
									job.current
										? "bg-violet-400 ring-1 ring-violet-400/35"
										: "bg-zinc-600"
								}`}
								aria-hidden
							/>

							<div className="flex flex-wrap md:flex-nowrap md:flex-col items-baseline md:items-end gap-x-3 gap-y-2 pl-8 md:pl-0 md:pr-7 md:pt-5 md:text-right">
								<span
									className={`md:w-full text-xs font-bold tracking-[0.1em] uppercase leading-snug ${
										job.current ? "text-violet-400" : "text-zinc-500"
									}`}
								>
									{job.period}
								</span>
								{job.current && (
									<span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400">
										<span
											className="w-1.5 h-1.5 rounded-full bg-emerald-400"
											aria-hidden
										/>
										{dict.currentLabel}
									</span>
								)}
							</div>

							<div className="pl-8 md:pl-0">
								<div
									className="flex items-start gap-4 sm:gap-[18px] p-5 sm:p-6 rounded-[18px]"
									style={SURFACE}
								>
									<span className="hidden sm:inline-flex">
										<Seal text={job.sealText} muted={!job.current} />
									</span>
									<div className="flex flex-col items-start">
										<h3 className="text-lg md:text-[19px] font-bold tracking-[-0.01em]">
											{job.role}
										</h3>
										<p className="mt-1 text-[13.5px] text-zinc-300">{job.org}</p>
										<p className="mt-3 text-[13.5px] leading-relaxed text-zinc-400 max-w-2xl text-pretty">
											{job.desc}
										</p>
										<div className="flex flex-wrap gap-2 mt-4">
											{job.tags.map((tag) => (
												<Tag key={tag} label={tag} />
											))}
										</div>
									</div>
								</div>
							</div>
						</motion.li>
					))}
				</motion.ol>

				{/* Formación */}
				<motion.div
					className="mt-14 pt-9 border-t border-white/[0.06]"
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={VIEWPORT}
				>
					<h3 className="flex items-center gap-2.5 text-[13px] font-bold tracking-[0.18em] uppercase text-zinc-300 mb-5">
						<GraduationCap size={17} className="text-violet-400" aria-hidden />
						{dict.educationTitle}
					</h3>

					<ul className="grid sm:grid-cols-2 gap-4">
						{dict.education.map((item) => (
							<li
								key={item.title}
								className="flex items-center gap-4 p-5 rounded-2xl"
								style={SURFACE}
							>
								<Seal text={item.sealText} icon={item.sealIcon} />
								<div className="flex flex-col gap-1">
									<span className="font-semibold text-white text-[15px]">
										{item.title}
									</span>
									<span className="text-[13px] text-zinc-400">
										{item.org} · {item.period}
									</span>
								</div>
							</li>
						))}
					</ul>
				</motion.div>
			</div>
		</section>
	);
}
