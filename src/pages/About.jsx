import '../css/About.css'
import ContactCard from '../components/Card/Contactcard';
import BannerCard from '../components/Card/BannerCard';
import LinksSection from '../components/Linkscard/LinkCard';
function About() {
    const head = [
        {
            name: 'Prof. Sarani Saha',
            designation: 'Chairperson',
            phone: '+91 51267 97064',
            email: 'sarani@iitk.ac.in',
        },
    ]
    const contacts = [
        {
            name: 'Prof. Priyanka V Bagade',
            designation: 'Member',
            phone: '+91 (512) 259/679-2206',
            email: 'pbagade@iitk.ac.in',
        }, {
            name: 'Prof. Mousami Prasad',
            designation: 'Member',
            phone: '512 259 2266',
            email: 'mousami@iitk.ac.in',
        }, {
            name: 'Prof. Nitin Gupta',
            designation: 'Member',
            phone: '+91 51225 94384',
            email: 'guptan@iitk.ac.in',
        }, {
            name: 'Prof. Satyadev Nandakumar',
            designation: 'Member',
            phone: ' +91 51225 97619',
            email: ' satyadev@cse.iitk.ac.in',
        }, 
        // Add more contacts as needed
    ];
    const nominees = [
        {
            name: 'Saumya Suyal',
            designation: 'Student Nominee',
            Phone: ' +91 99970 00617',
            Email: 'saumyas20@iitk.ac.in',
            post: '  PG - Female'
        }, {
            name: 'Musale Krushna Pavan',
            designation: 'Student Nominee',
            Phone: '+91 94940 91096',
            Email: 'krushna20@iitk.ac.in',
            post: '  PG - Male'
        }, {

            name: 'S Tania',
            designation: 'Student Nominee',
            Phone: +'91 63046 16749',
            Email: 'stania22@iitk.ac.in',
            post: 'UG - Female'
        }, {

            name: 'Yash Giri',
            designation: 'Student Nominee',
            Phone: +'91 90963 48046',
            Email: 'yashg22@iitk.ac.in',
            post: ' UG - Male'
        },
    ]
    const staff=[
        {
            name: 'Mrs. Anjani Dubey',
            designation: 'Member',
            phone: '+91 51225 94707',
            email: 'anjanid@iitk.ac.in',
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
                        The Cell’s goals include raising awareness within the community about gender issues and making a safe campus environment. We address the issue of sexual harassment and abuse across campus. We conduct orientation programs, seminars for students and staff, and sensitize residents from all parts of the community.</p>
                    </div>
                    <div className="about-us-card">
                        <h2>Who can approach us?</h2>
                        <p>
                            Any women residing, working or visiting the campus as well as any student can approach us and file complaint in any case of sexual harassment. Your all information will be kept completely confidential.
                        </p>
                    </div>
                </div>
            </div>

            <div className="team-info" id='team-info'>
                <h2>Meet Our Team</h2>
                <div className="cards-container">
                    <div className="title1">Chairperson</div>
                    <div className="head">
                        {head.map((head, index) => (
                            <ContactCard key={index} name={head.name} designation={head.designation} email={head.email} phone={head.phone} />
                        ))}
                    </div>
                    <div className="title1">Faculty Members</div>
                    <div className="members">
                        {contacts.map((contact, index) => (
                            <ContactCard
                                key={index}
                                name={contact.name}
                                designation={contact.designation}
                                email={contact.email}
                                phone={contact.phone}

                            />
                        ))}
                    </div>
                    <div className="title1">Staff Member</div>
                    <div className="members">
                        {staff.map((contact, index) => (
                            <ContactCard
                                key={index}
                                name={contact.name}
                                designation={contact.designation}
                                email={contact.email}
                                phone={contact.phone}

                            />
                        ))}
                    </div>
                    <div className="title1">
                        Student Nominee
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
                    The Gender Cell (previously called the Women’s Cell), IITK was constituted on  May 10, 2013 based on the judgment of Supreme Court dated 13.8.97 in Visakha and other V/S State of Rajasthan which envisaged the creation of an appropriate complaint mechanism in any professional workspace for speedy redressal of sexual harassment and abuse cases. The committee has been historically promoting equal male-female representation by exhibiting a nearly equal number of male and female members constituting the committee. Since its inception, the Gender Cell, IITK has been continuously working towards sensitizing the campus residents towards gender equality and preventing sexual harassment and abuse at all levels in the campus.
                    </p>
                </div>
            </section>
            <LinksSection/>
        </div>
    )
}

export default About