"use client";

import FadeIn from "./ui/FadeIn";
import { ArrowRight, Copy, Check, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getCalApi } from "@calcom/embed-react";
import { CAL_LINK, WHATSAPP_NUMBER, EMAIL } from "@/lib/site";
import type { Dictionary } from "@/dictionaries/types";

export default function Contact({ dict }: { dict: Dictionary["contact"] }) {
	const [copied, setCopied] = useState(false);

	// Inicializa el popup de Cal.com en tema oscuro.
	useEffect(() => {
		(async () => {
			const cal = await getCalApi({ namespace: "15min" });
			cal("ui", {
				theme: "dark",
				cssVarsPerTheme: {
					dark: { "cal-brand": "#7c3aed" },
					light: { "cal-brand": "#7c3aed" },
				},
				hideEventTypeDetails: false,
			});
		})();
	}, []);

	const copyEmail = async () => {
		await navigator.clipboard.writeText(EMAIL);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section id="contact" className="py-28 px-6 md:px-16 lg:px-24">
			<div className="max-w-2xl mx-auto text-center">
				<FadeIn>
					<p className="text-xs text-violet-400 font-semibold tracking-widest uppercase mb-4">
						{dict.eyebrow}
					</p>

					<h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
						{dict.titleLines[0]}
						<br />
						{dict.titleLines[1]}
					</h2>

					<p className="text-zinc-400 mb-10 text-lg leading-relaxed">
						{dict.textLines[0]}
						<br />
						{dict.textLines[1]}
					</p>

					{/* CTA PRINCIPAL: Cal.com */}
					<div className="flex justify-center mb-4">
						<motion.button
							data-cal-namespace="15min"
							data-cal-link={CAL_LINK}
							data-cal-config='{"layout":"month_view","theme":"dark"}'
							className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-violet-600 text-white font-medium text-sm shadow-lg shadow-violet-500/20"
							whileHover={{ scale: 1.05, backgroundColor: "#8b5cf6" }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 400, damping: 22 }}
						>
							<Calendar size={16} />
							{dict.ctaCall}
						</motion.button>
					</div>

					{/* ALTERNATIVAS */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
						<motion.a
							href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(dict.whatsappMessage)}`}
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-zinc-700 text-zinc-300 font-medium text-sm"
							whileHover={{
								scale: 1.05,
								borderColor: "rgba(161,161,170,0.8)",
								color: "#ffffff",
							}}
							whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 400, damping: 22 }}
						>
							{dict.ctaWhatsapp}
							<ArrowRight
								size={16}
								className="transition-transform duration-300 group-hover:translate-x-1"
							/>
						</motion.a>

						<motion.a
							href={`mailto:${EMAIL}`}
							className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-zinc-700 text-zinc-300 font-medium text-sm"
							whileHover={{
								scale: 1.05,
								borderColor: "rgba(161,161,170,0.8)",
								color: "#ffffff",
							}}
							whileTap={{ scale: 0.95 }}
							transition={{ type: "spring", stiffness: 400, damping: 22 }}
						>
							{dict.ctaEmail}
						</motion.a>
					</div>

					{/* EMAIL COPIABLE */}
					<div className="flex flex-col items-center gap-3">
						<p className="text-sm text-zinc-500">{dict.copyPrompt}</p>

						<motion.div
							className="relative flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-3"
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

							<span className="text-sm md:text-base text-zinc-200">
								{EMAIL}
							</span>

							<motion.button
								onClick={copyEmail}
								className={`flex items-center gap-1 text-xs transition-colors ${
									copied
										? "text-emerald-400"
										: "text-violet-400 hover:text-violet-300"
								}`}
								whileTap={{ scale: 0.9 }}
							>
								<AnimatePresence mode="wait" initial={false}>
									{copied ? (
										<motion.span
											key="check"
											className="inline-flex items-center gap-1"
											initial={{ scale: 0.4, opacity: 0, rotate: -30 }}
											animate={{ scale: 1, opacity: 1, rotate: 0 }}
											exit={{ scale: 0.6, opacity: 0 }}
											transition={{ type: "spring", stiffness: 500, damping: 22 }}
										>
											<Check size={14} />
											{dict.copied}
										</motion.span>
									) : (
										<motion.span
											key="copy"
											className="inline-flex items-center gap-1"
											initial={{ scale: 0.6, opacity: 0 }}
											animate={{ scale: 1, opacity: 1 }}
											exit={{ scale: 0.6, opacity: 0 }}
											transition={{ duration: 0.15 }}
										>
											<Copy size={14} />
											{dict.copy}
										</motion.span>
									)}
								</AnimatePresence>
							</motion.button>
						</motion.div>
					</div>
				</FadeIn>
			</div>
		</section>
	);
}
