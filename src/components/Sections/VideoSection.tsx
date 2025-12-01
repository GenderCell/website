import React from 'react';

const VideoSection: React.FC = () => {
    const videos = [
        {
            title: "Nazariya | UN Women | Sexual Harassment",
            src: "https://www.youtube.com/embed/MjRcjAkb8_4?si=MimzFMozEOH3Bigt",
            link: "https://www.youtube.com/watch?v=MjRcjAkb8_4&t=2s",
            description: "Nazariya (Perspective) deconstructs perspectives and perceptions of women’s experiences of sexual harassment at the workplace, laying a strong emphasis on the “impact” on women, regardless of the “intent” of the behaviour and actions.",
            subDescription: "Video depicting the contrast between how a man and a woman perceive an interaction between them at their workplace"
        },
        {
            title: "Is This Sexual Harassment? Men & Women Discuss",
            src: "https://www.youtube.com/embed/Ur8G8kOYEfI?si=l9KYoQnrvzLcX3wN",
            link: "https://www.youtube.com/watch?v=Ur8G8kOYEfI",
            description: "Social experiment hosted by journalist and presenter Ben Zand in which a group of people come together to try to understand what constitutes sexual harassment.",
            subDescription: "Through candid discussions and immersive activities, participants explore the nuances and boundaries of behavior that can be considered harassment. Ben Zand facilitates these conversations, providing insights and expert opinions to deepen the understanding of this critical issue."
        },
        {
            title: "Kaam Ki Baat | UN Women | Workplace Harassment",
            src: "https://www.youtube.com/embed/nNwrPjV3P38?si=9NgLgAH9WqdYIai5",
            link: "https://www.youtube.com/watch?v=nNwrPjV3P38",
            description: "Kaam Ki Baat (When Talking about Work) questions the everyday normalisation of sexual harassment of women at the workplace and advocates for safe and equal workspaces for all women."
        },
        {
            title: "There is No Going Back.",
            src: "https://www.youtube.com/embed/VRCEf2-PVAA?si=_txcpG8Wfx7M3yMm",
            link: "https://youtu.be/VRCEf2-PVAA?si=_txcpG8Wfx7M3yMm",
            description: "Pregnancy resulting from a mistake can be a profound and irreversible consequence. It emphasizes the weight of our choices and the reality that some paths, once taken, offer no chance for reversal. It serves as a reminder of the importance of foresight and responsibility in every decision we make, especially those that can impact our lives in significant and enduring ways."
        },
        {
            title: "Consent It's as simple as tea.",
            src: "https://www.youtube.com/embed/oQbei5JGiT8",
            link: "https://www.youtube.com/watch?v=oQbei5JGiT8",
            description: "Consent is as simple as tea\" is a popular analogy that explains the concept of consent using the act of offering someone a cup of tea. The analogy emphasizes that consent must be clear, enthusiastic, and can be withdrawn at any time."
        }
    ];

    return (
        <div className="py-16 bg-base-100" id='videosec'>
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 font-heading text-primary">Advisory Videos</h2>

                <div className="space-y-16">
                    {videos.map((video, index) => (
                        <div key={index} className="flex flex-col lg:flex-row gap-8 items-start bg-base-200 p-6 rounded-xl shadow-md">
                            <div className="w-full lg:w-1/2">
                                <div className="aspect-w-16 aspect-h-9 w-full h-[315px]">
                                    <iframe
                                        className="w-full h-full rounded-lg shadow-lg"
                                        src={video.src}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 space-y-4">
                                <h3 className="text-2xl font-bold font-heading">{video.title}</h3>
                                <p className="text-base-content/80 leading-relaxed">{video.description}</p>
                                {video.subDescription && (
                                    <p className="text-base-content/80 leading-relaxed">{video.subDescription}</p>
                                )}
                                <p className="text-sm text-primary">
                                    Source: <a href={video.link} target="_blank" rel="noopener noreferrer" className="link link-hover">{video.link}</a>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
