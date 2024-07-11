
// import logo from './logo.png';

import ContactFrom from "../components/contact/contactFrom";
import BannerCard from '../components/Card/BannerCard';
import '../css/contactus.css'
const ContactUs = () => {
  const title = "Know More About the Recent Events";
    const description = "Welcome to our Events page! Here, you'll find a vibrant showcase of the workshops, seminars, and activities we organize to promote gender equality and create a safe, inclusive environment for all. Join us in our mission to foster understanding, support, and empowerment within our community.";
    const buttons = [
        { label: "Emergency Guidelines", sectionId: "emergency-info" },
        { label: "Give your Feedback", sectionId: "Feedback-form" },
        { label: "Contact Us", sectionId: "contact-us" }
  ];
  return (
    <div className="app">
      <BannerCard title={title} description={description} buttons={buttons}/>
    <div className="min-h-screen flex flex-col mx-10">

      <main className="flex-grow lora-400">
        <section className=" bg-white mt-20 py-10 px-10 max-w-full mx-auto" style={{borderRadius:'10px'}} id="emergency-info">
          <div className="max-w-6xl mx-auto m-2 ">
            <h1 className="lg:text-4xl text-2xl text-center lora-700 py-8">Contact Information</h1>
            <div className="mt-4 space-y-8">
              <div>
                <p className="lora-400 text-sm text-center text-lightpink">The Gender Cell provides support and guidance for matters related to sexual harassment. <a href="#" className="text-blue-500 hover:underline underline-offset-2 transition-all duration-500">Contact any member</a> for assistance and to schedule appointments with specialized counselors. All information shared will remain confidential.</p>
              </div>
              <div>
                <h3 className="lg:text-2xl text-xl mt-4 lora-600"  >Emergency Contacts</h3>
                <p className="mt-4"><span className="lora-600">Security (SIS) Control Room:</span> <span className="">+91-512-259-7999, +91-512-679-7999</span></p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Guidelines for Dealing with Harassment</h3>
                <ul className="list-disc pl-6 mt-6 space-y-1">
                  <li>Do not blame yourself.</li>
                  <li>Do not feel ashamed. Clearly and firmly tell the harasser that you find their behavior inappropriate or offensive.</li>
                  <li>Speak up! Do not ignore harassment in hopes that it will stop on its own.</li>
                  <li>Keep a detailed record (dates, times, places, names of harassers and witnesses) of all incidents related to harassment.</li>
                </ul>
                <p className="mt-4">If you witness harassment, do not be a bystander. Report it.</p>
                <p className="mt-2">As per the <a href="https://www.iitk.ac.in/wc/data/Sexual-Harassment-at-Workplace-Act.pdf" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013</a>, IIT Kanpur has established an <a href="https://www.iitk.ac.in/wc/internal-complaints-committee/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Internal Complaints Committee (ICC)</a> for filing complaints.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Who can Approach ICC</h3>
                <ul className="list-disc pl-6 mt-8 space-y-1">
                  <li>Any woman employee of IIT Kanpur including faculty and staff as well as any woman residing in the Campus or visiting the Campus in any capacity may file a complaint against an incident of sexual harassment.</li>
                  <li>Any student, irrespective of age and/or gender, may file a complaint against an incident of sexual harassment as per the IIT Kanpur Prevention, Prohibition and Redressal of Sexual Harassment of Students Rules, 2017.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">How to Approach ICC</h3>
                <ul className="list-disc pl-6 mt-6 space-y-1">
                  <li>Call/email/meet/file a paper complaint to the Presiding Officer, ICC, and (<a href="https://www.iitk.ac.in/wc/internal-complaints-committee/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Current Presiding Officer</a>)</li>
                  <li>Email: <a href="mailto:icc@iitk.ac.in" className="text-blue-500 underline">icc@iitk.ac.in</a></li>
                </ul>
                <p className="mt-2">Examples of <a href="https://www.iitk.ac.in/wc/data/list-of-offences_v4-12-12-19.pdf" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">offences</a> and <a href="https://www.iitk.ac.in/wc/data/PunishmentGiven_v3-12-12-19.pdf" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">punishment given</a> in cases with ICC at IIT Kanpur (the two lists do not have one-to-one correspondence).</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Support from Gender Cell</h3>
                <p className="mt-2">The Women&apos;s Cell can advise on available courses of action to any woman on campus who may be in distress. If the woman so chooses, the Cell may facilitate access to the legal cell and/or the security section, or facilitate meetings with appropriate counsellors and/or the Presiding Officer, ICC. For help, please contact <a href="#" className="text-blue-500 underline">any member of the Gender Cell</a>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className=" bg-white max-w-full mx-auto lg:py-8 p-4 lg:my-12 my-4" style={{borderRadius:'10px'}} id="Feedback-form">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mt-3">Suggestion and Feedback Form</h2>
            <form className="mt-12 space-y-4">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label htmlFor="name" className="block font-semibold">Name:</label>
                  <input type="text" id="name" name="name" placeholder="Enter your name" required className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block font-semibold">Email:</label>
                  <input type="email" id="email" name="email" placeholder="Enter email address" required className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div className="flex-1">
                  <label htmlFor="affiliation" className="block font-semibold">Affiliation:</label>
                  <select id="affiliation" name="affiliation" required className="w-full p-2 border border-gray-300 rounded">
                    <option value="">Select Affiliation</option>
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                    <option value="staff">Staff</option>
                  </select>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label htmlFor="suggestion" className="block font-semibold">Suggestion:</label>
                  <textarea id="suggestion" name="suggestion" placeholder="Enter your suggestion" required className="w-full p-2 border border-gray-300 rounded"></textarea>
                </div>
                <div className="flex-1">
                  <label htmlFor="feedback" className="block font-semibold">Feedback:</label>
                  <textarea id="feedback" name="feedback" placeholder="Enter your feedback" required className="w-full p-2 border border-gray-300 rounded"></textarea>
                </div>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
            </form>
          </div>
        </section> */}
        <section className="feedback-form-section">
      <div className="form-container">
        <h2 className="form-title">Suggestion and Feedback Form</h2>
        <form className="form">
          <div className="form-group">
            <div className="form-field">
              <label htmlFor="name" className="form-label">Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required className="form-input" />
            </div>
            <div className="form-field">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter email address" required className="form-input" />
            </div>
            <div className="form-field">
              <label htmlFor="affiliation" className="form-label">Affiliation:</label>
              <select id="affiliation" name="affiliation" required className="form-input">
                <option value="">Select Affiliation</option>
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
                <option value="staff">Staff</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="form-field">
              <label htmlFor="suggestion" className="form-label">Suggestion:</label>
              <textarea id="suggestion" name="suggestion" placeholder="Enter your suggestion" required className="form-input"></textarea>
            </div>
            <div className="form-field">
              <label htmlFor="feedback" className="form-label">Feedback:</label>
              <textarea id="feedback" name="feedback" placeholder="Enter your feedback" required className="form-input"></textarea>
            </div>
          </div>
          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
    </section>
        <section id="contact-us">
        <ContactFrom/>
        </section>
      </main>
    </div>
    </div>
  );
};

export default ContactUs;