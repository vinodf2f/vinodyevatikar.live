import { BlogList } from "@/components";
import { Blog } from "./types";
import { getAllBlogs } from "@/utils/blog";
import { Metadata } from "next";
import { defaultMetaData } from "@/data/constants";

type IBlogArray = Blog[];

const blogMetaData = {
  title: "Blog | Vinod Yevatikar",
  description: "Find my blogs on frontend development, React, React-Native",
};

export const metadata: Metadata = {
  ...blogMetaData,
  openGraph: {
    ...blogMetaData,
  },
};

const BlogPage: React.FC = async () => {
  const blogs = getAllBlogs() as IBlogArray;

  return <BlogList blogs={blogs} />;
};

export default BlogPage;
