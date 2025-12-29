"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface ScrollFadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    once?: boolean;
    threshold?: number;
}

export default function ScrollFadeIn({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
    direction = "up",
    distance = 40,
    once = true,
    threshold = 0.2,
}: ScrollFadeInProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { 
        once, 
        amount: threshold 
    });

    const getInitialPosition = () => {
        switch (direction) {
            case "up":
                return { y: distance, x: 0 };
            case "down":
                return { y: -distance, x: 0 };
            case "left":
                return { x: distance, y: 0 };
            case "right":
                return { x: -distance, y: 0 };
            case "none":
                return { x: 0, y: 0 };
            default:
                return { y: distance, x: 0 };
        }
    };

    const variants: Variants = {
        hidden: {
            opacity: 0,
            ...getInitialPosition(),
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for smooth animation
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Staggered children animation wrapper
interface ScrollFadeInGroupProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    once?: boolean;
}

export function ScrollFadeInGroup({
    children,
    className = "",
    staggerDelay = 0.1,
    direction = "up",
    once = true,
}: ScrollFadeInGroupProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, amount: 0.2 });

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerDelay,
            },
        },
    };

    const getInitialPosition = () => {
        switch (direction) {
            case "up":
                return { y: 30, x: 0 };
            case "down":
                return { y: -30, x: 0 };
            case "left":
                return { x: 30, y: 0 };
            case "right":
                return { x: -30, y: 0 };
            case "none":
                return { x: 0, y: 0 };
            default:
                return { y: 30, x: 0 };
        }
    };

    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            ...getInitialPosition(),
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className={className}
        >
            {Array.isArray(children)
                ? children.map((child, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        {child}
                    </motion.div>
                ))
                : <motion.div variants={itemVariants}>{children}</motion.div>
            }
        </motion.div>
    );
}

