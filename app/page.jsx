"use client";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Content } from "@/components/Content";
import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Goals } from "@/components/Goals";
import Team from "@/components/Team";
import { Outro } from "@/components/Outro";
import { BackgroundBeams } from "@/components/ui/background-beams";


export default function Index() {
	const { scrollYProgress } = useScroll();
	const smoothScrollYProgress = useSpring(scrollYProgress, {
	  stiffness: 50,
	  damping: 20,
	  mass: 1
	});
  
	return (
	  <>
		<main className="flex min-h-screen flex-col justify-between">
		  <div>
			<Navbar />
			<BackgroundBeams />
		  </div>
  
		  {/* <div className="absolute inset-0 pointer-events-none bg-dot-thick-indigo-950 z-20"></div> */}
		  <div className="bg-combined-gradient">
			<Hero />
		  </div>
  
		  <motion.div
			className="h-full w-full rounded-md bg-zinc-950 relative flex flex-col items-center justify-center antialiased"
			style={{ y: smoothScrollYProgress }}
		  >
			<div className="absolute inset-0 pointer-events-none bg-dot-thick-zinc-900 z-10"></div> 
			<div className="z-10">
			  <div className="w-full">
				<Content />
			  </div>
			  <div className="w-full">
				<Goals />
			  </div>
			  <div className="w-full">
				<Team />
			  </div>
			  <div className="w-full">
				<Outro />
			  </div>
			</div>
		  </motion.div>
  
		  <div className="w-full bg-zinc-950 mt-1">
			<Footer />
		  </div>

		</main>
	  </>
	);
}
