import PropTypes from "prop-types";

const FaqItem = ({ index, question, answer, activeIndex, setActiveIndex }) => {
  const isActive = activeIndex === index;

  const toggleAccordion = () => {
    setActiveIndex(isActive ? null : index);
  };

  return (
    <div
      className={`mb-2 accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
        isActive ? 'bg-indigo-50' : ''
      }`}
      id={`heading-${index}`}
    >
      <button
        className={`accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600 ${
          isActive ? 'font-medium text-indigo-600' : ''
        }`}
        aria-controls={`collapse-${index}`}
        onClick={toggleAccordion}
      >
        <h5>{question}</h5>
        <svg
          className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${
            isActive ? 'rotate-180 text-indigo-600' : ''
          }`}
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <div
        id={`collapse-${index}`}
        className={`accordion-content w-full px-0 overflow-hidden transition-max-height duration-500 ease-in-out ${
          isActive ? 'max-h-screen' : 'max-h-0'
        }`}
        aria-labelledby={`heading-${index}`}
      >
        <p className="text-base text-gray-900 leading-6 p-4">
          {answer}
        </p>
      </div>
    </div>
  );
};


FaqItem.propTypes = {
    index:PropTypes.string, 
    question:PropTypes.string, 
    answer:PropTypes.string, 
    activeIndex:PropTypes.string, 
    setActiveIndex:PropTypes.string
    
  };

export default FaqItem;
