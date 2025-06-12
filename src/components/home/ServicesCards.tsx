import Link from "next/link";
import { Card } from "@/components/ui/card";

const servicesData = [
  {
    title: "التلفزيون والبث المباشر",
    description: "نقدم خدمات البث التلفزيوني وخدمات البث المباشر عبر الإنترنت مع مجموعة متنوعة من القنوات والمحتوى",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
        <polyline points="17 2 12 7 7 2"></polyline>
      </svg>
    ),
    color: "bg-gradient-to-br from-pink-500 to-purple-600"
  },
  {
    title: "إنترنت منزلي",
    description: "خدمات الإنترنت المنزلي عالي السرعة بتقنيات متطورة تضمن اتصالاً سريعاً وموثوقاً في جميع أنحاء المنزل",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
        <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
        <circle cx="12" cy="20" r="1"></circle>
      </svg>
    ),
    color: "bg-gradient-to-br from-orange-400 to-pink-500"
  },
  {
    title: "اتصال الجوال",
    description: "خدمات اتصال الجوال بأسعار تنافسية وتغطية واسعة في جميع المناطق مع باقات متنوعة تناسب جميع الاحتياجات",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12" y2="18"></line>
      </svg>
    ),
    color: "bg-gradient-to-br from-blue-400 to-purple-500"
  }
];

const ServicesCards = () => {
  return (
    <section className="relative z-10 -mt-20 px-4" dir="rtl">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg overflow-hidden border-0 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className={`${service.color} p-5 flex justify-center`}>
                <div className="rounded-full p-4 w-16 h-16 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-right">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm text-right">{service.description}</p>
                <Link
                  href="/services"
                  className="text-sm font-medium text-vibranet-orange hover:text-vibranet-purple transition-colors block text-right"
                >
                  اقرأ المزيد
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
