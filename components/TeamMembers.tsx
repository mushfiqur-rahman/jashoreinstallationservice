"use client";

import { motion } from "framer-motion";
import TeamMemberCard from "./TeamMemberCard";

const teamMembers = [
  {
    profilePicture: "/team/team1.avif",
    name: "John Doe",
    designation: "Software Engineer",
    socialLinks: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
    },
  },
  {
    profilePicture: "/team/team2.avif",
    name: "Jane Smith",
    designation: "Product Manager",
    socialLinks: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
    },
  },
  {
    profilePicture: "/team/team3.jpg",
    name: "Alice Johnson",
    designation: "UI/UX Designer",
    socialLinks: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
    },
  },
  {
    profilePicture: "/team/team4.jpg",
    name: "Bob Brown",
    designation: "DevOps Engineer",
    socialLinks: {
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      github: "https://github.com/",
    },
  },
];

export default function TeamMembers() {
  return (
    <section className="py-20">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Meet our expert team of professionals who are dedicated to providing
            you with the best service experience.
          </p>
        </motion.div>

        {/* Updated Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
