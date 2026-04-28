import FadeIn from "./ui/FadeIn";
import SectionHeader from "./ui/SectionHeader";
import Tag from "./ui/Tag";

const SKILLS = [
	{
		category: "Desarrollo",
		dot: "bg-violet-500",
		items: [
			"Next.js",
			"React",
			"JavaScript",
			"TypeScript",
			"Node.js",
			"Express",
			"Python",
			"PHP",
		],
	},
	{
		category: "Bases de datos",
		dot: "bg-emerald-500",
		items: ["PostgreSQL", "MySQL", "APIs REST", "Integraciones"],
	},
	{
		category: "IA & Automatización",
		dot: "bg-sky-500",
		items: [
			"Agentes de IA",
			"OpenAI",
			"n8n / Make",
			"Automatización de procesos",
			"Workflows complejos",
		],
	},
	{
		category: "Marketing & Growth",
		dot: "bg-orange-500",
		items: [
			"Meta Ads",
			"Copywriting",
			"Funnels",
			"Lead generation",
			"Optimización de conversiones",
		],
	},
	{
		category: "Ecommerce & CRM",
		dot: "bg-pink-500",
		items: [
			"Shopify",
			"GoHighLevel",
			"Email marketing",
			"WhatsApp automation",
			"Sales pipelines",
		],
	},
	{
		category: "Frontend & UI",
		dot: "bg-amber-500",
		items: ["Tailwind CSS", "Bootstrap", "Responsive design", "UX/UI"],
	},
	{
		category: "Real Estate & Content",
		dot: "bg-indigo-500",
		items: [
			"Meta Ads inmobiliario",
			"Generación de leads",
			"Contenido para Instagram",
			"Grabación de propiedades",
			"Edición de video",
			"Publicaciones optimizadas",
		],
	},
];

export default function Skills() {
	return (
		<section
			id="skills"
			className="py-28 px-6 md:px-16 lg:px-24"
			style={{ background: "rgba(255,255,255,0.015)" }}
		>
			<div className="max-w-5xl mx-auto">
				<SectionHeader eyebrow="Skills" title="Stack completo." />

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
					{SKILLS.map((skill, i) => (
						<FadeIn key={skill.category} delay={i * 60}>
							<div
								className="rounded-2xl p-6 h-full transition-transform duration-300 hover:-translate-y-1"
								style={{
									background: "rgba(255,255,255,0.03)",
									border: "1px solid rgba(255,255,255,0.07)",
								}}
							>
								<div className="flex items-center gap-3 mb-4">
									<div className={`w-2 h-2 rounded-full ${skill.dot}`} />
									<span className="font-semibold text-sm text-zinc-200">
										{skill.category}
									</span>
								</div>
								<div className="flex flex-wrap gap-2">
									{skill.items.map((item) => (
										<Tag key={item} label={item} />
									))}
								</div>
							</div>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}
