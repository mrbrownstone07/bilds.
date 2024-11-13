import React from "react";
import { RectCard } from "./ui/rect-card";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function Team() {
    const teamMembers = [
        {
            name: "Quazi Aquib Ferdaus",
            title: "Managing Director, Co-Founder",
            description: "An accomplished entrepreneur with expertise in materials trading, coal distribution, and logistics solutions, Aquib drives innovation and sustainability in supply chain operations across Bangladesh.",
            imageSrc: "/aquib.svg",
            imageAlt: "Image of Quazi Aquib Ferdaus",
        },
        {
            name: "Md. Abrar Hossain",
            title: "Chief Operations Officer, Co-Founder",
            description: "With a rich background in data processing, supply chain management, and strategic operations, Abrar is focused on transforming operations through engineering and business insights.",
            imageSrc: "/abrar.svg",
            imageAlt: "Image of Md. Abrar Hossain",
        },
        {
            name: "Mahdi Mohammad Shibli",
            title: "Chief Technical Officer, Co-Founder",
            description: "A tech innovator and visionary, Mahdi oversees all technical aspects of BILDS, driving the development of scalable, high-performance software solutions.",
            imageSrc: "/mahdi.svg",
            imageAlt: "Image of Mahdi Mohammad Shibli",
            className: "",

        }
    ];

    const boardMembers = [
        {
            name: "Fahim Rahman",
            title: "Dorector",
            imageSrc: "/abrar.svg",
            imageAlt: "Image of Fahim Rahman",
            description: "An accomplished entrepreneur, Fahim brings a wealth of experience and strategic insight to the board, supporting growth and innovation initiatives."
        },
        {
            name: "Faisal Rahman",
            title: "Director",
            imageSrc: "/abrar.svg",
            imageAlt: "Image of Faisal Rahman",
            description: "A visionary leader, Faisal leverages his entrepreneurial background to guide strategic decisions and foster sustainable success for the organization."
        }

    ];

    return (
        <div className="mt-10 px-4 md:px-12 lg:px-20">
            {/* Team Section */}
            <div className="text-2xl font-semibold text-primary text-center">
                Meet the Team
            </div>
            <Card className="shadow-none rounded-lg lg:p-10 p-4 bg-color-none text-gray-100 h-full flex-1 border-none">
                {/* <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-primary text-center">
                        Team
                    </CardTitle>
                </CardHeader>  */}
                <CardContent>
                    <div className="flex flex-wrap justify-center">
                        {teamMembers.map((member, index) => (
                            <RectCard
                                key={index}
                                name={member.name}
                                title={member.title}
                                description={member.description}
                                imageSrc={member.imageSrc}
                                imageAlt={member.imageAlt}
                                className={member.className}
                                iconClass={member.iconClass}
                            />
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Board of Directors Section */}
            <Card className="rounded-lg shadow-none lg:p-10 p-4 text-gray-100 bg-color-none h-full flex-1 border-none">
                {/* <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-primary text-center">
                        Board of Directors
                    </CardTitle>
                </CardHeader>  */}
                <CardContent>
                    <div className="flex flex-wrap justify-center">
                        {boardMembers.map((member, index) => (
                            <RectCard
                                key={index}
                                name={member.name}
                                title={member.title}
                                imageSrc={member.imageSrc}
                                imageAlt={member.imageAlt}
                                className={member.className}
                                iconClass={member.iconClass}
                                description={member.description}
                            />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
