import FadeIn from "./ui/FadeIn";
import SectionHeader from "./ui/SectionHeader";
import Tag from "./ui/Tag";
import { ExternalLink } from "lucide-react";

interface Project {
	title: string;
	subtitle: string;
	description: string;
	tags: string[];
	borderColor: string;
	link?: string;
}

const PROJECTS: Project[] = [
	{
		title: "Ecommerce de Hogar",
		subtitle: "Ecommerce propio · Sistema de ventas completo",
		description:
			"Marca de ecommerce construida desde cero: validación de producto, branding, creativos con IA y tienda en Shopify. Sistema optimizado con bundles, foco en margen y escalabilidad mediante campañas de Meta Ads.",
		tags: ["Shopify", "Meta Ads", "Ecommerce", "IA Generativa"],
		borderColor: "#7c3aed",
	},
	{
		title: "Tienda online a medida",
		subtitle: "Ecommerce con código propio · Headless",
		description:
			"Tienda construida con código propio (Next.js + checkout headless) para casos donde Shopify o Tienda Nube se quedan cortos: lógica de catálogo personalizada, performance optimizada y total control del frontend. También desarrollo y customizo tiendas en Tienda Nube y Shopify.",
		tags: ["Next.js", "Tienda Nube", "Shopify", "Headless"],
		borderColor: "#ec4899",
	},
	{
		title: "Sistema de Marketing B2B",
		subtitle: "Sistema de adquisición para empresas",
		description:
			"Agencia enfocada en empresas de pisos epóxicos en México. Implementación completa: landing pages, campañas en Meta Ads, CRM, automatizaciones y agentes de IA para calificación y seguimiento de leads.",
		tags: ["CRM", "Meta Ads", "IA", "Automatización"],
		borderColor: "#10b981",
	},
	{
		title: "Agente de IA para leads",
		subtitle: "Calificación y seguimiento automático",
		description:
			"Agente conversacional que califica prospectos, agenda reuniones y registra datos automáticamente en CRM. Integrado con WhatsApp y sistemas de automatización para operar 24/7 sin intervención humana.",
		tags: ["OpenAI", "WhatsApp API", "Automation", "CRM"],
		borderColor: "#0ea5e9",
	},
];

const UPCOMING: Project[] = [
	{
		title: "Sistema de prospección B2B",
		subtitle: "Outreach automatizado",
		description:
			"Sistema multicanal de prospección (email + WhatsApp) con personalización automática, seguimiento inteligente y estructura enfocada en generar reuniones calificadas de forma constante.",
		tags: ["Outreach", "Automatización", "Copywriting", "B2B"],
		borderColor: "#f97316",
	},
];

function ProjectCard({
	project,
	upcoming = false,
}: {
	project: Project;
	upcoming?: boolean;
}) {
	return (
		<div
			className="rounded-2xl p-7 h-full flex flex-col transition-transform duration-300 hover:-translate-y-1"
			style={{
				background: "rgba(255,255,255,0.03)",
				border: "1px solid rgba(255,255,255,0.07)",
				borderTop: `2px solid ${project.borderColor}`,
				opacity: upcoming ? 0.85 : 1,
			}}
		>
			<div className="flex items-start justify-between mb-3">
				<div>
					<div className="flex items-center gap-2">
						<h3 className="text-xl font-bold text-white">{project.title}</h3>
						{upcoming && (
							<span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full text-violet-300 border border-violet-500/30 bg-violet-500/10">
								Próximamente
							</span>
						)}
					</div>
					<p className="text-sm text-zinc-500 mt-0.5">{project.subtitle}</p>
				</div>
				{project.link && (
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="text-zinc-600 hover:text-white transition-colors mt-1"
						aria-label={`Ver ${project.title}`}
					>
						<ExternalLink size={17} />
					</a>
				)}
			</div>

			<p className="text-sm text-zinc-400 leading-relaxed flex-1 mb-5">
				{project.description}
			</p>

			<div className="flex flex-wrap gap-2">
				{project.tags.map((tag) => (
					<Tag key={tag} label={tag} />
				))}
			</div>
		</div>
	);
}

export default function Projects() {
	return (
		<section id="projects" className="py-28 px-6 md:px-16 lg:px-24">
			<div className="max-w-5xl mx-auto">
				<SectionHeader eyebrow="Proyectos" title="Lo que construí." />

				<div className="grid md:grid-cols-2 gap-6">
					{PROJECTS.map((project, i) => (
						<FadeIn key={project.title} delay={i * 80}>
							<ProjectCard project={project} />
						</FadeIn>
					))}
				</div>

				{UPCOMING.length > 0 && (
					<div className="mt-20">
						<SectionHeader eyebrow="Próximamente" title="En lo que trabajo." />
						<div className="grid md:grid-cols-2 gap-6">
							{UPCOMING.map((project, i) => (
								<FadeIn key={project.title} delay={i * 80}>
									<ProjectCard project={project} upcoming />
								</FadeIn>
							))}
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
