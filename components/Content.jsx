"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';


export function Content() {
    const cardData = [
        {
            title: "What Drives Us",
            imageSrc: "/mission.svg",
            content:
                "",
            initialX: -100,
            rotate: -5,
        },
        {
            title: "The Path Forward",
            imageSrc: "/vision.svg",
            content:
                "",
            initialX: 100,
            rotate: 5,
        },
    ];

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start justify-center ">
                <div className="p-4 md:p-10">
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
                            className="text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-6xl font-bold p-4 text-right [text-shadow:_0_4px_14px_rgb(50_50_117_/_0.4)]"
                        >
                            What Drives Us
                        </motion.h1>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}  // Start off small and invisible
                            animate={{ opacity: 1, scale: 1 }}  // Fade in and scale to normal size
                            transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                            }}
                            className="flex justify-end items-center p-4"  // Align to the right horizontally and center vertically
                        >
                            <Image
                                src='/mission.svg'
                                alt="Mission_Icon"
                                width={150}
                                height={150}
                                priority={true}
                            />
                        </motion.div>


                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                            }}
                            className="sm:text-base md:text-lg lg:text-2xl xl:text-3xl 2xl:text-3xl p-4 text-right [text-shadow:_0_4px_14px_rgb(50_50_117_/_0.4)]"
                        >
                            At BILDS, our mission is to empower Bangladesh’s{" "}
                            <motion.span
                                className="text-orange-500"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                industries
                            </motion.span>{" "}
                            with innovative software solutions that revolutionize{" "}
                            <motion.span
                                className="text-orange-500"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                inbound logistics
                            </motion.span>{" "}
                            and{" "}
                            <motion.span
                                className="text-orange-500"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9, duration: 0.8 }}
                            >
                                distribution
                            </motion.span>
                            . We aim to deliver unmatched{" "}
                            <motion.span
                                className="text-orange-500"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.2, duration: 0.8 }}
                            >
                                market insights
                            </motion.span>
                            , optimize{" "}
                            <motion.span
                                className="text-orange-500"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.5, duration: 0.8 }}
                            >
                                costs
                            </motion.span>
                            , and enable seamless{" "}
                            <motion.span
                                className="text-orange-500"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.8, duration: 0.8 }}
                            >
                                planning
                            </motion.span>{" "}
                            —all while driving{" "}
                            <motion.span
                                className="text-orange-500"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 2.1, duration: 0.8 }}
                            >
                                sustainable practices
                            </motion.span>
                            . By leveraging advanced{" "}
                            <motion.span
                                className="text-orange-500"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 2.4, duration: 0.8 }}
                            >
                                technology
                            </motion.span>
                            , we’re building a smarter, more efficient{" "}
                            <motion.span
                                className="text-orange-500"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 2.7, duration: 0.8 }}
                            >
                                supply chain
                            </motion.span>{" "}
                            that maximizes client value, minimizes{" "}
                            <motion.span
                                className="text-orange-500"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 3.0, duration: 0.8 }}
                            >
                                environmental impact
                            </motion.span>
                            , and fosters long-term{" "}
                            <motion.span
                                className="text-orange-500"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 3.3, duration: 0.8 }}
                            >
                                growth
                            </motion.span>
                            .
                        </motion.div>

                    </motion.div>
                </div>

            </div>

            <div className="flex items-end justify-center">
                <div className="p-4 md:p-10">
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
                            className="text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-6xl font-bold p-4 text-left [text-shadow:_0_4px_14px_rgb(50_50_117_/_0.4)]"
                        >
                            The Path Forward
                        </motion.h1>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}  // Start off small and invisible
                            animate={{ opacity: 1, scale: 1 }}  // Fade in and scale to normal size
                            transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                            }}
                            className="flex justify-start items-center p-4"  // Align to the right horizontally and center vertically
                        >
                            <Image
                                src='/vision.svg'
                                alt="visionIcon"
                                width={150}
                                height={150}
                                priority={true}
                            />
                        </motion.div>


                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                            }}
                            className="sm:text-base md:text-lg lg:text-2xl xl:text-3xl 2xl:text-3xl p-4 text-left [text-shadow:_0_4px_14px_rgb(50_50_117_/_0.4)]"
                        >
                            We envision a future where every{" "}
                            <motion.span
                                className="text-orange-500"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 1 }}
                            >
                                business
                            </motion.span>{" "}
                            in Bangladesh has the tools to operate with precision, reduce{" "}
                            <motion.span
                                className="text-orange-500"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1, duration: 1 }}
                            >
                                costs
                            </motion.span>
                            , and drive{" "}
                            <motion.span
                                className="text-orange-500"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.5, duration: 1 }}
                            >
                                sustainable development
                            </motion.span>
                            . As a transformative force in{" "}
                            <motion.span
                                className="text-orange-500"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 2, duration: 1 }}
                            >
                                logistics
                            </motion.span>{" "}
                            and{" "}
                            <motion.span
                                className="text-orange-500"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 2.5, duration: 1 }}
                            >
                                distribution
                            </motion.span>
                            , we aim to set new standards for{" "}
                            <motion.span
                                className="text-orange-500"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 3, duration: 1 }}
                            >
                                efficiency
                            </motion.span>
                            ,{" "}
                            <motion.span
                                className="text-orange-500"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 3.5, duration: 1 }}
                            >
                                sustainability
                            </motion.span>
                            , and{" "}
                            <motion.span
                                className="text-orange-500"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 4, duration: 1 }}
                            >
                                insight
                            </motion.span>
                            , creating an agile, responsive, and future-ready{" "}
                            <motion.span
                                className="text-orange-500"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 4.5, duration: 1 }}
                            >
                                supply chain
                            </motion.span>{" "}
                            for Bangladesh and beyond.
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
}
