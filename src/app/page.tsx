import { RecentBlogs, Skills, HomeLinks } from "@/app/components";
import Link from "next/link";
import { getAllBlogs } from "./utils/blog";
import { Blog } from "./blog/types";
import RecentProjects from "./components/RecentProjects";

export default function Home() {
  const blogs = getAllBlogs() as Blog[];

  return (
    <main>
      <section id="about">
        <p>
          Skilled in creating dynamic, interactive boxes for seamless user
          experiences across platforms leveraging modern technologies and
          frameworks to develop impactful solutions that drive business growth.
          When I am not wirting logic, I travel and explore new places. Know
          more about me <Link href="/about">here</Link>
        </p>
      </section>
      <HomeLinks />
      <RecentBlogs blogs={blogs} />
      <RecentProjects />
      <Skills />
    </main>
  );
}
