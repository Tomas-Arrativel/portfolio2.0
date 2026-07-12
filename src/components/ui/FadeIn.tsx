"use client";

import { motion } from "framer-motion";
import { EASE, VIEWPORT } from "@/lib/motion";

interface FadeInProps {
	children: React.ReactNode;
	delay?: number; // ms, igual que la API anterior
	className?: string;
}

export default function FadeIn({
	children,
	delay = 0,
	className = "",
}: FadeInProps) {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 28 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={VIEWPORT}
			transition={{ duration: 0.65, ease: EASE, delay: delay / 1000 }}
		>
			{children}
		</motion.div>
	);
}
