"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { MistField } from "@/components/motion/mist-field";

const EASE = [0.22, 1, 0.36, 1] as const;

const THEMES = {
  mist: { hidden: { opacity: 0, y: 16, filter: "blur(4px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } },
  civic: { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } },
  heat: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  product: { hidden: { opacity: 0, y: 10, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1 } },
} as const;

export type AnimTheme = keyof typeof THEMES;

export function AnimBlock({
  theme = "civic",
  delay = 0,
  mist = false,
  className,
  children,
}: {
  theme?: AnimTheme;
  delay?: number;
  mist?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const v = THEMES[theme];

  return (
    <motion.div
      className={cn("relative", className)}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.16 }}
      variants={{
        hidden: v.hidden,
        show: { ...v.show, transition: { duration: 0.45, delay, ease: EASE } },
      }}
    >
      {mist ? <MistField /> : null}
      {children}
    </motion.div>
  );
}

export function AnimStagger({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function AnimItem({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.4, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
