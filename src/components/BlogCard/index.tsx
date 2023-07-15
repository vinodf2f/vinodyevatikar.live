"use client";
import React from "react";
import "./blogcard.css";
import { Blog } from "../../app/blog/types";

import { useRouter } from "next/navigation";

type Props = {
  blog: Blog;
};

export const BlogCard = (props: Props) => {
  const router = useRouter();
  const { blog } = props;

  const [dd, mm, yyyy] = blog.date.split("-");

  const handleBlogItemClick = (blogItem: Blog) => {
    router.push(`/blog/${blogItem.slug}`);
  };

  return (
    <div
      className="blog-item"
      key={blog.slug}
      onClick={() => handleBlogItemClick(blog)}
    >
      <div className="blogTitleContainer">
      <p className="date">{`${dd}/${mm}/${yyyy}`}</p>
        <p>{blog.title}</p>
      </div>
    </div>
  );
};
