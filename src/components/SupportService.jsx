import React from "react";
import '../css/support.css';
import VideoSection from "./VideoSection";
import '../css/SupportSection.css'
import icc from '../assets/images/icc.png'
const SupportService = () => {
    return (
      <>
      <main className="contact-info-main">
      <section className="contact-info-section" id="emergency-info">
        <div className="contact-info-container">
          <h1 className="contact-info-title slide-in">Support Information</h1>
          <div className="contact-info-content">
            <div>
              <p className="contact-info-description">
                The Gender Cell provides support and guidance for matters related to sexual harassment. <a href="#" className="contact-info-link">Contact any member</a> for assistance and to schedule appointments with specialized counselors. All information shared will remain confidential.
              </p>
            </div>
            <div>
              <h3 className="contact-info-subtitle">Emergency Contacts</h3>
              <p className="contact-info-details"><span className="contact-info-highlight">Security (SIS) Control Room:</span> +91-512-259-7999, +91-512-679-7999</p>
            </div>
            <div>
              <h3 className="contact-info-subtitle">Guidelines for Dealing with Harassment</h3>
              <ul className="contact-info-list">
                <li>Do not blame yourself.</li>
                <li>Do not feel ashamed. Clearly and firmly tell the harasser that you find their behavior inappropriate or offensive.</li>
                <li>Speak up! Do not ignore harassment in hopes that it will stop on its own.</li>
                <li>Keep a detailed record (dates, times, places, names of harassers and witnesses) of all incidents related to harassment.</li>
              </ul>
              <p className="contact-info-paragraph">If you witness harassment, do not be a bystander. Report it.</p>
              <p className="contact-info-paragraph">As per the <a href="https://www.iitk.ac.in/wc/data/Sexual-Harassment-at-Workplace-Act.pdf" className="contact-info-link" target="_blank" rel="noopener noreferrer">Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013</a>, IIT Kanpur has established an <a href="https://www.iitk.ac.in/wc/internal-complaints-committee/" className="contact-info-link" target="_blank" rel="noopener noreferrer">Internal Complaints Committee (ICC)</a> for filing complaints.</p>
            </div>
            <div>
              <h3 className="contact-info-subtitle">Who can Approach ICC</h3>
              <ul className="contact-info-list">
                <li>Any woman employee of IIT Kanpur including faculty and staff as well as any woman residing in the Campus or visiting the Campus in any capacity may file a complaint against an incident of sexual harassment.</li>
                <li>Any student, irrespective of age and/or gender, may file a complaint against an incident of sexual harassment as per the IIT Kanpur Prevention, Prohibition and Redressal of Sexual Harassment of Students Rules, 2017.</li>
              </ul>
            </div>
            <div>
              <h3 className="contact-info-subtitle">How to Approach ICC</h3>
              <ul className="contact-info-list">
                <li>Call/email/meet/file a paper complaint to the Presiding Officer, ICC, and (<a href="https://www.iitk.ac.in/wc/internal-complaints-committee/" className="contact-info-link" target="_blank" rel="noopener noreferrer">Current Presiding Officer</a>)</li>
                <li>Email: <a href="mailto:icc@iitk.ac.in" className="contact-info-link">icc@iitk.ac.in</a></li>
              </ul>
              <p className="contact-info-paragraph">Examples of <a href="https://www.iitk.ac.in/wc/data/list-of-offences_v4-12-12-19.pdf" className="contact-info-link" target="_blank" rel="noopener noreferrer">offences</a> and <a href="https://www.iitk.ac.in/wc/data/PunishmentGiven_v3-12-12-19.pdf" className="contact-info-link" target="_blank" rel="noopener noreferrer">punishment given</a> in cases with ICC at IIT Kanpur (the two lists do not have one-to-one correspondence).</p>
            </div>
          </div>
        </div>
      </section>
      </main>
      <section className="support-services">
        <div className="support-services-content">
      <div className="emergency-contacts">
        <h2>Emergency Contacts</h2> 
        <ul>
          <span className="important-line">Security (SIS) Control Room:</span>{" "}
          <a href="tel:+91-512-259-7999">+91-512-259-7999</a>,{" "}
          <a href="tel:+91-512-679-7999">+91-512-679-7999</a>
        </ul>
      </div>
      <div className="icc">
        <h2>How ICC Supports</h2>
        <p>The Internal Complaints Committee (ICC) is established under the Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013, to address complaints of sexual harassment. Here's how the ICC supports individuals facing harassment:</p>
        <div className="whole">
          <div className="whole1">
            <h3>1. Receiving Complaints:</h3>
            <ul>
              <li>Multiple Channels for Reporting: The ICC provides various ways to report harassment, including in-person meetings, phone calls, emails, and written complaints. This ensures that individuals can choose the most comfortable and accessible method for them.</li>
              <li>Confidential Handling: All complaints are handled with utmost confidentiality to protect the privacy of the complainant.</li>
            </ul>

            <h3>2. Initial Response:</h3>
            <ul>
              <li>Immediate Acknowledgment: Upon receiving a complaint, the ICC promptly acknowledges it and provides the complainant with information on the process and timelines.</li>
              <li>Support and Counseling: The ICC offers emotional support and counseling services to the complainant, helping them cope with the distress caused by the harassment.</li>
            </ul>

            <h3>3. Investigation Process:</h3>
            <ul>
              <li>Fair Inquiry: The ICC conducts a fair and impartial inquiry into the complaint, gathering evidence and interviewing witnesses. Both the complainant and the respondent (the person against whom the complaint is made) are given an opportunity to present their case.</li>
              <li>Interim Measures: During the investigation, the ICC may recommend interim measures to protect the complainant, such as changing the work environment or ensuring no contact between the complainant and the respondent.</li>
            </ul>

            <h3>4. Awareness and Training:</h3>
            <ul>
              <li>Educational Programs: The ICC organizes awareness programs and training sessions to educate employees and students about sexual harassment, their rights, and the procedures for filing complaints.</li>
              <li>Policy Dissemination: The ICC ensures that the institution’s policies on sexual harassment are widely disseminated and understood by all members of the community.</li>
            </ul>
          </div>

          <div className="img">
            <img src={icc} alt="ICC" style={{width:'300px'}} />
          </div>
        </div>
      </div>
      <div className="whole4"></div>
      <div className="whole3">
        <div className="support">
          <h2>Support from the Gender Cell</h2>
          <p>
            The Gender Cell is dedicated to assisting anyone on campus in distress. They offer advice on available courses of action and can facilitate access to the legal cell or security section if needed. Additionally, they arrange meetings with appropriate counsellors or the <a href="mailto:devlina@iitk.ac.in">Presiding Officer</a> of the <a href="https://www.iitk.ac.in/wc/internal-complaints-committee/">Internal Complaints Committee (ICC)</a> to address issues of sexual harassment. Committed to providing a supportive environment, the Gender Cell ensures you receive the necessary help. For assistance, please contact any <a href="about.html">member of the Gender Cell</a>, who will guide and support you through the process.
          </p>
        </div>
        <div className="mental1">
          <h2>Mental Health and Counseling Services</h2>
          <p>
            The campus offers comprehensive mental health services to support the well-being of students, faculty, and staff. These services include individual counseling, group therapy, workshops on stress management, and wellness programs. Trained mental health professionals are available to provide confidential support and guidance on a wide range of issues, including anxiety, depression, academic stress, and personal challenges. Please contact any <a href="about.html">member of the Gender Cell</a> for fixing an appointment with the counsellor. Your information will be kept confidential.
          </p>
        </div>
      </div>
    </div>
          </section>
          </>
    );
};

export default SupportService;
