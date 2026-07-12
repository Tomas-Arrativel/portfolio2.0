"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import Tag from "./ui/Tag";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { useMagnetic } from "@/hooks/useMagnetic";
import type { Dictionary } from "@/dictionaries/types";

type SkillCategory = Dictionary["skills"]["categories"][number];

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
					background: "rgba(255,255,255,0.03)",
					border: "1px solid rgba(255,255,255,0.07)",
				}}
				className="rounded-2xl p-6 h-full"
			>
				<div className="flex items-center gap-3 mb-4">
					<div className={`w-2 h-2 rounded-full ${skill.dot}`} />
					<span className="font-semibold text-sm text-zinc-200">
						{skill.category}
					</span>
				</div>
				<div className="flex flex-wrap gap-2">
					{skill.items.map((item) => (
						<Tag key={item} label={item} />
					))}
				</div>
			</motion.div>
		</motion.div>
	);
}

export default function Skills({ dict }: { dict: Dictionary["skills"] }) {
	return (
		<section
			id="skills"
			className="py-28 px-6 md:px-16 lg:px-24"
			style={{ background: "rgba(255,255,255,0.015)" }}
		>
			<div className="max-w-5xl mx-auto">
				<SectionHeader eyebrow={dict.eyebrow} title={dict.title} />

				<motion.div
					className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
					variants={stagger(0, 0.09)}
					initial="hidden"
					whileInView="visible"
					viewport={VIEWPORT}
				>
					{dict.categories.map((skill) => (
						<SkillCard key={skill.category} skill={skill} />
					))}
				</motion.div>
			</div>
		</section>
	);
}
