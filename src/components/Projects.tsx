"use client";

import { motion } from "framer-motion";
import { ExternalLink, Lock, MonitorSmartphone, Workflow } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Tag from "./ui/Tag";
import ProjectDiagram from "./ui/ProjectDiagram";
import ProjectShots from "./ui/ProjectShots";
import SectionBackground from "./ui/SectionBackground";
import { GithubIcon } from "./ui/BrandIcons";
import { fadeUp, stagger, tagPop, SPRING_SOFT } from "@/lib/motion";
import type { Dictionary } from "@/dictionaries/types";

type ProjectsDict = Dictionary["projects"];
type Project = ProjectsDict["items"][number];

const LINK_CLASS =
	"inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-violet-400/40 transition-colors";

const CARD_STYLE = {
	background: "rgba(255,255,255,0.03)",
	border: "1px solid rgba(255,255,255,0.07)",
};

// Panel del diagrama: superficie apenas más clara, con su propia grilla de puntos.
// Si el proyecto tiene capturas reales, se muestran esas en lugar del diagrama.
function Diagram({
	project,
	lang,
	className,
}: {
	project: Project;
	lang: "es" | "en";
	className: string;
}) {
	if (project.shots) {
		return (
			<ProjectShots
				desktop={project.shots.desktop}
				mobile={project.shots.mobile}
				alt={project.shots.alt}
				color={project.borderColor}
				className={className}
			/>
		);
	}

	return (
		<div
			className={`relative rounded-[14px] overflow-hidden border border-white/[0.06] ${className}`}
			style={{
				background:
					"radial-gradient(120% 120% at 20% 0%, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 55%, rgba(255,255,255,0) 100%)",
			}}
		>
			<div
				className="absolute inset-0"
				style={{
					backgroundImage:
						"radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
					backgroundSize: "22px 22px",
				}}
				aria-hidden
			/>
			<div className="relative w-full h-full p-3">
				<ProjectDiagram
					scene={project.scene}
					color={project.borderColor}
					lang={lang}
				/>
			</div>
		</div>
	);
}

function Links({
	project,
	labels,
}: {
	project: Project;
	labels: Pick<
		ProjectsDict,
		"demoLabel" | "codeLabel" | "privateLabel" | "archLabel" | "shotsLabel"
	>;
}) {
	return (
		<div className="flex flex-wrap items-center gap-2 mt-5 pt-4 border-t border-white/[0.06] w-full">
			<span
				className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
				style={{
					color: project.borderColor,
					background: `${project.borderColor}14`,
					border: `1px solid ${project.borderColor}44`,
				}}
			>
				{project.shots ? (
					<MonitorSmartphone size={12} aria-hidden />
				) : (
					<Workflow size={12} aria-hidden />
				)}
				{project.shots ? labels.shotsLabel : labels.archLabel}
			</span>

			{project.demo && (
				<a
					href={project.demo}
					target="_blank"
					rel="noopener noreferrer"
					className={LINK_CLASS}
				>
					<ExternalLink size={13} aria-hidden />
					{labels.demoLabel}
					<span className="sr-only">: {project.title}</span>
				</a>
			)}

			{project.repo && (
				<a
					href={project.repo}
					target="_blank"
					rel="noopener noreferrer"
					className={LINK_CLASS}
				>
					<GithubIcon size={13} />
					{labels.codeLabel}
					<span className="sr-only">: {project.title}</span>
				</a>
			)}

			{/* Un repo privado se declara, no se omite. */}
			{!project.repo && project.repoPrivate && (
				<span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 text-zinc-400">
					<Lock size={13} aria-hidden />
					{labels.privateLabel}
				</span>
			)}
		</div>
	);
}

function FeaturedCard({
	project,
	dict,
	lang,
}: {
	project: Project;
	dict: ProjectsDict;
	lang: "es" | "en";
}) {
	return (
		<motion.article
			variants={fadeUp}
			className="grid lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] gap-8 lg:gap-10 p-5 sm:p-[30px] rounded-[20px] shadow-2xl"
			style={{ ...CARD_STYLE, borderTop: `2px solid ${project.borderColor}` }}
		>
			<Diagram
				project={project}
				lang={lang}
				className="aspect-[16/10.5] lg:aspect-auto lg:min-h-[360px]"
			/>

			<div className="flex flex-col items-start">
				<span
					className="inline-flex items-center text-[10.5px] font-bold tracking-[0.16em] uppercase px-2.5 py-1.5 rounded-full"
					style={{
						color: project.borderColor,
						border: `1px solid ${project.borderColor}4d`,
					}}
				>
					{dict.featuredLabel}
				</span>

				<h3 className="mt-4 text-2xl md:text-[31px] font-bold leading-tight tracking-[-0.02em]">
					{project.title}
				</h3>
				<p className="mt-2.5 text-[15px] leading-[1.55] text-zinc-300 text-pretty">
					{project.subtitle}
				</p>

				{project.bullets && (
					<ul className="mt-5 flex flex-col gap-2.5">
						{project.bullets.map((segments, i) => (
							<li key={i} className="flex items-start gap-2.5">
								<span
									className="flex-shrink-0 w-[5px] h-[5px] rounded-full mt-[7px]"
									style={{ background: project.borderColor }}
									aria-hidden
								/>
								<span className="text-[13.5px] leading-[1.5] text-zinc-400 text-pretty">
									{segments.map((segment, j) =>
										segment.highlight ? (
											<span key={j} className="text-zinc-200">
												{segment.text}
											</span>
										) : (
											<span key={j}>{segment.text}</span>
										),
									)}
								</span>
							</li>
						))}
					</ul>
				)}

				<motion.div
					className="flex flex-wrap gap-2 mt-5"
					variants={stagger(0.15, 0.05)}
				>
					{project.tags.map((tag) => (
						<motion.span key={tag} variants={tagPop} className="inline-block">
							<Tag label={tag} />
						</motion.span>
					))}
				</motion.div>

				<Links project={project} labels={dict} />
			</div>
		</motion.article>
	);
}

function ProjectCard({
	project,
	dict,
	lang,
}: {
	project: Project;
	dict: ProjectsDict;
	lang: "es" | "en";
}) {
	return (
		<motion.article
			variants={fadeUp}
			whileHover={{
				y: -8,
				boxShadow: "0 24px 48px -16px rgba(0,0,0,0.5)",
			}}
			transition={SPRING_SOFT}
			className="flex flex-col rounded-[20px] overflow-hidden h-full"
			style={{ ...CARD_STYLE, borderTop: `2px solid ${project.borderColor}` }}
		>
			<div className="p-5 pb-0">
				<Diagram project={project} lang={lang} className="aspect-[16/10]" />
			</div>

			<div className="flex flex-col items-start flex-1 px-5 sm:px-6 pt-5 pb-6">
				<h3 className="text-lg md:text-xl font-bold tracking-[-0.01em]">
					{project.title}
				</h3>
				<p className="mt-2 text-[13.5px] leading-[1.55] text-zinc-400 text-pretty">
					{project.subtitle}
				</p>

				<motion.div
					className="flex flex-wrap gap-2 mt-4"
					variants={stagger(0.15, 0.05)}
				>
					{project.tags.map((tag) => (
						<motion.span key={tag} variants={tagPop} className="inline-block">
							<Tag label={tag} />
						</motion.span>
					))}
				</motion.div>

				<div className="flex-1" />
				<Links project={project} labels={dict} />
			</div>
		</motion.article>
	);
}

export default function Projects({
	lang,
	dict,
}: {
	lang: "es" | "en";
	dict: ProjectsDict;
}) {
	const [featured, ...rest] = dict.items;

	return (
		<section
			id="projects"
			className="relative py-24 md:py-28 px-6 md:px-16 lg:px-24"
		>
			<SectionBackground
				id="projects"
				mask="top"
				dots={0.05}
				glows={[
					{
						w: 1000,
						h: 900,
						color: "rgba(34,211,238,0.08)",
						style: { right: -240, top: -320 },
					},
				]}
			/>

			<div className="relative z-10 max-w-6xl mx-auto">
				<SectionHeader
					eyebrow={dict.eyebrow}
					title={dict.title}
					note={dict.note}
				/>

				<motion.div
					className="flex flex-col gap-6"
					variants={stagger(0, 0.1)}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-60px" }}
				>
					<FeaturedCard project={featured} dict={dict} lang={lang} />

					<motion.div className="grid md:grid-cols-2 gap-6">
						{rest.map((project) => (
							<ProjectCard
								key={project.title}
								project={project}
								dict={dict}
								lang={lang}
							/>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
