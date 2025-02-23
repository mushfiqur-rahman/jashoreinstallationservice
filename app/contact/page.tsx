import React from "react";
import Head from "next/head";
import Image from "next/image";
import ContactImg from "../../public/contact.jpg";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact - </title>
        <link rel="canonical" href="/contact" />
        <meta
          name="description"
          content="যশোর এবং পার্শ্ববর্তী এলাকায় সিসি ক্যামেরা, সোলার, ইলেকট্রিক, অফিস এবং ইন্ডাস্ট্রির নেটওয়ার্ক সেটাপ, আইটি সেবা প্রদান কারি প্রতিষ্ঠান। "
        />
        <meta
          name="keywords"
          content="CC Camera, CCTV, Solar Panel, solar system, ips setup, ips battery jashore, solar mistri jashore, elactrician jashore, সোলার প্যানেল যশোর, সিসি ক্যামেরা যশোর, "
        />
      </Head>
      <div className="dark:bg-gradient-to-r from-slate-900 to-slate-700">
        <div
          id="contact"
          className="max-w-[1240px] m-auto md:pl-5 p-4 py-16 glassmorphism"
        >
          <h1 className="py-8 text-4xl font-bold text-center text-indigo-500">
            Get in Touch
          </h1>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl">
              <div className="lg:p-4 h-full">
                <div>
                  <Image
                    className="rounded-xl hover:scale-90 ease-in duration-300"
                    src={ContactImg}
                    alt="contact"
                  />
                </div>

                <div className="text-center md:text-start">
                  <h2 className="py-2 text-3xl text-indigo-500">
                    Jashore Installation Service
                  </h2>

                  <p>IT Service Near at Your Home</p>
                  <p className="font-mono">
                    Address: Hushtola Bou Bazar, Bokchor,Jashore, Khulna,
                    Bangladesh - 7400
                  </p>
                </div>

                <div>
                  <p className="uppercase pt-8">Connect with us</p>
                  <div className="flex items-center justify-between py-4">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <Link
                        href="https://www.facebook.com/JashoreInstallationService"
                        target="_blank"
                        rel="noreferrer nofollow"
                      >
                        <FaFacebook />
                      </Link>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <Link
                        href="https://www.linkedin.com/company/jashore-installation-service"
                        target="_blank"
                        rel="noreferrer nofollow"
                      >
                        <FaLinkedinIn />
                      </Link>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <Link
                        href="https://x.com/jashoreis"
                        target="_blank"
                        rel="noreferrer nofollow"
                      >
                        <FaXTwitter />
                      </Link>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <Link
                        href="https://www.youtube.com/@jashore-installation-service"
                        target="_blank"
                        rel="noreferrer nofollow"
                      >
                        <FaYoutube />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Your Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Your Email</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                      name="email"
                      placeholder="you@somewhere.com"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      rows={10}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      name="message"
                      placeholder="Write your message"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-indigo-500 text-gray-100 mt-4 w-full p-4 rounded-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
