"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  {
    title: "اتصال سريع",
    description: "نوفر اتصالات إنترنت عالية السرعة تناسب احتياجات الأسرة والأعمال",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-vibranet-purple"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
      </svg>
    ),
  },
  {
    title: "القنوات الفضائية",
    description: "خدمات القنوات الفضائية متوفرة مع باقات الإنترنت المختلفة",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-vibranet-purple"
      >
        <path d="M18.4 12.3A4.5 4.5 0 0 0 21 8a6 6 0 0 0-6-6 4.6 4.6 0 0 0-4.3 2.6A6 6 0 0 0 9 16a4.6 4.6 0 0 0 2.6-4.3"></path>
        <path d="M15 13 9 7l-2 8 8-2"></path>
      </svg>
    ),
  },
  {
    title: "تركيب مجاني",
    description: "نقدم خدمة التركيب المجاني لجميع عملائنا مع ضمان الجودة",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-vibranet-purple"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
  },
  {
    title: "الأمن المنزلي",
    description: "نوفر أنظمة أمنية للمنازل مع خدمات الإنترنت لحماية عائلتك",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-vibranet-purple"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
  },
  {
    title: "دعم فني 24/7",
    description: "فريق الدعم الفني متاح على مدار الساعة لحل جميع المشاكل التقنية",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-vibranet-purple"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
  },
  {
    title: "أفضل الأسعار",
    description: "نقدم أفضل الأسعار التنافسية لباقات الإنترنت والاتصالات المتكاملة",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-vibranet-purple"
      >
        <path d="M12 2v20"></path>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <Image
              src="https://ext.same-assets.com/1236621396/923026994.jpeg"
              alt="عائلة تستخدم الإنترنت معًا"
              width={600}
              height={500}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-6"
            >
              <span className="text-vibranet-orange uppercase text-sm font-medium tracking-wider">
                لماذا تختارنا
              </span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              نحن نربطك بكل ما يهمك
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-gray-600 mb-10"
            >
              في احمد زيدان نت، نحن نعمل على تقديم أفضل خدمات الإنترنت والاتصالات لتلبية احتياجاتك. نحن نفخر بتقديم خدمات موثوقة وبأسعار تنافسية لجميع عملائنا.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="flex items-start space-x-reverse space-x-4"
                >
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-2 text-right">{feature.title}</h3>
                    <p className="text-gray-600 text-sm text-right">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mt-10"
            >
              <Button className="bg-vibranet-orange hover:bg-vibranet-orange/90 text-white rounded-full py-2 px-6">
                ابدأ الآن
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
