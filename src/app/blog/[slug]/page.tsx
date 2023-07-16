import BlogHighlightHOC from "@/components/blogHighlightHOC";
import { Blog } from "../types";
import { getAllBlogs, getBlogBySlug } from "@/utils/blog";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const { title, date } = getBlogBySlug(slug) as Blog;

  return {
    title: `Blog | ${title}`,
    description: date,
    openGraph: {
      title: `Blog | ${title}`,
      description: date,
    },
  };
}

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
