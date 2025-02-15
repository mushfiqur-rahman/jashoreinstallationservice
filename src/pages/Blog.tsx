import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import { ScrollProgress } from "@/components/ScrollProgress";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPost } from "@/types/blog";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: Fetch posts from Supabase
    // This will be implemented after Supabase connection
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>
          Blog - Jashore Installation Service | CCTV & Electrical Solutions
        </title>
        <meta
          name="description"
          content="Read expert insights about CCTV installation, electrical services, security systems, and smart home solutions from Jashore Installation Service professionals."
        />
        <meta
          name="keywords"
          content="CCTV installation, electrical services, security systems, smart home, Jashore, Bangladesh"
        />
        <meta
          property="og:title"
          content="Blog - Jashore Installation Service"
        />
        <meta
          property="og:description"
          content="Expert insights about CCTV installation and electrical services"
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://jashoreinstallationservice.com/blog"
        />
      </Helmet>

      <ScrollProgress />
      <Navigation />

      <div className="container px-4 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
          <p className="text-gray-600">
            Expert insights about CCTV installation, electrical services, and
            security solutions
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={item}
              className="cursor-pointer"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-gray-500">{post.author}</span>
                    <span className="text-gray-500">
                      {new Date(post.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
