"use client";
import { anton, lato } from '@/app/fonts';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Highlight } from './ui/hero-highlight';
import { TextHoverEffect } from './ui/text-hover-effect';


export function Hero() {
    return (
        <div className="w-full flex items-center min-h-screen justify-center  px-8">
            <section id="home" className="relative ">
                <div className="hero-content text-center hero relative z-20">
                    <div className="max-w-fit">
                        <span className="pointer-events-none opacity-20 absolute top-[10%] left-[10%] -z-30 block h-[20%] w-[50%] rounded-full bg-gradient-to-r from-pink-500 to-red-500 opacity-80 blur-[126.06px] translate-x-0 translate-y-0"></span>
                        <span className="pointer-events-none opacity-30 absolute bottom-[25%] right-[15%] -z-30 block h-[50%] w-[45%] scale-90 rounded-full bg-gradient-to-r from-pink-600 to-red-600 blur-[113.85px] translate3d(0, 0, 0)"></span>
                        <Title />
                        <div className="flex justify-center items-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                            >
                                <Image
                                    src="/bilds-icon.svg"
                                    alt="Icon"
                                    width={250}
                                    height={250}
                                    priority={true}
                                />
                            </motion.div>
                        </div>
                        
                        <Subtitle />
                    </div>
                </div>
            </section>
        </div>

    );
}

const Title = () => {
    return (
        <div className={`${anton.className} lg:text-8xl text-4xl font-bold flex items-center justify-center`}>
            <TextHoverEffect text="bilds." />
        </div>
    );
};

const Subtitle = () => {
    return (
        <>
            <p className={`${lato.className} lg:text-4xl font-bold text-primary-content`}>
                Empowering {"Bangladesh's"} 
                <span className="font-bold text-pink-400"> FMCG </span>
                Industry
            </p>
            <div className='p-5'>
                <Highlight className="lg:text-4xl font-bold text-primary-content leading-relaxed lg:leading-snug text-center mx-auto">
                with Innovative Distribution & Logistics Solutions
                </Highlight>
            </div>
            <div className={`mt-auto lg:text-xl font-bold text-center`}>
                Driving transformation, efficiency, and sustainable growth across the FMCG sector in Bangladesh
            </div>
        </>
    );
};