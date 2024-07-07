import React from 'react'
import '../css/About.css'
import ContactCard from '../components/Card/Contactcard';
import BannerCard from '../components/Card/BannerCard';
function About() {
    const head = [
        {
            name: 'Sarani Saha',
            designation: 'Chairperson',
            phone: '+91 51267 97064',
            email: 'sarani@iitk.ac.in',
        },
    ]
    const contacts = [
        {
            name: 'Priyanka V Bagade',
            designation: 'Member',
            phone: '+91 (512) 259/679-2206',
            email: 'pbagade@iitk.ac.in',
        }, {
            name: ' Mousami Prasad',
            designation: 'Member',
            phone: '512 259 2266',
            email: 'mousami@iitk.ac.in',
        }, {
            name: ' Nitin Gupta',
            designation: 'Member',
            phone: '+91 51225 94384',
            email: 'guptan@iitk.ac.in',
        }, {
            name: ' Satyadev Nandakumar',
            designation: 'Member',
            phone: ' +91 51225 97619',
            email: ' satyadev@cse.iitk.ac.in',
        }, {
            name: 'Anjani Dubey',
            designation: 'Member',
            phone: '+91 51225 94707',
            email: 'anjanid@iitk.ac.in',
        },
        // Add more contacts as needed
    ];
    const nominees = [
        {
            name: 'Saumya Suyal',
            designation: 'Student Nominee',
            Phone: ' +91 99970 00617',
            Email: 'saumyas20@iitk.ac.in',
        }, {
            name: 'Musale Krushna Pavan',
            designation: 'Student Nominee',
            Phone: '+91 94940 91096',
            Email: 'krushna20@iitk.ac.in',
        }, {

            name: 'S Tania',
            designation: 'Student Nominee',
            Phone: +'91 63046 16749',
            Email: 'stania22@iitk.ac.in',
        }, {

            name: 'Yash Giri',
            designation: 'Student Nominee',
            Phone: +'91 90963 48046',
            Email: 'yashg22@iitk.ac.in',
        },
    ]
    const title = "Know More About Us";
    const description = "Fostering inclusivity through education, advocacy, and support, empowering all genders with equality and understanding";
    const buttons = [
      { label: "Meet our Team", sectionId: "team-info" },
      { label: "Know our History", sectionId: "history" },
  ];
    return (
        <div className="app">
            <BannerCard title={title} description={description} buttons={buttons}/>
            <div className="team-info" id='team-info'>
                <h2>Team Info</h2>
                <div className="cards-container">
                    <div className="head">
                        {head.map((head, index) => (
                            <ContactCard name={head.name} designation={head.designation} email={head.email} phone={head.phone} />
                        ))}
                    </div>
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
                    <div className="nominees">
                    {nominees.map((nominee, index) => (
                            <ContactCard
                                key={index}
                                name={nominee.name}
                                designation={nominee.designation}
                                email={nominee.email}
                                phone={nominee.phone}

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
                    <h2>Establishment and Early Years</h2>
                    <p>The Gender Cell at IIT Kanpur was established with the primary aim of creating a safe, inclusive, and equitable environment for all students, faculty, and staff, irrespective of their gender. Recognizing the importance of addressing gender-related issues and promoting gender sensitivity within the campus, the institute inaugurated the Gender Cell as a dedicated body to tackle these challenges head-on.</p>

                    <h2>Initial Focus and Activities</h2>
                    <p>In its early years, the Gender Cell focused on raising awareness about gender equality and combating gender-based discrimination and harassment. The Cell organized workshops, seminars, and discussions to educate the campus community about gender sensitivity, sexual harassment, and the importance of a respectful and inclusive environment. These initiatives were crucial in setting the foundation for a more gender-sensitive campus culture.</p>

                    <h2>Implementation of Policies</h2>
                    <p>A significant milestone in the history of the Gender Cell was the formulation and implementation of policies related to sexual harassment and gender discrimination. These policies were designed in alignment with the guidelines provided by the Supreme Court of India and the University Grants Commission (UGC). The Gender Cell played a pivotal role in ensuring that these policies were not just in place but were also effectively communicated and enforced across the campus.</p>

                    <h2>Formation of the Internal Complaints Committee (ICC)</h2>
                    <p>To address complaints related to sexual harassment, the Gender Cell facilitated the formation of the Internal Complaints Committee (ICC). The ICC is responsible for investigating complaints of sexual harassment and providing a platform for redressal. The establishment of the ICC marked a significant step towards ensuring justice and support for victims of sexual harassment within the campus.</p>

                    <h2>Initiatives and Programs</h2>
                    <p>Over the years, the Gender Cell has launched several initiatives and programs aimed at fostering a culture of respect and equality. These include:</p>
                    <ul>
                        <li><strong>Gender Sensitization Workshops:</strong> Regular workshops and training sessions for students, faculty, and staff to promote gender sensitivity.</li>
                        <li><strong>Awareness Campaigns:</strong> Campaigns to raise awareness about issues such as consent, bystander intervention, and the rights and responsibilities of individuals.</li>
                        <li><strong>Support Systems:</strong> Establishing support systems for victims of gender-based violence and harassment, including counseling services and helplines.</li>
                        <li><strong>Collaborations:</strong> Collaborating with external organizations and experts to bring in diverse perspectives and expertise on gender issues.</li>
                    </ul>

                    <h2>Recent Developments</h2>
                    <p>In recent years, the Gender Cell has expanded its scope to address emerging gender issues and inclusivity concerns. The Cell has actively participated in initiatives supporting LGBTQ+ rights and has worked towards creating a more inclusive environment for all gender identities. This has included organizing pride marches, hosting talks and events during Pride Month, and advocating for policy changes that support the LGBTQ+ community.</p>

                    <h2>Impact and Future Goals</h2>
                    <p>The impact of the Gender Cell's efforts can be seen in the increased awareness and sensitivity towards gender issues within the IIT Kanpur community. The Cell continues to strive towards creating a campus where every individual feels safe, respected, and valued. Future goals include:</p>
                    <ul>
                        <li><strong>Strengthening Policies:</strong> Continuously reviewing and strengthening policies to address new and evolving gender-related challenges.</li>
                        <li><strong>Expanding Support Services:</strong> Enhancing support services for victims of gender-based violence and discrimination.</li>
                        <li><strong>Promoting Research:</strong> Encouraging research and scholarship on gender studies and related fields.</li>
                        <li><strong>Engaging the Community:</strong> Increasing engagement with the campus community through interactive events, discussions, and collaborative projects.</li>
                    </ul>

                    <h2>Conclusion</h2>
                    <p>The Gender Cell at IIT Kanpur has come a long way since its inception, making significant strides in promoting gender equality and sensitivity within the campus. Its ongoing efforts and commitment to creating a safer and more inclusive environment are a testament to its importance and relevance in today's world. As the Gender Cell continues to evolve and adapt, it remains a crucial pillar in the journey towards gender justice and inclusivity at IIT Kanpur.</p>
                </div>
            </section>

        </div>
    )
}

export default About