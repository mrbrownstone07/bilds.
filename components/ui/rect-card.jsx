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
    iconClass = "h-6 w-6 text-white",
    children,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            className={`border border-white/[0.2] bg-zinc-950 flex flex-col items-start max-w-sm mx-auto p-4 relative ${className}`}
        >
            <Icon className={`absolute -top-3 -left-3 ${iconClass}`} />
            <Icon className={`absolute -bottom-3 -left-3 ${iconClass}`} />
            <Icon className={`absolute -top-3 -right-3 ${iconClass}`} />
            <Icon className={`absolute -bottom-3 -right-3 ${iconClass}`} />

            <Card className="border-none p-2 bg-zinc-950">
                <CardHeader>
                    <CardTitle className="text-center">
                        <motion.p
                            className="text-xl"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            {name}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            {title}
                        </motion.p>
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: .6 }}
                    >
                        <CardDescription>
                            <p className="lg:text-sm text-sm text-white text-center">{description}</p>
                        </CardDescription>
                    </motion.div>
                    {children}
                </CardContent>
            </Card>
        </motion.div>
    );
}
