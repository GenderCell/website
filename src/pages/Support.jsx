import '../css/support.css';
import VideoSection from '../components/VideoSection';
import SupportService from '../components/SupportService';
import BannerCard from '../components/Card/BannerCard';
import LinksSection from '../components/Linkscard/LinkCard';


const sectionArr=[
  {
    title:'Contact Counsellors and professors',
    value:"Contact info for nominee and professors who can help are available in the about us page team info section. Feel free to contact Us any time. We would be very pleased to help you Out "
  },
  {
    title:"What Gender Cell Says",
     value:"Video section with links to videos."
  }
]
const title = "Know About the Support Services Available";
    const description = "Fostering inclusivity through education, advocacy, and support, empowering all genders with equality and understanding";
    const buttons = [
        { label: "Support Information", sectionId: "support-services" },
      { label: "Advisory Videos", sectionId: "videosec" },
  ];
function Support() {
  return (
    <div className="App1" style={{display:'flex',flexDirection:'column',gap:'0px'}}>
      <BannerCard title={title} description={description} buttons={buttons}/>
      <div >
      <SupportService/>
      </div>
                  <VideoSection />
      <LinksSection/>
    </div>
  );
}

export default Support;
