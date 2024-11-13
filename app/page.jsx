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
  
		  {/* <div className="bg-gradient-to-br from-indigo-200 via-pink-200 via-50% to-indigo-200"> */}
		  <div className="bg-combined-gradient">
			<Hero />
		  </div>
  
		<div className="h-full w-full rounded-md relative flex flex-col items-center justify-center antialiased">
			<div className="absolute inset-0 pointer-events-none bg-dot-thick-purple-300 z-10 opacity-10 animate-pulse"></div> 
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
