import React from "react";
import { RectCard } from "./ui/rect-card";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function Team() {
    const teamMembers = [
        {
            name: "Quazi Aquib Ferdaus",
            title: "Managing Director, Co-Founder",
            description: "An accomplished entrepreneur with expertise in materials trading, coal distribution, and logistics solutions, Aquib drives innovation and sustainability in supply chain operations across Bangladesh.",
            imageSrc: "/aquib.jpg",
            imageAlt: "Image of Quazi Aquib Ferdaus",
        },
        {
            name: "Md. Abrar Hossain",
            title: "Chief Operations Officer, Co-Founder",
            description: "With a rich background in data processing, supply chain management, and strategic operations, Abrar is focused on transforming operations through engineering and business insights.",
            imageSrc: "/abrar.jpg",
            imageAlt: "Image of Md. Abrar Hossain",
        },
        {
            name: "Mahdi M. Shibli",
            title: "Chief Technical Officer, Co-Founder",
            description: "A tech innovator and visionary, Mahdi oversees all technical aspects of BILDS, driving the development of scalable, high-performance software solutions.",
            imageSrc: "/mahdi.jpg",
            imageAlt: "Image of Mahdi Mohammad Shibli",
            className: "",

        }
    ];

    const boardMembers = [
        {
            name: "Fahim Rahman",
            title: "Director",
            imageAlt: "Image of Fahim Rahman",
            description: "An accomplished entrepreneur, Fahim brings a wealth of experience and strategic insight to the board, supporting growth and innovation initiatives."
        },
        {
            name: "Faisal Rahman",
            title: "Director",
            imageAlt: "Image of Faisal Rahman",
            description: "A visionary leader, Faisal leverages his entrepreneurial background to guide strategic decisions and foster sustainable success for the organization."
        }

    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="mt-10 px-4 md:px-12 lg:px-20">
                {/* Team Section */}
                <Card className="shadow-none rounded-lg p-4 bg-color-none text-gray-100 h-full flex-1 border-none">
                    <CardHeader>
                        <CardTitle className="text-xl md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-6xl font-bold p-4 
                            text-left [text-shadow:_0_4px_14px_rgb(50_50_117_/_0.4)] font-semibold text-orange-500 text-center"
                        >
                            Meet the Team
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap justify-center gap-6">
                            {teamMembers.map((member, index) => (
                                <RectCard
                                    key={index}
                                    name={member.name}
                                    title={member.title}
                                    imageSrc={member.imageSrc}
                                    description={member.description}
                                    imageAlt={member.imageAlt}
                                    className={member.className}
                                    iconClass={member.iconClass}
                                />
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Board of Directors Section */}
                <Card className="rounded-lg shadow-none p-4 text-gray-100 bg-color-none h-full flex-1 border-none">
                    <CardContent>
                        <div className="flex flex-wrap justify-center gap-6">
                            {boardMembers.map((member, index) => (
                                <RectCard
                                    key={index}
                                    name={member.name}
                                    title={member.title}
                                    className={member.className}
                                    iconClass={member.iconClass}
                                    description={member.description}
                                />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
