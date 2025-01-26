import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-white drop-shadow-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          Coming Soon
        </motion.h1>
        <motion.p
          className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Stay tuned for something amazing!
        </motion.p>
      </motion.div>
      <div className="flex space-x-6 mt-8">
        <motion.a
          href="https://www.facebook.com/JashoreInstallationService"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-200"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaFacebookF />
        </motion.a>
        <motion.a
          href="https://x.com/jashoreis"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-200"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTwitter />
        </motion.a>
        <motion.a
          href="https://www.youtube.com/@jashore-installation-service"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-200"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaYoutube />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/company/jashore-installation-service"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-200"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedinIn />
        </motion.a>
      </div>
    </div>
  );
}

export default ComingSoon;
