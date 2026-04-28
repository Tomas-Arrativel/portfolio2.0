"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
	{ label: "Inicio", id: "hero" },
	{ label: "Sobre mí", id: "about" },
	{ label: "Skills", id: "skills" },
	{ label: "Proyectos", id: "projects" },
	{ label: "Servicios", id: "services" },
	{ label: "Contacto", id: "contact" },
];

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollTo = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		setMenuOpen(false);
	};

	return (
		<>
			<nav
				className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300"
				style={{
					background: scrolled ? "rgba(10,10,15,0.92)" : "rgba(10,10,15,0.5)",
					backdropFilter: "blur(16px)",
					borderBottom: scrolled
						? "1px solid rgba(255,255,255,0.06)"
						: "1px solid transparent",
				}}
			>
				<button
					onClick={() => scrollTo("hero")}
					className="font-bold text-xl tracking-tight hover:text-violet-400 transition-colors"
				>
					TA<span className="text-violet-400">.</span>
				</button>

				<div className="hidden md:flex items-center gap-8">
					{NAV_ITEMS.map((item) => (
						<button
							key={item.id}
							onClick={() => scrollTo(item.id)}
							className="text-sm text-zinc-400 hover:text-white transition-colors"
						>
							{item.label}
						</button>
					))}
				</div>

				<button
					className="md:hidden text-zinc-400 hover:text-white transition-colors"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Toggle menu"
				>
					{menuOpen ? <X size={22} /> : <Menu size={22} />}
				</button>
			</nav>

			{/* Mobile menu */}
			<div
				className="fixed inset-0 z-40 md:hidden transition-all duration-300"
				style={{
					opacity: menuOpen ? 1 : 0,
					pointerEvents: menuOpen ? "all" : "none",
					background: "rgba(10,10,15,0.97)",
				}}
			>
				<div className="flex flex-col items-center justify-center h-full gap-10">
					{NAV_ITEMS.map((item, i) => (
						<button
							key={item.id}
							onClick={() => scrollTo(item.id)}
							className="text-3xl font-bold text-zinc-300 hover:text-white transition-colors"
							style={{ transitionDelay: menuOpen ? `${i * 50}ms` : "0ms" }}
						>
							{item.label}
						</button>
					))}
				</div>
			</div>
		</>
	);
}
