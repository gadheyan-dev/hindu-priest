"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (latest > lastScrollY && latest > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(latest);
  });


  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-heading text-xl font-semibold text-deep-indigo-900">
              Pandit
            </span>
            <span className="font-body text-deep-indigo-900 hidden sm:inline">
              पंडित
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-temple-stone-700 hover:text-deep-indigo-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-temple-stone-700 hover:text-deep-indigo-900 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/booking"
              className="text-temple-stone-700 hover:text-deep-indigo-900 transition-colors"
            >
              Booking
            </Link>
            <Link
              href="/contact"
              className="text-temple-stone-700 hover:text-deep-indigo-900 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/booking"
              className="px-4 py-2 bg-saffron-600 text-white rounded-md hover:bg-saffron-600/90 transition-colors"
            >
              Book a Puja
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-deep-indigo-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-temple-stone-200"
          >
            <div className="flex flex-col gap-4 pt-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-temple-stone-700 hover:text-deep-indigo-900"
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-temple-stone-700 hover:text-deep-indigo-900"
              >
                Services
              </Link>
              <Link
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="text-temple-stone-700 hover:text-deep-indigo-900"
              >
                Booking
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-temple-stone-700 hover:text-deep-indigo-900"
              >
                Contact
              </Link>
              <Link
                href="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 bg-saffron-600 text-white rounded-md text-center"
              >
                Book a Puja
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}

