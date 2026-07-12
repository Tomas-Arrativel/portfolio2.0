"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 24,
		mass: 0.4,
	});

	return (
		<motion.div
			className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
			style={{
				scaleX,
				background: "linear-gradient(to right, #7c3aed, #a78bfa)",
			}}
			aria-hidden
		/>
	);
}
