import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

export const getAllBlogs = () => {
  const folderPath = path.join("src/app", "data/blogs");
  console.log({ folderPath });
  const blogs = fs.readdirSync(folderPath);
  console.log({ blogs });
  const blogList = blogs.map((blog) => {
    const blogPath = path.join(folderPath, blog);
    const blogData = fs.readFileSync(blogPath, "utf8");
    const { data } = matter(blogData);
    const slug = blog.replace(".md", "");
    return { ...data, slug };
  });
  return blogList;
};

export const getBlogBySlug = (slug: string) => {
  const folderPath = path.join("src/app", "./data/blogs");
  const blogPath = path.join(folderPath, `${slug}.md`);
  const blogData = fs.readFileSync(blogPath, "utf8");
  const { data, content } = matter(blogData);
  return { ...data, content: marked(content) };
};
