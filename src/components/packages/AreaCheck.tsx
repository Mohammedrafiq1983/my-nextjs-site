"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const AreaCheck = () => {
  const [zipCode, setZipCode] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [checkResult, setCheckResult] = useState<null | boolean>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side mounting to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();

    if (!zipCode.trim()) return;

    setIsChecking(true);

    // Simulate checking process
    setTimeout(() => {
      // For demo purposes, we'll just consider even zip codes as "available"
      const isAvailable = parseInt(zipCode) % 2 === 0;
      setCheckResult(isAvailable);
      setIsChecking(false);
    }, 1500);
  };

  if (!isMounted) {
    return null; // Return nothing on server-side render
  }

  return (
    <section className="py-12 bg-gray-800 text-white" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-6">
            <span className="text-vibranet-orange uppercase text-sm font-medium tracking-wider">
              تحقق من توفر الخدمة
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            تحقق من إمكانية توصيل خدماتنا في منطقتك
          </h2>

          <form onSubmit={handleCheck} className="flex flex-col md:flex-row gap-4 justify-center">
            <Input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="أدخل الرمز البريدي"
              className="bg-gray-700 border-gray-600 focus:border-vibranet-orange focus:ring-vibranet-orange text-white rounded-full py-6 px-6 md:min-w-[300px]"
              maxLength={5}
              pattern="[0-9]*"
              inputMode="numeric"
            />

            <Button
              type="submit"
              disabled={isChecking || !zipCode.trim()}
              className="bg-gradient-to-r from-vibranet-gradient-start to-vibranet-gradient-end hover:opacity-90 rounded-full py-6 px-8"
            >
              {isChecking ? "جارٍ التحقق..." : "تحقق الآن"}
            </Button>
          </form>

          {checkResult !== null && (
            <div className={`mt-6 text-center p-4 rounded-lg ${checkResult ? 'bg-green-900/30' : 'bg-red-900/30'}`}>
              {checkResult
                ? "خبر رائع! خدماتنا متوفرة في منطقتك. اتصل بنا لإعداد اتصالك."
                : "نأسف، خدماتنا غير متوفرة حاليًا في منطقتك. نحن نتوسع بسرعة، يرجى التحقق مرة أخرى قريبًا."
              }
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AreaCheck;
