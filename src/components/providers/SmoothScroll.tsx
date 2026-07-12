"use client";

import { useEffect, type ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: ReactNode }) {
	useEffect(() => {
		const reduced = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		if (reduced) return;

		gsap.registerPlugin(ScrollTrigger);

		const lenis = new Lenis({
			duration: 1.1,
			easing: (t) => 1 - Math.pow(1 - t, 3),
			smoothWheel: true,
		});
		window.__lenis = lenis;

		lenis.on("scroll", ScrollTrigger.update);

		const raf = (time: number) => lenis.raf(time * 1000);
		gsap.ticker.add(raf);
		gsap.ticker.lagSmoothing(0);

		return () => {
			gsap.ticker.remove(raf);
			lenis.destroy();
			window.__lenis = undefined;
		};
	}, []);

	return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
