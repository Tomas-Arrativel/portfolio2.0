"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/motion";
import { scrollToId } from "@/lib/scroll";
import type { Dictionary } from "@/dictionaries/types";

export default function Navbar({
	lang,
	dict,
}: {
	lang: "es" | "en";
	dict: Dictionary["nav"];
}) {
	const router = useRouter();
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [active, setActive] = useState("hero");

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Scrollspy: marca el link de la sección visible.
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) setActive(entry.target.id);
				}
			},
			{ rootMargin: "-45% 0px -45% 0px" },
		);
		for (const item of dict.items) {
			const el = document.getElementById(item.id);
			if (el) observer.observe(el);
		}
		return () => observer.disconnect();
	}, [dict.items]);

	const go = (id: string) => {
		scrollToId(id);
		setMenuOpen(false);
	};

	const otherLang = lang === "es" ? "en" : "es";

	const switchLang = () => {
		document.cookie = `lang=${otherLang}; path=/; max-age=31536000; samesite=lax`;
		router.push(`/${otherLang}`);
	};

	const langToggle = (
		<button
			onClick={switchLang}
			aria-label={dict.toggleAria}
			className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full text-zinc-400 border border-zinc-700 hover:text-white hover:border-zinc-500 transition-colors"
		>
			{otherLang.toUpperCase()}
		</button>
	);

	return (
		<>
			<motion.nav
				className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12"
				initial={{ y: -80, opacity: 0 }}
				animate={{
					y: 0,
					opacity: 1,
					paddingTop: scrolled ? "0.75rem" : "1rem",
					paddingBottom: scrolled ? "0.75rem" : "1rem",
					backgroundColor: scrolled
						? "rgba(10,10,15,0.92)"
						: "rgba(10,10,15,0.5)",
					borderBottom: scrolled
						? "1px solid rgba(255,255,255,0.06)"
						: "1px solid rgba(255,255,255,0)",
				}}
				transition={{ duration: 0.45, ease: EASE }}
				style={{ backdropFilter: "blur(16px)" }}
			>
				<button
					onClick={() => go("hero")}
					className="font-bold text-xl tracking-tight hover:text-violet-400 transition-colors"
				>
					TA<span className="text-violet-400">.</span>
				</button>

				<div className="hidden md:flex items-center gap-8">
					{dict.items.map((item) => (
						<button
							key={item.id}
							onClick={() => go(item.id)}
							className={`relative text-sm transition-colors pb-1 ${
								active === item.id
									? "text-white"
									: "text-zinc-400 hover:text-white"
							}`}
						>
							{item.label}
							{active === item.id && (
								<motion.span
									layoutId="nav-underline"
									className="absolute left-0 right-0 -bottom-0.5 h-px bg-violet-400"
									transition={{ type: "spring", stiffness: 380, damping: 32 }}
								/>
							)}
						</button>
					))}
					{langToggle}
				</div>

				<div className="md:hidden flex items-center gap-3">
					{langToggle}
					<button
						className="text-zinc-400 hover:text-white transition-colors"
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label="Toggle menu"
					>
						{menuOpen ? <X size={22} /> : <Menu size={22} />}
					</button>
				</div>
			</motion.nav>

			{/* Mobile menu */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						className="fixed inset-0 z-40 md:hidden"
						style={{ background: "rgba(10,10,15,0.97)" }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3, ease: EASE }}
					>
						<motion.div
							className="flex flex-col items-center justify-center h-full gap-10"
							initial="hidden"
							animate="visible"
							exit="hidden"
							variants={{
								visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
								hidden: {},
							}}
						>
							{dict.items.map((item) => (
								<motion.button
									key={item.id}
									onClick={() => go(item.id)}
									className={`text-3xl font-bold transition-colors ${
										active === item.id
											? "text-violet-400"
											: "text-zinc-300 hover:text-white"
									}`}
									variants={{
										hidden: { opacity: 0, y: 20 },
										visible: {
											opacity: 1,
											y: 0,
											transition: { duration: 0.45, ease: EASE },
										},
									}}
								>
									{item.label}
								</motion.button>
							))}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
