"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Mail, Download } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import Footer from "./Footer";
import SectionBackground from "./ui/SectionBackground";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { CV_URL, EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/site";
import type { Dictionary } from "@/dictionaries/types";

const SECONDARY_CTA =
	"inline-flex items-center justify-center gap-2 h-[54px] md:h-[52px] px-7 rounded-full border border-zinc-700 text-zinc-200 font-medium text-sm";

const SECONDARY_HOVER = {
	scale: 1.04,
	borderColor: "rgba(161,161,170,0.8)",
	color: "#ffffff",
};

const SPRING = { type: "spring", stiffness: 400, damping: 22 } as const;

export default function Contact({
	lang,
	dict,
	footer,
}: {
	lang: "es" | "en";
	dict: Dictionary["contact"];
	footer: Dictionary["footer"];
}) {
	const [copied, setCopied] = useState(false);

	const copyEmail = async () => {
		await navigator.clipboard.writeText(EMAIL);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section id="contact" className="relative">
			<SectionBackground
				id="contact"
				mask="center"
				dots={0.055}
				bottomFade="rgba(124,58,237,0.07)"
				glows={[
					{
						w: 1900,
						h: 1400,
						color: "rgba(124,58,237,0.17)",
						style: { left: "50%", top: -600, transform: "translateX(-50%)" },
					},
				]}
			/>

			{/* Apellido como textura: da fondo sin agregar contenido. */}
			<span
				className="absolute left-0 right-0 bottom-6 text-center font-display font-extrabold text-[92px] md:text-[190px] leading-none tracking-[-0.06em] text-white opacity-[0.012] whitespace-nowrap pointer-events-none select-none"
				aria-hidden
			>
				ARRATIVEL
			</span>

			<div className="relative z-10 py-24 md:py-28 px-6 md:px-16 lg:px-24">
				<div className="max-w-3xl mx-auto text-center">
					<FadeIn>
						<p className="text-xs text-violet-400 font-semibold tracking-widest uppercase">
							{dict.eyebrow}
						</p>

						<h2 className="mt-5 text-4xl md:text-6xl lg:text-[76px] font-bold leading-[1.02] tracking-[-0.035em]">
							{dict.titleLines[0]}
							<br />
							<span className="relative inline-block">
								{dict.titleLines[1]}
								{/* Subrayado dibujado a mano, no un border-bottom. */}
								<svg
									className="absolute -left-1.5 -right-1.5 -bottom-2 md:-bottom-3.5 w-[calc(100%+12px)]"
									height="16"
									viewBox="0 0 240 16"
									fill="none"
									preserveAspectRatio="none"
									aria-hidden
								>
									<path
										d="M3 11.5C52 4.5 120 2.5 237 8.5"
										stroke="#a78bfa"
										strokeWidth="4"
										strokeLinecap="round"
									/>
								</svg>
							</span>
						</h2>

						<p className="mt-9 md:mt-10 max-w-2xl mx-auto text-base md:text-[17px] text-zinc-300 leading-[1.7] text-pretty">
							{dict.textLines[0]}
							<br className="hidden sm:block" />{" "}
							{dict.textLines[1]}
						</p>

						{/* CTA principal: email, CV y perfiles. */}
						<div className="mt-9 flex flex-col sm:flex-row flex-wrap gap-3.5 justify-center">
							<motion.a
								href={`mailto:${EMAIL}`}
								className="inline-flex items-center justify-center gap-2 h-[54px] md:h-[52px] px-8 rounded-full bg-violet-600 text-white font-bold text-sm shadow-lg shadow-violet-500/25"
								whileHover={{ scale: 1.04, backgroundColor: "#8b5cf6" }}
								whileTap={{ scale: 0.96 }}
								transition={SPRING}
							>
								<Mail size={16} aria-hidden />
								{dict.ctaEmail}
							</motion.a>

							<motion.a
								href={CV_URL[lang]}
								download
								className={SECONDARY_CTA}
								whileHover={SECONDARY_HOVER}
								whileTap={{ scale: 0.96 }}
								transition={SPRING}
							>
								<Download size={16} aria-hidden />
								{dict.ctaCv}
							</motion.a>

							<motion.a
								href={GITHUB_URL}
								target="_blank"
								rel="noopener noreferrer"
								className={SECONDARY_CTA}
								whileHover={SECONDARY_HOVER}
								whileTap={{ scale: 0.96 }}
								transition={SPRING}
							>
								<GithubIcon size={17} />
								GitHub
							</motion.a>

							<motion.a
								href={LINKEDIN_URL}
								target="_blank"
								rel="noopener noreferrer"
								className={SECONDARY_CTA}
								whileHover={SECONDARY_HOVER}
								whileTap={{ scale: 0.96 }}
								transition={SPRING}
							>
								<LinkedinIcon size={17} />
								LinkedIn
							</motion.a>
						</div>

						{/* EMAIL COPIABLE */}
						<div className="mt-9 flex flex-col items-center gap-3">
							<p className="text-[13px] text-zinc-500">{dict.copyPrompt}</p>

							<motion.div
								className="relative flex items-center gap-3.5 bg-white/5 border border-white/10 rounded-full pl-5 pr-3 py-3"
								animate={
									copied
										? { borderColor: "rgba(52,211,153,0.4)" }
										: { borderColor: "rgba(255,255,255,0.1)" }
								}
								transition={{ duration: 0.3 }}
							>
								{/* Pulso de confirmación */}
								<AnimatePresence>
									{copied && (
										<motion.span
											className="absolute inset-0 rounded-full border border-emerald-400/50 pointer-events-none"
											initial={{ opacity: 0.8, scale: 1 }}
											animate={{ opacity: 0, scale: 1.15 }}
											exit={{ opacity: 0 }}
											transition={{ duration: 0.6, ease: "easeOut" }}
										/>
									)}
								</AnimatePresence>

								<span className="text-sm md:text-[15px] text-zinc-200 break-all">
									{EMAIL}
								</span>

								<motion.button
									onClick={copyEmail}
									className={`inline-flex items-center gap-1.5 h-[34px] px-3.5 rounded-full text-xs font-semibold transition-colors ${
										copied
											? "text-emerald-400 bg-emerald-400/10 border border-emerald-400/25"
											: "text-violet-300 bg-violet-500/15 border border-violet-500/25 hover:text-violet-200"
									}`}
									whileTap={{ scale: 0.94 }}
								>
									<AnimatePresence mode="wait" initial={false}>
										{copied ? (
											<motion.span
												key="check"
												className="inline-flex items-center gap-1.5"
												initial={{ scale: 0.4, opacity: 0, rotate: -30 }}
												animate={{ scale: 1, opacity: 1, rotate: 0 }}
												exit={{ scale: 0.6, opacity: 0 }}
												transition={{ type: "spring", stiffness: 500, damping: 22 }}
											>
												<Check size={13} aria-hidden />
												{dict.copied}
											</motion.span>
										) : (
											<motion.span
												key="copy"
												className="inline-flex items-center gap-1.5"
												initial={{ scale: 0.6, opacity: 0 }}
												animate={{ scale: 1, opacity: 1 }}
												exit={{ scale: 0.6, opacity: 0 }}
												transition={{ duration: 0.15 }}
											>
												<Copy size={13} aria-hidden />
												{dict.copy}
											</motion.span>
										)}
									</AnimatePresence>
								</motion.button>
							</motion.div>
						</div>

						<div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[13px] text-zinc-500">
							<span className="inline-flex items-center gap-2">
								<span
									className="w-[7px] h-[7px] rounded-full bg-emerald-400"
									aria-hidden
								/>
								{dict.statusLine[0]}
							</span>
							{dict.statusLine.slice(1).map((part) => (
								<span key={part} className="inline-flex items-center gap-4">
									<span
										className="w-[3px] h-[3px] rounded-full bg-zinc-700"
										aria-hidden
									/>
									{part}
								</span>
							))}
						</div>
					</FadeIn>
				</div>
			</div>

			{/* El pie cierra la misma sección en lugar de ser una franja suelta. */}
			<Footer dict={footer} />
		</section>
	);
}
