import React from "react";
import { projectsData } from "../../data/projects";
import { ProjectCard } from "../../components";
import Link from "next/link";
import { LINKS, defaultMetaData } from "@/data/constants";
import { Metadata } from "next";

type Props = {};
const projectsMetaData = {
  title: "Projects | Vinod Yevatikar",
  description:
    "Find my side projects on frontend development, React, React-Native",
};

export const metadata: Metadata = {
  ...defaultMetaData,
  ...projectsMetaData,
  openGraph: {
    ...projectsMetaData,
  },
};

const Projects = (props: Props) => {
  return (
    <div className="project-container">
      <h3 className="title">Projects</h3>
      {projectsData.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
      <p>
        Visit my{" "}
        <Link target="_blank" href={LINKS.social.github}>
          GitHub
        </Link>{" "}
        and {" "}
        <Link target="_blank" href={LINKS.social.codesandbox}>
          Codesandbox
        </Link>{" "}
        to see my inprogress projects, incomplete experiments and some
        proof-of-concepts repos.
      </p>
    </div>
  );
};

export default Projects;
