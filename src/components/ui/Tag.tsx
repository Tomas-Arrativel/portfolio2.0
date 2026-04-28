interface TagProps {
	label: string;
	variant?: "default" | "violet";
}

export default function Tag({ label, variant = "default" }: TagProps) {
	if (variant === "violet") {
		return (
			<span className="inline-block text-xs font-medium tracking-wide px-3 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/20">
				{label}
			</span>
		);
	}
	return (
		<span
			className="inline-block text-xs px-2.5 py-1 rounded-full text-zinc-400"
			style={{
				background: "rgba(255,255,255,0.05)",
				border: "1px solid rgba(255,255,255,0.07)",
			}}
		>
			{label}
		</span>
	);
}
