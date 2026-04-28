import FadeIn from "./ui/FadeIn";
import Tag from "./ui/Tag";

export default function About() {
	return (
		<section id="about" className="py-28 px-6 md:px-16 lg:px-24">
			<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
				<FadeIn>
					<p className="text-xs text-violet-400 font-semibold tracking-widest uppercase mb-4">
						Sobre mí
					</p>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
						Tomás
						<br />
						Arrativel
					</h2>
					<div className="flex flex-wrap gap-2 mb-6">
						<Tag label="Argentina 🇦🇷" variant="violet" />
						<Tag label="21 años" variant="violet" />
						<Tag label="Builder" variant="violet" />
					</div>
					<div
						className="w-16 h-0.5 rounded-full"
						style={{
							background: "linear-gradient(to right, #7c3aed, transparent)",
						}}
					/>
				</FadeIn>

				<FadeIn delay={150}>
					<div className="space-y-5 text-zinc-400 leading-relaxed text-[15px]">
						<p>
							Soy Tomás Arrativel, tengo 21 años y soy de Argentina. Combino
							programación, automatización con IA y marketing digital para
							construir sistemas que generan resultados reales.
						</p>

						<p>
							Actualmente trabajo en el área de sistemas de la Municipalidad de
							Gualeguay, donde adquirí experiencia en{" "}
							<span className="text-zinc-200 font-medium">
								PHP, MySQL, JavaScript, Bootstrap, jQuery y atención al cliente
							</span>
							en entornos reales.
						</p>

						<p>
							De forma autodidacta desarrollé mis habilidades en{" "}
							<span className="text-zinc-200 font-medium">
								JavaScript, React, Next.js, Node.js, Express, Python, PostgreSQL
							</span>{" "}
							y múltiples herramientas modernas, construyendo proyectos propios
							y sistemas completos desde cero.
						</p>

						<p>
							Fundé proyectos como{" "}
							<span className="text-zinc-200 font-medium">Alvessir</span>{" "}
							(agencia de crecimiento para empresas de pisos epoxicos) y{" "}
							<span className="text-zinc-200 font-medium">Velussir</span>{" "}
							(ecommerce), donde aplico todo este conocimiento en entornos
							reales de negocio.
						</p>

						<p className="text-zinc-300">
							Me especializo en unir tecnología y negocio: diseñar el sistema,
							automatizarlo y escalarlo.
						</p>
					</div>
				</FadeIn>
			</div>
		</section>
	);
}
