"use client";
import { useEffect, useRef, useState } from "react";

interface FadeInProps {
	children: React.ReactNode;
	delay?: number;
	className?: string;
}

export default function FadeIn({
	children,
	delay = 0,
	className = "",
}: FadeInProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setInView(true);
			},
			{ threshold: 0.12 },
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={className}
			style={{
				opacity: inView ? 1 : 0,
				transform: inView ? "translateY(0)" : "translateY(28px)",
				transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
			}}
		>
			{children}
		</div>
	);
}
