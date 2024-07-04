import HomeCard from "../components/Card/HomeCard";
import Contact from "../components/contact/Contact";
import Faqs from "../components/Faqs/Faqs";

export const Home = () => {
  return (
    <>
      <div className="mt-20">
        <div className="w-full ">
          <HomeCard
            title="About Us"
            moreInfo="The Gender Cell at IIT Kanpur is dedicated to promoting gender equity, inclusivity, and awareness within the campus community. We aim to create a safe and respectful environment where all individuals can thrive.
                        Through various initiatives, workshops, and events, we strive to educate, advocate, and empower students and faculty on gender-related issues. Our goal is to foster a culture of equality and respect, celebrating diversity in all its forms."
            img="https://i.pinimg.com/564x/81/4c/90/814c904a4280f491e09c4148306e7135.jpg"
            imgAlt="img"
            link={"/"}
            linkText={"Know More.."}
          />
          <br/>
          <HomeCard
            title="Mission and Vision"
            moreInfo="Misson: To promote gender diversity and equality through comprehensive awareness programs, support initiatives, and advocacy efforts, ensuring that everyone on campus has equal opportunities to thrive and succeed.
            Vision
To create an inclusive and equitable campus environment where all genders are respected and valued equally, fostering a culture of mutual respect, understanding, and empowerment."
            img="https://gender-cell-web.vercel.app/images/punch.jpg"
            imgAlt="img"
            link={"/"}
            linkText={"Know More.."}
          />
          <Faqs/>
          <Contact />
          {/* <Banner/> */}
        </div>
      </div>
    </>
  );
};
