"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, slideInLeft, slideInRight, fadeIn } from "@/lib/animations";

type AnimationType = "fadeInUp" | "slideInLeft" | "slideInRight" | "fadeIn";

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  animationType?: AnimationType;
  delay?: number;
}

const animationVariants = {
  fadeInUp,
  slideInLeft,
  slideInRight,
  fadeIn,
};

export function AnimatedText({
  children,
  className = "",
  animationType = "fadeInUp",
  delay = 0,
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const selectedVariant = animationVariants[animationType];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedVariant}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
