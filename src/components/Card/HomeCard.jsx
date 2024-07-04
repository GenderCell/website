import PropTypes from "prop-types";

const HomeCard = ({ title, moreInfo, link,linkText, img, imgAlt }) => {
  return (
    <div>
      <div className=" py-4 px-12 card-compact bg-base-100 max-w-full mx-12 shadow-xl lg:flex">
        {/* text content */}
        <div className="w-2/3 border-blue-50 p-12">
          <h2 className="text-2xl lora-600 mb-4">{title}</h2>
          <p className="lora-400">
            {moreInfo}
          </p>
          <p className="mt-10 text-links">
          <a href={link}>
            <div className="group w-fit">
              <p className="">{linkText}</p>
              <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          </a>
          </p>
        </div>
        {/* img  */}
        <div className="w-[25%] border-blue-50 p-5">
          <img src={img} alt={imgAlt} />
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
