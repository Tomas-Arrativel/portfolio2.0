import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from "@/lib/site";
import type { Dictionary } from "@/dictionaries/types";

export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
	return (
		<footer className="relative z-10 py-6 px-6 md:px-16 lg:px-24 border-t border-white/[0.06]">
			<div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
				<p className="text-zinc-500 text-[13px] text-center sm:text-left">
					© {new Date().getFullYear()} Tomás Arrativel · {dict.note}
				</p>
				<div className="flex items-center gap-5">
					<a
						href={GITHUB_URL}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						className="text-zinc-500 hover:text-white transition-colors"
					>
						<GithubIcon size={17} />
					</a>
					<a
						href={LINKEDIN_URL}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
						className="text-zinc-500 hover:text-white transition-colors"
					>
						<LinkedinIcon size={17} />
					</a>
					<a
						href={`mailto:${EMAIL}`}
						className="text-zinc-500 hover:text-white transition-colors text-[13px]"
					>
						{EMAIL}
					</a>
				</div>
			</div>
		</footer>
	);
}
