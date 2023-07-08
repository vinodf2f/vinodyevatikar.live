import Link from "next/link";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <p>
      I am a frontend developer with 4+ years of experience working from Bangalore, India. My
      native place is Yeoti, Maharashtra, India. I hold a Bachelor of
      Engineering degree in Information Technology. I enjoy learning by building
      projects and have experience working with JavaScript apps, including
      React.js, React Native, and Next.js. I am currently working at MPL and
      have previously worked at Makemytrip/Goibibo and GeekyAnts.
      <br />
      <br />
      You can checkout my <Link href="/experience">work experience</Link> and{" "}
      <Link href="/projects">personal projects</Link>.
      <br />
      <br />
      When I am not writing logic, I travel and explore new places. Checkout my{" "}
      <Link href="gallary">grallry</Link>.
    </p>
  );
};

export default About;
