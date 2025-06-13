"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Link from "next/link";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle client-side mounting to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return nothing on server-side render
  }

  return (
    <section className="relative min-h-[400px] flex items-center overflow-hidden" dir="rtl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpeg"
          alt="عائلة تستخدم الإنترنت معًا"
          fill
          priority
          className="object-fill"
          style={{ filter: "brightness(0.5)" }}
        />
        <div className="absolute inset-0 bg-vibranet-dark/50"></div>
      </div>

      {/* Transparent AHMED ZEDAN NET Text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-10">
        <h1 className="text-white text-[80px] md:text-[150px] font-bold tracking-wider text-center px-4">احمد زيدان</h1>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-24">
        <div className="max-w-3xl">
          <div className="mb-5">
            <span className="text-white bg-vibranet-purple/20 border border-vibranet-purple py-1 px-3 rounded-full text-sm">
              مرحبًا بكم في شبكة احمد زيدان
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            خدمة إنترنت موثوقة وعالية السرعة
          </h1>
          <p className="text-white/80 text-lg mb-8">
            نقدم خدمات إنترنت عالية السرعة بأسعار تنافسية. تمتع بأفضل تجربة إنترنت مع أسرع اتصال وأكثر موثوقية.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-vibranet-orange hover:bg-vibranet-orange/90 text-white rounded-full py-6 px-8">
              <Link href="/packages/">تحقق من التوفر</Link>
            </Button>
            <Button
              variant="outline"
              className="bg-gradient-to-r from-vibranet-gradient-start to-vibranet-gradient-end hover:opacity-90 rounded-full py-6 px-8"
              onClick={() => setIsVideoOpen(true)}
            >
              <Play size={20} className="ml-2" />
              شاهد الفيديو
            </Button>
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      {isMounted && (
        <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
          <DialogContent className="max-w-4xl p-1 bg-black">
            <iframe
              width="100%"
              height="400"
              src={isVideoOpen ? "https://www.youtube.com/embed/4fFSb0_Wryk" : ""}
              title="Ahmed Zedan Net Intro Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="border-0"
            ></iframe>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default HeroSection;
