import heyThereCoverImage from "../../../../public/heyThere.png";
import portfolioCover from "../../../../public/portfolioCover.png";
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
    title: "Hey there",
    description: `Hey There is a chat app that enables you to connect with nearby individuals anonymously. Whether you're looking for interesting discussions or simply passing the time with nearby folks, Hey-there is your app, Once you log out all the chats and account information will be deleted.`,
    date: "02-07-2023",
    tags: [],
    stack: ["React-Native", "Expo", "React-Native-Maps", "Expo-Location","React-Native-Gifted-Chat"],
    github: "https://github.com/vinodf2f/hey-there",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.vinod_f2f.heythere",
    coverImage: heyThereCoverImage.src,
  },
  {
    title: "Portfolio",
    description: `A portfolio a way to create an online space for me to showcase my expertise, skill & work experience impress potential clients and employers.`,
    date: "09-07-2023",
    tags: [],
    stack: ["NextJS", "React", "Typescript","AppRouter"],
    github: "https://github.com/vinodf2f/vinodyevatikar.live",
    projectLink:
      "https://vinodyevatikar-live.vercel.app/",
    coverImage: portfolioCover.src,
  },
];
