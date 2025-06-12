"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    speed: 20,
    price: 24.99,
    title: "إنترنت",
    features: [
      "إنترنت منزلي",
      "اتصال هاتف محمول",
      "99% توفر الإنترنت",
      "مناسب لـ 1-3 أجهزة",
      "دعم فني 24/7",
      "بدون حدود للبيانات",
      "تركيب قياسي مجاني"
    ],
    popular: false,
    color: "from-blue-500 to-purple-600"
  },
  {
    speed: 40,
    price: 40.99,
    title: "إنترنت + تلفزيون",
    features: [
      "إنترنت منزلي",
      "أكثر من 150 قناة تلفزيونية",
      "اتصال هاتف محمول",
      "مناسب لـ 1-4 أجهزة",
      "دعم فني 24/7",
      "جهاز استقبال تلفزيوني مجاني",
      "تركيب متميز مجاني"
    ],
    popular: true,
    color: "from-vibranet-gradient-start to-vibranet-gradient-end"
  },
  {
    speed: 80,
    price: 70.99,
    title: "إنترنت + تلفزيون",
    features: [
      "إنترنت منزلي",
      "أكثر من 200 قناة تلفزيونية",
      "اتصال هاتف محمول",
      "مناسب لـ 1-8 أجهزة",
      "دعم فني متميز 24/7",
      "جهاز استقبال تلفزيوني مجاني",
      "نظام أمان منزلي مجاني"
    ],
    popular: false,
    color: "from-pink-500 to-purple-600"
  }
];

const PricingPlans = () => {
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
            نوفر مجموعة متنوعة من الباقات لتلبية احتياجاتك المختلفة، سواء كنت تبحث عن خدمة الإنترنت فقط أو مجموعة متكاملة من الخدمات
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
              <Card className={`relative rounded-xl shadow-lg border-0 overflow-hidden flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-vibranet-orange' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0">
                    <div className="bg-vibranet-orange text-white text-xs font-bold py-1 px-3 rounded-br-lg">
                      الأكثر شعبية
                    </div>
                  </div>
                )}

                <div className={`bg-gradient-to-r ${plan.color} p-8 text-center text-white`}>
                  <div className="mb-2">تصل إلى</div>
                  <div className="text-5xl font-bold mb-1">{plan.speed}</div>
                  <div className="mb-2">ميجابت/ث</div>
                  <div className="text-lg font-medium">{plan.title}</div>
                </div>

                <div className="p-6 flex-grow">
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-vibranet-orange">{plan.price}$</span>
                    <span className="text-gray-500">/ شهريًا</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="ml-2 mt-1 text-vibranet-orange">
                          <Check size={16} />
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className={`w-full rounded-full py-6 ${plan.popular ? 'bg-vibranet-orange hover:bg-vibranet-orange/90' : 'bg-gray-800 hover:bg-gray-700'} text-white`}>
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

export default PricingPlans;
