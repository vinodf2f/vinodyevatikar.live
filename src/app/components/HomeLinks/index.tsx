"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import "./homelinks.css";

type Props = {};

type IHomeLink = {
  label: string;
  actionId: string;
  icon?: {
    isStatic: boolean;
    src: string;
  };
  href?: string;
};

const HOME_LINKS: IHomeLink[] = [
  {
    label: "Work",
    actionId: "experience",
    icon: {
      isStatic: true,
      src: "👨🏻‍💻",
    },
  },
  {
    label: "Resume",
    actionId: "resume",
    icon: {
      isStatic: true,
      src: "📜",
    },
  },

  {
    label: "Gallary",
    actionId: "gallary",
    icon: {
      isStatic: true,
      src: "📸",
    },
  },
  {
    label: "Github",
    actionId: "github",
    icon: {
      isStatic: false,
      src: "https://skillicons.dev/icons?i=github",
    },
    href: "https://github.com/vinodf2f",
  },
  {
    label: "Twitter",
    actionId: "twitter",
    icon: {
      isStatic: false,
      src: "https://skillicons.dev/icons?i=twitter",
    },
    href: "https://twitter.com/YevatikarVinod",
  },

  {
    label: "LinkedIn",
    actionId: "linkedin",
    icon: {
      isStatic: false,
      src: "https://skillicons.dev/icons?i=linkedin",
    },
    href: "https://www.linkedin.com/in/vinod-yevatikar/",
  },
];

export const HomeLinks = (props: Props) => {
  const router = useRouter();
  const handleClick = (link: IHomeLink) => {
    console.log(link);
    switch (link.actionId) {
      case "experience":
      case "gallary":
        router.push(`/${link.actionId}`);
        break;

      case "resume":
        const pdfUrl = "resume.pdf";
        const newTab = window.open();
        if (newTab === null) return;
        newTab.location.href = pdfUrl;
        break;
      case "github":
      case "twitter":
      case "linkedin":
        window.open(link.href, "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <div className="linkContainer">
      {HOME_LINKS.map((link) => (
        <div
          key={link.label}
          className="link"
          onClick={() => handleClick(link)}
        >
          {link.icon?.isStatic ? (
            <span className="icon">{link.icon.src}</span>
          ) : (
            <Image
              width={20}
              height={20}
              src={link.icon?.src || ""}
              alt={link.label}
              loading="eager"
            />
          )}
          <span className="label">{link.label}</span>
        </div>
      ))}
    </div>
  );
};
