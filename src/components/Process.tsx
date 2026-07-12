"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { fadeUp, stagger, VIEWPORT, SPRING } from "@/lib/motion";
import type { Dictionary } from "@/dictionaries/types";

export default function Process({ dict }: { dict: Dictionary["process"] }) {
	return (
		<section id="process" className="py-28 px-6 md:px-16 lg:px-24">
			<div className="max-w-5xl mx-auto">
				<SectionHeader eyebrow={dict.eyebrow} title={dict.title} />

				<motion.div
					className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
					variants={stagger(0, 0.09)}
					initial="hidden"
					whileInView="visible"
					viewport={VIEWPORT}
				>
					{dict.steps.map((step, i) => (
						<motion.div
							key={step.title}
							variants={fadeUp}
							whileHover={{ y: -6 }}
							transition={SPRING}
							className="rounded-2xl p-6 h-full flex flex-col"
							style={{
								background: "rgba(255,255,255,0.03)",
								border: "1px solid rgba(255,255,255,0.07)",
							}}
						>
							<span className="text-4xl font-bold text-violet-400/80 mb-4">
								{String(i + 1).padStart(2, "0")}
							</span>
							<h3 className="font-bold text-white mb-2 text-base">
								{step.title}
							</h3>
							<p className="text-sm text-zinc-400 leading-relaxed">
								{step.desc}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
