import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"; // Import social icons

// Define the type for the team member data
interface TeamMember {
  profilePicture: string;
  name: string;
  designation: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

// Define the props for the TeamMemberCard component
interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Profile Picture */}
      <img
        className="w-full h-48 object-cover"
        src={member.profilePicture}
        alt={member.name}
      />

      {/* Name and Designation */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{member.name}</div>
        <p className="text-gray-700 text-base text-center">
          {member.designation}
        </p>
      </div>

      {/* Social Links - Centered */}
      <div className="px-6 pt-4 pb-6 flex justify-center space-x-4">
        {member.socialLinks.twitter && (
          <a
            href={member.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
        )}
        {member.socialLinks.linkedin && (
          <a
            href={member.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        )}
        {member.socialLinks.github && (
          <a
            href={member.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
