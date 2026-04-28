import FadeIn from "./ui/FadeIn";
import SectionHeader from "./ui/SectionHeader";

const SERVICES = [
	{
		icon: "⚡",
		title: "Automatización de procesos",
		desc: "Diseño e implementación de sistemas que eliminan tareas manuales: seguimiento de leads, CRM, reportes y flujos internos completamente automatizados.",
	},
	{
		icon: "🤖",
		title: "Agentes de IA",
		desc: "Agentes que califican prospectos, responden clientes y agendan reuniones automáticamente, integrados a WhatsApp y CRM.",
	},
	{
		icon: "📈",
		title: "Generación de clientes",
		desc: "Estrategia y ejecución de campañas en Meta Ads con foco en resultados: leads calificados y crecimiento sostenido.",
	},
	{
		icon: "🛒",
		title: "Ecommerce",
		desc: "Creación de tiendas optimizadas para vender: producto, branding, estructura de oferta y sistema de adquisición de clientes.",
	},
	{
		icon: "💻",
		title: "Desarrollo de sistemas",
		desc: "Construcción de plataformas, landing pages y herramientas internas adaptadas a cada negocio.",
	},
	{
		icon: "📊",
		title: "CRM & ventas",
		desc: "Implementación de sistemas de gestión de clientes con pipelines, automatizaciones y seguimiento inteligente.",
	},
	{
		icon: "🏠",
		title: "Marketing para inmobiliarias",
		desc: "Gestión completa para inmobiliarias: campañas en Meta Ads, generación de leads, contenido para redes sociales, grabación de propiedades y optimización del proceso de venta.",
	},
];

export default function Services() {
	return (
		<section
			id="services"
			className="py-28 px-6 md:px-16 lg:px-24"
			style={{ background: "rgba(255,255,255,0.015)" }}
		>
			<div className="max-w-5xl mx-auto">
				<SectionHeader eyebrow="Servicios" title="En qué puedo ayudarte." />

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
					{SERVICES.map((service, i) => (
						<FadeIn key={service.title} delay={i * 60}>
							<div
								className="rounded-2xl p-6 h-full transition-transform duration-300 hover:-translate-y-1"
								style={{
									background: "rgba(255,255,255,0.03)",
									border: "1px solid rgba(255,255,255,0.07)",
								}}
							>
								<span className="text-2xl mb-4 block">{service.icon}</span>
								<h3 className="font-bold text-white mb-2 text-base">
									{service.title}
								</h3>
								<p className="text-sm text-zinc-400 leading-relaxed">
									{service.desc}
								</p>
							</div>
						</FadeIn>
					))}
				</div>
			</div>
		</section>
	);
}
