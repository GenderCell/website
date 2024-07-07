import EventsCard from "../components/EventsCard/EventsCard";
import '../css/events.css'; 
import BannerCard from '../components/Card/BannerCard';

const EventsPage = () => {
  const events = [
    {
      title: "2020 activities",
      subtitle: "5 km run 5 km walk",
      description: `
      <p>Don't be a Bystander; Stand Against Sexual Harassment</p>
      <p>Date: March 1, 2020 (Sunday)</p>
      <p>Reporting time for participants: 6.15am</p>
      <p>Time: 6:30 am</p>
      <p>Starting Point: Main Ground, near basketball court</p>
      <p>Ending Point: OAT</p>
    `,
      sliderImages: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
    },
    {
      title: "2019 activities",
      subtitle: "5 km run 5 km walk",
      description: `<p>
        "Don't be a Bystander; Stand Against Sexual Harassment"<br>

        Results: Top 15 Women <br> Men
        Please collect your certificate and T-shirt from Ms. Seema<br> - contact details as below.<br>

        Ms. Seema Yadav<br>
        Office FB569, beside Mathematics Dept office (5th Floor, Faculty Building)<br>
        4.30pm-5.30pm, Monday-Friday<br>
        Ph. 7456, e-mail: seemay@iitk.ac.in<br>
        Date: March 31, 2019 (Sunday)<br>
        Reporting time for participants: 6.15am<br>
        Time: 6:30 am<br>
        Starting Point: Main Ground, near basketball court<br>
        Ending Point: OAT<br>

       
      </p>`,
      sliderImages: [
        "https://picsum.photos/200",
        "https://picsum.photos/200",
        "https://picsum.photos/200",
      ],
    },
    {
      title: "2018 activities:",
      subtitle: "Talk on \"Gender and Law in Contemporary India:\nExploring Some Critical Issues\"",
      description: "Date: Saturday, March 17, 2018\nTime: 05:30 pm\nVenue: L18",
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
