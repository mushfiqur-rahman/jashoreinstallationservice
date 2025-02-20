import TermsConfig from "@/data/TermsConfig";
import React from "react";

const terms = () => {
  return (
    <div className="py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {TermsConfig.title}
          </p>

          {TermsConfig.paragraphs.map((item) => (
            <>
              <p className="text-md mt-8 leading-8">{item.description}</p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default terms;
