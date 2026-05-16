import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const HomeCard = ({ title, moreInfo, link,linkText, img, imgAlt }) => {
  const cleanLink = link.startsWith('.') ? link.substring(1) : link;

  return (
    <div>
      <div className=" py-4 lg:px-12 px-4 card-compact bg-base-100 max-w-full lg:mx-12 mx-6  lg:flex  hover:scale-[1.01] transition-all duration-500 ease-in-out">
        {/* text content */}
        <div className="lg:w-2/3 border-blue-50 lg:p-12 p-5">
          <h2 className="text-2xl lora-600 mb-4">{title}</h2>
          <p className="lora-400">
            {moreInfo}
          </p>
          <p className="mt-10 text-links">
          <Link to={cleanLink}>
            <div className="group w-fit">
              <p className="">{linkText}</p>
              <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          </Link>
          </p>
        </div>
        {/* img  */}
        <div className="lg:w-[75%] p-5 mb-4 h-64" >
          <img src={img} alt={imgAlt} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

HomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  moreInfo: PropTypes.string,
  link: PropTypes.string,
  linkText:PropTypes.string,
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};

export default HomeCard;
