import React from "react";
import styles from "./experience.module.css";
import { IExperienceData } from "../../data/experience";
import Link from "next/link";

const ExperienceCard = (props: IExperienceData) => {
  const { designation, companyName, location, duration, markdown, link } = props;
  return (
    <div className={styles.experience}>
      <h3>{designation}</h3>
      <Link href={link} target="_blank" className={styles.companyLocation}>
       <p className={styles.companyLocation}> {companyName}, {location}</p>
      </Link>
      <p className={styles.companyLocation}>{duration}</p>
      <p dangerouslySetInnerHTML={{ __html: markdown }} />
    </div>
  );
};

export default ExperienceCard;
