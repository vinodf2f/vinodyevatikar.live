import React from "react";
import { projectsData } from "../../data/projects";
import { ProjectCard } from "../../components";
import Link from "next/link";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="project-container">
      {projectsData.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
      <p>
        Visit my {" "}<Link href="https://github.com/vinodf2f">GitHub</Link>{" "}to see
        my incomplete projects and some proof-of-concepts repos{" "}
      </p>
    </div>
  );
};

export default Projects;
