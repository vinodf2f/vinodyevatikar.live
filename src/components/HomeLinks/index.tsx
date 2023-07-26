"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { HOME_LINKS, IHomeLink } from "@/data/constants";
import "./homelinks.css";

type Props = {};


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
      default:
        window.open(link.href, "_blank");
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
          {link.icon && (link.icon?.isStatic ? (
            <span className="icon">{link.icon.src}</span>
          ) : (
            <Image
              width={20}
              height={20}
              src={link.icon?.src || ""}
              alt={link.label}
              loading="eager"
              className="icon"
            />
          ))}
          <span className="label">{link.label}</span>
        </div>
      ))}
    </div>
  );
};
