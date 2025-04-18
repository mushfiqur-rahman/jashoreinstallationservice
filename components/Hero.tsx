import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          যশোর ইন্সটলেশন সার্ভিস
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          সিসি ক্যামেরা, আইপি ক্যামেরা, ইলেকট্রিক, সোলার সিস্টেম, অফিস নেটওয়ার্ক সুচারুভাবে
          ইন্সটল করার নির্ভর যোগ্য প্রতিষ্ঠান।
        </p>
        <a href="#work">
          <MagicButton
            title="Our Work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </BackgroundLines>
    </>
  );
};

export default Hero;
