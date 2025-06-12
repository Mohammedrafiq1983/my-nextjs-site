"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    speed: 20,
    price: 24.99,
    title: "إنترنت",
    features: [
      "إنترنت منزلي",
      "اتصال هاتف محمول",
      "99% توفر الإنترنت",
      "مناسب لـ 1-3 أجهزة"
    ]
  },
  {
    speed: 40,
    price: 40.99,
    title: "إنترنت + تلفزيون",
    features: [
      "إنترنت منزلي",
      "أكثر من 150 قناة تلفزيونية",
      "اتصال هاتف محمول",
      "مناسب لـ 1-4 أجهزة"
    ]
  },
  {
    speed: 80,
    price: 70.99,
    title: "إنترنت + تلفزيون",
    features: [
      "إنترنت منزلي",
      "أكثر من 200 قناة تلفزيونية",
      "اتصال هاتف محمول",
      "مناسب لـ 1-8 أجهزة"
    ]
  }
];

const PricingSection = () => {
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
        <div className="text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-4"
          >
            <span className="text-vibranet-orange uppercase text-sm font-medium tracking-wider">
              باقاتنا
            </span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            اختر الباقة المناسبة لك
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            توفر شركة احمد زيدان نت مجموعة متنوعة من الباقات لتلبية احتياجاتك من الإنترنت والترفيه بأسعار تنافسية وجودة عالية
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-col h-full"
            >
              <Card className="rounded-xl shadow-lg border-gray-100 overflow-hidden flex flex-col h-full transition-transform duration-300 hover:-translate-y-2">
                <div className="bg-gradient-to-r from-vibranet-gradient-start to-vibranet-gradient-end p-8 text-center text-white">
                  <div className="mb-2">تصل إلى</div>
                  <div className="text-5xl font-bold mb-1">{plan.speed}</div>
                  <div className="mb-2">ميجابت/ثانية</div>
                  <div className="text-lg font-medium">{plan.title}</div>
                </div>

                <div className="p-6 flex-grow">
                  <div className="text-center mb-6">
                    <span className="text-2xl font-bold text-vibranet-orange">${plan.price}</span>
                    <span className="text-gray-500">/شهريًا</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-vibranet-orange ml-2">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-vibranet-orange hover:bg-vibranet-orange/90 text-white rounded-full">
                    اشترك الآن
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
