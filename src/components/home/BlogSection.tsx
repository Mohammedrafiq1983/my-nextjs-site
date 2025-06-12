"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "تأثير خوذات الواقع الافتراضي والنظارات ثلاثية الأبعاد",
    description: "استكشف معنا تأثير تقنيات الواقع الافتراضي على تصفح الإنترنت ومشاهدة المحتوى والألعاب، وكيف تغير هذه التقنيات تجربة المستخدم...",
    category: "تكنولوجيا",
    image: "https://ext.same-assets.com/1236621396/1463746418.jpeg",
    slug: "the-effect-of-virtual-reality-helmets-and-3d-glasses"
  },
  {
    id: 2,
    title: "أكثر تطبيقات الأعمال شيوعًا في عام 2021",
    description: "تعرف على أفضل تطبيقات إدارة الأعمال التي أحدثت ثورة في عالم الأعمال خلال العام الماضي، وكيف يمكنك الاستفادة منها لتحسين أداء شركتك...",
    category: "أعمال",
    image: "https://ext.same-assets.com/1236621396/2176392453.jpeg",
    slug: "the-most-popular-new-top-business-apps-in-2021"
  },
  {
    id: 3,
    title: "قنوات جديدة للأطفال على تطبيق البث المباشر",
    description: "أطلقنا مجموعة من القنوات الجديدة المخصصة للأطفال على منصة البث المباشر، توفر محتوى تعليمي وترفيهي متنوع يناسب مختلف الأعمار...",
    category: "خدمات البث",
    image: "https://ext.same-assets.com/1236621396/3794788668.jpeg",
    slug: "children-are-going-to-love-the-new-channels-on-streaming-app"
  }
];

const BlogSection = () => {
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
              مدونتنا
            </span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            آخر الأخبار والمقالات
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            تصفح آخر المقالات والأخبار المتعلقة بعالم الإنترنت والتكنولوجيا والخدمات التي نقدمها، وتعرف على أحدث التطورات في مجال الاتصالات
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Card className="overflow-hidden border-0 shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <div className="relative h-60">
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </Link>
                  <Link
                    href={`/category/${post.category.toLowerCase()}`}
                    className="absolute top-4 right-4 bg-white text-vibranet-purple px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {post.category}
                  </Link>
                </div>

                <div className="p-6">
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold mb-3 hover:text-vibranet-orange transition-colors text-right">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-gray-600 text-sm mb-4 text-right">
                    {post.description}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm text-vibranet-orange font-medium hover:text-vibranet-purple transition-colors block text-right"
                  >
                    اقرأ المزيد
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
