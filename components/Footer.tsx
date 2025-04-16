"use client";
import Link from "next/link";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const [year, setYear] = useState<string>("");

  useEffect(() => {
    const currentYear = new Date().getFullYear().toString();
    setYear(currentYear);
  }, []);

  return (
    <>
      <footer>
        {/* Large Footer */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 py-12 px-6 md:px-12">
          {/* Logo and Description (2 cols) */}
          <div className="md:col-span-2">
            <div className="items-center">
              <Link href="/">
                <Image src="/logo.png" alt="logo" width={50} height={50} />
              </Link>
            </div>
            <h2 className="text-2xl font-bold">যশোর ইন্সটলেশন সার্ভিস</h2>
            <p className="mt-2">
              সিসি ক্যামেরা, আইপি ক্যামেরা, ইলেকট্রিক, সোলার সিস্টেম, অফিস
              নেটওয়ার্ক সুচারুভাবে ইন্সটল করার নির্ভর যোগ্য প্রতিষ্ঠান।
            </p>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer">
                <Link href="/">হোম</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/service">সেবাসমূহ</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/blog">ব্লগ</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/contact">যোগাযোগ</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">সেবাসমূহ</h3>
            <ul className="space-y-2">
              <li>সিসি ক্যামেরা ইন্সটল</li>
              <li>সিসি ক্যামেরা দেখাশোনা</li>
              <li>আইপি ক্যামেরা</li>
              <li>ইলেক্ট্রিশিয়ানের কাজ</li>
              <li>সোলার প্যানেল সেটাপ</li>
              <li>সোলার প্যানেল আইপিসএস সেটাপ</li>
              <li>ওয়েব সাইট তৈরী</li>
              <li>মোবাইল এপ্স তৈরী</li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy">প্রাইভেসি পলিসি</Link>
              </li>
              <li>
                <Link href="/terms">শর্তাবলি</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/jashore-installation-service"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <FiLinkedin size={24} />
              </Link>
              <Link
                href="https://www.facebook.com/JashoreInstallationService"
                target="_blank"
                rel="noreferrer"
                aria-label="facebook"
              >
                <FiFacebook size={24} />
              </Link>

              <Link
                href="https://x.com/jashoreis"
                target="_blank"
                rel="noreferrer"
                aria-label="x"
              >
                <BsTwitterX size={24} />
              </Link>
              <Link
                href="https://www.youtube.com/@jashore-installation-service"
                target="_blank"
                rel="noreferrer"
                aria-label="youtube"
              >
                <BsYoutube size={24} />
              </Link>
            </div>

            <div className="text-center font-bold py-5">
              <ul>
                <li className="flex items-center gap-4">
                  <span className="text-green-500">
                    <FaWhatsapp />
                  </span>
                  <span>+880 1737-760068</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-green-500">
                    <FaWhatsapp />
                  </span>
                  <span>+880 1625-201834</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Small Footer */}
        <div className="bg-indigo-600 text-center py-4">
          <p>
            &copy; Copyright 2024 - {year}. Jashore Installation Service. All
            rights reserved. | Developed by{" "}
            <Link
              href="https://mushfiq.xyz/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-100"
            >
              MUSHFIQ
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
