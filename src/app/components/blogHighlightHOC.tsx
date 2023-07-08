'use client'
import React from "react";
import { useHighlightJS } from "../hooks/hightlightJs";

type Props = {
  content: string;
};

const BlogHighlightHOC = ({ content }: Props) => {
  useHighlightJS();

  return <article dangerouslySetInnerHTML={{ __html: content }} />;
};

export default BlogHighlightHOC;
