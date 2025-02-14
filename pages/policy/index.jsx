import mainPagePolicy from "@/config/mainPagePolicy";

const Policy = () => {
  return (
    <div>
      <div className="bg-white py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {mainPagePolicy.title}
            </p>
            <h2 className="text-md my-6 leading-7 text-gray-600">
              {mainPagePolicy.description}
            </h2>

            {mainPagePolicy.paragraphs.map((item, index) => (
              <div key={index}>
                <p className="mt-6 text-xl font-semibold text-gray-900">
                  {item.title}
                </p>
                <p className="text-md mt-2 leading-8 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
