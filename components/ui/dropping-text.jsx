import { motion } from "framer-motion";

export default function DroppingText() {
    // Animation variants for each word
    const dropAnimation = {
        hidden: { opacity: 0, y: -100 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.2, // Staggered animation for each word
                duration: 1,
                ease: "easeOut",
            },
        }),
    };

    const words = [
        "Revolutionizing",
        "INDUSTRIES",
        "with",
        "Seamless",
        "Communication,",
        "Optimized",
        "Distribution,",
        "and",
        "Unmatched",
        "Market",
        "Excellence",
        "through",
        "Innovative",
        "Solutions.",
    ];

    return (
        <p className="text-zinc-600 font-sans font-bold leading-relaxed text-sm sm:text-base md:text-lg xl:text-2xl text-right [text-shadow:_2px_1px_2px_rgb(0_0_0_/_0.2)]">
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    initial="hidden"
                    animate={dropAnimation.visible(index)} // Pass index to adjust animation
                    variants={dropAnimation}
                    className="inline-block mr-2" // Add margin-right for space between words
                >
                    {word}{" "}
                </motion.span>
            ))}
        </p>
    );
}
