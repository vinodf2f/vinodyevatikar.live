import heyThereCoverImage from "../../../../public/heyThere.png";
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
    description:
      `Hey There is a delightful chat app that enables you to connect with nearby individuals anonymously. Whether you're looking for interesting discussions, friendly banter, or simply passing the time, Hey-there is your app, Once you log out all the chats and account information will be deleted.`,
    date: "21-06-2023",
    tags: [],
    stack: ["React-Native", "Expo", "React-Native-Maps", "Expo-Location"],
    github: "https://github.com/vinodf2f/hey-there",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.vinod_f2f.heythere",
    coverImage: heyThereCoverImage.src,
  },
];
