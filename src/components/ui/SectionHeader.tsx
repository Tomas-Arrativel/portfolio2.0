import FadeIn from "./FadeIn";

interface SectionHeaderProps {
	eyebrow: string;
	title: string;
	/** Aclaración al margen, alineada a la derecha del título. */
	note?: string;
}

export default function SectionHeader({
	eyebrow,
	title,
	note,
}: SectionHeaderProps) {
	return (
		<FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-16 mb-11 md:mb-12">
			<div>
				<p className="text-xs text-violet-400 font-semibold tracking-widest uppercase">
					{eyebrow}
				</p>
				<h2 className="mt-3.5 text-4xl md:text-5xl font-bold leading-[1.05] tracking-[-0.03em]">
					{title}
				</h2>
			</div>
			{note && (
				<p className="md:max-w-[330px] text-[13.5px] leading-relaxed text-zinc-500 md:text-right text-pretty">
					{note}
				</p>
			)}
		</FadeIn>
	);
}
