"use client";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Content } from "@/components/Content";
import { Navbar } from "@/components/Navbar";
import { Goals } from "@/components/Goals";
import Team from "@/components/Team";
import { Outro } from "@/components/Outro";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Index() {
	const sectionsRef = useRef([]);
	const [scrollProgress, setScrollProgress] = useState(0);

	// Monitor scroll progress
    const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.scrollY;
        const scrollPercentage = (scrollTop / totalHeight) * 100;
        setScrollProgress(scrollPercentage);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


	return (
		<main className="flex min-h-screen flex-col justify-between">
			<div>
				<Navbar />
			</div>

			<div id="home" className=" gradient-bg">
				<Hero />
			</div>
			<div className=" h-full w-full rounded-md relative flex flex-col items-center justify-center antialiased gradient-bg">
				<div className="absolute inset-0 pointer-events-none bg-dot-thick-zinc-400 z-10 opacity-10 animate-pulse"></div>
				<div className="z-10">
					<div className="section-container">
						{/* Vertical Progress Bar */}
						<motion.div
							style={{ height: `${scrollProgress}%` }}
							className="fixed top-0 left-0 w-2 bg-orange-500 z-30"
						/>

						<div id="about" ref={(el) => sectionsRef.current[0] = el} className="">
							<Content />
						</div>
						<div id="goals" ref={(el) => sectionsRef.current[1] = el} className="">
							<Goals />
						</div>
						<div id="team" ref={(el) => sectionsRef.current[2] = el} className="">
							<Team />
						</div>
						<div id="outro" ref={(el) => sectionsRef.current[3] = el} className="">
							<Outro />
						</div>
					</div>
				</div>
			</div>

			<div className="w-full bg-primary">
				<Footer />
			</div>
		</main>
	);
}
