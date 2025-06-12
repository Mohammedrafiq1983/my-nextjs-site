"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CtaSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative py-16 md:py-24" dir="rtl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://ext.same-assets.com/1236621396/2989047766.jpeg"
          alt="زوجان يستخدمان الإنترنت"
          fill
          priority={false}
          className="object-cover"
          style={{ filter: "brightness(0.4)" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex space-x-2 justify-center mb-4 flex-row-reverse space-x-reverse">
            <div className="w-10 h-10 rounded-full bg-vibranet-orange flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
            </div>
            <div className="w-10 h-10 rounded-full bg-vibranet-orange flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
            </div>
          </div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            جرب خدمات التلفزيون والإنترنت مقابل{" "}
            <span className="text-vibranet-orange">$20 شهريًا فقط</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            اشترك الآن في باقاتنا المميزة واستمتع بسرعات إنترنت فائقة وقنوات تلفزيونية متنوعة بأفضل الأسعار. نقدم لك تجربة اتصال لا مثيل لها مع خدمة عملاء متميزة على مدار الساعة.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Button className="bg-vibranet-orange hover:bg-vibranet-orange/90 text-white rounded-full py-2 px-8">
              ابدأ الآن
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
