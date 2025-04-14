import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogData";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const slug = params.slug?.join("/") || ""; // Convert array to string
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} - Jashore Installation Service`,
    description: post.description,
    openGraph: {
      images: [post.image],
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string[] } }) {
  const slug = params.slug?.join("/") || ""; // Convert array to string
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <div className="container mx-auto px-4 py-12">
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={500}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-2">
        Published on {post.publishedDate} • {post.readers} readers
      </p>
      <p className="text-gray-700 mb-6">{post.description}</p>
      <div className="prose max-w-none">
        {post.content || "No content available."}
      </div>
    </div>
  );
}
