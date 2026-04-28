import FadeIn from "./FadeIn";

interface SectionHeaderProps {
	eyebrow: string;
	title: string;
}

export default function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
	return (
		<FadeIn>
			<p className="text-xs text-violet-400 font-semibold tracking-widest uppercase mb-4">
				{eyebrow}
			</p>
			<h2 className="text-4xl md:text-5xl font-bold mb-16 leading-tight">
				{title}
			</h2>
		</FadeIn>
	);
}
