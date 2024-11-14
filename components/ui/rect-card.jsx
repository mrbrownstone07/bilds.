import React from "react";
import { Icon } from "./evervault-card";
import { CardTitle, CardContent, Card, CardHeader, CardDescription } from "./card";
import Image from "next/image";
import { motion } from "framer-motion";

export function RectCard({
    name,
    title,
    description,
    imageSrc,
    imageAlt = "Team Member Image",
    className = "",
    iconClass = "h-6 w-6 text-primary",
    children,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            className={`border border-primary/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative ${className}`}
        >
            <Icon className={`absolute -top-3 -left-3 ${iconClass}`} />
            <Icon className={`absolute -bottom-3 -left-3 ${iconClass}`} />
            <Icon className={`absolute -top-3 -right-3 ${iconClass}`} />
            <Icon className={`absolute -bottom-3 -right-3 ${iconClass}`} />

            <motion.div
                className="text-center text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold text-primary w-full"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                {name}
            </motion.div>
            <motion.div
                className="text-center text-base sm:text-lg md:text-xl lg:text-xl font-medium mt-2 text-primary w-full"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                {title}
            </motion.div>

  
            {/* Image Section */}
            {imageSrc && (
                <motion.div
                    className="w-full flex justify-center mt-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <Image
                        src={imageSrc}
                        alt={`${title} Image`}
                        width={150}
                        height={150}
                        className="rounded-md"
                    />
                </motion.div>
            )}


            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-4"
            >
                <p className="lg:text-sm text-sm text-primary text-center">{description}</p>
            </motion.div>

            {children}
        </motion.div>
    );
}
