import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface EventCardProps {
    heading?: string;
    content: string;
    image?: string;
    datetime?: string;
    venue?: string;
    speaker?: string;
    theme?: string;
}

const EventCard: React.FC<EventCardProps> = ({
    heading,
    content,
    image,
    datetime,
    venue,
    speaker,
    theme,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
            className="card lg:card-side bg-base-100 shadow-xl my-8 mx-4 overflow-hidden border border-base-200"
        >
            <div className="card-body lg:w-2/3">
                {heading && <h2 className="card-title text-2xl font-bold mb-4">{heading}</h2>}
                <div className="space-y-2 text-sm text-base-content/80">
                    {datetime && <p><span className="font-semibold">Date:</span> {datetime}</p>}
                    {venue && <p><span className="font-semibold">Venue:</span> {venue}</p>}
                    {speaker && <p><span className="font-semibold">Speaker:</span> {speaker}</p>}
                    {theme && <p><span className="font-semibold">Theme:</span> {theme}</p>}
                </div>
                <div
                    className="mt-4 prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
            {image && (
                <figure className="lg:w-1/3 h-64 lg:h-auto relative">
                    <img
                        src={image}
                        alt={heading || "Event image"}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </figure>
            )}
        </motion.div>
    );
};

export default EventCard;
