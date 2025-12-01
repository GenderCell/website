import React from 'react';
import LinkCard from '../Cards/LinkCard';

// Import images (assuming they are in assets or relative path needs adjustment)
// Since I don't know exact path of images relative to new location, I'll assume they are in assets or I need to find them.
// The original file imported from './images/...'.
// I should check where the images are.
// For now I will use placeholders or try to locate them.
// Wait, I should check the file structure for images.

import ICC from '../../assets/icons/ICC1.png';
import resources from '../../assets/icons/Resources1.png';
import faqs from '../../assets/icons/faqs2.png';
import support from '../../assets/icons/support.png';
import team1 from '../../assets/icons/meet.png';

// I need to verify image paths.
// The original file was in `src/components/Linkscard/LinkCard.jsx` and imported from `./images`.
// So images are in `src/components/Linkscard/images`.
// I should move these images to `src/assets` or `src/components/Cards/images` (if I want to keep them close).
// Better to move to `src/assets/icons` or similar.

const LinksSection: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 justify-items-center">
            <LinkCard link="./icc" icon={ICC} altText="ICC" title="ICC" />
            <LinkCard link="./resources" icon={resources} altText="Resources" title="Resources" />
            <LinkCard link="./about#team-info" icon={team1} altText="Meet Our Team" title="Meet Our Team" />
            <LinkCard link="./support" icon={support} altText="FAQS" title="Support Services" />
            <LinkCard link="./resources#faqs" icon={faqs} altText="FAQS" title="FAQS" />
        </div>
    );
};

export default LinksSection;
