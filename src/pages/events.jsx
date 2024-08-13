import EventsCard from "../components/EventsCard/EventsCard";
import '../css/events.css';
import BannerCard from '../components/Card/BannerCard';
import { useState, useRef } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import womensDay1 from '../assets/images_events/womens_day1.jpg';
import womensDay2 from '../assets/images_events/womens_day2.jpg';
import womensDay3 from '../assets/images_events/womens_day3.jpg';
import runwalk1 from '../assets/images_events/run_walk1.jpg';
import runwalk2 from '../assets/images_events/run_walk2.jpg';
import runwalk3 from '../assets/images_events/run_walk3.jpg';
import movie_screening1 from '../assets/images_events/movie1.jpg';
import movie_screening2 from '../assets/images_events/movie2.jpg';
import movie_screening3 from '../assets/images_events/movie3.jpg';
import LinksSection from "../components/Linkscard/LinkCard";

const EventsPage = () => {
  const scrollRef = useRef(null);

  const scrollLeftDir = () => scroll("left");
  const scrollRightDir = () => scroll("right");

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current && current.scrollLeft != null) {
      if (direction === "left") {
        current.scrollLeft -= 800;
      } else if (direction === "right") {
        current.scrollLeft += 500;
      }
    }
  };

  const galleryDB = [
    {
      id: 1,
      img: movie_screening2,
    },
    {
      id: 2,
      img: movie_screening3,
    },
    {
      id: 3,
      img: runwalk1,
    },
    {
      id: 4,
      img: runwalk2,
    },
    {
      id: 5,
      img: runwalk3,
    },
    {
      id: 6,
      img: womensDay1,
    },
    {
      id: 7,
      img: womensDay2,
    },
    {
      id: 8,
      img: womensDay3,
    },
  ];

  const [galleryData] = useState(galleryDB);

  const events = [
    {
      subtitle: "Degendering STEM: Why So Slow?",
      description: `Date: 8 March 2024 <br> Time: 5:00 PM<br>Speaker: Dr Prajval Shastri, Emeritus Scientist of Astronomy and Astrophysics, Raman Research Institute <br>Venue: L9<br>The talk focused on gender discrimination and the lack of representation of different genders in the area of STEM. The insightful talk was followed with a  Q&A session focusing on gender-sensitive policies and practices.<br>`,
      sliderImages: [
        womensDay2,
        womensDay1,
        womensDay3,
      ],
    },
    {
      subtitle: "5 km run and walk",
      description: `
        Date: March 9, 2024 (Sunday)<br>
        Theme: "Don't be a Bystander; Stand Against Sexual Harassment"
<br> Number of participants:  150+
<br>`,
      sliderImages: [
        runwalk1,
        runwalk2,
        runwalk3,
      ],
    },
    {
      subtitle: "Movie Screening followed by a discussion with the actor",
      description: "  Movie: Turup, directed by Ektara Collective <br> Interaction with Nidhi Qazi, the actor who played a leading role of the character Neelima in the movie. <br> Date: 10 March 2024<br>Time: 6:00 AM<br> <br>Venue: L2<br> The screening was followed by a thought-provoking and critical discussion on the movie by the audience. <br> ",
      sliderImages: [
        movie_screening2,
        movie_screening1,
        movie_screening3,
      ],
    },
  ];

  const title = "Know More About Our Recent Event's";
  const description = "Here is a vibrant showcase of the different events we organize to promote gender equality and create a safe and inclusive environment for all. In the past, we have organized multiple workshops, seminars, awareness programs, and activities. Join us in our mission to foster understanding, support, and empowerment within the community.";
  const buttons = [
    { label: "Events details", sectionId: "section-event-gallery" },
    { label: "Gallery", sectionId: "gallery" }
  ];

  return (
    <div className="page">
      <BannerCard title={title} description={description} buttons={buttons} />
      <section className="section-event-gallery" id="section-event-gallery">
        <h2 className="heading1">Recent Events</h2>
        <div className="gallery">
          <div className="main-gallery">
            {events.slice(0, 3).map((event, index) => (
              <EventsCard
                key={index}
                title={event.title}
                subtitle={event.subtitle}
                description={event.description}
                sliderImages={event.sliderImages}
              />
            ))}
          </div>
        </div>
        <div className="app-gallery" id="gallery">
          <div className="app-gallery-content">
            <Fade bottom>
              <h1 className="app-gallery-content-heading">Gallery</h1>
            </Fade>
          </div>
          <div className="app-gallery-images">
            <div className="app-gallery-images_container" ref={scrollRef}>
              {galleryData.map((image) => (
                <div className="app-gallery-images_card" key={image.id}>
                  <img
                    className="gallery-image"
                    src={image.img}
                    alt={`img-${image.id}`}
                  />
                </div>
              ))}
            </div>
            <div className="app-gallery-images_arrows">
              <div className="gallery-arrows-div">
                <BsArrowLeftShort
                  className="gallery-arrow-icon"
                  onClick={scrollLeftDir}
                />
              </div>
              <div className="gallery-arrows-div">
                <BsArrowRightShort
                  className="gallery-arrow-icon"
                  onClick={scrollRightDir}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="main-gallery">
          {events.slice(3).map((event, index) => (
            <EventsCard
              key={index}
              title={event.title}
              subtitle={event.subtitle}
              description={event.description}
              sliderImages={event.sliderImages}
            />
          ))}
        </div>
      </section>
      <LinksSection/>
    </div>
  );
};

export default EventsPage;
