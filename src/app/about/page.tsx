import Link from "next/link";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <p>
      I am a frontend developer with 4+ years of experience working from
      Bangalore, India. My native place is Yeoti, Maharashtra, India. I hold a
      Bachelor of Engineering degree in Information Technology. I enjoy learning
      by building projects and have experience working with JavaScript apps,
      including React.js, React Native, and Next.js. I am currently working at{" "}
      <Link target="_blank" href="https://www.mpl.live/">
        MPL
      </Link>{" "}
      and have previously worked at{" "}
      <Link target="_blank" href="https://www.makemytrip.com/">
        Makemytrip
      </Link>
      /
      <Link href="https://www.goibibo.com/" target="_blank">
        Goibibo
      </Link>{" "}
      and{" "}
      <Link target="_blank" href="https://geekyants.com/">
        GeekyAnts
      </Link>
      .
      <br />
      <br />
      You can checkout my <Link href="/experience">
        work experience
      </Link> and <Link href="/projects">personal projects</Link>.
      <br />
      <br />
      When I am not writing logic, I travel and explore new places. Checkout my{" "}
      <Link href="gallary">grallry</Link>.
    </p>
  );
};

export default About;
