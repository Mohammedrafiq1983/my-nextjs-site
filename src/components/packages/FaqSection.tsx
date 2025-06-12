"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "كيف يمكنني جعل الإنترنت أسرع؟",
    answer: "يمكنك تحسين سرعة الإنترنت من خلال التأكد من وضع الراوتر في مكان مناسب، وتقليل عدد الأجهزة المتصلة، والتأكد من تحديث برامج الأجهزة. كما يمكنك الترقية إلى باقة أعلى للحصول على سرعات أفضل."
  },
  {
    question: "كيف أعرف إذا كانت خدمة الفايبر نت متوفرة في منطقتي؟",
    answer: "يمكنك التحقق من توفر خدماتنا في منطقتك عن طريق إدخال الرمز البريدي الخاص بك في أداة التحقق من المنطقة على موقعنا، أو الاتصال بخدمة العملاء للاستفسار."
  },
  {
    question: "هل تبقى السرعة ثابتة في جميع المناطق؟",
    answer: "قد تختلف سرعات الإنترنت قليلاً بين المناطق المختلفة اعتمادًا على البنية التحتية المحلية ومستوى الإشارة. نحن نبذل قصارى جهدنا لضمان تقديم السرعات المعلنة في جميع المناطق التي نخدمها."
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "نحن نقبل مجموعة متنوعة من طرق الدفع تشمل بطاقات الائتمان والخصم المباشر، والتحويل المصرفي، والدفع النقدي في مراكز خدمة العملاء المعتمدة."
  },
  {
    question: "هل أحتاج إلى توقيع عقد؟",
    answer: "نعم، تتطلب معظم خدماتنا عقدًا لمدة 12 شهرًا. ومع ذلك، لدينا أيضًا بعض الخيارات بدون عقد مع رسوم تأسيس أولية أعلى. يمكنك الاستفسار عن الخيارات المتاحة من خدمة العملاء."
  },
  {
    question: "كيف يمكنني ترقية باقتي الحالية؟",
    answer: "يمكنك ترقية باقتك الحالية عن طريق الاتصال بخدمة العملاء، أو من خلال حسابك على موقعنا الإلكتروني، أو عبر تطبيق الهاتف المحمول. سيتم تطبيق الترقية في دورة الفوترة التالية."
  }
];

const FaqSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-50" dir="rtl">
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
              المساعدة والأسئلة الشائعة
            </span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            الأسئلة العامة
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            فيما يلي إجابات على الأسئلة الأكثر شيوعًا حول خدماتنا. إذا لم تجد إجابة لسؤالك، فلا تتردد في الاتصال بنا
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                    <div className="text-right font-semibold text-lg">{item.question}</div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600 text-right">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
