import { Metadata } from "next";

export type IHomeLink = {
  label: string;
  actionId: string;
  icon?: {
    isStatic: boolean;
    src: string;
  };
  href?: string;
};

export const LINKS = {
  social: {
    twitter: "https://twitter.com/YevatikarVinod",
    github: "https://github.com/vinodf2f",
    linkedin: "https://www.linkedin.com/in/vinod-yevatikar/",
    instagram: "https://www.instagram.com/vinod_y_/",
    codesandbox:"https://codesandbox.io/u/vinodf2f"
  },
  icons: {
    github: "https://skillicons.dev/icons?i=github",
    twitter: "https://skillicons.dev/icons?i=twitter",
    linkedin: "https://skillicons.dev/icons?i=linkedin",
    instagram: "https://skillicons.dev/icons?i=instagram",
    codesandbox:"https://skillicons.dev/icons?i=codepen"
  },
  organisation: {
    mpl: "https://www.mpl.live/",
    makemytrip: "https://www.makemytrip.com/",
    goibibo: "https://www.goibibo.com/",
    geekyants: "https://geekyants.com/",
    emiratesNbd:"https://www.emiratesnbd.com/en"
  },
};

export const HOME_LINKS: IHomeLink[] = [
  // {
  //   label: "Work",
  //   actionId: "experience",
  //   icon: {
  //     isStatic: true,
  //     src: "👨🏻‍💻",
  //   },
  // },
  {
    label: "Resume",
    actionId: "resume",
    icon: {
      isStatic: true,
      src: "📜",
    },
  },


  {
    label: "Github",
    actionId: "github",
    icon: {
      isStatic: false,
      src: LINKS.icons.github,
    },
    href: LINKS.social.github,
  },
  {
    label: "Codesandbox",
    actionId: "codesandbox",
    href: LINKS.social.codesandbox,
  },
  {
    label: "Twitter",
    actionId: "twitter",
    icon: {
      isStatic: false,
      src: LINKS.icons.twitter,
    },
    href: LINKS.social.twitter,
  },

  {
    label: "LinkedIn",
    actionId: "linkedin",
    icon: {
      isStatic: false,
      src: LINKS.icons.linkedin,
    },
    href: LINKS.social.linkedin,
  },
  {
    label: "Gallary",
    actionId: "gallary",
    icon: {
      isStatic: true,
      src: "📸",
    },
  },
];

const title = "Vinod Yevatikar - Frontend developer(Mobile+Web)";
const description =
  "Experienced frontend developer skilled in building high-performance web and mobile applications using cutting-edge technologies for scalable and maintainable solutions";

export const defaultMetaData: Metadata = {
  title,
  description,
  openGraph: {
    url: "https://www.vinodyevatikar.live/",
    title,
    description,
    images: [
      {
        url: "/favicon-32x32.png",
        alt: "Vinod profile",
        width: 32,
        height: 32,
      },
    ],
  },
};
