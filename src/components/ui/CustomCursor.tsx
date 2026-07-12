"use client";

import { useEffect, useState } from "react";
import {
	motion,
	useMotionValue,
	useSpring,
	useReducedMotion,
} from "framer-motion";

const INTERACTIVE = "a, button, [role='button'], input, textarea";

export default function CustomCursor() {
	const reduced = useReducedMotion();
	const [enabled, setEnabled] = useState(false);
	const [hovering, setHovering] = useState(false);

	const x = useMotionValue(-100);
	const y = useMotionValue(-100);
	const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
	const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

	useEffect(() => {
		// Solo en dispositivos con puntero fino (desktop).
		if (reduced || !window.matchMedia("(pointer: fine)").matches) return;
		setEnabled(true);

		const onMove = (e: MouseEvent) => {
			x.set(e.clientX);
			y.set(e.clientY);
			setHovering(!!(e.target as Element).closest?.(INTERACTIVE));
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		return () => window.removeEventListener("mousemove", onMove);
	}, [reduced, x, y]);

	if (!enabled) return null;

	return (
		<motion.div
			className="fixed top-0 left-0 z-[70] pointer-events-none rounded-full"
			style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
			animate={{
				width: hovering ? 44 : 14,
				height: hovering ? 44 : 14,
				backgroundColor: hovering
					? "rgba(167,139,250,0.18)"
					: "rgba(167,139,250,0.9)",
				border: hovering
					? "1px solid rgba(167,139,250,0.6)"
					: "1px solid rgba(167,139,250,0)",
			}}
			transition={{ type: "spring", stiffness: 400, damping: 28 }}
			aria-hidden
		/>
	);
}
