import heyThereCoverImage from "public/heyThere.png";
import portfolioCover from "public/portfolioCover.png";
import bhvyaNgoCover from "public/bhavyaNgoCover.png";

export type ProjectData = {
  title: string;
  description: string;
  date?: string;
  stack: string[];
  github: string;
  projectLink: string;
  tags?: string[];
  coverImage?: string;
};

export const projectsData: ProjectData[] = [
  {
    title: "Bhavya NGO",
    description:
      "Bhaavya is a non-profit organization that aims to provide financial assistance and educational support to underprivileged children. *Work in progress",
    date: "16-07-2023",
    tags: [],
    stack: ["NextJS", "React", "Typescript", "AppRouter", "Vercel"],
    github: "https://github.com/vinodf2f/bhavya-ngo",
    projectLink: "https://bhavya-ngo.vercel.app/",
    coverImage: bhvyaNgoCover.src,
  },
  {
    title: "Hey there",
    description: `Hey There is a chat app that enables you to connect with nearby individuals anonymously.`,
    date: "02-07-2023",
    tags: [],
    stack: [
      "React-Native",
      "Expo",
      "React-Native-Maps",
      "Expo-Location",
      "React-Native-Gifted-Chat",
    ],
    github: "https://github.com/vinodf2f/hey-there",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.vinod_f2f.heythere",
    coverImage: heyThereCoverImage.src,
  },
  {
    title: "Portfolio",
    description:
      "A Nextjs website to showcase my work experience, skills, expertise, Blogs, Projects & Gallary",
    date: "09-07-2023",
    tags: [],
    stack: ["NextJS", "React", "Typescript", "AppRouter"],
    github: "https://github.com/vinodf2f/vinodyevatikar.live",
    projectLink: "https://vinodyevatikar-live.vercel.app/",
    coverImage: portfolioCover.src,
  },
];
