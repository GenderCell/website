import React, { useState, useEffect } from "react";
import EventCard from "../components/Cards/EventCard";
import BannerCard from "../components/Cards/BannerCard";

import { getContentByFolder } from "../utils/firebaseUtils";

interface CompetitionData {
    id: string;
    heading?: string;
    datetime?: string;
    venue?: string;
    theme?: string;
    content: string;
    image?: string;
}

const Competitions: React.FC = () => {
    const [competitions, setCompetitions] = useState<CompetitionData[]>([]);

    const title = "Competitions";
    const description = "Participate in our exciting competitions designed to challenge your skills, foster creativity, and promote awareness. From debates and quizzes to creative writing and art contests, there's something for everyone. Join us to showcase your talents and win amazing prizes!";
    const buttons = [
        { label: "Competitions details", sectionId: "section-competitions-list" },
    ];

    useEffect(() => {
        const fetchCompetitions = async () => {
            const data = await getContentByFolder('competitions');
            setCompetitions(data.reverse());
        };

        fetchCompetitions();
    }, []);

    return (
        <div className="min-h-screen bg-base-100">
            <BannerCard title={title} description={description} buttons={buttons} />

            <section className="py-16 md:py-20" id="section-competitions-list">
                <h2 className="text-4xl font-bold text-center mb-12 font-heading text-primary">Upcoming & Recent Competitions</h2>
                <div className="page-container grid gap-8">
                    {competitions.length > 0 ? (
                        competitions.map((comp) => (
                            <EventCard
                                key={comp.id}
                                heading={comp.heading}
                                datetime={comp.datetime}
                                venue={comp.venue}
                                theme={comp.theme}
                                content={comp.content}
                                image={comp.image}
                            />
                        ))
                    ) : (
                        <div className="text-center text-lg text-base-content/70">
                            <p>No competitions found at the moment. Please check back later!</p>
                        </div>
                    )}
                </div>
            </section>


        </div>
    );
};

export default Competitions;
