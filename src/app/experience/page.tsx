import Link from "next/link";
import React from "react";
import styles from "./experience.module.css";
import ExperienceCard from "./experienceCard";
import Seperator from "@/app/components/Seperator";
import { ExperienceData } from "../data/experience";
type Props = {};

export default (props: Props) => {
  return (
    <div className={styles.container}>
      <h5 className={styles.header}>
        I have total 4+ years of experience as a frontend engineer and other
        than work I have some <Link href="/projects">personal projects.</Link>
      </h5>
      <div>
        {ExperienceData.map((e) => (
          <>
            <ExperienceCard {...e} />
            <Seperator />
          </>
        ))}
      </div>
    </div>
  );
};
