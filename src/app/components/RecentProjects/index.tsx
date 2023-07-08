import React from "react";
import { ProjectCard } from "@/app/components";
import { projectsData } from "@/app/data/projects";
type Props = {};

const RecentProjects = (props: Props) => {
  return (
    <div style={{ marginTop: 50 }}>
      <h3 style={{ textDecoration: "underline" }}>Recent Projects</h3>
      {projectsData.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};

export default RecentProjects;
