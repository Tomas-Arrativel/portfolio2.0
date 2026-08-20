"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import SectionBackground from "./ui/SectionBackground";
import TechIcon from "./ui/TechIcon";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { useMagnetic } from "@/hooks/useMagnetic";
import type { Dictionary } from "@/dictionaries/types";

type SkillCategory = Dictionary["skills"]["categories"][number];

// Tira inferior: los mismos logos en monocromo, desplazándose despacio.
const MARQUEE = [
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Python",
	"FastAPI",
	"PostgreSQL",
	"MySQL",
	"Prisma",
	"Tailwind CSS",
	"Docker",
	"Git",
	"Vercel",
	"Render",
	"Neon",
	"n8n",
];

function SkillCard({ skill }: { skill: SkillCategory }) {
	const magnetic = useMagnetic(0.08);

	return (
		<motion.div variants={fadeUp} className="h-full">
			<motion.div
				ref={magnetic.ref}
				onMouseMove={magnetic.onMouseMove}
				onMouseLeave={magnetic.onMouseLeave}
				style={{
					x: magnetic.x,
					y: magnetic.y,
					background: "rgba(255,255,255,0.022)",
					border: "1px solid rgba(255,255,255,0.06)",
				}}
				className="rounded-[18px] p-[22px] h-full"
			>
				<div className="flex items-center gap-2.5 pb-3.5 mb-3 border-b border-white/[0.06]">
					<span
						className="w-[7px] h-[7px] rounded-full"
						style={{ background: skill.dot, boxShadow: `0 0 12px ${skill.dot}` }}
						aria-hidden
					/>
					<span className="text-[13px] font-bold tracking-[0.04em] text-zinc-200">
						{skill.category}
					</span>
				</div>

				<ul className="flex flex-col gap-2">
					{skill.items.map((item) => (
						<li
							key={item}
							className="flex items-center gap-[11px] px-3 py-2.5 rounded-[11px] bg-white/[0.025] border border-white/[0.055]"
						>
							<TechIcon name={item} size={22} className="flex-shrink-0" />
							<span className="text-[13.5px] text-zinc-300">{item}</span>
						</li>
					))}
				</ul>
			</motion.div>
		</motion.div>
	);
}

export default function Skills({ dict }: { dict: Dictionary["skills"] }) {
	const reduced = useReducedMotion();

	return (
		<section
			id="skills"
			className="relative py-24 md:py-28 px-6 md:px-16 lg:px-24"
			style={{ background: "rgba(255,255,255,0.015)" }}
		>
			<SectionBackground
				id="skills"
				mask="top"
				dots={0.05}
				glows={[
					{
						w: 1100,
						h: 900,
						color: "rgba(124,58,237,0.13)",
						style: { left: "22%", top: -340 },
					},
				]}
			/>

			<div className="relative z-10 max-w-6xl mx-auto">
				<SectionHeader
					eyebrow={dict.eyebrow}
					title={dict.title}
					note={dict.note}
				/>

				<motion.div
					className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start"
					variants={stagger(0, 0.09)}
					initial="hidden"
					whileInView="visible"
					viewport={VIEWPORT}
				>
					{dict.categories.map((skill) => (
						<SkillCard key={skill.category} skill={skill} />
					))}
				</motion.div>

				<div
					className="relative mt-10 py-6 border-y border-white/[0.06] overflow-hidden"
					style={{
						WebkitMaskImage:
							"linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
						maskImage:
							"linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
					}}
					aria-hidden
				>
					<motion.div
						className="flex items-center gap-11 w-max"
						animate={reduced ? undefined : { x: ["0%", "-50%"] }}
						transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
					>
						{[...MARQUEE, ...MARQUEE].map((name, i) => (
							<TechIcon
								key={`${name}-${i}`}
								name={name}
								size={28}
								tone="muted"
								className="flex-shrink-0 opacity-40"
							/>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
