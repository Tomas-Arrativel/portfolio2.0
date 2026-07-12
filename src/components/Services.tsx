"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "./ui/SectionHeader";
import { fadeUp, stagger, VIEWPORT, SPRING } from "@/lib/motion";
import type { Dictionary } from "@/dictionaries/types";

export default function Services({ dict }: { dict: Dictionary["services"] }) {
	const gridRef = useRef<HTMLDivElement>(null);

	// Parallax por columna: cada columna se desplaza a velocidad levemente
	// distinta mientras la sección cruza el viewport (solo desktop, respeta
	// prefers-reduced-motion vía gsap.matchMedia).
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const mm = gsap.matchMedia();

		mm.add(
			"(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
			() => {
				const cards = gsap.utils.toArray<HTMLElement>(
					gridRef.current?.children ?? [],
				);
				cards.forEach((card, i) => {
					const speed = [0, 14, 28][i % 3];
					gsap.fromTo(
						card,
						{ y: speed },
						{
							y: -speed,
							ease: "none",
							scrollTrigger: {
								trigger: gridRef.current,
								start: "top bottom",
								end: "bottom top",
								scrub: 0.6,
							},
						},
					);
				});
			},
		);

		return () => mm.revert();
	}, []);

	return (
		<section
			id="services"
			className="py-28 px-6 md:px-16 lg:px-24"
			style={{ background: "rgba(255,255,255,0.015)" }}
		>
			<div className="max-w-5xl mx-auto">
				<SectionHeader eyebrow={dict.eyebrow} title={dict.title} />

				<motion.div
					ref={gridRef}
					className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
					variants={stagger(0, 0.09)}
					initial="hidden"
					whileInView="visible"
					viewport={VIEWPORT}
				>
					{dict.items.map((service) => (
						<motion.div
							key={service.title}
							variants={fadeUp}
							whileHover={{ y: -6 }}
							transition={SPRING}
							className="group rounded-2xl p-6 h-full"
							style={{
								background: "rgba(255,255,255,0.03)",
								border: "1px solid rgba(255,255,255,0.07)",
							}}
						>
							<motion.span
								className="text-2xl mb-4 inline-block"
								whileHover={{ rotate: [0, -12, 10, 0], scale: 1.2 }}
								transition={{ duration: 0.5, ease: "easeInOut" }}
							>
								{service.icon}
							</motion.span>
							<h3 className="font-bold text-white mb-2 text-base">
								{service.title}
							</h3>
							<p className="text-sm text-zinc-400 leading-relaxed">
								{service.desc}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
