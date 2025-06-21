import React from "react";
import BannerCard from "../components/Card/BannerCard";

export default function ICC() {
    const title = "Know About ICC at IIT Kanpur";
const description =
  "The Internal Complaints Committee (ICC) is committed to addressing and preventing sexual harassment on campus. We are here to ensure a safe, inclusive, and supportive environment for all students, faculty, and staff. Explore the purpose, structure, and process of filing a complaint with the ICC.";
const buttons = [
  { label: "Committee Members", sectionId: "current-committee" },
  { label: "Filing a Complaint", sectionId: "how-to-file" },
  {label: "Who can file a complaint?", sectionId: "who-can" }
];

  return (
    <div className="bg-white text-black min-h-screen py-10 px-6 md:px-20">
          <BannerCard title={title} description={description} buttons={buttons} />
          <div className="px-10">

      <h1 className="text-2xl font-bold mb-8 border-b-4 border-black inline-block mt-8">Internal Complaints Committee (ICC)</h1>

      <p className="mb-6 text-lg">
        The Internal Complaints Committee of IIT Kanpur was constituted on <a className="text-blue-600 underline ml-1 hover:text-blue-800"  href="https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/DIR_IITK_2016_OO_004.pdf"> 9th March 2016 </a> in accordance with the provisions described in the
        <strong> <a className="text-blue-600 underline ml-1 hover:text-blue-800" href="https://drive.google.com/file/d/11n9HL9SIGfCHMhTZhmdJ8ohIaX-Kgt2s/view?usp=drive_link">Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 </a> </strong>
        and  the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) <a className="text-blue-600 underline ml-1 hover:text-blue-800" href="https://drive.google.com/file/d/11n9HL9SIGfCHMhTZhmdJ8ohIaX-Kgt2s/view?usp=drive_link"> Rules, 2013 </a>. The new rules applicable to faculty and staff at:
        <a className="text-blue-600 underline ml-1 hover:text-blue-800" href="https://web.iitk.ac.in/july14iitkn/data/registraroff_orders/Notification-and-Final-Enquiry-Rules-Sexual-Harassment-of-Women-21-09-21.pdf" target="_blank" rel="noopener noreferrer">this link</a>.
      </p>

      {/* <h2 className="text-xl font-semibold mt-12 mb-6" id="current-committee">Current Committee</h2> */}
      <h2 className="text-xl font-semibold mt-12 mb-6" id="current-committee">
  The Current Committee  (
  <a href="https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-no-71-20-12-21.pdf" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">link1</a> |{" "}
  <a href="https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-no-25_ICC-18-04-22.pdf" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">link2</a> |{" "}
  <a href="https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-no-35_ICC-05-05-22.pdf" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">link3</a> |{" "}
  <a href="https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-no-50-22-07-22.pdf" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">link4</a> |{" "}
  <a href="https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-No-12-01-02-23.pdf" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">link5</a> |{" "}
  <a href="https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-No-61-07-08-23.pdf" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">link6</a> |{" "}
  <a href="https://web.iitk.ac.in/july14iitkn/data/directorateoff_orders/Office-Order-No-88-22-11-23.pdf" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">link7</a>{" "}
  to office order(s))
</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: "Prof. Devlina Chatterjee (Presiding Officer), DoMS",
            email: ["icc@iitk.ac.in", "devlina@iitk.ac.in"],
            phone: "512-259-6960"
          },
          {
            name: "Prof. Jonaki Sen, BSBE",
            email: ["jonaki@iitk.ac.in"],
            phone: "512-259-4054"
          },
          {
            name: "Prof. Sri Sivakumar, CHE",
            email: ["srisiva@iitk.ac.in"],
            phone: "512-679-7697"
          },
          {
            name: "Prof. Sohini Sahu, ESc",
            email: ["ssahu@iitk.ac.in"],
            phone: "512-259-6701"
          },
          {
            name: "Prof. Prishati Ray Chowdhury, CE",
            email: ["prishati@iitk.ac.in"],
            phone: "512-259-6692"
          },
          {
            name: "Prof. Abhishek, AE",
            email: ["abhish@iitk.ac.in"],
            phone: "512-259-7515"
          },
          {
            name: "Prof. M K Das, ME",
            email: ["mkdas@iitk.ac.in"],
            phone: "512-259-7359"
          },
          {
            name: "Chairman, SAEC",
            email: ["chair_saec@iitk.ac.in"],
            phone: "512-259-7546"
          },
          {
            name: "Ms. Rita Shukla, Counsellor",
            email: ["rita@iitk.ac.in"],
            phone: "512-259-7165"
          },
          {
            name: "Mrs Meera Jain, External Member",
            email: [],
            phone: ""
          }
        ].map((member, index) => (
          <div key={index} className=" p-4 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
            {member.email.map((email, i) => (
              <p key={i}><a href={`mailto:${email}`} className="text-blue-600 hover:text-blue-800 underline">{email}</a></p>
            ))}
            {member.phone && <p className="mt-1 text-sm">Ph: {member.phone}</p>}
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-16 mb-6" id="who-can">Who can file a complaint?</h2>
      <ul className="list-disc ml-6 space-y-2 text-lg">
        <li>Any woman employee of IIT Kanpur including faculty and staff as well as any woman residing in the Campus or visiting the Campus in any capacity may file a complaint against an incident of sexual harassment.</li>
        <li>Any student, irrespective of age and/or gender, may file a complaint against an incident of sexual harassment</li>
      </ul>
      <p className="mt-2">Complaints from the above categories of complainants will be dealt with as per the IIT Kanpur Prevention, Prohibition and Redressal of Sexual Harassment of Students <a href="https://drive.google.com/drive/folders/1briP1XamBsuLRxCmmTZ3YOh9bvrUV2v9" className="text-blue-600 underline ml-1 hover:text-blue-800"> Rules 2017</a> or the IIT Kanpur (Inquiry into Complaints of Sexual Harassment of Women at Workplace) <a href="https://drive.google.com/drive/folders/1briP1XamBsuLRxCmmTZ3YOh9bvrUV2v9" className="text-blue-600 underline ml-1 hover:text-blue-800"> Rules, 2021</a>, whichever is relevant.</p>

      <h2 className="text-xl font-semibold mt-16 mb-6 " id="how-to-file">How to file a complaint?</h2>
      <ul className="list-disc ml-6 space-y-2 text-lg">
        <li>A formal written complaint must be filed (hard copy or email) within 90 days of the incident.</li>
        <li>The ICC will complete inquiry and submit the report within 90 days of receiving the complaint.</li>
        <li>The complaint should include:
          <ul className="list-disc ml-6 mt-1">
            <li>Date and time of the incident</li>
            <li>Location of the incident</li>
            <li>Name and contact of the accused</li>
            <li>Witnesses, if any</li>
            <li>Detailed description of the incident</li>
          </ul>
        </li>
      </ul>
      <p className="mt-2">Contact ICC for assistance in drafting the complaint. All information will remain strictly confidential.</p>

      <h2 className="text-xl font-semibold mt-16 mb-6 ">Where to file a complaint?</h2>
      <p className="text-lg">
        Email the Presiding Officer or any ICC member. For further action, send a formal complaint to:
        <br />Email: <a className="text-blue-600 hover:text-blue-800 underline" href="mailto:icc@iitk.ac.in">icc@iitk.ac.in</a>, <a className="text-blue-600 hover:text-blue-800 underline" href="mailto:devlina@iitk.ac.in">devlina@iitk.ac.in</a>
      </p>
          </div>

    </div>
  );
}
