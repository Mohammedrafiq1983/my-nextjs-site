"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AboutInfo = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 px-4" dir="rtl">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-6"
            >
              <span className="text-vibranet-orange uppercase text-sm font-medium tracking-wider">
                عن الشركة
              </span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              نقدم أفضل خدمات الإنترنت وخدمات النطاق العريض
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-gray-600 mb-8"
            >
              نحن شركة احمد زيدان نت، رائدة في مجال توفير خدمات الإنترنت عالية السرعة والاتصالات المتكاملة. نسعى دائمًا لتقديم أحدث التقنيات وأفضل الخدمات لعملائنا لضمان تجربة اتصال سلسة وموثوقة.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-gray-600 mb-8"
            >
              تأسست الشركة منذ أكثر من 15 عامًا بهدف تقديم حلول اتصالات متطورة وبأسعار تنافسية. نفتخر بشبكتنا الواسعة التي تغطي مناطق متعددة ونسعى دائمًا لتوسيع نطاق خدماتنا لتشمل المزيد من المناطق.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="flex items-center space-x-4 mb-6 flex-row-reverse space-x-reverse">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
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
                      className="text-vibranet-orange"
                    >
                      <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                      <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                      <circle cx="12" cy="20" r="1"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-right">رؤيتنا</h3>
                    <p className="text-gray-600 text-sm text-right">أن نكون الرائدين في مجال خدمات الإنترنت وتوفير حلول اتصالات متكاملة تلبي احتياجات جميع العملاء</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 flex-row-reverse space-x-reverse">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
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
                      className="text-vibranet-orange"
                    >
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                      <line x1="4" y1="22" x2="4" y2="15"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-right">مهمتنا</h3>
                    <p className="text-gray-600 text-sm text-right">تقديم خدمات إنترنت عالية الجودة بأسعار تنافسية وضمان رضا العملاء من خلال دعم فني متميز</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="flex items-center space-x-4 mb-6 flex-row-reverse space-x-reverse">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
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
                      className="text-vibranet-orange"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-right">دعمنا الفني</h3>
                    <p className="text-gray-600 text-sm text-right">نوفر دعم فني على مدار الساعة لحل جميع المشكلات التقنية وضمان استمرارية الخدمة</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 flex-row-reverse space-x-reverse">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
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
                      className="text-vibranet-orange"
                    >
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-right">جوائزنا</h3>
                    <p className="text-gray-600 text-sm text-right">حصلنا على العديد من الجوائز في مجال خدمات الإنترنت وتقنية المعلومات تقديراً لجودة خدماتنا</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex space-x-4 flex-row-reverse space-x-reverse"
            >
              <div className="flex flex-col items-center">
                <div className="text-vibranet-orange text-3xl font-bold mb-1">
                  +4,876
                </div>
                <div className="text-xs font-medium text-gray-600">
                  اتصالات منجزة
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-vibranet-orange text-3xl font-bold mb-1">
                  +2,569
                </div>
                <div className="text-xs font-medium text-gray-600">
                  عميل حول العالم
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-vibranet-orange text-3xl font-bold mb-1">
                  +15
                </div>
                <div className="text-xs font-medium text-gray-600">
                  سنوات من الخبرة
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex-1 relative"
          >
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/1236621396/3783324069.jpeg"
                alt="عائلة تستخدم الإنترنت"
                width={600}
                height={600}
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
              <div className="absolute -top-6 -left-6 bg-white rounded-full shadow-lg py-3 px-5 flex flex-col items-center">
                <span className="text-vibranet-purple text-xl font-bold">$20</span>
                <span className="text-xs text-gray-500">شهريًا</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
