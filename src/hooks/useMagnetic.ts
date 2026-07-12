"use client";

import { useRef } from "react";
import {
	useMotionValue,
	useSpring,
	useReducedMotion,
	type MotionValue,
} from "framer-motion";

// Hover magnético sutil: el elemento se desplaza levemente hacia el cursor.
export function useMagnetic(strength = 0.15) {
	const ref = useRef<HTMLDivElement>(null);
	const reduced = useReducedMotion();

	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const x: MotionValue<number> = useSpring(mx, {
		stiffness: 180,
		damping: 18,
		mass: 0.5,
	});
	const y: MotionValue<number> = useSpring(my, {
		stiffness: 180,
		damping: 18,
		mass: 0.5,
	});

	const onMouseMove = (e: React.MouseEvent) => {
		if (reduced || !ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		mx.set((e.clientX - rect.left - rect.width / 2) * strength);
		my.set((e.clientY - rect.top - rect.height / 2) * strength);
	};

	const onMouseLeave = () => {
		mx.set(0);
		my.set(0);
	};

	return { ref, x, y, onMouseMove, onMouseLeave };
}
