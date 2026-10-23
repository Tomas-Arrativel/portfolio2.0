import Image from "next/image";

// Capturas reales de la app: escritorio en un marco de navegador y, encima,
// la vista mobile en un marco de teléfono. Sin URL en la barra a propósito.
export default function ProjectShots({
	desktop,
	mobile,
	alt,
	color,
	className,
}: {
	desktop: string;
	mobile: string;
	alt: string;
	color: string;
	className: string;
}) {
	return (
		<div
			className={`relative flex items-center rounded-[14px] overflow-hidden border border-white/[0.06] ${className}`}
			style={{
				background: `radial-gradient(120% 120% at 15% 0%, ${color}22 0%, rgba(255,255,255,0.02) 55%, rgba(255,255,255,0) 100%)`,
			}}
		>
			{/* Composición con proporción fija, centrada si el panel es más alto. */}
			<div className="relative w-full aspect-[16/10.5]">
				<div className="absolute left-[5%] top-[8%] w-[86%] rounded-[10px] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
					<div className="flex items-center gap-1.5 px-3 h-6 border-b border-white/[0.06] bg-zinc-900">
						<span className="w-2 h-2 rounded-full bg-white/15" aria-hidden />
						<span className="w-2 h-2 rounded-full bg-white/15" aria-hidden />
						<span className="w-2 h-2 rounded-full bg-white/15" aria-hidden />
					</div>
					<Image
						src={desktop}
						alt={alt}
						width={1600}
						height={1000}
						sizes="(min-width: 1024px) 560px, (min-width: 768px) 45vw, 90vw"
						className="block w-full h-auto"
					/>
				</div>

				<div className="absolute right-[4%] bottom-[-18%] w-[24%] rounded-[18px] p-[3px] bg-zinc-800 border border-white/15 shadow-2xl">
					<Image
						src={mobile}
						alt=""
						width={520}
						height={1125}
						sizes="(min-width: 1024px) 140px, 25vw"
						className="block w-full h-auto rounded-[15px]"
					/>
				</div>
			</div>
		</div>
	);
}
