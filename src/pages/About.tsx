import React from 'react';
import ContactCard from '../components/Cards/ContactCard';
import BannerCard from '../components/Cards/BannerCard';

import teamImages from '../setups/teamImages.ts';

const About: React.FC = () => {
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
    ];

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
    ];

    const nominees = [
        {
            name: 'Pushpender',
            designation: 'Student Nominee',
            phone: ' +91 9257009192',
            email: 'pushpender23@iitk.ac.in',
            post: '  UG - MALE',
            image: teamImages.pushpender,
        }, {
            name: "Rasagna Abothula",
            designation: 'Student Nominee',
            phone: '+91 8247276839',
            email: 'aboyhula23@iitk.ac.in',
            post: '  UG - Female',
            image: teamImages.rasagana,
        }, {
            name: 'Jyoti Srivastava',
            designation: 'Student Nominee',
            phone: '+91 94738 81699',
            email: 'jyotis22@iitk.ac.in',
            post: 'PG - Female',
            image: teamImages.jyoti,
        }, {
            name: 'Satyaki Banerjee',
            designation: 'Student Nominee',
            phone: '+91 6290311744',
            email: 'bsatyaki25@iitk.ac.in',
            post: 'PG - Male',
            image: teamImages.satyaki,
        }
    ];

    const staff = [
        {
            name: 'Mrs. Pragati Indoria',
            designation: 'Member',
            phone: '+91 (512) 259/679-7223 ',
            email: 'pragati@iitk.ac.in',
            image: teamImages.pragati,
        },
    ];

    const title = "Know More About Us";
    const description = "Fostering inclusivity through education, advocacy, and support, empowering all genders with equality and understanding";
    const buttons = [
        { label: "About Us", sectionId: "about-us" },
        { label: "Meet our Team", sectionId: "team-info" },
        { label: "Know our History", sectionId: "history" },
    ];

    return (
        <div className="min-h-screen bg-base-100">
            <BannerCard title={title} description={description} buttons={buttons} />

            <section className="py-16 md:py-20 bg-base-100" id='about-us'>
                <div className="page-container">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 font-heading text-primary">About Us</h1>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-heading mb-4">Who are we?</h2>
                                <p className="text-base-content/80 leading-relaxed">
                                    The Gender Cell at IIT Kanpur is committed to creating a safe and supportive environment for everyone on campus. We are committed to treating all people with dignity and respect, and we actively prevent any exploitation, sexual harassment, or abuse.
                                </p>
                            </div>
                        </div>
                        <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-heading mb-4">What do we do?</h2>
                                <p className="text-base-content/80 leading-relaxed">
                                    The Cell's goals include raising awareness within the community about gender issues and making a safe campus environment. We address the issue of sexual harassment and abuse across campus. We conduct orientation programs, seminars for students and staff, and sensitize residents from all parts of the community.
                                </p>
                            </div>
                        </div>
                        <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-heading mb-4">Who can approach us?</h2>
                                <p className="text-base-content/80 leading-relaxed">
                                    Any person residing, working or visiting the campus as well as any student can approach us and file complaint in any case of sexual harassment. Your all information will be kept completely confidential.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 bg-base-200" id='team-info'>
                <div className="page-container">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-heading">Meet Our Team</h2>

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-center mb-8 text-primary font-heading">Chairperson</h3>
                        <div className="flex flex-wrap justify-center gap-8">
                            {head.map((head, index) => (
                                <ContactCard key={index} name={head.name} designation={head.designation} email={head.email} phone={head.phone} image={head.image} />
                            ))}
                        </div>
                    </div>

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-center mb-8 text-primary font-heading">Faculty Members of Gender Cell</h3>
                        <div className="flex flex-wrap justify-center gap-8">
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
                    </div>

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-center mb-8 text-primary font-heading">Staff Member of Gender Cell</h3>
                        <div className="flex flex-wrap justify-center gap-8">
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
                    </div>

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-center mb-8 text-primary font-heading">Student Nominee of Gender Cell</h3>
                        <div className="flex flex-wrap justify-center gap-8">
                            {nominees.map((nominee, index) => (
                                <ContactCard
                                    key={index}
                                    name={nominee.name}
                                    designation={nominee.designation}
                                    post={nominee.post}
                                    email={nominee.email}
                                    phone={nominee.phone}
                                    image={nominee.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 bg-base-100" id='history'>
                <div className="page-container max-w-4xl">
                    <div className="text-center mb-8">
                        <h2 className='text-3xl md:text-4xl font-bold font-heading text-primary'>History of the Gender Cell</h2>
                    </div>
                    <div className="bg-base-200 p-8 rounded-xl shadow-inner">
                        <p className="text-base leading-relaxed tracking-wide text-justify font-sans">
                            The Gender Cell (previously called the Women's Cell), IITK was constituted on May 10, 2013 based on the judgment of Supreme Court dated 13.8.97 in Visakha and other V/S State of Rajasthan which envisaged the creation of an appropriate complaint mechanism in any professional workspace for speedy redressal of sexual harassment and abuse cases. The committee has been historically promoting equal male-female representation by exhibiting a nearly equal number of male and female members constituting the committee. Since its inception, the Gender Cell, IITK has been continuously working towards sensitizing the campus residents towards gender equality and preventing sexual harassment and abuse at all levels in the campus.
                        </p>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default About;
