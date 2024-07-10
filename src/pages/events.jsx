import EventsCard from "../components/EventsCard/EventsCard";
import '../css/events.css'; 
import BannerCard from '../components/Card/BannerCard';

const EventsPage = () => {
  const events = [
    {
      subtitle: "Event: Women's Day Talk",
      description: `Date: 8 March 2024 <br> Time: 5:00 PM<br>Duration: Up to 1 hour<br>Venue: L9`,

      sliderImages: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
    },
    {
      subtitle: "Event: 5 km run and walk",
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
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
    },
    {
      subtitle: "Event: Movie Screening followed by discussion",
      description: " Date: 10 March 2024<br>Time: 6:00 AM<br> Duration: 1-4 Hours<br>Venue: OAT"
      ,
      sliderImages: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
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
      <BannerCard title={title} description={description} buttons={buttons}/>
      <section className="section-event-gallery" id="section-event-gallery">
      <h2 className="heading1">Recent Events</h2>
        <div className="gallery">
          <div className="main-gallery">
            {events.map((event, index) => (
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
      </section>
    </div>
  );
};

export default EventsPage;
