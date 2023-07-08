import { BlogList } from "@/app/components";
import { Blog } from "./types";
import { getAllBlogs } from "../utils/blog";

type IBlogArray = Blog[];

const BlogPage: React.FC = async () => {
  const blogs = getAllBlogs() as IBlogArray;

  return <BlogList blogs={blogs} />;
};

export default BlogPage;
