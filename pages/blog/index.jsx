import { Tiro_Bangla } from "next/font/google";

export const tb = Tiro_Bangla({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const blog = () => {
  return (
    <div className={`${tb.className} w-full md:h-screen`}>
      <div className="mt-[10%] text-center">যশোর ইন্সটলেশন সার্ভিস</div>
    </div>
  );
};

export default blog;
