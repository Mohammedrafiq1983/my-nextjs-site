"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "هدى سعيد",
    position: "مديرة التسويق",
    image: "https://ext.same-assets.com/1236621396/1040835396.jpeg",
    socialLinks: [
      { name: "Facebook", icon: "Facebook", url: "#" },
      { name: "Twitter", icon: "Twitter", url: "#" },
      { name: "Instagram", icon: "Instagram", url: "#" },
    ]
  },
  {
    id: 2,
    name: "يعقوب صالح",
    position: "مدير المبيعات",
    image: "https://ext.same-assets.com/1236621396/3203019206.jpeg",
    socialLinks: [
      { name: "Facebook", icon: "Facebook", url: "#" },
      { name: "Twitter", icon: "Twitter", url: "#" },
      { name: "Instagram", icon: "Instagram", url: "#" },
    ]
  },
  {
    id: 3,
    name: "أحمد لطفي",
    position: "مسؤول التسويق",
    image: "https://ext.same-assets.com/1236621396/2176392453.jpeg",
    socialLinks: [
      { name: "Facebook", icon: "Facebook", url: "#" },
      { name: "Twitter", icon: "Twitter", url: "#" },
      { name: "Instagram", icon: "Instagram", url: "#" },
    ]
  }
];

const SocialIcon = ({ name }: { name: string }) => {
  switch(name) {
    case "Facebook":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-white"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      );
    case "Twitter":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-white"
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      );
    case "Instagram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-white"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      );
    default:
      return null;
  }
};

const TeamSection = () => {
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
              فريق العمل
            </span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            تعرف على فريقنا المحترف
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            يضم فريقنا نخبة من المتخصصين والخبراء في مجال الاتصالات وتكنولوجيا المعلومات، يعملون معًا لتقديم أفضل الخدمات لعملائنا الكرام
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-80 overflow-hidden group">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Social Icons */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    {member.socialLinks.map((social, index) => (
                      <Link
                        key={index}
                        href={social.url}
                        className="w-9 h-9 rounded-full bg-vibranet-orange flex items-center justify-center hover:bg-vibranet-purple transition-colors"
                      >
                        <SocialIcon name={social.icon} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
