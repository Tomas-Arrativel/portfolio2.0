"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

interface CounterProps {
	value: number;
	suffix?: string;
	className?: string;
}

// Número que cuenta hacia arriba al entrar en viewport.
//
// El valor final se renderiza en el HTML (server-side): la animación es solo
// una mejora progresiva. Sin JS, con bloqueadores o antes de hidratar, el
// número correcto ya está en pantalla, nunca un cero.
export default function Counter({
	value,
	suffix = "",
	className,
}: CounterProps) {
	const ref = useRef<HTMLSpanElement>(null);
	const inView = useInView(ref, { once: true, margin: "-60px" });
	const reduced = useReducedMotion();

	useEffect(() => {
		const el = ref.current;
		if (!el || !inView || reduced) return;

		const controls = animate(0, value, {
			duration: 1.4,
			ease: EASE,
			onUpdate: (v) => {
				el.textContent = `${Math.round(v)}${suffix}`;
			},
		});

		// Al cancelar (o al desmontar) el nodo vuelve al valor final, para que
		// nunca quede congelado en un número intermedio.
		return () => {
			controls.stop();
			el.textContent = `${value}${suffix}`;
		};
	}, [inView, reduced, value, suffix]);

	return (
		<span ref={ref} className={className}>
			{value}
			{suffix}
		</span>
	);
}
