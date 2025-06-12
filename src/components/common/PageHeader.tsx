import Image from "next/image";
import Link from "next/link";

interface PageHeaderProps {
  title: string;
  backgroundImage: string;
  breadcrumbs?: { label: string; href: string }[];
}

const PageHeader = ({
  title,
  backgroundImage,
  breadcrumbs
}: PageHeaderProps) => {
  return (
    <section className="relative py-28 overflow-hidden" dir="rtl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover"
          style={{ filter: "brightness(0.4)" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h1>

        {/* Breadcrumbs */}
        {breadcrumbs ? (
          <div className="flex justify-center items-center space-x-reverse space-x-2 text-white">
            <Link href="/" className="hover:text-vibranet-orange transition-colors">
              الرئيسية
            </Link>

            {breadcrumbs.map((breadcrumb, index) => (
              <div key={index} className="flex items-center space-x-reverse space-x-2">
                <span>•</span>
                <Link
                  href={breadcrumb.href}
                  className={index === breadcrumbs.length - 1 ? "text-vibranet-orange" : "hover:text-vibranet-orange transition-colors"}
                >
                  {breadcrumb.label}
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center space-x-reverse space-x-2 text-white">
            <Link href="/" className="hover:text-vibranet-orange transition-colors">
              الرئيسية
            </Link>
            <span>•</span>
            <span className="text-vibranet-orange">{title}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
