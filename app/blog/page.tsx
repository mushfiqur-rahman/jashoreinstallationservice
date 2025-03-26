import Head from "next/head";
import React from "react";
import BlogCard from "@/components/BlogCard";

const blogPosts = [
  {
    title: "How to Install CCTV Cameras Like a Pro",
    publishedDate: "Feb 18, 2025",
    description:
      "A step-by-step guide to setting up CC cameras for security...",
    category: "Security",
    readers: 1250,
    slug: "install-cctv-camera",
  },
  {
    title: "Solar System Installation for Beginners",
    publishedDate: "Feb 12, 2025",
    description: "Learn how to set up a solar power system for your home...",
    category: "Renewable Energy",
    readers: 890,
    slug: "solar-system-installation",
  },
  {
    title: "কিভাবে শক্তিশালী পাওসোয়ার্ড তৈরি করবেন?",
    publishedDate: "Feb 12, 2025",
    description: "Learn how to set up a solar power system for your home...",
    category: "strong password",
    readers: 890,
    slug: "solar-system-installation",
  },
];

const blog = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="canonical" href="/blog" />
        <meta
          name="description"
          content="CC Camera Install and Maintenance, Electric, Office Network Install, Solar System, website Develop & Maintenance. Service Provider Remotely or Onsite."
        />
        <meta
          name="keywords"
          content="CC Camera, CCTV, Solar Panel, solar system, ips setup, ips battery jashore, solar mistri jashore, elactrician jashore, সোলার প্যানেল যশোর, সিসি ক্যামেরা যশোর, "
        />
      </Head>
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </>
  );
};

export default blog;
