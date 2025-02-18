"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    role: "Technical Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Lead Engineer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "IT Consultant",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Emily Brown",
    role: "Solar Specialist",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

export default function TeamMembers() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link href={`/team/${member.id}`}>
                <div className="relative group">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-sm font-medium">View Profile</span>
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.facebook}
                    className=" hover:text-primary transition-colors"
                  >
                    <FiFacebook size={20} />
                  </a>
                  <a
                    href={member.social.twitter}
                    className=" hover:text-primary transition-colors"
                  >
                    <BsTwitterX size={20} />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className=" hover:text-primary transition-colors"
                  >
                    <FiLinkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
