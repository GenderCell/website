import React, { useState, useRef, useEffect } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import EventCard from "../components/Cards/EventCard";
import BannerCard from "../components/Cards/BannerCard";
import LinksSection from "../components/Sections/LinksSection";
import { getContentByFolder } from "../utils/firebaseUtils";

// Import images for gallery
import hall1 from "../assets/images_events/hall1.jpg";
import hall2 from "../assets/images_events/hall2.jpg";
import lapata1 from "../assets/images_events/lapata1.png";
import runwalk2 from "../assets/images_events/run_walk2.png";
import runwalk3 from "../assets/images_events/run_walk3.png";
import lapata2 from "../assets/images_events/lapata2.png";
import barbie1 from "../assets/images_events/barbie1.png";
import barbie2 from "../assets/images_events/barbie2.png";

interface EventData {
  id: string;
  heading?: string;
  datetime?: string;
  venue?: string;
  speaker?: string;
  theme?: string;
  content: string;
  image?: string;
}

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const { current } = scrollRef;
    if (current) {
      if (direction === "left") {
        current.scrollLeft -= 300;
      } else {
        current.scrollLeft += 300;
      }
    }
  };

  const galleryData = [
    { id: 1, img: hall1 },
    { id: 2, img: hall2 },
    { id: 3, img: lapata1 },
    { id: 4, img: runwalk2 },
    { id: 5, img: runwalk3 },
    { id: 6, img: lapata2 },
    { id: 7, img: barbie1 },
    { id: 8, img: barbie2 },
  ];

  const title = "Know More About Our Recent Events";
  const description = "Here is a vibrant showcase of the different events we organize to promote gender equality and create a safe and inclusive environment for all. In the past, we have organized multiple workshops, seminars, awareness programs, and activities. Join us in our mission to foster understanding, support, and empowerment within the community.";
  const buttons = [
    { label: "Events details", sectionId: "section-event-gallery" },
    { label: "Gallery", sectionId: "gallery" }
  ];

  useEffect(() => {
    const fetchEvents = async () => {
      const eventData = await getContentByFolder('event');
      // eventData.reverse(); // Assuming getContentByFolder returns an array
      setEvents(eventData.reverse());
    };

    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-base-100">
      <BannerCard title={title} description={description} buttons={buttons} />

      <section className="py-16 px-4" id="section-event-gallery">
        <h2 className="text-4xl font-bold text-center mb-12 font-heading text-primary">Recent Events</h2>
        <div className="container mx-auto grid gap-8">
          {events.map((event) => (
            <EventCard
              key={event.id}
              heading={event.heading}
              datetime={event.datetime}
              venue={event.venue}
              speaker={event.speaker}
              theme={event.theme}
              content={event.content}
              image={event.image}
            />
          ))}
        </div>
      </section>

      <section className="py-16 bg-base-200" id="gallery">
        <div className="container mx-auto px-4">
          <Fade triggerOnce>
            <h1 className="text-4xl font-bold text-center mb-12 font-heading">Gallery</h1>
          </Fade>

          <div className="relative">
            <div
              className="flex overflow-x-auto gap-4 py-4 scrollbar-hide scroll-smooth"
              ref={scrollRef}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {galleryData.map((image) => (
                <div className="flex-none w-80 h-60 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300" key={image.id}>
                  <img
                    className="w-full h-full object-contain"
                    src={image.img}
                    alt={`Gallery ${image.id}`}
                  />
                </div>
              ))}
            </div>

            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                className="btn btn-circle btn-ghost bg-base-100/50 hover:bg-base-100"
                onClick={() => scroll("left")}
              >
                <BsArrowLeftShort size={30} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                className="btn btn-circle btn-ghost bg-base-100/50 hover:bg-base-100"
                onClick={() => scroll("right")}
              >
                <BsArrowRightShort size={30} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <LinksSection />
    </div>
  );
};

export default EventsPage;
