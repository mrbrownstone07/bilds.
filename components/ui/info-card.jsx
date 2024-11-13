"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import Image from "next/image";

export function InfoCard({ title, imageSrc, content }) {
    return (
        <motion.div
            className="w-full md:w-1/2 flex items-stretch"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1, // Duration for fade-in
                ease: "easeInOut",
            }}
            viewport={{ once: true, amount: 0.2 }} // Ensures animation triggers when 20% of the element is visible
        >
            {/* Card container */}
            <Card className="rounded shadow-none p-6 bg-background text-gray-100 h-full flex-1">
                {/* Header animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        delay: 0.5, // Delay after the card appears
                        duration: 1, // Duration for header fade-in
                        ease: "easeInOut",
                    }}
                >
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold text-primary text-center">
                            {title}
                        </CardTitle>
                    </CardHeader>
                </motion.div>

                {/* Image and content animation */}
                <motion.div
                    className="flex flex-col lg:flex-row items-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 1, // Delay after the header animation
                        duration: 1, // Duration for image/content fade-in and slide-up
                        ease: "easeInOut",
                    }}
                >
                    {/* Image animation */}
                    <motion.div
                        className="w-full lg:w-1/4 h-48 mb-4 rounded-lg overflow-hidden flex justify-center items-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src={imageSrc}
                            alt={`${title} Icon`}
                            width={150}
                            height={150}
                            priority={true}
                        />
                    </motion.div>

                    {/* Content animation */}
                    <div className="w-full lg:w-3/4">
                        <p className="text-justify text-primary">{content}</p>
                    </div>
                </motion.div>
            </Card>
        </motion.div>
    );
}
