"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function InfoCard({ title, imageSrc, content }) {
    return (
        <motion.div
            className="w-full flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 2, // Adjust this duration to control the speed of fade-in
                ease: "easeInOut",
            }}
            viewport={{ once: true }}
        >
            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}  // Start off with title slightly above and invisible
                animate={{ opacity: 1, y: 0 }}  // Fade in and move to original position
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
                className="text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-6xl 
                    font-bold p-4 text-zinc-700 [text-shadow:_0_4px_14px_rgb(50_50_117_/_0.4)]"
            >
                {title}
            </motion.h1>

            {/* Image */}
            {imageSrc && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}  // Start off small and invisible
                    animate={{ opacity: 1, scale: 1 }}  // Fade in and scale to normal size
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                    className="flex items-center justify-center p-4"
                >
                    <Image
                        src={imageSrc}
                        alt={`${title} Icon`}
                        width={150}
                        height={150}
                        priority={true}
                    />
                </motion.div>
            )}

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}  // Start off below and invisible
                animate={{ opacity: 1, y: 0 }}  // Fade in and move to original position
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                }}
                className="sm:text-base md:text-lg lg:text-2xl xl:text-4xl 2xl:text-4xl 
                    font-bold p-4 text-start [text-shadow:_0_4px_14px_rgb(50_50_117_/_0.4)]"
            >
                {content}
            </motion.div>
        </motion.div>
    );
}
