import HomeCard from "../components/Card/HomeCard";
// import Contact from "../components/contact/Contact";
import Events from "../components/events/Events";
import HomeHero from "../components/Hero/Banner/HomeHero";
import LinksSection from "../components/Linkscard/LinkCard";
import '../css/home.css'

export const Home = () => {
  return (
    <>
      <div className="mt-0">
        <div className="w-full ">
          {/* <TypeIt/> */}
          <HomeHero />
          <HomeCard
            title="About Us"
            moreInfo="The Gender Cell at IIT Kanpur is dedicated to promoting gender equity, inclusivity, and awareness within the campus community. We aim to create a safe and respectful environment where all individuals can thrive.
                        Through various initiatives, workshops, and events, we strive to educate, advocate, and empower students and faculty on gender-related issues. Our goal is to foster a culture of equality and respect, celebrating diversity in all its forms."
            img="https://i.pinimg.com/564x/81/4c/90/814c904a4280f491e09c4148306e7135.jpg"
            imgAlt="img"
            link={"./about"}
            linkText={"Know More.."}
          />
          <br />
          <HomeCard
            title="Mission and Vision"
            moreInfo="Misson: To promote gender diversity and equality through comprehensive awareness programs, support initiatives, and advocacy efforts, ensuring that everyone on campus has equal opportunities to thrive and succeed.
            Vision
            To create an inclusive and equitable campus environment where all genders are respected and valued equally, fostering a culture of mutual respect, understanding, and empowerment."
            img="https://gender-cell-web.vercel.app/images/punch.jpg"
            imgAlt="img"
            link={"./about"}
            linkText={"Know More.."}
          />
          <div className="consent-container">
            <h1>Understanding Consent</h1>
            <p className="para1">Consent is “permission for something to happen or agreement to do something”</p>
            <div className="consentalign">


              <div className="consent-box">
                <h2>Consent Is Active</h2>
                <p>Consent is not passive. It requires an unmistakable agreement via words or actions. The phrase "No always means NO, and only YES means YES" captures this essence perfectly. It's about clear, affirmative participation in the activity.</p>
              </div>

              <div className="consent-box">
                <h2>Consent Is Clear</h2>
                <p>Clear consent involves direct communication. It means that all parties involved have a mutual and explicit understanding of what is being agreed to, leaving no room for ambiguity or misinterpretation.</p>
              </div>

              <div className="consent-box">
                <h2>Consent Is Knowing</h2>
                <p>For consent to be valid, it must be given by individuals who are fully conscious and not impaired by drugs or alcohol. This ensures that all participants are fully aware of and understand what they are consenting to.</p>
              </div>

              <div className="consent-box">
                <h2>Consent Is Ongoing</h2>
                <p>Consent is not a one-time agreement. It needs to be confirmed at each level of sexual activity, ensuring that all parties remain comfortable and willing throughout the interaction. This means checking in regularly and being attentive to each other's needs and boundaries.</p>
              </div>

              <div className="consent-box">
                <h2>Consent Is Voluntary</h2>
                <p>Consent must be given freely, without any form of pressure, force, or manipulation. All participants should willingly agree to the activity, making sure that their decision is not influenced by coercion or duress.</p>
              </div>

              <div className="consent-box">
                <h2>Consent Is Required</h2>
                <p>Consent is essential for any sexual interaction and cannot be inferred from clothing, alcohol consumption, or dancing. It is a distinct, conscious decision made by all parties involved.</p>
              </div>
            </div>

            <div className="consent-box2">
              <h2>Consent Is FRIES</h2>
              <ul>
                <li><strong>Freely Given:</strong> Both partners have the freedom to say yes or no without any pressure or manipulation.</li>
                <li><strong>Reversible:</strong> Consent can be withdrawn at any time, even in the middle of an activity.</li>
                <li><strong>Informed:</strong> Both partners need to know exactly what they are consenting to each time.</li>
                <li><strong>Enthusiastic:</strong> Both partners should be excited and genuinely interested in the activity. If one partner is not, it’s crucial to stop immediately.</li>
                <li><strong>Specific:</strong> Each individual act requires consent. Just because someone consented to one thing does not mean they have consented to everything.</li>
              </ul>
            </div>
            <div className="highlight">
              <p >All sexual interactions must occur between consenting adults. Understanding and respecting consent is crucial in ensuring that all parties feel safe, respected, and valued. By adhering to these principles, we can create a culture of mutual respect and understanding, where everyone’s boundaries are acknowledged and honored.</p>
            </div>
            <div className="credit" style={{ width: '50%', marginLeft: 'auto' }}>
              <p style={{ fontWeight: 'bold' }}>Credits to:</p><p> University of California, Riverside CARE Program - Understanding Sexual Consent​ <a href="https://care.ucr.edu/education/what-is-consent" style={{ color: 'red' }}>(CARE Program)</a></p><p>
                Headspace - Understanding Sexual Consent​ <a href="https://headspace.org.au/explore-topics/for-young-people/sexual-consent/" style={{ color: 'red' }}>(Headspace)</a></p>
            </div>
          </div>
          <Events />
          {/* <Faqs/> */}
          {/* <Contact /> */}
          {/* <Banner/> */}
        </div>
      </div>

      <LinksSection />
    </>
  );
};



