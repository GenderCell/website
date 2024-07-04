import  { useState } from 'react';
import FaqItem from './FaqItem'; // Adjust the import path as necessary

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I update my billing information?",
      answer: "To contact customer support, look for a Contact us or Help button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance."
    },
    {
      question: "How can I contact customer support?",
      answer: "To contact customer support, look for a Contact us or Help button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance."
    },
    {
      question: "How do I update my profile information?",
      answer: "To contact customer support, look for a Contact us or Help button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance."
    },
    {
      question: "How do I find my purchase history?",
      answer: "To contact customer support, look for a Contact us or Help button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance."
    },
  ];

  return (
    <div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
