import { BlogCard } from "../BlogCard";
import Link from "next/link";
import { Blog } from "@/app/blog/types";

type Props = {
  blogs: Blog[];
};

const RecentBlogs = ({ blogs }: Props) => {
  const blogsToShow = blogs.slice(0, 2);
  return (
    <div style={{ marginTop: 50 }}>
      <h3 style={{ textDecoration: "underline" }}>Recent Blogs</h3>
      {blogsToShow.map((blog) => (
        <BlogCard blog={blog} key={blog.slug} />
      ))}
      {blogsToShow.length > 2 && (
        <Link href="/blog">
          <p style={{ textAlign: "center" }}> View all blogs</p>
        </Link>
      )}
    </div>
  );
};

export { RecentBlogs };
