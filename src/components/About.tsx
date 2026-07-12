import FadeIn from "./ui/FadeIn";
import Tag from "./ui/Tag";
import Counter from "./ui/Counter";
import type { Dictionary } from "@/dictionaries/types";

export default function About({ dict }: { dict: Dictionary["about"] }) {
	return (
		<section id="about" className="py-28 px-6 md:px-16 lg:px-24">
			<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
				<FadeIn>
					<p className="text-xs text-violet-400 font-semibold tracking-widest uppercase mb-4">
						{dict.eyebrow}
					</p>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
						Tomás
						<br />
						Arrativel
					</h2>
					<div className="flex flex-wrap gap-2 mb-6">
						{dict.tags.map((tag) => (
							<Tag key={tag} label={tag} variant="violet" />
						))}
					</div>
					<div
						className="w-16 h-0.5 rounded-full"
						style={{
							background: "linear-gradient(to right, #7c3aed, transparent)",
						}}
					/>

					<div className="grid grid-cols-3 gap-4 mt-10">
						{dict.stats.map((stat) => (
							<div key={stat.label}>
								<Counter
									value={stat.value}
									suffix={stat.suffix}
									className="text-3xl md:text-4xl font-bold text-white"
								/>
								<p className="text-xs text-zinc-500 mt-1 leading-snug">
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</FadeIn>

				<FadeIn delay={150}>
					<div className="space-y-5 text-zinc-400 leading-relaxed text-[15px]">
						{dict.paragraphs.map((segments, i) => (
							<p key={i}>
								{segments.map((segment, j) =>
									segment.highlight ? (
										<span key={j} className="text-zinc-200 font-medium">
											{segment.text}
										</span>
									) : (
										<span key={j}>{segment.text}</span>
									),
								)}
							</p>
						))}

						<p className="text-zinc-300">{dict.closing}</p>
					</div>
				</FadeIn>
			</div>
		</section>
	);
}
