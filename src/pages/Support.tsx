import React from 'react';
import VideoSection from '../components/Sections/VideoSection';
import SupportService from '../components/Sections/SupportService';
import BannerCard from '../components/Cards/BannerCard';


const Support: React.FC = () => {
    const title = "Learn About the Support Services Available";
    const description = "Fostering inclusivity through education, advocacy, and support. Empowering all genders with equality and understanding";
    const buttons = [
        { label: "Support Information", sectionId: "support-services" },
        { label: "Advisory Videos", sectionId: "videosec" },
    ];

    return (
        <div className="min-h-screen bg-base-100 flex flex-col">
            <BannerCard title={title} description={description} buttons={buttons} />
            <SupportService />
            <VideoSection />

        </div>
    );
};

export default Support;
