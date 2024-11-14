import { cn } from "@/lib/utils";
import {
    IconChartBar,
    IconCurrencyDollar,
    IconLeaf,
    IconLayersIntersect,
    IconUser,
    IconCpu,
    IconDatabase,
    IconGlobe
} from "@tabler/icons-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Goals() {
    const goals = [
        {
            title: "Enhance Market Insight",
            description:
                "Empower businesses with real-time, actionable insights to make informed decisions.",
            icon: <IconChartBar />,
        },
        {
            title: "Cost Optimization",
            description:
                "Drive cost efficiency across supply chain operations to maximize profitability.",
            icon: <IconCurrencyDollar />,
        },
        {
            title: "Sustainability",
            description:
                "Champion eco-friendly practices for a reduced carbon footprint and long-term sustainability.",
            icon: <IconLeaf />,
        },
        {
            title: "Scalable Solutions",
            description:
                "Develop adaptable solutions that grow with your business, ensuring long-term success.",
            icon: <IconLayersIntersect />,
        },
        {
            title: "Customer Empowerment",
            description:
                "Place clients at the heart of everything we do, enabling them to succeed and thrive.",
            icon: <IconUser />,
        },
        {
            title: "Innovation & Technology",
            description:
                "Leverage cutting-edge technology to create innovative solutions that drive industry advancement.",
            icon: <IconCpu />,
        },
        {
            title: "Data-Driven Decisions",
            description:
                "Use data and analytics to guide strategic decisions and improve operational efficiency.",
            icon: <IconDatabase />,
        },
        {
            title: "Global Expansion",
            description:
                "Expand our reach and impact to drive growth and success in international markets.",
            icon: <IconGlobe />,
        },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="px-4 md:px-12 lg:px-20">
            <Card className="shadow-none rounded-lg p-6 bg-black-800 text-primary h-full flex-1 border-none">
                <CardHeader>
                    <CardTitle className="text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-6xl font-bold p-4 
                        text-left [text-shadow:_0_4px_14px_rgb(50_50_117_/_0.4)] font-semibold text-orange-500 text-center">
                        Our Commitments
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="felx items-center justify-center">
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
                            {goals.map((goal, index) => (
                                <Goal key={goal.title} {...goal} index={index} />
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
        </div>
    );
}

const Goal = ({
    title,
    description,
    icon,
    index
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div
                    className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-orange-200 to-transparent pointer-events-none"
                />
            )}
            {index >= 4 && (
                <div
                    className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-orange-200 to-transparent pointer-events-none"
                />
            )}
            <div className="mb-4 relative z-10 px-10 text-primary-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div
                    className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-orange-500 transition-all duration-200 origin-center"
                />
                <span
                    className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-primary-100 text-base md:text-base lg:text-lg xl:text-xl"
                >
                    {title}
                </span>
            </div>
            <p
                className="text-sm text-neutral-300 max-w-xs relative z-10 px-10 text-primary text-base sm:text-sm md:text-base lg:text-lg"
            >
                {description}
            </p>
        </div>
    );
};
