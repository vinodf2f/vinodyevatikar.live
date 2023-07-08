import BlogHighlightHOC from "@/app/components/blogHighlightHOC";
import { Blog } from "../types";
import { getAllBlogs, getBlogBySlug } from "@/app/utils/blog";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

const BlogDetail = ({ params }: Props) => {
  
  const { slug } = params;
  const { content, title } = getBlogBySlug(slug) as Blog;

  return (
    <div>
      <h3 className="title">{title}</h3>
      <BlogHighlightHOC content={content} />
    </div>
  );
};

export default BlogDetail;
