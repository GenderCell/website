import React from 'react';

// Import images
import movie1 from '../../assets/images_events/movie3.jpg';
import open1 from '../../assets/images/open2.jpg';

const RecentEvents: React.FC = () => {
    return (
        <div className="bg-slate-50 py-16">
            <div className="container mx-auto px-6 max-w-6xl text-neutral">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-extrabold text-center mb-4 font-heading">Our Events</h2>
                    <p className="text-base font-sans">The events conducted by the Gender Cell at IIT Kanpur during the recent years.</p>
                </div>

                <div className="grid md:grid-cols-2 items-center gap-16">
                    {/* Event 1 */}
                    <div>
                        <img src={open1} alt="Open Mic" className="w-full object-contain rounded-md shadow-lg hover:scale-[1.01] transition-all duration-500 ease-in-out" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-extrabold mb-4 font-heading">Open Mic: Speaking Out, Standing Strong</h3>
                        <p className="text-base font-sans leading-relaxed">
                            The Open Mic Night, conducted in association with the Institute Counselling Service, IITK was an impactful event where students openly shared their personal stories of harassment and mental stress, along with how they overcame these challenges. The evening was marked by a sense of unity as people came together to freely express their experiences, ensuring that every voice was heard and valued. The event underscored the importance of creating spaces for open dialogue and mutual support within the campus community.
                        </p>
                    </div>

                    {/* Event 2 */}
                    <div className="max-md:order-1">
                        <h3 className="text-2xl font-extrabold mb-4 font-heading">Movie Screening - "Checkmate Turup"</h3>
                        <p className="text-base font-sans leading-relaxed">
                            The Gender Cell organized a screening of the thought-provoking movie "Checkmate Turup", followed by a collective and insightful discussion led by the talented actor, Nidhi Qazi. The screening provided an engaging platform for the participants to delve into the movie's themes and explore its societal impact.
                        </p>
                    </div>
                    <div>
                        <img src={movie1} alt="Movie Screening" className="w-full object-contain rounded-md shadow-lg hover:scale-[1.01] transition-all duration-500 ease-in-out" />
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a href="./events" className="btn btn-primary text-white px-8 rounded-md">
                        View More Events...
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RecentEvents;
