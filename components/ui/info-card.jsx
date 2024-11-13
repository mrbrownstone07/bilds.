"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import Image from "next/image";

export function InfoCard({ title, imageSrc, content }) {
    return (
        <motion.div
        className="w-full md:w-1/2 flex items-stretch"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
            duration: 2, // Adjust this duration to control the speed of fade-in
            ease: "easeInOut",
        }}
        viewport={{ once: true }}
    >
        <Card className="rounded shadow-none p-6 bg-background text-gray-100 h-full flex-1">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary text-center">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col lg:flex-row items-center gap-6">
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
                <div className="w-full lg:w-3/4">
                    <p className="text-justify text-primary">{content}</p>
                </div>
            </CardContent>
        </Card>
    </motion.div>
    );
}
