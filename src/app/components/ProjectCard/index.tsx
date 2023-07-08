import React from "react";
import { ProjectData } from "@/app/data/projects";
import "./projectCard.css";
import Image from "next/image";

export const ProjectCard: React.FC<ProjectData> = ({
  title,
  description,
  date,
  stack,
  github,
  projectLink,
  coverImage,
}) => {
  return (
    <div className="project-card">
      {!!coverImage && (
        <div>
          <Image
            src={coverImage}
            className="cover-image"
            width={150}
            height={150}
            alt="cover-image"
          />
        </div>
      )}
      <div className="project-info">
        <h4 className="project-title">{title}</h4>
        <p className="project-description">{description}</p>
        {!!date && <span className="project-date">Date: {date}</span>}

        <div className="project-stack">
          {stack.map((item) => (
            <p className="stack-item">{item}</p> 
          ))}
        </div>
        <div className="project-links">
          <a href={github} target="_blank" className="project-link">
            GitHub Repository
          </a>
          <a href={projectLink} target="_blank" className="project-link">
            Project Link
          </a>
        </div>
      </div>
    </div>
  );
};
