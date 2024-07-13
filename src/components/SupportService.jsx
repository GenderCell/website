import React from "react";
import '../css/support.css';
import VideoSection from "./VideoSection";
import '../css/SupportSection.css'
import icc from '../assets/images/icc.png'
const SupportService = () => {
    return (
      <section className="support-services">
        <div className="support-services-content">
      <div className="h1">
        <h1>Support Services</h1>
      </div>
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
            <img src={icc} alt="ICC" />
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
      {/* <div className="support-services-content">
        <div className="h1">
        <h1>Support Services</h1>
        </div>
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
          <ul><li>Multiple Channels for Reporting: The ICC provides various ways to report harassment, including in-person meetings, phone calls, emails, and written complaints. This ensures that individuals can choose the most comfortable and accessible method for them.</li>
          <li>Confidential Handling: All complaints are handled with utmost confidentiality to protect the privacy of the complainant.</li></ul>

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
            <img src="./icc.png"/>
          </div>
          </div>


        </div>
        <div className="whole4"></div>
        <div className="whole3">
          <div className="support">
          <h2>Support from the Gender Cell</h2>
          <p>
            The Gender Cell is dedicated to assisting anyone on campus in
            distress. They offer advice on available courses of action and can
            facilitate access to the legal cell or security section if needed.
            Additionally, they arrange meetings with appropriate counsellors or
            the <a href="devlina@iitk.ac.in">Presiding Officer</a> of the{" "}
            <a href="https://www.iitk.ac.in/wc/internal-complaints-committee/">
              Internal Complaints Committee (ICC)
            </a>{" "}
            to address issues of sexual harassment. Committed to providing a
            supportive environment, the Gender Cell ensures you receive the
            necessary help. For assistance, please contact any{" "}
            <a href="about.html">member of the Gender Cell</a>, who will guide
            and support you through the process.
          </p>
        </div>
        <div className="mental1">
          <h2>Mental Health and Counseling Services</h2>
          <p>
            The campus offers comprehensive mental health services to support
            the well-being of students, faculty, and staff. These services
            include individual counseling, group therapy, workshops on stress
            management, and wellness programs. Trained mental health
            professionals are available to provide confidential support and
            guidance on a wide range of issues, including anxiety, depression,
            academic stress, and personal challenges. Please contact any{" "}
            <a href="about.html">member of the Gender Cell</a> for fixing an
            appointment with the counsellor. Your information will be kept
            confidential.
          </p>
        </div>
        </div>

      </div> */}
    </section>
    );
};

export default SupportService;
