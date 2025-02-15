import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import { ScrollProgress } from "@/components/ScrollProgress";
import { motion } from "framer-motion";
import { BlogPost as BlogPostType, TableOfContent } from "@/types/blog";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    // TODO: Fetch post from Supabase
    // This will be implemented after Supabase connection
  }, [slug]);

  if (!post) return null;

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>{post.title} - Jashore Installation Service Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.image_url} />
        <link
          rel="canonical"
          href={`https://jashoreinstallationservice.com/blog/${post.slug}`}
        />
      </Helmet>

      <ScrollProgress />
      <Navigation />

      <article className="container px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-xl mb-8"
            />

            {/* Table of Contents */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <nav>
                {post.table_of_contents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.slug}`}
                    className="block text-gray-600 hover:text-primary transition-colors py-1"
                    style={{ marginLeft: `${(item.level - 1) * 1}rem` }}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

            <div className="flex items-center space-x-4 text-gray-600 mb-8">
              <span>{post.author}</span>
              <span>•</span>
              <span>{new Date(post.created_at).toLocaleDateString()}</span>
            </div>

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
