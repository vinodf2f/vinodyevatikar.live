import React from "react";
import styles from "./experience.module.css";
import { IExperienceData } from "../data/experience";

const ExperienceCard = (props: IExperienceData) => {
  const { designation, companyName, location, duration, markdown } = props;
  return (
    <div>
      <div className={styles.experience}>
        <h3>{designation}</h3>
        <p className={styles.companyLocation}>
          {companyName}, {location} – {duration}
        </p>
        <p dangerouslySetInnerHTML={{ __html: markdown }} />
      </div>
    </div>
  );
};

export default ExperienceCard;
