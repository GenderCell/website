import '../css/About.css'
import ContactCard from '../components/Card/Contactcard';
import BannerCard from '../components/Card/BannerCard';
import LinksSection from '../components/Linkscard/LinkCard';
import teamImages from '../setups/teamImages';

function About() {
    const head = [
        {
            name: 'Prof. Priyanka V Bagade',
            designation: 'Chairperson Gender Cell',
            phone: '+91 (512) 259/679-2206',
            email: 'pbagade@iitk.ac.in',
            image: teamImages.priyanka,
        },
         {
            name: 'Prof. Devlina Chatterjee',
            designation: 'Chairperson ICC',
            phone: '+91 512-259-6960',
            email: 'devlina@iitk.ac.in',
            image: teamImages.devlina,
        },
    ]
    const contacts = [
        {
            name: 'Prof. Urbi Chatterjee',
            designation: 'Member',
            phone: '+91 (512) 259/679-2211',
            email: 'urbic@iitk.ac.in',
            image: teamImages.urbi,
        }, {
            name: 'Prof. Jishnu Bhattacharya',
            designation: 'Member',
            phone: '+91-512-2597684',
            email: 'jishnu@iitk.ac.in', 
            image: teamImages.jishnu,
        }, {
            name: 'Prof. Vaibhav Arghode',
            designation: 'Member',
            phone: '+91 512-259-6294',
            email: 'varghode@iitk.ac.in',
            image: teamImages.vaibhav,
        }
        // Add more contacts as needed
    ];
    const nominees = [
        {
            name: 'Pushpender',
            designation: 'Student Nominee',
            Phone: ' +91 9257009192',
            Email: 'pushpender23@iitk.ac.in',
            post: '  UG - MALE',
            image: teamImages.pushpender,
        }, {
            name: "Rasagna Abothula",
            designation: 'Student Nominee',
            Phone: '+91 8247276839',
            Email: 'aboyhula23@iitk.ac.in',
            post: '  UG - Female',
            image: teamImages.rasagana,
        }, {
            name: 'Jyoti Srivastava',
            designation: 'Student Nominee',
            Phone: '+91 94738 81699',
            Email: 'jyotis22@iitk.ac.in',
            post: 'PG - Female',
            image: teamImages.jyoti,
        },{
            name: 'Satyaki Banerjee',
            designation: 'Student Nominee',
            Phone: '+91 6290311744',
            Email: 'bsatyaki25@iitk.ac.in',
            post: 'PG - Male',
            image: teamImages.satyaki,
        }
    ]
    const staff=[
        {
            name: 'Mrs. Pragati Indoria',
            designation: 'Member',
            phone: '+91 (512) 259/679-7223 ',
            email: 'pragati@iitk.ac.in',
            image: teamImages.pragati,
        },
    ]
    const title = "Know More About Us";
    const description = "Fostering inclusivity through education, advocacy, and support, empowering all genders with equality and understanding";
    const buttons = [
        { label: "About Us", sectionId: "about-us" },
        { label: "Meet our Team", sectionId: "team-info" },
        { label: "Know our History", sectionId: "history" },
    ];
    return (
        <div className="app">
            <BannerCard title={title} description={description} buttons={buttons} />
            <div className="about-us" id='about-us'>
                <h1>About us</h1>
                <div className="about-us-container">
                    <div className="about-us-card">
                        <h2>Who are we?</h2>
                        <p>
                        The Gender Cell at IIT Kanpur is committed to creating a safe and supportive environment for everyone on campus. We are committed to treating all people with dignity and respect, and we actively prevent any exploitation, sexual harassment, or abuse.
                        </p>
                    </div>
                    <div className="about-us-card">
                        <h2>What do we do?</h2>
                        <p>
                        The Cell's goals include raising awareness within the community about gender issues and making a safe campus environment. We address the issue of sexual harassment and abuse across campus. We conduct orientation programs, seminars for students and staff, and sensitize residents from all parts of the community.</p>
                    </div>
                    <div className="about-us-card">
                        <h2>Who can approach us?</h2>
                        <p>
                            Any person residing, working or visiting the campus as well as any student can approach us and file complaint in any case of sexual harassment. Your all information will be kept completely confidential.
                        </p>
                    </div>
                </div>
            </div>

            <div className="team-info" id='team-info'>
                <h2>Meet Our Team</h2>
                <div className="cards-container">
                    <div className="title1">Chairperson</div>
                    <div className="head" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' , gap: '20px'}}>
                        {head.map((head, index) => (
                            <ContactCard key={index} name={head.name} designation={head.designation} email={head.email} phone={head.phone} image={head.image} />
                        ))}
                    </div>
                    <div className="title1">Faculty Members of Gender Cell</div>
                    <div className="members">
                        {contacts.map((contact, index) => (
                            <ContactCard
                                key={index}
                                name={contact.name}
                                designation={contact.designation}
                                email={contact.email}
                                phone={contact.phone}
                                image={contact.image}
                            />
                        ))}
                    </div>
                    <div className="title1">Staff Member of Gender Cell</div>
                    <div className="members">
                        {staff.map((contact, index) => (
                            <ContactCard
                                key={index}
                                name={contact.name}
                                designation={contact.designation}
                                email={contact.email}
                                phone={contact.phone}
                                image={contact.image}
                            />
                        ))}
                    </div>
                    <div className="title1">
                        Student Nominee of Gender Cell
                    </div>
                    <div className="nominees">
                        {nominees.map((nominee, index) => (
                            <ContactCard
                                key={index}
                                name={nominee.name}
                                designation={nominee.designation}
                                post={nominee.post}
                                email={nominee.Email}
                                phone={nominee.Phone}
                                image={nominee.image}
                            />
                        ))}
                    </div>
                </div>
             </div>
            <section className="current-initiatives" id='history'>
                <div className="history-container">
                    <div className="header-history">
                        <h2 className='mainheading'>History of the Gender Cell</h2>
                    </div>
                    <p>
                    The Gender Cell (previously called the Women's Cell), IITK was constituted on  May 10, 2013 based on the judgment of Supreme Court dated 13.8.97 in Visakha and other V/S State of Rajasthan which envisaged the creation of an appropriate complaint mechanism in any professional workspace for speedy redressal of sexual harassment and abuse cases. The committee has been historically promoting equal male-female representation by exhibiting a nearly equal number of male and female members constituting the committee. Since its inception, the Gender Cell, IITK has been continuously working towards sensitizing the campus residents towards gender equality and preventing sexual harassment and abuse at all levels in the campus.
                    </p>
                </div>
            </section>
            <LinksSection/>
        </div>
    )
}

export default About