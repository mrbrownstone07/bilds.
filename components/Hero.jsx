"use client";
import { anton, lato } from '@/app/fonts';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSVG from './ui/animated-svg';

export function Hero() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">

            {/* Grid Container for larger screens */}
            <div className="w-full h-full grid grid-rows-[auto_1fr] grid-cols-1">

                {/* First Row for Larger Screens */}
                <div className="flex-1 w-full flex items-center justify-center">
                    <div className="w-full max-w-8xl lg:px-10 px-4">

                        {/* Desktop First Row */}
                        <div className="hidden md:grid grid-cols-3 gap-4">
                            <div className="flex items-center justify-start">
                                <motion.p
                                    className="text-zinc-700 font-sans font-bold leading-relaxed text-sm 
                                    sm:text-base md:text-lg lg:text-2xl xl:text-4xl 2xl:text-5xl text-right
                                    [text-shadow:_0_4px_14px_rgb(50_50_117_/_0.4)]"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 2.8, ease: "easeInOut" }}
                                >
                                    Revolutionizing Industries with Seamless{" "}
                                    <motion.span
                                        className="text-orange-500 uppercase"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.9, duration: 1 }}
                                    >
                                        Communication
                                    </motion.span>
                                    ,{" "}
                                    <motion.span
                                        className="text-orange-500 uppercase"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.8, duration: 1 }}
                                    >
                                        Optimized
                                    </motion.span>{" "}
                                    Distribution, and Unmatched Market Excellence through{" "}
                                    <motion.span
                                        className="text-orange-500 uppercase"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 2.7, duration: 1 }}
                                    >
                                        Innovative Solutions
                                    </motion.span>
                                    .
                                </motion.p>

                            </div>

                            <div className="flex items-center justify-center">
                                <motion.div
                                    className="w-36 h-36 relative"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 3,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                    }}
                                >
                                    <Image
                                        src="/logo.svg" // Ensure logo.svg is in the public folder
                                        alt="Icon"
                                        layout="fill"
                                        objectFit="contain"
                                        className="object-center"
                                    />
                                </motion.div>
                            </div>
                            <div className="flex items-center justify-left mt-10">
                                <AnimatedSVG />
                            </div>
                        </div>

                        {/* Mobile First Row */}
                        <div className="md:hidden w-full flex flex-col items-center">
                            <div className="flex items-center justify-center mb-4">
                                <motion.div
                                    className="w-36 h-36 relative"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 3,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                    }}
                                >
                                    <Image
                                        src="/logo.svg" // Ensure logo.svg is in the public folder
                                        alt="Icon"
                                        layout="fill"
                                        objectFit="contain"
                                        className="object-center"
                                    />
                                </motion.div>
                            </div>
                            <p className="text-zinc-700 font-sans font-bold text-center text-sm sm:text-base ">
                                Revolutionizing Industries with Seamless Communication, Optimized Distribution,
                                and Unmatched Market Excellence through Innovative Solutions.
                            </p>
                        </div>

                        {/* Desktop Second Row */}
                        <div className="hidden md:grid grid-cols-3 gap-4 mb-10 font-terminal">
                            <div className="flex justify-end [text-shadow:_0_4px_14px_rgb(0_0_0_/_0.7)] font-terminal">
                                0000-119
                            </div>
                            <div className="flex items-center justify-center"></div>
                            <div className="flex justify-start [text-shadow:_0_4px_14px_rgb(0_0_0_/_0.7)] font-terminal">
                                05/07
                            </div>
                        </div>

                        {/* Mobile Second Row */}
                        <div className="md:hidden w-full flex justify-between px-4 font-terminal">
                            <div className="flex justify-start [text-shadow:_0_4px_14px_rgb(0_0_0_/_0.7)]">
                                2024
                            </div>
                            <div className="flex justify-end [text-shadow:_0_4px_14px_rgb(0_0_0_/_0.7)]">
                                14/11
                            </div>
                        </div>

                    </div>

                    {/* Bottom Heading */}
                    <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-9xl font-bold text-black tracking-widest
                        font-secondary subpixel-antialiased  
                        absolute bottom-0 mb-20 md:mb-10 [text-shadow:_0_4px_14px_rgb(0_0_0_/_0.7)]
                    ">
                        bilds
                    </h1>
                </div>
            </div>
        </div>
    )
}
