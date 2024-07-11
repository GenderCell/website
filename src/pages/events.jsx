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
      subtitle: "Women's Day Talk",
      description: `Date: 8 March 2024 <br> Time: 5:00 PM<br>Duration: Up to 1 hour<br>Venue: L9<br>Surveys on gender-discrimination and sexual harassment on campus.<br>Discussed strategies for gender equality and empowerment.<br>A dialogue on women's rights and social impact.<br>A Q&A session on gender-sensitive policies and practices.<br>`,
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
        Reporting time for participants: 6.15am<br>
        Time: 6:00 am<br>
        Starting Point: Main Ground, near basketball court<br>
        Ending Point: OAT<br>
        <p>
        "Don't be a Bystander; Stand Against Sexual Harassment"<br>
        Results: Top 15 Women <br> Men
        Please collect your certificate and T-shirt from Ms. Seema<br> - contact details as below.<br>
        Ms. Seema Yadav<br>
        Office FB569, beside Mathematics Dept office (5th Floor, Faculty Building)<br>
        4.30pm-5.30pm, Monday-Friday<br>
        Ph. 7456, e-mail: seemay@iitk.ac.in<br>
      </p>`,
      sliderImages: [
        runwalk1,
        runwalk2,
        runwalk3,
      ],
    },
    {
      subtitle: "Movie Screening followed by discussion",
      description: " Date: 10 March 2024<br>Time: 6:00 AM<br> Duration: 1-4 Hours<br>Venue: OAT<br> Everybody enjoyed a thought- provoking movie screening.<br>An interactive discussion session was held.<br>It covered various themes and narratives.<br>Participants relaxed in the outdoor ambiance of the OAT.<br>They met fellow participants and had healthy discussions.<br> ",
      sliderImages: [
        movie_screening2,
        movie_screening1,
        movie_screening3,
      ],
    },
  ];

  const title = "Know More About the Recent Events";
  const description = "Welcome to our Events page! Here, you'll find a vibrant showcase of the workshops, seminars, and activities we organize to promote gender equality and create a safe, inclusive environment for all. Join us in our mission to foster understanding, support, and empowerment within our community.";
  const buttons = [
    { label: "Events details", sectionId: "section-event-gallery" }
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
              <h1>Gallery</h1>
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
    </div>
  );
};

export default EventsPage;
