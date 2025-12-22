import React from 'react';
import HomeCard from "../components/Cards/HomeCard";
import RecentEvents from "../components/Sections/RecentEvents";
import HomeHero from "../components/Sections/HomeHero";


export const Home: React.FC = () => {
  return (
    <>
      <div className="w-full">
        <HomeHero />
        <div id="about">
          <HomeCard
            title="About Us"
            moreInfo="The Gender Cell, IIT Kanpur is an institutional body constituted in accordance with the Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013. We are dedicated to preventing sexual harassment and abuse, sensitizing the campus community towards gender equality and making IIT Kanpur a safer place.

Our mission is to create a supportive environment where everyone is treated with dignity and respect. We actively work towards raising awareness about gender issues, conducting orientation programs for students and staff, and running seminars for community sensitization.

We welcome anyone residing, working, or visiting the campus to approach us. Whether you're a student, faculty member, or staff, all information shared with us remains completely confidential. Together, we strive to build a culture of mutual respect and understanding, where everyone's boundaries are acknowledged and honored."
            img="https://i.pinimg.com/564x/81/4c/90/814c904a4280f491e09c4148306e7135.jpg"
            imgAlt="About Us"
            link="./about"
            linkText="Know More.."
          />
        </div>
        <br />
        <div className="page-container py-16 mb-0 bg-slate-50 rounded-lg font-sans">
          <h2 className="text-center text-base-content text-3xl md:text-4xl mb-6 font-heading font-bold">Understanding Consent</h2>
          <p className="text-neutral leading-relaxed text-center text-lg mb-10 max-w-4xl mx-auto">Consent is “permission for something to happen or agreement to do something”</p>

          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { title: "Consent Is Active", text: "Consent is not passive. It requires an unmistakable agreement via words or actions. The phrase \"No always means NO, and only YES means YES\" captures this essence perfectly. It's about clear, affirmative participation in the activity." },
              { title: "Consent Is Clear", text: "Clear consent involves direct communication. It means that all parties involved have a mutual and explicit understanding of what is being agreed to, leaving no room for ambiguity or misinterpretation." },
              { title: "Consent Is Knowing", text: "For consent to be valid, it must be given by individuals who are fully conscious and not impaired by drugs or alcohol. This ensures that all participants are fully aware of and understand what they are consenting to." },
              { title: "Consent Is Ongoing", text: "Consent is not a one-time agreement. It needs to be confirmed at each level of sexual activity, ensuring that all parties remain comfortable and willing throughout the interaction. This means checking in regularly and being attentive to each other's needs and boundaries." },
              { title: "Consent Is Voluntary", text: "Consent must be given freely, without any form of pressure, force, or manipulation. All participants should willingly agree to the activity, making sure that their decision is not influenced by coercion or duress." },
              { title: "Consent Is Required", text: "Consent is essential for any sexual interaction and cannot be inferred from clothing, alcohol consumption, or dancing. It is a distinct, conscious decision made by all parties involved." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 mb-4 border-l-[5px] border-l-secondary border-r-[5px] border-r-primary rounded-box w-full md:w-[48%] lg:w-[30%] shadow-sm">
                <h2 className="text-success mt-0 text-2xl mb-2 font-semibold">{item.title}</h2>
                <p className="text-base-content/80">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 mb-4 border-l-[5px] border-l-secondary border-r-[5px] border-r-primary rounded-box w-[95%] mx-auto mt-4 shadow-sm">
            <h2 className="text-success mt-0 text-2xl mb-2 font-semibold">Consent Is FRIES</h2>
            <ul className="list-none pl-5 text-base-content/80 space-y-2">
              <li className="before:content-['•'] before:text-success before:pr-2"><strong>Freely Given:</strong> Both partners have the freedom to say yes or no without any pressure or manipulation.</li>
              <li className="before:content-['•'] before:text-success before:pr-2"><strong>Reversible:</strong> Consent can be withdrawn at any time, even in the middle of an activity.</li>
              <li className="before:content-['•'] before:text-success before:pr-2"><strong>Informed:</strong> Both partners need to know exactly what they are consenting to each time.</li>
              <li className="before:content-['•'] before:text-success before:pr-2"><strong>Enthusiastic:</strong> Both partners should be excited and genuinely interested in the activity. If one partner is not, it’s crucial to stop immediately.</li>
              <li className="before:content-['•'] before:text-success before:pr-2"><strong>Specific:</strong> Each individual act requires consent. Just because someone consented to one thing does not mean they have consented to everything.</li>
            </ul>
          </div>

          <div className="w-[92%] mx-auto text-error my-4 font-medium">
            <p>All sexual interactions must occur between consenting adults. Understanding and respecting consent is crucial in ensuring that all parties feel safe, respected, and valued. By adhering to these principles, we can create a culture of mutual respect and understanding, where everyone’s boundaries are acknowledged and honored.</p>
          </div>

          <div className="w-1/2 ml-auto text-right text-sm text-gray-500">
            <p className="font-bold">Credits to:</p>
            <p>University Health and Counseling Services, University of Wisconsin Whitewater</p>
          </div>
        </div>

        <div className="events" id="events">
          <RecentEvents />
        </div>
      </div>


    </>
  );
};
