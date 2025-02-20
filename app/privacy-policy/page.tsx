import React from "react";
import PolicyConfig from "@/data/PolicyConfig";

const privacyPolicy = () => {
  return (
    <div className="py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {PolicyConfig.title}
          </p>
          <h2 className="text-md my-6 leading-7">{PolicyConfig.description}</h2>

          {PolicyConfig.paragraphs.map((item) => (
            <>
              <p className="mt-6 text-xl font-semibold">{item.title}</p>
              <p className="text-md mt-2 leading-8">{item.description}</p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default privacyPolicy;
