"use client";
import React from "react";
import { InfoCard } from "./ui/info-card";


export function Outro() {
    const cardData = [
        {
            title: "Why Choose BILDS?",
            imageSrc: "/solution.svg", // Replace with the appropriate image path
            content:
                "As an enabler of transformation in distribution and logistics, BILDS combines industry knowledge, cutting-edge technology, and a commitment to sustainability to create tailored, scalable solutions. Our expertise spans market insights, cost optimization, and advanced technology integration to help you build a future-ready supply chain.",
            initialX: -100,
            rotate: -5,
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
