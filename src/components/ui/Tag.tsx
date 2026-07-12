"use client";

import { motion } from "framer-motion";
import { SPRING } from "@/lib/motion";

interface TagProps {
	label: string;
	variant?: "default" | "violet";
}

export default function Tag({ label, variant = "default" }: TagProps) {
	if (variant === "violet") {
		return (
			<motion.span
				className="inline-block text-xs font-medium tracking-wide px-3 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/20"
				whileHover={{ scale: 1.08, y: -1 }}
				transition={SPRING}
			>
				{label}
			</motion.span>
		);
	}
	return (
		<motion.span
			className="inline-block text-xs px-2.5 py-1 rounded-full text-zinc-400"
			style={{
				background: "rgba(255,255,255,0.05)",
				border: "1px solid rgba(255,255,255,0.07)",
			}}
			whileHover={{
				scale: 1.08,
				y: -1,
				color: "#e4e4e7",
				borderColor: "rgba(167,139,250,0.35)",
				boxShadow: "0 4px 16px rgba(124,58,237,0.15)",
			}}
			transition={SPRING}
		>
			{label}
		</motion.span>
	);
}
