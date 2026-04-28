"use client";

import FadeIn from "./ui/FadeIn";
import { ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "5493444529701";
const EMAIL = "arrativeltomas@gmail.com";

export default function Contact() {
	const [copied, setCopied] = useState(false);

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
						Contacto
					</p>

					<h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
						Trabajemos
						<br />
						juntos.
					</h2>

					<p className="text-zinc-400 mb-10 text-lg leading-relaxed">
						¿Tenés un proyecto o querés escalar tu negocio?
						<br />
						Podés escribirme directamente por cualquiera de estos medios.
					</p>

					{/* BOTONES */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
						<a
							href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20Tom%C3%A1s,%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20consultarte...`}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium transition-all text-sm active:scale-95 shadow-lg shadow-violet-500/20"
						>
							WhatsApp
							<ArrowRight size={16} />
						</a>

						<a
							href={`mailto:${EMAIL}`}
							className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium transition-all text-sm active:scale-95"
						>
							Abrir email
						</a>
					</div>

					{/* EMAIL COPIABLE */}
					<div className="flex flex-col items-center gap-3">
						<p className="text-sm text-zinc-500">
							O copiá mi email directamente
						</p>

						<div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-3">
							<span className="text-sm md:text-base text-zinc-200">
								{EMAIL}
							</span>

							<button
								onClick={copyEmail}
								className="flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 transition"
							>
								{copied ? <Check size={14} /> : <Copy size={14} />}
								{copied ? "Copiado" : "Copiar"}
							</button>
						</div>
					</div>
				</FadeIn>
			</div>
		</section>
	);
}
