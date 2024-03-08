import Link from "next/link";
import React from "react";
import styles from "./experience.module.css";
import ExperienceCard from "./experienceCard";
import { ExperienceData } from "../../data/experience";
type Props = {};

const Experience = (props: Props) => {
  return (
    <div className={styles.container}>
      <h5 className={styles.header}>
        I have total 5+ years of experience as a frontend engineer and other
        than work I have some <Link href="/projects">personal projects.</Link>
      </h5>
      <div>
        {ExperienceData.map((e, index) => (
          <ExperienceCard {...e} key={String(index)}/>
        ))}
      </div>
    </div>
  );
};

export default Experience;
