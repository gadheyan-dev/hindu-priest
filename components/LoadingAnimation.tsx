"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if page is already loaded
    if (document.readyState === "complete") {
      setIsLoading(false);
      return;
    }

    // Listen for page load
    const handleLoad = () => {
      // Add a small delay for smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    };

    window.addEventListener("load", handleLoad);

    // Fallback: hide after max 3 seconds
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-gradient-to-b from-deep-indigo-900 via-deep-indigo-800 to-temple-stone-800 flex items-center justify-center"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Floating Flowers */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  x: "50%",
                  y: "50%",
                  opacity: 0,
                }}
                animate={{
                  x: [
                    "50%",
                    `${50 + (Math.cos((i * Math.PI * 2) / 8) * 100)}%`,
                    `${50 + (Math.cos((i * Math.PI * 2) / 8) * 120)}%`,
                  ],
                  y: [
                    "50%",
                    `${50 + (Math.sin((i * Math.PI * 2) / 8) * 100)}%`,
                    `${50 + (Math.sin((i * Math.PI * 2) / 8) * 120)}%`,
                  ],
                  opacity: [0, 0.8, 0.6],
                  scale: [0.5, 1, 0.8],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              >
                <motion.div
                  className="text-lotus-rose-400"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    <circle cx="12" cy="9" r="2" fill="currentColor" opacity="0.8" />
                  </svg>
                </motion.div>
              </motion.div>
            ))}

            {/* Temple Bell - Central Animation */}
            <motion.div
              className="relative z-10 flex flex-col items-center gap-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Bell SVG */}
              <motion.div
                animate={{
                  rotate: [-5, 5, -5, 5, -5, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  transformOrigin: "top center",
                }}
              >
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Bell body */}
                  <motion.path
                    d="M50 20 L30 20 Q25 20 25 25 L25 50 Q25 55 30 55 L70 55 Q75 55 75 50 L75 25 Q75 20 70 20 L50 20 Z"
                    fill="#F59E0B"
                    stroke="#D97706"
                    strokeWidth="2"
                  />
                  {/* Bell top handle */}
                  <path
                    d="M50 10 L50 20 M40 20 L60 20"
                    stroke="#D97706"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Bell clapper */}
                  <motion.circle
                    cx="50"
                    cy="45"
                    r="4"
                    fill="#92400E"
                    animate={{
                      x: [-3, 3, -3, 3, -3, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Decorative patterns */}
                  <path
                    d="M35 35 Q50 40 65 35 M35 45 Q50 50 65 45"
                    stroke="#D97706"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </motion.div>

              {/* Bell sound waves */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-20 h-20 rounded-full border-2 border-gilded-gold-400/30"
                  initial={{ scale: 0.8, opacity: 0.8 }}
                  animate={{
                    scale: [1, 2, 3],
                    opacity: [0.8, 0.4, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: i * 0.3,
                  }}
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}

              {/* Loading text */}
              <motion.p
                className="text-gilded-gold-300 font-heading text-lg mt-8"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Loading...
              </motion.p>
            </motion.div>

            {/* Petal Animation */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`petal-${i}`}
                className="absolute"
                initial={{
                  x: "50%",
                  y: "100%",
                  opacity: 0,
                }}
                animate={{
                  x: [
                    "50%",
                    `${50 + (Math.cos((i * Math.PI * 2) / 12) * 30)}%`,
                    `${50 + (Math.cos((i * Math.PI * 2) / 12) * 60)}%`,
                  ],
                  y: [
                    "100%",
                    `${100 - 30 - (i * 5)}%`,
                    `${100 - 60 - (i * 8)}%`,
                  ],
                  opacity: [0, 0.7, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: i * 0.15,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-lotus-rose-300"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                </svg>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

