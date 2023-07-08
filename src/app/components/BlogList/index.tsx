"use client";
import { BlogCard } from "@/app/components";
import React, { useState } from "react";
import "./blog.css";
import { Blog } from "@/app/blog/types";

interface IProps {
  blogs: Blog[];
}

const BlogList = async ({ blogs }: IProps) => {
  console.log(blogs);
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const allTags: string[] = ["All", "Javascript", "React", "React Native"];

  const filteredBlogs =
    selectedTag !== "All"
      ? blogs.filter((blog) => blog.tags.includes(selectedTag))
      : blogs;

  const handleTagClick = (tag: string) => {
    if (tag !== selectedTag) {
      setSelectedTag(tag);
    }
  };

  return (
    <div className="blog-page">
      <p>
        In the dynamic and ever-changing field of software development, it's
        common to come across new concepts and forget some basic concetps over
        time. Writing small blogs and practical implementations helps me
        solidify my understanding. In these blogs I will not be using any fancy
        terms but explain concepts in my own words & I welcome any correction or
        feedback. I am more than happy to buy you a coffee if you help me
        improve my understanding{" "}
      </p>
      <br />
      <div className="tag-list">
        {allTags.map((tag) => (
          <span
            key={tag}
            className={`tag ${selectedTag === tag ? "active" : ""}`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="blog-list">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
};


export default BlogList;