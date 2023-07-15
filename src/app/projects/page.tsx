import React from "react";
import { projectsData } from "../../data/projects";
import { ProjectCard } from "../../components";
import Link from "next/link";
import { LINKS } from "@/data/constants";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="project-container">
      {projectsData.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
      <p>
        Visit my <Link target="_blank" href={LINKS.social.github}>GitHub</Link> to see
        my inprogress projects, incomplete experiments and some
        proof-of-concepts repos.
      </p>
    </div>
  );
};

export default Projects;
