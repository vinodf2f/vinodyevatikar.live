import React from "react";
import { ProjectCard } from "@/components";
import { projectsData } from "@/data/projects";
import Link from "next/link";
type Props = {};

const RecentProjects = (props: Props) => {
  return (
    <div style={{ marginTop: 50 }}>
      <h3 style={{ textDecoration: "underline" }}>Recent Projects</h3>
      {projectsData.slice(0,2).map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
         <Link href="/projects">
          <p style={{ textAlign: "center" }}> View all projects</p>
        </Link>
    </div>
  );
};

export default RecentProjects;
