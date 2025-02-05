import { motion } from "framer-motion";
import Link from "next/link";

export default function Custom500() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold"
      >
        500
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl mt-4"
      >
        Server-side error occurred
      </motion.p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-6"
      >
        <Link href="/">
          <a className="px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-500 transition">
            Go Back Home
          </a>
        </Link>
      </motion.div>
    </div>
  );
}
