import  { useState } from 'react';
import FaqItem from './FaqItem'; // Adjust the import path as necessary

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Commonplace Myths about Sexual Harassment and Violence",
      answer: "Certain dresses provoke harassment and violence, Any act happening where a woman has gone willingly must be consensual, Acts under the influence of alcohol or drugs do not count as harassment ,Harassment is only committed by strangers, Delayed reporting means it did not happen or was consensual."
    },
    {
      question: "Specialised counsellor available for sexual harassment cases. How can I contact them?",
      answer: "Please contact any member of the Women's Cell for fixing an appointment with the counsellor. Your information will be kept confidential.Contact details are given in the contact section."
    },
    {
      question: "What are the emergency contact numbers?",
      answer: "Security (SIS) Control Room: +91-512-259-7999, +91-512-679-7999"
    },
    {
      question: "What should I do if I am harassed?",
      answer: ">Do not blame yourself, Do not feel ashamed. Clearly and firmly tell the harasser that you find their behavior,      inappropriate/offensive. Speak-up! Do not ignore the harassment, hoping that it will stop on its own. Keep a detailed record (dates, times, places, names of harasser(s) and witnesses) of all incidents related to the harassment. If you witness harassment, do not be a bystander. Report!"
    },
    {
      question:"Who can approach the Internal Complaints Committee (ICC)?",
      answer:"Any woman employee of IIT Kanpur including faculty and staff, as well as any woman residing in the Campus or visiting the Campus in any capacity, may file a complaint against an incident of sexual harassment. Any student, irrespective of age and/or gender, may file a complaint against an incident of sexual harassment as per the IIT Kanpur Prevention, Prohibition and Redressal of Sexual Harassment of Students Rules, 2017."
    },
    {
      question:"How can I approach the ICC?",
      answer:"You can call, email, meet, or file a paper complaint to the Presiding Officer, ICC. Email: icc@iitk.ac.in"
    },
    {
      question:"What help can the Women's Cell provide?",
      answer:"The Women's Cell can advise on available courses of action to any woman on campus  who may be in distress. If the woman so chooses, the Cell may facilitate access to the legal cell and/or the security section, or facilitate meetings with appropriate counsellors and/or the Presiding Officer, ICC. For help, please contact any member of the Women's Cell."
    },
    {
      question:"Witnessing Harassment, What to do?",
      answer:"If you witness harassment, do not be a bystander. It is important toReport ! the incident to ensure a safe and respectful environment for everyone.As per the Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013 , IIT Kanpur has established an Internal Complaints Committee (ICC) for filing complaints."
    }
  ];
  
  return (
    <div>
      <section className="py-24">
        <div className="mx-auto max-w-8xl px-1 sm:px-1.5 lg:px-1">
          <div className="mb-16">
            <h6 className="text-lg text-indigo-600 font-medium text-center mb-2">
              FAQs
            </h6>
            <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
              Frequently asked questions
            </h2>
          </div>

          <div className="accordion-group" data-accordion="default-accordion">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
