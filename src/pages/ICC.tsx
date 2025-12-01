import React from "react";
import BannerCard from "../components/Cards/BannerCard";

const ICC: React.FC = () => {
    const title = "Know About ICC at IIT Kanpur";
    const description = "The Internal Complaints Committee (ICC) is committed to addressing and preventing sexual harassment on campus. We are here to ensure a safe, inclusive, and supportive environment for all students, faculty, and staff. Explore the purpose, structure, and process of filing a complaint with the ICC.";
    const buttons = [
        { label: "Committee Members", sectionId: "current-committee" },
        { label: "Filing a Complaint", sectionId: "how-to-file" },
        { label: "Who can file a complaint?", sectionId: "who-can" }
    ];

    const committeeMembers = [
        { name: "Prof. Devlina Chatterjee (IME)", email: ["devlina@iitk.ac.in"], phone: "512-259-6960" },
        { name: "Prof. Shatarupa Thakurta Roy (HSS)", email: ["stroy@iitk.ac.in"], phone: "512-259-7145" },
        { name: "Prof. Kallol Mondal (MSE)", email: ["kallol@iitk.ac.in"], phone: "512-259-6156" },
        { name: "Prof. Rama Rawat (Maths)", email: ["rrawat@iitk.ac.in"], phone: "512-259-7466" },
        { name: "Prof. Abhishek (AE)", email: ["abhish@iitk.ac.in"], phone: "512-259-7515" },
        { name: "Prof. Animesh Das (CE)", email: ["adas@iitk.ac.in"], phone: "512-259-7477" },
        { name: "Prof. Dootika Vats (Maths)", email: ["dootika@iitk.ac.in"], phone: "512-259-2076" },
        { name: "Chairman, SAEC", email: ["chair_saec@iitk.ac.in"], phone: "512-259-7546" },
        { name: "Ms. Rita Shukla, Counsellor", email: ["rita@iitk.ac.in"], phone: "512-259-7165" },
        { name: "Dr. Sadhana Singh", email: [], phone: "" }
    ];

    return (
        <div className="min-h-screen bg-base-100">
            <BannerCard title={title} description={description} buttons={buttons} />

            <div className="container mx-auto px-4 py-16 max-w-5xl">
                <h1 className="text-3xl font-bold mb-8 border-b-4 border-primary inline-block font-serif">Internal Complaints Committee (ICC)</h1>

                <p className="mb-8 text-lg leading-relaxed">
                    The Internal Complaints Committee of IIT Kanpur was constituted on <a className="link link-primary" href="https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/DIR_IITK_2016_OO_004.pdf" target="_blank" rel="noopener noreferrer">9th March 2016</a> in accordance with the provisions described in the
                    <strong> <a className="link link-primary" href="https://drive.google.com/file/d/11n9HL9SIGfCHMhTZhmdJ8ohIaX-Kgt2s/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 </a> </strong>
                    and the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) <a className="link link-primary" href="https://drive.google.com/file/d/11n9HL9SIGfCHMhTZhmdJ8ohIaX-Kgt2s/view?usp=drive_link" target="_blank" rel="noopener noreferrer"> Rules, 2013 </a>. The new rules applicable to faculty and staff at:
                    <a className="link link-primary ml-1" href="https://web.iitk.ac.in/july14iitkn/data/registraroff_orders/Notification-and-Final-Enquiry-Rules-Sexual-Harassment-of-Women-21-09-21.pdf" target="_blank" rel="noopener noreferrer">this link</a>.
                </p>

                <div id="current-committee" className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 font-serif text-primary">
                        The Current Committee
                        <span className="text-sm font-normal ml-2 text-base-content/70 block md:inline mt-2 md:mt-0">
                            (Office Orders:
                            <a href="https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-no-71-20-12-21.pdf" className="link link-hover ml-1" target="_blank" rel="noopener noreferrer">1</a>,
                            <a href="https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-no-25_ICC-18-04-22.pdf" className="link link-hover ml-1" target="_blank" rel="noopener noreferrer">2</a>,
                            <a href="https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-no-35_ICC-05-05-22.pdf" className="link link-hover ml-1" target="_blank" rel="noopener noreferrer">3</a>,
                            <a href="https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-no-50-22-07-22.pdf" className="link link-hover ml-1" target="_blank" rel="noopener noreferrer">4</a>,
                            <a href="https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-No-12-01-02-23.pdf" className="link link-hover ml-1" target="_blank" rel="noopener noreferrer">5</a>,
                            <a href="https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-No-61-07-08-23.pdf" className="link link-hover ml-1" target="_blank" rel="noopener noreferrer">6</a>,
                            <a href="https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-No-88-22-11-23.pdf" className="link link-hover ml-1" target="_blank" rel="noopener noreferrer">7</a>,
                            <a href="https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-no-73-04-06-25.pdf" className="link link-hover ml-1" target="_blank" rel="noopener noreferrer">8</a>)
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {committeeMembers.map((member, index) => (
                            <div key={index} className="card bg-base-200 shadow-sm hover:shadow-md transition-all duration-300">
                                <div className="card-body p-6">
                                    <h3 className="card-title text-lg font-bold mb-2">{member.name}</h3>
                                    {member.email.map((email, i) => (
                                        <a key={i} href={`mailto:${email}`} className="link link-primary text-sm block">{email}</a>
                                    ))}
                                    {member.phone && <p className="text-sm mt-2 text-base-content/70">Ph: {member.phone}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="who-can" className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 font-serif text-primary">Who can file a complaint?</h2>
                    <ul className="list-disc ml-6 space-y-3 text-lg">
                        <li>Any woman employee of IIT Kanpur including faculty and staff as well as any woman residing in the Campus or visiting the Campus in any capacity may file a complaint against an incident of sexual harassment.</li>
                        <li>Any student, irrespective of age and/or gender, may file a complaint against an incident of sexual harassment</li>
                    </ul>
                    <p className="mt-4 text-base-content/80">Complaints from the above categories of complainants will be dealt with as per the IIT Kanpur Prevention, Prohibition and Redressal of Sexual Harassment of Students <a href="https://drive.google.com/drive/folders/1briP1XamBsuLRxCmmTZ3YOh9bvrUV2v9" className="link link-primary" target="_blank" rel="noopener noreferrer"> Rules 2017</a> or the IIT Kanpur (Inquiry into Complaints of Sexual Harassment of Women at Workplace) <a href="https://drive.google.com/drive/folders/1briP1XamBsuLRxCmmTZ3YOh9bvrUV2v9" className="link link-primary" target="_blank" rel="noopener noreferrer"> Rules, 2021</a>, whichever is relevant.</p>
                </div>

                <div id="how-to-file" className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 font-serif text-primary">How to file a complaint?</h2>
                    <ul className="list-disc ml-6 space-y-3 text-lg">
                        <li>A formal written complaint must be filed (hard copy or email) within 90 days of the incident.</li>
                        <li>The ICC will complete inquiry and submit the report within 90 days of receiving the complaint.</li>
                        <li>The complaint should include:
                            <ul className="list-disc ml-6 mt-2 space-y-1 text-base">
                                <li>Date and time of the incident</li>
                                <li>Location of the incident</li>
                                <li>Name and contact of the accused</li>
                                <li>Witnesses, if any</li>
                                <li>Detailed description of the incident</li>
                            </ul>
                        </li>
                    </ul>
                    <p className="mt-4 font-medium text-secondary">Contact ICC for assistance in drafting the complaint. All information will remain strictly confidential.</p>
                </div>

                <div className="bg-base-200 p-8 rounded-xl shadow-md">
                    <h2 className="text-2xl font-bold mb-4 font-serif text-primary">Where to file a complaint?</h2>
                    <p className="text-lg">
                        Email the Presiding Officer or any ICC member. For further action, send a formal complaint to:
                        <br />Email: <a className="link link-primary font-bold" href="mailto:icc@iitk.ac.in">icc@iitk.ac.in</a>, <a className="link link-primary font-bold" href="mailto:devlina@iitk.ac.in">devlina@iitk.ac.in</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ICC;
