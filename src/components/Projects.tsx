"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import Tag from "./ui/Tag";
import { ExternalLink } from "lucide-react";
import { fadeUp, stagger, tagPop, SPRING_SOFT } from "@/lib/motion";
import type { Dictionary } from "@/dictionaries/types";

type ProjectsDict = Dictionary["projects"];
type Project = ProjectsDict["items"][number];

function ProjectCard({
	project,
	upcomingBadge,
	viewAria,
	upcoming = false,
}: {
	project: Project;
	upcomingBadge: string;
	viewAria: string;
	upcoming?: boolean;
}) {
	return (
		<motion.div
			variants={fadeUp}
			whileHover={{
				y: -8,
				scale: 1.015,
				boxShadow: "0 24px 48px -16px rgba(0,0,0,0.5)",
			}}
			transition={SPRING_SOFT}
			className="rounded-2xl p-7 h-full flex flex-col"
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
								{upcomingBadge}
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
						aria-label={`${viewAria} ${project.title}`}
					>
						<ExternalLink size={17} />
					</a>
				)}
			</div>

			<p className="text-sm text-zinc-400 leading-relaxed flex-1 mb-5">
				{project.description}
			</p>

			<motion.div className="flex flex-wrap gap-2" variants={stagger(0.15, 0.05)}>
				{project.tags.map((tag) => (
					<motion.span key={tag} variants={tagPop} className="inline-block">
						<Tag label={tag} />
					</motion.span>
				))}
			</motion.div>
		</motion.div>
	);
}

export default function Projects({ dict }: { dict: ProjectsDict }) {
	return (
		<section id="projects" className="py-28 px-6 md:px-16 lg:px-24">
			<div className="max-w-5xl mx-auto">
				<SectionHeader eyebrow={dict.eyebrow} title={dict.title} />

				<motion.div
					className="grid md:grid-cols-2 gap-6"
					variants={stagger(0, 0.1)}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-60px" }}
				>
					{dict.items.map((project) => (
						<ProjectCard
							key={project.title}
							project={project}
							upcomingBadge={dict.upcomingBadge}
							viewAria={dict.viewAria}
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
}
