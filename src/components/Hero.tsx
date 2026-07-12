"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EASE, maskReveal, stagger } from "@/lib/motion";
import { scrollToId } from "@/lib/scroll";
import type { Dictionary, HeroWord } from "@/dictionaries/types";

// Título con reveal por máscara: cada palabra sube desde detrás de un clip.
function MaskedTitle({ words, aria }: { words: HeroWord[]; aria: string }) {
	return (
		<motion.h1
			className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
			variants={stagger(0.15, 0.06)}
			initial="hidden"
			animate="visible"
			aria-label={aria}
		>
			{words.map((word, i) => (
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
					{i < words.length - 1 && <span>&nbsp;</span>}
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

export default function Hero({ dict }: { dict: Dictionary["hero"] }) {
	const reduced = useReducedMotion();

	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 overflow-hidden"
		>
			{/* Fondo: gradientes que derivan lentamente */}
			<div className="absolute inset-0 pointer-events-none">
				<motion.div
					className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full bg-violet-500/10 blur-3xl"
					animate={
						reduced
							? undefined
							: {
									x: ["-50%", "-42%", "-55%", "-50%"],
									y: ["-50%", "-58%", "-45%", "-50%"],
									scale: [1, 1.08, 0.96, 1],
								}
					}
					transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
					style={{ x: "-50%", y: "-50%" }}
				/>
				<motion.div
					className="absolute top-1/3 right-[10%] w-[400px] h-[400px] rounded-full bg-sky-500/5 blur-3xl"
					animate={reduced ? undefined : { y: [0, -40, 20, 0] }}
					transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
				/>
			</div>

			{/* Grid principal */}
			<motion.div
				className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center"
				variants={stagger(0.05, 0.12)}
				initial="hidden"
				animate="visible"
			>
				{/* TEXTO */}
				<div className="text-center md:text-left">
					<motion.span
						variants={enter}
						className="inline-block text-xs font-medium tracking-widest px-4 py-2 rounded-full mb-6 text-violet-300 border border-violet-500/20 bg-violet-500/10"
					>
						{dict.badge}
					</motion.span>

					<MaskedTitle words={dict.titleWords} aria={dict.titleAria} />

					<motion.p
						variants={enter}
						className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed mb-10"
					>
						{dict.subtitle}
					</motion.p>

					<motion.div
						variants={enter}
						className="flex flex-wrap gap-4 justify-center md:justify-start"
					>
						<motion.button
							onClick={() => scrollToId("projects")}
							className="px-8 py-4 rounded-full bg-violet-600 text-white font-medium text-sm shadow-lg shadow-violet-500/20"
							whileHover={{ scale: 1.05, backgroundColor: "#8b5cf6" }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 400, damping: 22 }}
						>
							{dict.ctaProjects}
						</motion.button>

						<motion.button
							onClick={() => scrollToId("contact")}
							className="px-8 py-4 rounded-full border border-zinc-700 text-zinc-300 font-medium text-sm"
							whileHover={{
								scale: 1.05,
								borderColor: "rgba(161,161,170,0.8)",
								color: "#ffffff",
							}}
							whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 400, damping: 22 }}
						>
							{dict.ctaContact}
						</motion.button>
					</motion.div>
				</div>

				{/* IMAGEN */}
				<motion.div
					className="flex justify-center md:justify-end"
					variants={{
						hidden: { opacity: 0, scale: 0.92, y: 20 },
						visible: {
							opacity: 1,
							scale: 1,
							y: 0,
							transition: { duration: 0.9, ease: EASE },
						},
					}}
				>
					<div className="relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
						<Image
							src="/profile.jpg"
							alt="Tomás Arrativel"
							fill
							sizes="(max-width: 768px) 260px, 340px"
							className="object-cover"
							priority
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
					</div>
				</motion.div>
			</motion.div>

			{/* Scroll indicator */}
			<motion.div
				className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.6 }}
				transition={{ delay: 1.4, duration: 0.8, ease: EASE }}
			>
				<motion.div
					className="w-px h-14 bg-gradient-to-b from-transparent to-zinc-500"
					animate={reduced ? undefined : { scaleY: [0.4, 1, 0.4], opacity: [0.3, 1, 0.3] }}
					transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
					style={{ transformOrigin: "top" }}
				/>
			</motion.div>
		</section>
	);
}
