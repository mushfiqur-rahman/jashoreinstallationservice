"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    role: "Technical Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    bio: "John has over 15 years of experience in technical installations and project management. He leads our technical team and ensures the highest quality standards in all projects.",
    expertise: [
      "Project Management",
      "Technical Planning",
      "Quality Assurance",
      "Team Leadership",
    ],
    contact: {
      email: "john@example.com",
      phone: "+880 1234 567890",
      location: "Jashore, Bangladesh",
    },
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  // Add other team members' detailed information here
];

// Add this function to generate static params
export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    id: member.id.toString(), // Ensure the ID is a string
  }));
}

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  const member = teamMembers.find((m) => m.id === parseInt(params.id));

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-primary mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {member.name}
              </h1>
              <p className="text-xl text-primary">{member.role}</p>
            </div>

            <p className="text-gray-600 text-lg">{member.bio}</p>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Areas of Expertise
              </h2>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                Contact Information
              </h2>
              <div className="space-y-2">
                <p className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-2" />
                  {member.contact.email}
                </p>
                <p className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2" />
                  {member.contact.phone}
                </p>
                <p className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  {member.contact.location}
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href={member.social.facebook}
                className="bg-gray-100 p-3 rounded-full text-gray-600 hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href={member.social.twitter}
                className="bg-gray-100 p-3 rounded-full text-gray-600 hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href={member.social.linkedin}
                className="bg-gray-100 p-3 rounded-full text-gray-600 hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
