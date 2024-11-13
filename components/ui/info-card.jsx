"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle} from "./card";
import Image from "next/image";


export function InfoCard({ title, imageSrc, content, initialX, rotate }) {
    return (
        <motion.div
            className="w-full md:w-1/2 flex items-stretch"
            initial={{ opacity: 0, x: initialX, scale: 0.95, rotate }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
            transition={{
                duration: 1.2,
                ease: [0.42, 0, 0.58, 1],
                delay: 0.1,
            }}
            viewport={{ once: true }}
        >
            <Card className="rounded-lg p-6 bg-zinc-950 text-gray-100 h-full flex-1 border-none">
                <CardHeader className="">
                    <CardTitle className="text-2xl font-semibold text-primary text-center">
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col lg:flex-row items-center gap-6">
                    <motion.div
                        className="w-full lg:w-1/4 h-48 mb-4 rounded-lg overflow-hidden flex justify-center items-center"
                        whileHover={{ scale: 1.1 }}
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
                        <p className="text-justify">{content}</p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}