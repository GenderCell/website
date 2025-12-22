import React from "react";

const SupportService: React.FC = () => {
    return (
        <div className="bg-base-100 min-h-screen">
            <section className="py-16 md:py-20 px-4 bg-base-100">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-heading text-primary">Support Information</h1>

                    {/* Introduction */}
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <p className="text-lg leading-relaxed text-base-content/80">
                            The Gender Cell provides support and guidance for matters related to sexual harassment. Contact any member for assistance and/or to schedule appointments with specialized counselors. All information shared will remain confidential.
                        </p>
                    </div>

                    {/* Emergency Contacts Banner */}
                    <div className="alert alert-error shadow-lg mb-12 max-w-4xl mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <div>
                            <h3 className="font-bold text-lg">Emergency Contacts</h3>
                            <div className="text-sm">
                                <span className="font-semibold">Security (SIS) Control Room:</span>
                                <a href="tel:+915122597999" className="link link-hover ml-1">+91-512-259-7999</a>,
                                <a href="tel:+915126797999" className="link link-hover ml-1">+91-512-679-7999</a>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                        {/* Left Column: Guidelines & Reporting */}
                        <div className="space-y-6">
                            <div className="card bg-base-200 shadow-md">
                                <div className="card-body">
                                    <h2 className="card-title text-2xl font-heading text-primary mb-2">Guidelines for Dealing with Harassment</h2>
                                    <ul className="list-disc list-inside space-y-2 text-base-content/80">
                                        <li>Do not blame yourself.</li>
                                        <li>Do not feel ashamed. Clearly and firmly tell the harasser that you find their behavior inappropriate or offensive.</li>
                                        <li>Speak up! Do not ignore harassment in hopes that it will stop on its own.</li>
                                        <li>Keep a detailed record (dates, times, places, names of harassers and witnesses) of all incidents related to harassment.</li>
                                        <li>Reach out to the authorized people (members of the Gender Cell or ICC).</li>
                                    </ul>
                                    <div className="mt-4">
                                        <p className="font-bold text-error text-sm uppercase tracking-wide">IF YOU WITNESS HARASSMENT, DO NOT BE A BYSTANDER. REPORT IT</p>
                                        <p className="mt-2 text-sm">As per the <a href="https://drive.google.com/file/d/11n9HL9SIGfCHMhTZhmdJ8ohIaX-Kgt2s/view?usp=drive_link" className="link link-primary" target="_blank" rel="noopener noreferrer">Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013</a>, IIT Kanpur has established an <a href="/icc" className="link link-primary" target="_blank" rel="noopener noreferrer">Internal Complaints Committee (ICC)</a> for filing complaints.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-base-200 shadow-md">
                                <div className="card-body">
                                    <h2 className="card-title text-2xl font-heading text-primary mb-2">Reporting to ICC</h2>

                                    <div className="mb-4">
                                        <h3 className="font-bold text-lg mb-1">Who can Approach ICC</h3>
                                        <ul className="list-disc list-inside space-y-1 text-base-content/80">
                                            <li>Any woman employee of IIT Kanpur including faculty and staff as well as any woman residing in the Campus or visiting the Campus in any capacity may file a complaint against an incident of sexual harassment.</li>
                                            <li>Any student, irrespective of age and/or gender, may file a complaint against an incident of sexual harassment as per the <a href="https://drive.google.com/file/d/1d0SVFABd7i2eedQ_W3qwjaa9yVwHJQl-/view?usp=drive_link" className="link link-primary">IIT Kanpur Prevention, Prohibition and Redressal of Sexual Harassment of Students Rules, 2017.</a> </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-lg mb-1">How to Approach ICC</h3>
                                        <ul className="list-disc list-inside space-y-1 text-base-content/80">
                                            <li>Call/email/meet/file a paper complaint to the Presiding Officer, ICC, and (<a href="/icc" className="link link-primary" target="_blank" rel="noopener noreferrer">Current Presiding Officer</a>)</li>
                                            <li>Email: <a href="mailto:icc@iitk.ac.in" className="link link-primary">icc@iitk.ac.in</a></li>
                                        </ul>
                                        <p className="mt-3 text-sm text-base-content/70">Examples of <a href="https://drive.google.com/file/d/1TCsyZiFZx54BCQ94lBiURF5a8lNBbMSZ/view?usp=drive_link" className="link link-primary" target="_blank" rel="noopener noreferrer">offences</a> and <a href="https://drive.google.com/file/d/1aNdxRAM4sPFhVcs3Aeqhu5YFk9ChHn-c/view?usp=drive_link" className="link link-primary" target="_blank" rel="noopener noreferrer">punishments given</a> in cases with ICC at IIT Kanpur (the two lists do not have one-to-one correspondence).</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Support Systems */}
                        <div className="space-y-6">
                            <div className="card bg-base-200 shadow-md">
                                <div className="card-body">
                                    <h2 className="card-title text-2xl font-heading text-primary mb-2">How ICC Supports</h2>
                                    <p className="mb-4 text-sm text-base-content/80">The Internal Complaints Committee (ICC) is established under the Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013, to address complaints of sexual harassment. Here's how the ICC supports individuals facing harassment:</p>
                                    <div className="join join-vertical w-full">
                                        <div className="collapse collapse-arrow join-item border border-base-300">
                                            <input type="checkbox" />
                                            <div className="collapse-title text-lg font-medium">
                                                1. Receiving Complaints
                                            </div>
                                            <div className="collapse-content">
                                                <ul className="list-disc list-inside ml-4 space-y-1">
                                                    <li><strong>Multiple Channels for Reporting:</strong> The ICC provides various ways to report harassment, including in-person meetings, phone calls, emails, and written complaints.</li>
                                                    <li><strong>Confidential Handling:</strong> All complaints are handled with utmost confidentiality to protect the privacy of the complainant.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="collapse collapse-arrow join-item border border-base-300">
                                            <input type="checkbox" />
                                            <div className="collapse-title text-lg font-medium">
                                                2. Initial Response
                                            </div>
                                            <div className="collapse-content">
                                                <ul className="list-disc list-inside ml-4 space-y-1">
                                                    <li><strong>Immediate Acknowledgment:</strong> Upon receiving a complaint, the ICC promptly acknowledges it and provides the complainant with information on the process and timelines.</li>
                                                    <li><strong>Support and Counseling:</strong> The ICC offers emotional support and counseling services to the complainant.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="collapse collapse-arrow join-item border border-base-300">
                                            <input type="checkbox" />
                                            <div className="collapse-title text-lg font-medium">
                                                3. Investigation Process
                                            </div>
                                            <div className="collapse-content">
                                                <ul className="list-disc list-inside ml-4 space-y-1">
                                                    <li><strong>Fair Inquiry:</strong> The ICC conducts a fair and impartial inquiry into the complaint, gathering evidence and interviewing witnesses.</li>
                                                    <li><strong>Interim Measures:</strong> During the investigation, the ICC may recommend interim measures to protect the complainant.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="collapse collapse-arrow join-item border border-base-300">
                                            <input type="checkbox" />
                                            <div className="collapse-title text-lg font-medium">
                                                4. Awareness and Training
                                            </div>
                                            <div className="collapse-content">
                                                <ul className="list-disc list-inside ml-4 space-y-1">
                                                    <li><strong>Educational Programs:</strong> The ICC organizes awareness programs and training sessions.</li>
                                                    <li><strong>Policy Dissemination:</strong> The ICC ensures that the institution's policies on sexual harassment are widely disseminated.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-base-200 shadow-md">
                                <div className="card-body">
                                    <h2 className="card-title text-2xl font-heading text-primary mb-2">Support from the Gender Cell</h2>
                                    <p className="text-base-content/80 leading-relaxed">
                                        The Gender Cell is dedicated to assisting anyone on campus in distress. They offer advice on available courses of action and can facilitate access to the legal cell or security section if needed. Additionally, they arrange meetings with appropriate counsellors or the <a href="mailto:devlina@iitk.ac.in" className="link link-primary">Presiding Officer</a> of the <a href="/icc" className="link link-primary">Internal Complaints Committee (ICC)</a> to address issues of sexual harassment. Committed to providing a supportive environment, the Gender Cell ensures you receive the necessary help. For assistance, please contact any <a href="/about" className="link link-primary">member of the Gender Cell</a>, who will guide and support you through the process.
                                    </p>
                                </div>
                            </div>

                            <div className="card bg-base-200 shadow-md">
                                <div className="card-body">
                                    <h2 className="card-title text-2xl font-heading text-primary mb-2">Mental Health and Counseling Services</h2>
                                    <p className="text-base-content/80 leading-relaxed">
                                        The campus offers comprehensive mental health services to support the well-being of students, faculty, and staff. These services include individual counseling, group therapy, workshops on stress management, and wellness programs. Trained mental health professionals are available to provide confidential support and guidance on a wide range of issues, including anxiety, depression, academic stress, and personal challenges. Please contact any <a href="/about" className="link link-primary">member of the Gender Cell</a> for fixing an appointment with the counsellor. Your information will be kept confidential.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SupportService;
