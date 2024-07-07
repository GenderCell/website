import React from "react";
import '../css/support.css';

const SupportService = () => {
    return (
        <section className="support-services" id="support-services">
            <div className="support-services-content">
                <h2 className="heading1">Support Services</h2>
                <div className="emergency-contacts">
                    <h3 className="heading2">Emergency Contacts</h3>
                    <ul>
                        <span className="important-line">Security (SIS) Control Room:</span>{" "}
                        <a href="tel:+91-512-259-7999">+91-512-259-7999</a>,{" "}
                        <a href="tel:+91-512-679-7999">+91-512-679-7999</a>
                    </ul>
                    
                </div>
                <div className="harrased">
                    <h3 className="heading2">What to Do and Not to Do If You Are Harassed</h3>
                    <ol className="outer">
                        <li>
                            Do Not Blame Yourself:
                            <ul className="custom">
                                <li>
                                    Remember that the harassment is not your fault. You are not to
                                    blame for someone else's inappropriate behavior.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Do Not Feel Ashamed:
                            <ul className="custom">
                                <li>
                                    Do not let feelings of shame prevent you from taking action.
                                    Clearly and firmly tell the harasser that their behavior is
                                    inappropriate and offensive.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Speak Up!
                            <ul className="custom">
                                <li>
                                    Do not ignore the harassment, hoping it will stop on its own.
                                    Speak up and address the issue directly.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Keep Detailed Records:
                            <ul className="custom">
                                <li>
                                    Maintain a detailed record of all incidents related to the
                                    harassment. Note the dates, times, locations, names of the
                                    harasser(s), and any witnesses. This documentation can be
                                    crucial if you decide to file a complaint.
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>
                <div className="harrasment">
                    <h3 className="heading2">Witnessing Harassment: What to do</h3>
                    <p>
                        If you witness harassment, do not be a bystander. It is important to
                        <span>Report !</span> the incident to ensure a
                        safe and respectful environment for everyone.
                    </p>
                    <p>
                        As per the{" "}
                        <a
                            href="https://www.iitk.ac.in/wc/data/Sexual-Harassment-at-Workplace-Act.pdf"
                            target="_blank"
                        >
                            Sexual Harassment of Women at Workplace (Prevention, Prohibition,
                            and Redressal) Act, 2013
                        </a>{" "}
                        , IIT Kanpur has established an{" "}
                        <a
                            href="https://www.iitk.ac.in/wc/internal-complaints-committee/"
                            target="_blank"
                        >
                            Internal Complaints Committee (ICC)
                        </a>{" "}
                        for filing complaints.
                    </p>
                </div>
                <div className="icc-info">
                    <h3 className="heading2">Who can Approach ICC</h3>
                    <ul>
                        <li>
                            {" "}
                            Any woman employee of IIT Kanpur including faculty and staff as
                            well as any woman residing in the Campus or visiting the Campus in
                            any capacity may file a complaint against an incident of sexual
                            harassment.
                        </li>
                        <li>
                            Any student, irrespective of age and/or gender, may file a
                            complaint against an incident of sexual harassment as per the IIT
                            Kanpur Prevention, Prohibition and Redressal of Sexual Harassment
                            of Students Rules, 2017.
                        </li>
                    </ul>
                </div>
                <div className="icc-info">
                    <h3 className="heading2">How to Approach ICC</h3>
                    <p>
                        If you need to report an incident of sexual harassment, you can
                        approach the Internal Complaints Committee (ICC) in several ways.
                        You may call, email, schedule a meeting, or file a paper complaint
                        directly with the (
                        <a
                            href="https://www.iitk.ac.in/wc/internal-complaints-committee/"
                            target="_blank"
                        >
                            Current Presiding Officer
                        </a>
                        ) of the ICC. To submit a complaint via email , send your detailed
                        report to <strong>
                        <a href="mailto:icc@iitk.ac.in">icc@iitk.ac.in</a>
                        </strong>
                        . Remember to include all relevant information and any supporting
                        documents.
                    </p>
                    <p>
                        Examples of{" "}
                        <a
                            href="https://www.iitk.ac.in/wc/data/list-of-offences_v4-12-12-19.pdf"
                            target="_blank"
                        >
                            offences
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://www.iitk.ac.in/wc/data/PunishmentGiven_v3-12-12-19.pdf"
                            target="_blank"
                        >
                            punishment given
                        </a>{" "}
                        in cases with ICC at IIT Kanpur (the two lists do not have
                        one-to-one correspondence).
                    </p>
                </div>
                <div className="support1">
                    <h3 className="heading2">Support from the Gender Cell</h3>
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
                    <h3 className="heading2">Mental Health and Counseling Services</h3>
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
        </section>
    );
};

export default SupportService;
