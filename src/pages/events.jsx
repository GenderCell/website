import EventsCard from "../components/EventsCard/EventsCard";
import '../css/events.css';
import BannerCard from '../components/Card/BannerCard';
import { useState, useRef } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import case1 from '../assets/images_events/case.png';
import womensDay1 from '../assets/images_events/wday5.jpeg';
import runwalk1 from '../assets/images_events/run_walk1.png';
import runwalk2 from '../assets/images_events/run_walk2.png';
import runwalk3 from '../assets/images_events/run_walk3.png';
// import movie_screening2 from '../assets/images_events/movie2.jpg';
import open1 from '../assets/images/open1.jpg';
import LinksSection from "../components/Linkscard/LinkCard";
import hall1 from "../assets/images_events/hall1.jpg";
import hall2 from "../assets/images_events/hall2.jpg";
import lapata1 from "../assets/images_events/lapata1.png";
import lapata2 from "../assets/images_events/lapata2.png";
// import case from 'src/assets/images_events/case.png';
import barbie1 from '../assets/images_events/barbie1.png'
import barbie2 from '../assets/images_events/barbie2.png' 
import meme from '../assets/images_events/meme.png';
import movie_screening2 from '../assets/images_events/movie4.jpeg';
import wall_of_voices from '../assets/images_events/wall_of_voices.png';
import blogs from '../assets/images_events/blogs.png';
import kiit from '../assets/images_events/kiit.png';

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
      img: hall1,
    },
    {
      id: 2,
      img: hall2,
    },
    
    {
      id: 3,
      img: lapata1,
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
      img: lapata2,
    },
    {
      id: 7,
      img: barbie1,
    },
    {
      id: 8,
      img: barbie2,
    },
  ];

  const [galleryData] = useState(galleryDB);

  const events = [
    {
      subtitle: "Open Mic: Break the Silence Against Sexual Harassment",
      description: `Date: 23rd August, 2025 <br/>
Venue: Lecture Hall 12 <br/>The Open Mic Night, IITK was an impactful event where we provided a safe, inclusive space for sharing personal experiences and creative expressions against sexual harassment through storytelling, poetry, music, painting, and more.The evening was marked by a sense of unity as people came together to freely express their experiences, ensuring that every voice was heard and valued. The event underscored the importance of creating spaces for open dialogue and mutual support within the campus community.`
      , image:
        wall_of_voices,
    },
    {
      subtitle: "Towards a safer place",
      description: `Date: 5th August, 2025 <br/>
Platform: Gender Cell Website and Email <br/>The Gender Cell, IIT Kanpur, is starting a new monthly blog series:
TOWARDS A SAFER SPACE
‘A monthly blog on gender sensitization and respectful conduct.’
Each month, we’ll share short, thought-provoking pieces that highlight key issues around gender, consent, and creating an inclusive environment on campus. The goal is simple but vital: to build a culture where everyone feels safe, respected, and heard.`


      , image:
        blogs,
    },
    {
      subtitle: "Movie Screening: Shubh Mangal Zyada Saavdhan",
      description: `Date: 18th June, 2025 <br/>
Venue: Lecture Hall 7 <br/>The Gender Cell, IIT Kanpur, hosted a lively and laughter-filled evening on 18th June 2025 with the screening of Shubh Mangal Zyada Saavdhan at Lecture Hall 7. The comedy film brought students together for a fun nigheveryoneackled themes of love, acceptance, and societal change—all with a humorous twist.Starting at 6:00 PM, the hall was soon filled with cheerful energy, loud chuckles, and heartfelt moments.
The event was a delightful Movie -evening that reminded everyone of the power of humor in breaking stereotypes and embracing individuality ,an enjoyable and memorable night indeed!`
      , image:
        movie_screening2,
    },
    {
      subtitle: "Movie Screening: Shubh Mangal Zyada Saavdhan",
      description: `Date: 18th June, 2025 <br/>
Venue: Lecture Hall 7 <br/>The Gender Cell, IIT Kanpur, hosted a lively and laughter-filled evening on 18th June 2025 with the screening of Shubh Mangal Zyada Saavdhan at Lecture Hall 7. The comedy film brought students together for a fun nigheveryoneackled themes of love, acceptance, and societal change—all with a humorous twist.Starting at 6:00 PM, the hall was soon filled with cheerful energy, loud chuckles, and heartfelt moments.
The event was a delightful Movie -evening that reminded everyone of the power of humor in breaking stereotypes and embracing individuality ,an enjoyable and memorable night indeed!`
      , image:
        movie_screening2,
    }, 
    {
      subtitle: "5 KM Run and Walk",
      description: `Date: 22nd March, 2025 <br/>
Venue: OAT <br/>The Gender Cell, IIT Kanpur successfully organized the 7th Edition of the 5KM Run & Walk on 22nd March 2025, witnessing an incredible turnout of 900+ participants. The event began at 5:30 AM from the Open Air Theatre (OAT) and featured a fun-filled 10-minute Zumba session to kick off the morning. The enthusiastic participation and vibrant energy made it a memorable celebration of health, unity, and empowerment.`
      , image:
        runwalk2,
    },{
      subtitle: "Meme Competition on the theme Breaking Gender Stereotypes and Raising Awareness Against Sexual Harassment",
      description: ` <br/>
Venue : Lecture Hall 17<br/>The Gender Cell, IIT Kanpur, organized a magical evening on 29th January 2025 with the screening of Barbie at Lecture Hall 17, drawing viewers into a world that challenges patriarchal norms, celebrates individuality, and empowers self-expression. Starting at 6:10 PM, the film sparked laughter, reflection, and meaningful conversations about identity, self-discovery, and breaking societal expectations. The event was a vibrant celebration of being unapologetically unique and empowered making it an inspiring night to remember.
`
      , image: meme,
    },{
      subtitle: "Women’s Day Talk by Ms. Seema Kushwaha",
      description: `Date: 8th March 2025 (Saturday) <br/>
Venue : Lecture Hall 8<br/>TOn the occasion of International Women’s Day, the Gender Cell, IIT Kanpur organized a powerful and insightful talk by Ms. Seema Kushwaha, Supreme Court Advocate and legal counsel in the 2012 Nirbhaya case. Known for her relentless pursuit of justice, Ms. Kushwaha shared her experiences and perspectives that continue to inspire and empower generations`
      , image:         womensDay1,
    },{
      subtitle: "Movie Screening: Barbie",
      description: `Date: 29th January 2025 <br/>
Venue : Lecture Hall 17<br/>The Gender Cell, IIT Kanpur, organized a magical evening on 29th January 2025 with the screening of Barbie at Lecture Hall 17, drawing viewers into a world that challenges patriarchal norms, celebrates individuality, and empowers self-expression. Starting at 6:10 PM, the film sparked laughter, reflection, and meaningful conversations about identity, self-discovery, and breaking societal expectations. The event was a vibrant celebration of being unapologetically unique and empowered making it an inspiring night to remember.
`
      , image: 
        barbie2,
    },{
      subtitle: "ICC Case Correspondence Document",
      description: `Date: 4th Dec, 2024 <br/>
Mode: Online <br/>The Gender Cell, IIT Kanpur, successfully released the ICC Case Correspondence Document, marking a significant milestone in promoting awareness, accountability, and institutional transparency into the enquiry process of complaints related to Sexual Harassment. 

The document provides a comprehensive overview of the nature of sexual offenses reported to the ICC, the actions taken, and the corresponding punishments enforced in each case. By maintaining necessary confidentiality, it ensures protection for all individuals involved while fostering a culture of openness and trust. This initiative serves as a valuable resource for understanding institutional responses to such issues and reinforces IITK’s commitment to a safe and respectful environment.`
      , image: case1,
    },
    {
      subtitle: "Movie Screening: Laapata Ladies",
      description: `Date: October 15, 2024 <br/>
Venue: L9 <br/>The Gender Cell, IIT Kanpur conducted a special screening of Laapata Ladies which witnessed a houseful audience till the very end. As India’s Oscar entry, the film delivered a witty yet profound narrative that challenged the gender norms in rural India. Through humor and heartfelt storytelling, it sparked deep reflections on societal stereotypes that have historically restricted women’s empowerment. The audience remained engaged throughout, and the film’s impact forced people into thought-provoking discussions, reinforcing the need for continuous dialogue on gender equality.`
      , image: 
        lapata1,
        
      
    },
    
    {
      subtitle: "Bridging Gaps: Hall-Level Sessions for Freshers'24",
      description: `Date: 30th Sep - 1st Oct <br/>
Venue: Hall 13, 4, 14 and GH1 <br/>
A Hall-level Gender Sensitization session was conducted by the Gender Cell, IIT Kanpur, for the first-year UG and PG students of Halls 13, 4, 14, and GH1. The session aimed to increase awareness about sexual harassment, gender biases, and the available methods for filing complaints. Participants were also informed about the wide range of support services that the Gender Cell offers to the campus community along with some real life success stories. Attendees actively engaged by asking important questions, which were addressed by the student members of the Gender Cell, fostering an open and informative discussion. This initiative was a key step towards creating a safer and more inclusive environment at IITK.`,
      image: 
        hall1,
    },{
      subtitle: "Open Mic: Speaking Out, Standing Strong",
      description: `Date: 27 August 2024 <br> Time: 6:30 to 8:30 <br> Venue: L18-L19 Foyer <br> The Open Mic Night, conducted in association with the Institute Counselling Service, IITK was an impactful event where students openly shared their personal stories of harassment and mental stress, along with how they overcame these challenges. The evening was marked by a sense of unity as people came together to freely express their experiences, ensuring that every voice was heard and valued. The event underscored the importance of creating spaces for open dialogue and mutual support within the campus community.`,
      image: 
        open1,
    },
    {
      subtitle: "Degendering STEM: Why So Slow?",
      description: `Date: 8 March 2024 <br> Time: 5:00 PM<br>Speaker: Dr Prajval Shastri, Emeritus Scientist of Astronomy and Astrophysics, Raman Research Institute <br>Venue: L9<br>The talk focused on gender discrimination and the lack of representation of different genders in the area of STEM. The insightful talk was followed with a  Q&A session focusing on gender-sensitive policies and practices.<br>`,
      image: 
        womensDay1,

    },
    {
      subtitle: "5 km run and walk",
      description: `
        Date: March 9, 2024 (Sunday)<br>
        Theme: "Don't be a Bystander; Stand Against Sexual Harassment"
<br> Number of participants:  150+
<br>`,
      image: 
        runwalk2,
   
    },
    {
      subtitle: "Movie Screening followed by a discussion with the actor",
      description: "  Movie: Turup, directed by Ektara Collective <br> Interaction with Nidhi Qazi, the actor who played a leading role of the character Neelima in the movie. <br> Date: 10 March 2024<br>Time: 6:00 AM<br> <br>Venue: L2<br> The screening was followed by a thought-provoking and critical discussion on the movie by the audience. <br> ",
      image: 
        movie_screening2,
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
    {events.map((event, index) => (
      <EventsCard
        key={index}
        title={event.title}       // If not used inside EventsCard, can remove this prop
        subtitle={event.subtitle}
        description={event.description}
        image={event.image}       // Single image prop here instead of sliderImages
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
      </section>
      <LinksSection/>
    </div>
  );
};

export default EventsPage;
