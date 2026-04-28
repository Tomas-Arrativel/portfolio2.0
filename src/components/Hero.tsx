"use client";

import Image from "next/image";

export default function Hero() {
	const scrollTo = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 overflow-hidden"
		>
			{/* Glow */}
			<div className="absolute inset-0 flex justify-center items-center pointer-events-none">
				<div className="w-[700px] h-[700px] rounded-full bg-violet-500/10 blur-3xl" />
			</div>

			{/* Grid principal */}
			<div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
				{/* TEXTO */}
				<div className="text-center md:text-left">
					<span className="inline-block text-xs font-medium tracking-widest px-4 py-2 rounded-full mb-6 text-violet-300 border border-violet-500/20 bg-violet-500/10">
						Desarrollador · Marketer · Builder
					</span>

					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
						Automatizo y escalo{" "}
						<span className="text-violet-400">sistemas</span> que hacen crecer
						negocios.
					</h1>

					<p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed mb-10">
						Combino desarrollo fullstack, inteligencia artificial y marketing
						digital para construir sistemas que generan clientes de forma
						constante.
					</p>

					<div className="flex flex-wrap gap-4 justify-center md:justify-start">
						<button
							onClick={() => scrollTo("projects")}
							className="px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-all active:scale-95 shadow-lg shadow-violet-500/20"
						>
							Ver proyectos
						</button>

						<button
							onClick={() => scrollTo("contact")}
							className="px-8 py-4 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium text-sm transition-all active:scale-95"
						>
							Contactame
						</button>
					</div>
				</div>

				{/* IMAGEN */}
				<div className="flex justify-center md:justify-end">
					<div className="relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
						<Image
							src="/profile.jpg"
							alt="Tomás Arrativel"
							fill
							className="object-cover"
							priority
						/>

						{/* Overlay sutil */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-60">
				<div className="w-px h-14 bg-gradient-to-b from-transparent to-zinc-600 animate-pulse" />
			</div>
		</section>
	);
}
