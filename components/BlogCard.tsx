"use client";
import Link from "next/link";
import Image from "next/image";

export default function BlogCard({
  title,
  publishedDate,
  description,
  category,
  readers,
  slug,
  content,
  image,
}: any) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl"
    >
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 text-sm">
          {publishedDate} • {readers} readers
        </p>
        <p className="text-gray-700 mt-2">{description}</p>
        <p className="text-blue-600 mt-2 font-semibold">{category}</p>
        <p className="text-blue-600 mt-2 font-semibold">{content}</p>
      </div>
    </Link>
  );
}
