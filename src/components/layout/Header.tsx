"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import { Menu, X } from "lucide-react";

// Define the type for navigation items
interface NavItem {
  name: string;
  href: string;
  subItems?: SubItem[];
}

// Define the type for sub-navigation items
interface SubItem {
  name: string;
  href: string;
}

const navLinks: NavItem[] = [
  { name: "الرئيسية", href: "/" },
  { name: "عنا", href: "/about-us/" },
  { name: "الباقات", href: "/packages/" },
  { name: "الأسئلة الشائعة", href: "#" },
  { name: "تواصل معنا", href: "/contact/" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="bg-vibranet-dark text-white py-4 sticky top-0 z-50" dir="rtl">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-white">
            احمد <span className="text-vibranet-orange">زيدان</span> نت
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.subItems ? (
                <div className="flex items-center cursor-pointer">
                  <span className="text-sm font-medium hover:text-orange-400 transition-colors">
                    {link.name}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-3 w-3 text-white group-hover:text-orange-400 transition-colors"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="text-sm font-medium hover:text-orange-400 transition-colors"
                >
                  {link.name}
                </Link>
              )}

              {link.subItems && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-1 z-50">
                  {link.subItems.map((subItem: SubItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button 
            className="bg-gradient-to-r from-vibranet-gradient-start to-vibranet-gradient-end hover:opacity-90 rounded-full py-1 px-6"
            asChild
          >
            <Link href="/contact/">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                اتصل بنا
              </span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu size={24} />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-full h-screen flex flex-col sm:max-w-md p-0 bg-vibranet-dark" dir="rtl">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <span className="text-xl font-bold text-white">
                احمد <span className="text-vibranet-orange">زيدان</span> نت
              </span>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="text-white">
                <X size={24} />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <div key={link.name} className="w-full">
                    {link.subItems ? (
                      <>
                        <div
                          className="flex justify-between items-center text-white cursor-pointer w-full"
                          onClick={() => handleDropdownToggle(link.name)}
                        >
                          <span className="text-base font-medium">{link.name}</span>
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
                            className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </div>
                        {activeDropdown === link.name && (
                          <div className="mt-2 pl-4 border-l border-gray-700 space-y-2">
                            {link.subItems.map((subItem: SubItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block text-gray-300 hover:text-white py-1"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className="block text-white text-base font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
            <div className="p-4 border-t border-gray-700">
              <Button 
                className="bg-gradient-to-r from-vibranet-gradient-start to-vibranet-gradient-end hover:opacity-90 rounded-full py-1 w-full"
                asChild
              >
                <Link href="/contact/" onClick={() => setMobileMenuOpen(false)}>
                  <span className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    اتصل بنا
                  </span>
                </Link>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
};

export default Header;
