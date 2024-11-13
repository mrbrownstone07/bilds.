"use client";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Content } from "@/components/Content";
import { Navbar } from "@/components/Navbar";
import { Goals } from "@/components/Goals";
import Team from "@/components/Team";
import { Outro } from "@/components/Outro";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Index() {
	return (
	  <>
		<main className="flex min-h-screen flex-col justify-between">
		  <div>
			<Navbar />
			<BackgroundBeams />
		  </div>
  
		  <div className="bg-combined-gradient">
			<Hero />
		  </div>
  
		  <div className="h-full w-full rounded-md bg-gray-220 relative flex flex-col items-center justify-center antialiased">
			<div className="absolute inset-0 pointer-events-none bg-dot-thick-zinc-200 z-10"></div> 
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
		  </div>
  
		  <div className="w-full bg-background mt-1">
			<Footer />
		  </div>

		</main>
	  </>
	);
}
