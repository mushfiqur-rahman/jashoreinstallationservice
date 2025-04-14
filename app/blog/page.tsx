import { blogPosts } from "@/data/blogData";
import BlogCard from "@/components/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Jashore Installation Service",
  description:
    "CC Camera Install and Maintenance, Electric, Office Network Install, Solar System, website Develop & Maintenance. Service Provider Remotely or Onsite.",
  keywords:
    "CC Camera, CCTV, Solar Panel, solar system, ips setup, ips battery jashore, solar mistri jashore, electrician jashore, সোলার প্যানেল যশোর, সিসি ক্যামেরা যশোর",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <BlogCard key={post.slug} {...post} />
      ))}
    </div>
  );
}
