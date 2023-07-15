import Image from "next/image";
import React from "react";
import "./skills.css";

type Props = {};
type ISkill = {
  name: string;
  icon: string;
};
const skills: ISkill[] = [
  {
    name: "Javascript",
    icon: "https://skillicons.dev/icons?i=javascript",
  },
  {
    name: "React",
    icon: "https://skillicons.dev/icons?i=react",
  },
  {
    name: "React Native",
    icon: "https://skillicons.dev/icons?i=react",
  },
  {
    name: "Typescript",
    icon: "https://skillicons.dev/icons?i=typescript",
  },
  {
    name: "NextJS",
    icon: "https://skillicons.dev/icons?i=nextjs",
  },
  {
    name: "Html",
    icon: "https://skillicons.dev/icons?i=html",
  },
  {
    name: "Css",
    icon: "https://skillicons.dev/icons?i=css",
  },


];

export const Skills = (props: Props) => {
  return (
    <div style={{marginTop:50}}>
      <h3 style={{textDecoration:'underline'}}>Tech stack I work with </h3>
      <div className="skillContainer">
        {skills.map((skill, index) => {
          return (
            <div className="skillItem" key={`${skill.name}${index}`}>
              <div className="name">{skill.name}</div>
              <Image src={skill.icon} width={15} height={15} alt={skill.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
