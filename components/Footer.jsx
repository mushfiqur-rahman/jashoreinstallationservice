import mainFooterConfig from "@/config/main-footer-config";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="border-t border-gray-900/10 bg-white shadow-sm"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-[1280px] px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Services
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {mainFooterConfig.categories?.map((category) => (
                    <li key={category.title}>
                      <Link
                        href={`/category/${category.slug}`}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 hover:underline"
                      >
                        {category.title}
                      </Link>
                    </li>
                  )) || (
                    <li className="text-gray-500">No categories available</li>
                  )}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Pages
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {mainFooterConfig.pages?.map((page) => (
                    <li key={page.title}>
                      <Link
                        href={page.slug}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 hover:underline"
                      >
                        {page.title}
                      </Link>
                    </li>
                  )) || <li className="text-gray-500">No pages available</li>}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Socials
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {mainFooterConfig.socials?.map((social) => (
                    <li key={social.name}>
                      <Link
                        href={social.url}
                        target="_blank"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 hover:underline"
                      >
                        {social.name}
                      </Link>
                    </li>
                  )) || <li className="text-gray-500">No socials available</li>}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {mainFooterConfig.legals?.map((legal) => (
                    <li key={legal.title}>
                      <Link
                        href={legal.slug}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 hover:underline"
                      >
                        {legal.title}
                      </Link>
                    </li>
                  )) || (
                    <li className="text-gray-500">No legal links available</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            {mainFooterConfig.socials?.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                {item.icon && (
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                )}
              </a>
            )) || <p className="text-gray-500">No social links available</p>}
          </div>
          <p className="mt-8 text-sm leading-5 text-gray-500 md:order-1 md:mt-0">
            {mainFooterConfig.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
