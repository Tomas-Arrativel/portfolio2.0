"use client";

import { useEffect, useRef } from "react";
import {
	useInView,
	useMotionValue,
	useSpring,
	useReducedMotion,
} from "framer-motion";

interface CounterProps {
	value: number;
	suffix?: string;
	className?: string;
}

// Número que cuenta hacia arriba al entrar en viewport.
export default function Counter({ value, suffix = "", className }: CounterProps) {
	const ref = useRef<HTMLSpanElement>(null);
	const inView = useInView(ref, { once: true, margin: "-60px" });
	const reduced = useReducedMotion();

	const mv = useMotionValue(0);
	const spring = useSpring(mv, { stiffness: 60, damping: 20 });

	useEffect(() => {
		if (!inView) return;
		if (reduced) {
			if (ref.current) ref.current.textContent = `${value}${suffix}`;
			return;
		}
		mv.set(value);
		const unsub = spring.on("change", (v) => {
			if (ref.current)
				ref.current.textContent = `${Math.round(v)}${suffix}`;
		});
		return unsub;
	}, [inView, reduced, value, suffix, mv, spring]);

	return (
		<span ref={ref} className={className}>
			0{suffix}
		</span>
	);
}
