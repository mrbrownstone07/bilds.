"use client";
import React from "react";
import { InfoCard } from "./ui/info-card";


export function Content() {
    const cardData = [
        {
            title: "What Drives Us",
            imageSrc: "/mission.svg",
            content:
                "At BILDS, our mission is to empower Bangladesh’s FMCG industry with innovative software solutions that revolutionize inbound logistics and distribution. We aim to deliver unmatched market insights, optimize costs, and enable seamless planning—all while driving sustainable practices. By leveraging advanced technology, we’re building a smarter, more efficient supply chain that maximizes client value, minimizes environmental impact, and fosters long-term growth.",
            initialX: -100,
            rotate: -5,
        },
        {
            title: "The Path Forward",
            imageSrc: "/vision.svg",
            content:
                "We envision a future where every FMCG business in Bangladesh has the tools to operate with precision, reduce costs, and drive sustainable development. As a transformative force in logistics and distribution, we aim to set new standards for efficiency, sustainability, and insight, creating an agile, responsive, and future-ready supply chain for Bangladesh and beyond.",
            initialX: 100,
            rotate: 5,
        },
    ];

    return (
        <div id="about" className="flex flex-col md:flex-row items-stretch justify-center gap-8 px-4 md:px-12 lg:px-20 py-12">
            {cardData.map((card, index) => (
                <InfoCard
                    key={index}
                    title={card.title}
                    imageSrc={card.imageSrc}
                    content={card.content}
                    initialX={card.initialX}
                    rotate={card.rotate}
                />
            ))}
        </div>
    );
}
