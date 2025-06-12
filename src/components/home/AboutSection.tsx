"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AboutSection = () => {
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
              نقدم أفضل خدمات الإنترنت والاتصالات المتكاملة
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-gray-600 mb-8"
            >
              شركة احمد زيدان نت هي شركة رائدة في مجال تقديم خدمات الإنترنت والاتصالات في المنطقة. نسعى جاهدين لتوفير أفضل الخدمات بأسعار تنافسية وبجودة عالية لضمان رضا عملائنا.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <ul className="space-y-3">
                  <li className="flex items-center space-x-reverse space-x-2">
                    <span className="text-vibranet-orange text-lg">•</span>
                    <span>إنترنت منزلي</span>
                  </li>
                  <li className="flex items-center space-x-reverse space-x-2">
                    <span className="text-vibranet-orange text-lg">•</span>
                    <span>اتصال هاتف محمول</span>
                  </li>
                  <li className="flex items-center space-x-reverse space-x-2">
                    <span className="text-vibranet-orange text-lg">•</span>
                    <span>توفر الإنترنت بنسبة 99%</span>
                  </li>
                  <li className="flex items-center space-x-reverse space-x-2">
                    <span className="text-vibranet-orange text-lg">•</span>
                    <span>تلفزيون فضائي</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <ul className="space-y-3">
                  <li className="flex items-center space-x-reverse space-x-2">
                    <span className="text-vibranet-orange text-lg">•</span>
                    <span>أكثر من 150 قناة تلفزيونية</span>
                  </li>
                  <li className="flex items-center space-x-reverse space-x-2">
                    <span className="text-vibranet-orange text-lg">•</span>
                    <span>سرعة تصل إلى 100 ميجابت/ثانية</span>
                  </li>
                  <li className="flex items-center space-x-reverse space-x-2">
                    <span className="text-vibranet-orange text-lg">•</span>
                    <span>احصل على جهاز استقبال تلفزيوني</span>
                  </li>
                  <li className="flex items-center space-x-reverse space-x-2">
                    <span className="text-vibranet-orange text-lg">•</span>
                    <span>راوتر واي فاي مجاني</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-orange-100 rounded-full h-32 w-32 flex flex-col items-center justify-center"
              >
                <div className="text-vibranet-orange text-3xl font-bold">
                  +4,876
                </div>
                <div className="text-xs font-medium text-center mt-1">
                  اتصال تم توفيره
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-orange-100 rounded-full h-32 w-32 flex flex-col items-center justify-center"
              >
                <div className="text-vibranet-orange text-3xl font-bold">
                  +2,569
                </div>
                <div className="text-xs font-medium text-center mt-1">
                  عميل حول العالم
                </div>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Button className="bg-vibranet-orange hover:bg-vibranet-orange/90 text-white rounded-full py-2 px-6">
                المزيد عنا
              </Button>
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
                height={500}
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
              <div className="absolute -top-6 -left-6 bg-white rounded-full shadow-lg py-2 px-5 flex flex-col items-center">
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

export default AboutSection;
