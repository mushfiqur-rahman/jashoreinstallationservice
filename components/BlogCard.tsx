"use client";
import React from "react";

import Link from "next/link";

interface BlogPostProps {
  title: string;
  publishedDate: string;
  description: string;
  category: string;
  readers: number;
  slug: string;
}

const BlogCard: React.FC<BlogPostProps> = ({
  title,
  publishedDate,
  description,
  category,
  readers,
  slug,
}) => {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 cursor-pointer">
        {/* Category Tag */}
        <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>

        {/* Post Title */}
        <h2 className="text-xl font-bold mt-3 text-gray-900 dark:text-white">
          {title}
        </h2>

        {/* Meta Information */}
        <div className="flex justify-between items-center text-gray-500 dark:text-gray-400 text-sm mt-2">
          <p>{publishedDate}</p>
          <p>{readers} Readers</p>
        </div>

        {/* Short Description */}
        <p className="text-gray-600 dark:text-gray-300 mt-3 line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
