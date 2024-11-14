import { motion } from "framer-motion";
import React from "react";

export default function AnimatedHexagonsWithImages() {
    const hexagonProps = {
        fill: "none",
        stroke: "#f97316",
        strokeWidth: 3,
        initial: { pathLength: 0 },
        animate: { pathLength: 1 },
        transition: { duration: 1.5, ease: "easeInOut" },
    };

    const imageProps = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 1, ease: "easeInOut" },
    };

    // Hexagon center positions for a honeycomb layout
    const hexagonCenters = [
        { x: 150, y: 75 },
        { x: 300, y: 75 },
        { x: 450, y: 75 },
        { x: 225, y: 175 },
        { x: 375, y: 175 },
        { x: 150, y: 275 },
        { x: 300, y: 275 },
        { x: 450, y: 275 },
        { x: 225, y: 375 },
        { x: 375, y: 375 },
    ];

    // Array of image paths (make sure these files are in the `public` directory)
    const images = [
        "/delivery.svg",
        "/dash.svg",
        "/decision.svg",
        "/ship.svg",
        "/growth.svg",
        "/order.svg",
        "/secure.svg",
        "/delivery.svg",
        "/dash.svg",
        "/decision.svg",
    ];

    // Helper function to get the points for the top edge of each hexagon
    const getHexagonEdgePoints = (center) => {
        const { x, y } = center;
        const radius = 50; // Distance from center to vertex of hexagon
        const topEdgeX1 = x - radius;
        const topEdgeX2 = x + radius;
        const topEdgeY = y - radius * Math.sin(Math.PI / 3); // Top edge Y position
        return { x1: topEdgeX1, y1: topEdgeY, x2: topEdgeX2, y2: topEdgeY };
    };

    // Create the path string to connect one edge of the hexagons
    const pathString = hexagonCenters
        .map((center) => {
            const { x1, y1, x2, y2 } = getHexagonEdgePoints(center);
            return `${x1},${y1} L ${x2},${y2}`;
        })
        .join(" ");

    return (
        <svg
            width="600"
            height="600"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
        >
            {/* Definitions for shadow and blur */}
            <defs>
                {/* Shadow effect */}
                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow
                        dx="2"
                        dy="2"
                        stdDeviation="3"
                        floodColor="rgba(0, 0, 0, 0.5)"
                    />
                </filter>
                {/* Blur effect */}
                <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" />
                </filter>
            </defs>

            {/* Hexagon and Image Pairs */}
            {hexagonCenters.map((center, index) => (
                <React.Fragment key={index}>
                    {/* Hexagon */}
                    <motion.polygon
                        points={` 
                            ${center.x - 50},${center.y - 25} 
                            ${center.x},${center.y - 55} 
                            ${center.x + 50},${center.y - 25} 
                            ${center.x + 50},${center.y + 25} 
                            ${center.x},${center.y + 55} 
                            ${center.x - 50},${center.y + 25} 
                        `}
                        {...hexagonProps}
                        transition={{
                            ...hexagonProps.transition,
                            delay: index * 0.2,
                        }}
                        filter="url(#blur)" // Apply blur effect to hexagon
                    />

                    {/* Image centered in Hexagon */}
                    <motion.image
                        href={images[index]} // Unique image for each hexagon
                        x={center.x - 30} // Center the image horizontally in the hexagon
                        y={center.y - 30} // Center the image vertically in the hexagon
                        width="60"
                        height="60"
                        {...imageProps}
                        transition={{
                            ...imageProps.transition,
                            delay: index * 0.3,
                        }}
                    />
                </React.Fragment>
            ))}

            {/* Animated straight lines connecting the top edges of hexagons */}
            <motion.path
                d={pathString}
                stroke="#0A0A0A"
                strokeWidth={2}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    delay: hexagonCenters.length * 0.2,
                }}
                filter="url(#shadow)" // Apply shadow effect to path
            />
        </svg>
    );
}
