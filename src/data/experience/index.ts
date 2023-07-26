import { LINKS } from "../constants";

export type IExperienceData = {
  designation: string;
  companyName: string;
  location: string;
  duration: string;
  markdown: string;
  link: string;
};

export const ExperienceData: IExperienceData[] = [
  {
    designation: "Senior Development Engineer 2",
    companyName: "MPL (Striker.club)",
    location: "Banglore, India",
    duration: "(June 5 - current)",
    markdown:"",
    link:LINKS.organisation.mpl
  },
  {
    designation: "Senior Software Engineer 1",
    companyName: "Makemytrip / Goibibo",
    location: "Gurgaon, India",
    duration: "(Aug 26 - june 2)",
    markdown:"",
    link:LINKS.organisation.makemytrip
  },
  {
    designation: "Software Engineer",
    companyName: "GeekyAnts Software Pvt Ltd",
    location: "Bangalore, India",
    duration: "(Sept 19 - Aug 21)",
    markdown:"",
    link:LINKS.organisation.geekyants
  },
];
